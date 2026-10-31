import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name (at least 2 characters)." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  businessEmail: z
    .string()
    .trim()
    .email({ message: "Please enter a valid corporate or business email address." })
    .max(150, { message: "Email is too long." }),
  companyName: z
    .string()
    .trim()
    .max(120, { message: "Company name cannot exceed 120 characters." })
    .optional()
    .or(z.literal("")),
  country: z
    .string()
    .trim()
    .max(100, { message: "Country name cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  enquiryType: z.enum(
    [
      "trade_coordination",
      "pharmaceutical_api",
      "customs_documentation",
      "freight_logistics",
      "raw_materials_textiles",
      "other",
    ],
    {
      message: "Please select an enquiry category.",
    }
  ),
  originCountry: z
    .string()
    .trim()
    .max(80)
    .optional()
    .or(z.literal("")),
  destinationCountry: z
    .string()
    .trim()
    .max(80)
    .optional()
    .or(z.literal("")),
  productDescription: z
    .string()
    .trim()
    .max(250)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please provide more details regarding your shipment or trade enquiry (min 10 characters)." })
    .max(2500, { message: "Message cannot exceed 2,500 characters." }),
  consent: z.literal(true, {
    message: "You must acknowledge and accept the privacy terms to submit an enquiry.",
  }),
  // Honeypot field to block spam bots
  botTrap: z.string().max(0, { message: "Bot detected." }).optional().or(z.literal("")),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
