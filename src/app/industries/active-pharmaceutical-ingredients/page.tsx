import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  FlaskConical,
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Active Pharmaceutical Ingredients (API) Export Support & Chemical Logistics",
  description:
    "Specialized trade coordination, documentation vetting, and Hazmat/non-Hazmat shipping logistics for bulk active pharmaceutical ingredients (APIs) and advanced intermediates.",
  path: "/industries/active-pharmaceutical-ingredients",
  keywords: [
    "API export services",
    "active pharmaceutical ingredients exporter",
    "API import export documentation",
    "chemical intermediate shipment coordination",
    "bulk drug trade logistics",
  ],
});

export default function ApiTradePage() {
  const apiCapabilities = [
    {
      icon: FlaskConical,
      title: "Hazmat & Non-Hazmat Chemical Vetting",
      desc: "Thorough review of 16-point Material Safety Data Sheets (MSDS), UN numbers, Hazmat packaging groups, and IMDG/ICAO dangerous goods declarations.",
    },
    {
      icon: FileSpreadsheet,
      title: "Dossier & COA Technical Alignment",
      desc: "Cross-referencing Certificates of Analysis (COA) against pharmacopeial monographs (USP, BP, EP, IP) and verifying Drug Master File (DMF) open-part filings.",
    },
    {
      icon: ShieldCheck,
      title: "Packaging Integrity & Anti-Contamination",
      desc: "Ensuring carrier acceptance of fiber drums, UN-rated steel barrels, IBC totes, and specialized pallet wrapping designed to prevent moisture absorption or cross-contamination.",
    },
    {
      icon: Sparkles,
      title: "Direct Port Clearance Pre-Audit",
      desc: "Aligning customs declarations with chemical import clearance requirements to prevent demurrage on bulk API consignments at major maritime gateways.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            {
              label: "Active Pharmaceutical Ingredients",
              href: "/industries/active-pharmaceutical-ingredients",
            },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-6 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant="gold">Specialized Sector</Badge>
            <Badge variant="outline">Chemical & Bulk Drug Trade</Badge>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Active Pharmaceutical Ingredient (API) & Intermediate Trade Support
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Coordinating global trade and logistics for bulk APIs, regulatory intermediates, and specialty chemical precursors connecting synthesis facilities with international formulation plants.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                Precision Logistics for Bulk Drug Precursors
              </h2>
              <p>
                Active Pharmaceutical Ingredients (APIs) represent the chemical core of finished medicines. Transporting bulk powders, crystals, and liquid intermediates demands rigorous technical verification—from determining correct UN classification codes to coordinating moisture-controlled containerization.
              </p>
              <p className="mt-3">
                Euronext Global assists chemical manufacturers and pharmaceutical formulators in managing cross-border trade transactions. We bridge chemical documentation compliance with international air cargo and ocean freight carriers to ensure smooth transit across Europe, the Middle East, Asia, and the Americas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {apiCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-50 text-gold-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-navy-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-teal-600" />
                <span>Chemical Regulatory Notice</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Euronext Global provides trade coordination, commercial documentation vetting, and logistics arrangements. We do not manufacture active substances or hold proprietary marketing authorisations. Importers and buyers are responsible for ensuring that all API purchases adhere to their destination jurisdiction&apos;s REACH, drug master file, or national statutory licensing requirements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <h3 className="text-base font-bold text-navy-950">
                  Submit an API Trade Query
                </h3>
                <p className="text-xs text-slate-500">
                  Provide chemical name, CAS number (if applicable), and volume.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Contact API Trade Desk</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Strict confidentiality assured under mutual non-disclosure agreements.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
