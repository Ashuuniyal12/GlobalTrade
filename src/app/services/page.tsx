import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, FileCheck2, Ship, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Cross-Border Services | International Trade, Customs & Freight",
  description:
    "Comprehensive overview of Apex Global Trade services: commercial trade facilitation, customs documentation preparation, and international freight logistics coordination.",
  path: "/services",
  keywords: [
    "international trade services",
    "customs documentation support",
    "freight shipping coordination",
    "import export services",
  ],
});

export default function ServicesPage() {
  const serviceList = [
    {
      title: "International Trade Coordination",
      slug: "/services/international-trade",
      icon: Globe,
      summary:
        "Structuring and executing commercial cross-border transactions between overseas buyers and accredited suppliers.",
      details: [
        "Incoterms 2020 contract structuring (FOB, CIF, CFR, DAP, DDP where applicable)",
        "Letter of Credit (LC) documentation compliance and bank presentation packages",
        "Pre-shipment verification and supplier milestone confirmation",
        "Multi-currency commercial invoicing and export contract alignment",
      ],
    },
    {
      title: "Customs Procedure & Documentation Support",
      slug: "/services/customs-documentation",
      icon: FileCheck2,
      summary:
        "Preparing, verifying, and packaging trade documentation to ensure compliance with origin and destination customs authorities.",
      details: [
        "Accurate Harmonized System (HS) code identification and duty tariff review",
        "Certificates of Origin (Non-Preferential and Preferential FTA/CEPA COO)",
        "Commercial invoices, detailed packing lists, and weight certificates",
        "Specialized chemical/pharma dossier verification: MSDS, COA, and export permits",
      ],
    },
    {
      title: "Freight & Shipping Logistics Coordination",
      slug: "/services/freight-logistics",
      icon: Ship,
      summary:
        "Coordinating maritime ocean freight, temperature-controlled air transit, and multi-modal inland haulage through vetted global carriers.",
      details: [
        "Full Container Load (FCL 20ft/40ft/HQ) and Less-than-Container Load (LCL)",
        "Temperature-controlled reefer cargo (+2°C to +8°C, +15°C to +25°C)",
        "Express air freight for urgent commercial and pharmaceutical consignments",
        "Bill of Lading (BL) / Air Waybill (AWB) issuance and milestone tracking",
      ],
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

        {/* Hero Header */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Operational Capabilities
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Integrated Trade, Documentation & Logistics Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Every cross-border shipment requires careful coordination across legal contracts, port customs protocols, and multi-modal carrier routes. We manage these interdependent steps with absolute precision.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10 mb-20">
          {serviceList.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <Card
                key={idx}
                className="p-6 sm:p-8 hover:shadow-lg transition-shadow border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-950">
                      {svc.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {svc.summary}
                    </p>
                    <Link href={svc.slug} className="inline-block pt-2">
                      <Button variant="primary" size="sm" className="gap-2">
                        <span>Read Detailed Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50 rounded-xl p-6 border border-slate-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                      Core Scope Elements
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.details.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-navy-900 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-navy-950">
              Need assistance determining your shipment requirements?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Contact our trade desk for an upfront feasibility review of your documents and route logistics.
            </p>
          </div>
          <Link href="/contact#enquiry">
            <Button size="lg" variant="primary" className="whitespace-nowrap">
              Request a Trade Review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
