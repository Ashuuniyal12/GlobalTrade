import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";

// In-memory rate limiting map for basic protection
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.expiresAt) {
    ipRequests.set(ip, { count: 1, expiresAt: now + 60 * 1000 }); // 1 minute window
    return true;
  }

  if (entry.count >= 5) {
    return false; // Max 5 submissions per minute per IP
  }

  entry.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    // 1. IP rate check
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Rate limit exceeded. Please wait a moment before submitting another enquiry.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request JSON
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid payload received." },
        { status: 400 }
      );
    }

    // 3. Honeypot bot protection
    if (body.botTrap && String(body.botTrap).length > 0) {
      // Silently reject bot while responding OK or error without processing
      return NextResponse.json(
        { success: false, message: "Submission rejected." },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        const path = err.path[0];
        if (path) {
          fieldErrors[path.toString()] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const validData = validationResult.data;

    // 5. Server-side notification / processing
    // In production, integrate Resend, SendGrid, or direct SMTP via process.env.EMAIL_PROVIDER_API_KEY
    console.info("[Enquiry Received]:", {
      timestamp: new Date().toISOString(),
      name: validData.fullName,
      email: validData.businessEmail,
      type: validData.enquiryType,
      origin: validData.originCountry || "N/A",
      destination: validData.destinationCountry || "N/A",
      product: validData.productDescription || "N/A",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for submitting your enquiry. Our commercial trade desk has received your request and will review the specifications within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request. Please contact us directly via WhatsApp or email.",
      },
      { status: 500 }
    );
  }
}
