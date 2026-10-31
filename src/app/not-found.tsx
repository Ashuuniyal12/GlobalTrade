import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Home, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function NotFound() {
  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Hello Euronext Global desk, I encountered a 404 page and need assistance."
  );

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-6 border border-teal-200">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-4 mb-3">
          Trade Route Not Located
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          The requested page or corridor documentation has moved or does not exist. Please navigate back to our primary trade services or contact the operations desk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button variant="primary" size="md" className="gap-2">
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Button>
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="md" className="gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Contact Operations</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
