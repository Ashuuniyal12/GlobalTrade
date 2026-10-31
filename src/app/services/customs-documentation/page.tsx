import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  FileCheck2,
  FileSpreadsheet,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Stamp,
  Layers,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Customs Documentation & Procedure Support | HS Code & Clearance Prep",
  description:
    "Pre-shipment customs documentation audits, HS code classification guidance, Certificate of Origin (COO), and destination regulatory filing assistance.",
  path: "/services/customs-documentation",
  keywords: [
    "customs documentation support",
    "HS code classification assistance",
    "certificate of origin COO",
    "customs procedure consulting",
    "export import documentation audit",
  ],
});

export default function CustomsDocumentationPage() {
  const documentPillars = [
    {
      icon: Stamp,
      title: "HS Code & Tariff Classification",
      desc: "Accurate Harmonized System (HS) code assignment to avoid tariff penalties, incorrect duty assessments, or destination customs confiscation.",
    },
    {
      icon: FileSpreadsheet,
      title: "Certificates of Origin (COO)",
      desc: "Coordination of Non-Preferential and Preferential COOs (such as CEPA, SAFTA, RCEP, GSP) to maximize legitimate trade tariff preferences.",
    },
    {
      icon: FileCheck2,
      title: "Commercial & Shipping Packs",
      desc: "Preparation of cross-referenced Commercial Invoices, Packing Lists with precise gross/net weights, Cargo Declarations, and Consignment Notes.",
    },
    {
      icon: Layers,
      title: "Specialized Sector Dossiers",
      desc: "Verification of Material Safety Data Sheets (MSDS), Certificates of Analysis (COA), Fumigation Certificates, and Phytosanitary approvals.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "Customs & Documentation", href: "/services/customs-documentation" },
          ]}
        />

        {/* Hero Banner */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Core Service Pillar
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Customs Procedure & Documentation Support
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Eliminating port delays through rigorous pre-shipment documentation auditing. We ensure every export declaration and import clearance dossier complies with sovereign customs mandates.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                Why Documentation Accuracy Governs International Trade
              </h2>
              <p>
                Over 70% of cargo detentions, port storage penalties, and customs rejections occur due to clerical discrepancies in documentation—such as misdeclared HS codes, inaccurate unit values, omitted country-of-origin proofs, or outdated MSDS formats.
              </p>
              <p className="mt-3">
                Apex Global Trade works proactively with exporters and importers to assemble, audit, and validate complete shipping documentation portfolios before cargo leaves the manufacturing facility or warehouse.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {documentPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950">
              <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Professional Boundary Notice</span>
              </h3>
              <p className="text-xs leading-relaxed text-amber-900">
                Apex Global Trade prepares, audits, and facilitates commercial documentation. Final clearance decisions, physical examinations, and statutory duties are determined exclusively by the sovereign customs authority of the importing jurisdiction. We collaborate with licensed customs brokers at destination ports to execute formal clearance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <h3 className="text-base font-bold text-navy-950">
                  Audit Your Documentation
                </h3>
                <p className="text-xs text-slate-500">
                  Ensure your documents are compliant before booking transit.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Request Document Review</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Send draft packing lists or HS code queries for pre-shipment assessment.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
