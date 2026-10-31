import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Pill,
  ThermometerSnowflake,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Pharmaceutical Export Support & Cold-Chain Trade Logistics",
  description:
    "Compliant international trade coordination, GDP documentation alignment, and temperature-controlled logistics for pharmaceutical finished formulations.",
  path: "/industries/pharmaceuticals",
  keywords: [
    "pharmaceutical export services",
    "pharmaceutical import export company",
    "pharmaceutical logistics and shipping",
    "pharmaceutical customs documentation",
    "cold chain medicine transport",
  ],
});

export default function PharmaceuticalsPage() {
  const scopePoints = [
    {
      icon: ThermometerSnowflake,
      title: "Temperature-Controlled Transit Protocols",
      desc: "Coordination of active refrigerated containers (reefers) and qualified passive thermal packaging with continuous data loggers for +2°C to +8°C and +15°C to +25°C ranges.",
    },
    {
      icon: FileCheck2,
      title: "GDP Documentation Pack Alignment",
      desc: "Cross-checking Certificates of Analysis (COA), Batch Manufacturing Records, release documentation, and shelf-life expiry thresholds prior to booking carrier space.",
    },
    {
      icon: ShieldCheck,
      title: "Carrier Route Security & Priority Handling",
      desc: "Selecting airline and maritime routes with dedicated pharma transfer hubs to eliminate prolonged tarmac exposure or transit temperature excursions.",
    },
    {
      icon: Pill,
      title: "Commercial Trade Facilitation",
      desc: "Structuring Incoterms contracts (CIP, CPT, DAP) to clearly delineate risk and temperature responsibility between manufacturer and importing distributor.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-6 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant="teal">Priority Sector</Badge>
            <Badge variant="outline">GDP Protocol Awareness</Badge>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Pharmaceutical Export Coordination & Cold-Chain Trade
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            International pharmaceutical logistics requires uncompromising quality standards, certified temperature oversight, and exact customs filing alignment. We coordinate trade and transport for licensed pharmaceutical operators worldwide.
          </p>
        </div>

        {/* Image and Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                Structured Coordination for High-Value Medicinal Cargo
              </h2>
              <p>
                Pharmaceutical trade involves stringent regulatory scrutiny at both origin and destination borders. Minor errors in consignment batch numbers, discrepancy in international nonproprietary names (INN), or temperature data logger failures can result in total shipment rejection by destination health authorities.
              </p>
              <p className="mt-3">
                Euronext Global acts as an independent trade and logistics coordinator. We work in tandem with certified drug manufacturers and licensed pharmaceutical distributors, verifying that packaging, air/sea transit routes, and commercial documentation strictly adhere to Good Distribution Practice (GDP) standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {scopePoints.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Regulatory Disclaimer Banner */}
            <div className="p-6 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-amber-950">
              <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Statutory Compliance & Licensing Requirement</span>
              </h3>
              <p className="text-xs leading-relaxed text-amber-900">
                Euronext Global coordinates commercial trade documentation and air/ocean freight transit. We do not manufacture drugs, issue national market authorizations, or guarantee sovereign customs clearance. Importers and exporters must hold valid drug manufacturing/distribution licenses from their respective sovereign drug authorities (such as US FDA, EMA, TITCK, SFDA) prior to shipment initiation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-navy-900 aspect-[4/3]">
              <Image
                src="/images/pharma_logistics.jpg"
                alt="Pharmaceutical cleanroom and temperature-monitored cold chain packaging"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <Card className="border-slate-200">
              <CardHeader>
                <h3 className="text-base font-bold text-navy-950">
                  Discuss a Pharmaceutical Shipment
                </h3>
                <p className="text-xs text-slate-500">
                  Submit consignment volume, temperature tier, and destination corridor.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Submit Pharma Enquiry</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  All trade inquiries are handled under strict commercial confidentiality and NDA.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
