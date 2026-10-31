import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions of Trade Service | Operational Scope",
  description:
    "Terms of trade and service engagement governing Euronext Global commercial coordination, documentation advisory, and logistics facilitation.",
  path: "/terms",
  noIndex: false,
});

export default function TermsPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Trade", href: "/terms" }]} />

        <div className="mt-6 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Terms of Trade & Commercial Service Engagement
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Applicable to All Commercial Coordination & Inquiries • Euronext Global Trade &amp; Logistics (Istanbul, Türkiye)
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">1. Nature of Service & Operational Role</h2>
            <p>
              Euronext Global provides commercial trade facilitation, pre-shipment documentation auditing, Incoterms contract advisory, and air/sea freight logistics coordination. Unless specifically contracted under a distinct principal trading mandate, Euronext Global acts as an independent trade coordinator and documentation consultant, rather than a licensed sovereign customs authority, common carrier, or pharmaceutical manufacturer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">2. Incoterms 2020 Governed Operations</h2>
            <p>
              All cross-border cargo coordination operates under standard ICC Incoterms 2020 definitions (e.g., EXW, FCA, CPT, CIP, FOB, CIF, CFR, DAP). Allocation of marine/aviation insurance, export clearing obligations, destination airport/port discharge expenses, and transit risk transfer strictly follow the agreed commercial contract terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">3. Quotations, Freight Rates & Surcharges</h2>
            <p>
              Logistics estimates, ocean freight rates, and air cargo quotations provided by our trade desk reflect prevailing carrier tariff schedules at the time of quotation. Final invoiced amounts remain subject to carrier bunker/fuel adjustments (BAF/FSC), currency fluctuations (CAF), airport/terminal handling charges (THC), demurrage/storage rules, and actual verified chargeable weights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">4. Client Documentation Responsibility & Sovereign Customs</h2>
            <p>
              The client (importer/exporter) is solely responsible for the authenticity, commercial truthfulness, and legal validity of all product descriptions, batch numbers, chemical formulas, and value declarations provided. While Euronext Global audits documentation packs for technical conformity, final customs release, duty assessments, and physical inspections are the exclusive sovereign prerogative of destination airport and port authorities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">5. Governing Law & Dispute Resolution</h2>
            <p>
              Commercial contracts entered into with Euronext Global shall be interpreted and governed in accordance with international trade customs, standard aviation and maritime arbitration conventions, and the designated jurisdiction specified in the formal Air Waybill, Bill of Lading, or service agreement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
