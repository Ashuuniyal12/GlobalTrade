import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Globe,
  FileCheck2,
  ShieldCheck,
  Scale,
  CheckCircle2,
  ArrowRight,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "International Trade Coordination | Cross-Border Commerce Execution",
  description:
    "Expert international trade coordination, buyer-supplier transaction structuring, Incoterms 2020 alignment, and commercial contract execution.",
  path: "/services/international-trade",
  keywords: [
    "international trade coordination",
    "cross border trade facilitation",
    "incoterms 2020 consulting",
    "export import transaction management",
  ],
});

export default function InternationalTradePage() {
  const capabilities = [
    {
      title: "Incoterms 2020 Contract Structuring",
      desc: "Careful definition of delivery terms—FOB, CIF, CFR, DAP, or DDP—ensuring clear allocation of freight costs, insurance liabilities, and customs clearance responsibilities between buyer and seller.",
    },
    {
      title: "Trade Payment & Banking Coordination",
      desc: "Alignment of commercial invoices and shipping documents with Letter of Credit (LC) conditions, documentary collections (D/P, D/A), and bank release mandates.",
    },
    {
      title: "Pre-Shipment Supplier Verification",
      desc: "Confirmation of production readiness, packaging standards, export license status, and third-party inspection certifications prior to dispatch.",
    },
    {
      title: "Cross-Border Procurement Desk",
      desc: "Facilitating bilateral trade agreements between Indian manufacturers, GCC distributors, European buyers, and East Asian partners.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "International Trade Coordination", href: "/services/international-trade" },
          ]}
        />

        {/* Hero Banner */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Core Service Pillar
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            International Trade Coordination & Commercial Execution
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Bridging international commercial negotiations with real-world logistics execution. We help importers and exporters execute cross-border transactions with contractual certainty and compliance.
          </p>
        </div>

        {/* Main Content & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                Managing Cross-Border Transaction Risk
              </h2>
              <p>
                International commerce involves multiple jurisdictions, currency variables, disparate legal frameworks, and logistical handoffs. A minor ambiguity in an Incoterms clause or a mismatch in commercial invoice descriptions can lead to container hold-ups, disputed demurrage, or rejected bank letters of credit.
              </p>
              <p className="mt-3">
                Euronext Global acts as your operational trade coordination desk in Istanbul. We ensure every aspect of your commercial trade agreement is technically sound, executable, and fully aligned with the requirements of airport/port customs authorities and international carriers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <h3 className="text-sm font-bold text-navy-950 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{cap.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200">
              <h3 className="text-base font-bold text-teal-950 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <span>Statutory Scope Clarification</span>
              </h3>
              <p className="text-xs text-teal-900 leading-relaxed">
                Euronext Global facilitates commercial transactions, documentation packages, and air/sea logistics routing. We do not act as the principal seller or manufacturer unless explicitly contracted under a specific trading mandate. All goods remain subject to sovereign trade sanctions, export controls, and import licensing laws.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <h3 className="text-base font-bold text-navy-950">
                  Ready to Coordinate a Trade?
                </h3>
                <p className="text-xs text-slate-500">
                  Share your trade parameters for a rapid commercial review.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Discuss Trade Terms</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Our trade desk reviews product specifications, delivery terms, and destination country documentation within 24 hours.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
