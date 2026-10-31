import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { siteConfig } from "@/config/site";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Trade Operations Desk | Request Shipment Quote",
  description:
    "Direct contact channels for Apex Global Trade: WhatsApp operations desk, corporate email, registered office details, and commercial enquiry submission.",
  path: "/contact",
  keywords: [
    "contact global trade company",
    "request shipment quote",
    "international trade desk whatsapp",
    "customs documentation enquiry",
  ],
});

export default function ContactPage() {
  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappPrefill
  );

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />

        {/* Hero Section */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Direct Trade Communications
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Connect with Our Trade Operations Desk
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Have a commercial shipment to discuss, a documentation package to audit, or a route feasibility question? Reach out through our direct WhatsApp channel, email desk, or the enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Contact Details & WhatsApp Channel */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 border-slate-200">
              <h2 className="text-lg font-bold text-navy-950 mb-6 pb-3 border-b border-slate-100">
                Direct Contact Channels
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Direct WhatsApp Desk
                    </strong>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-block"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Fastest channel for urgent container or air quotes.
                    </span>
                  </div>
                </div>

                {/* Corporate Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Operations Email
                    </strong>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-bold text-navy-900 hover:text-teal-700 transition-colors inline-block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Send draft packing lists, contracts, and MSDS dossiers.
                    </span>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Registered Commercial Office
                    </strong>
                    <p className="text-xs text-navy-900 leading-relaxed">
                      {siteConfig.contact.address.line1}
                      <br />
                      {siteConfig.contact.address.line2}
                      <br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.country} — {siteConfig.contact.address.postalCode}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Operating Schedule
                    </strong>
                    <p className="text-xs text-navy-900 leading-relaxed">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Turnaround Assurance Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2.5">
              <div className="flex items-center gap-2 text-navy-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Our Turnaround Commitment:</span>
              </div>
              <p>
                Every commercial inquiry submitted through our verified channels is reviewed by an experienced trade specialist within 1 business day.
              </p>
              <div className="flex items-center gap-1.5 text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>NDA & Confidentiality automatically applies to all commercial briefs.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
