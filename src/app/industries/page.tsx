import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Sparkles,
  Shirt,
  Box,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Industries & Sectors | Cross-Border Cargo Specialization",
  description:
    "Explore the industrial and commercial sectors supported by Euronext Global: pharmaceuticals, APIs, textiles, raw materials, polymers, and machinery.",
  path: "/industries",
  keywords: [
    "global trade industries",
    "pharmaceutical export sector",
    "API trade logistics",
    "textile export shipping",
    "raw materials global trade",
  ],
});

export default function IndustriesPage() {
  const sectors = [
    {
      title: "Pharmaceutical Finished Formulations",
      slug: "/industries/pharmaceuticals",
      icon: Pill,
      badge: "Priority Focus",
      badgeVariant: "teal" as const,
      summary:
        "Cold-chain logistics coordination, GDP compliance awareness, and documentation alignment for finished dosage forms, oral solids, and injectables.",
      points: [
        "Temperature-controlled reefer (+2°C to +8°C, +15°C to +25°C)",
        "Pre-shipment COA and Batch Release record checks",
        "Export documentation for destination drug regulatory filings",
      ],
    },
    {
      title: "Active Pharmaceutical Ingredients (APIs)",
      slug: "/industries/active-pharmaceutical-ingredients",
      icon: Sparkles,
      badge: "Specialized Sector",
      badgeVariant: "gold" as const,
      summary:
        "Specialized chemical intermediates, bulk drugs, DMF open-part references, and hazardous/non-hazardous chemical air and sea transport.",
      points: [
        "MSDS 16-point compliance & UN classification verification",
        "Anti-contamination drum and IBC tote packaging checks",
        "Coordination with licensed chemical & pharma customs agents",
      ],
    },
    {
      title: "Textiles, Yarns & Ready-Made Garments",
      slug: "/industries/textiles",
      icon: Shirt,
      badge: "Commercial Volume",
      badgeVariant: "default" as const,
      summary:
        "Containerized maritime transport for cotton yarns, synthetic filaments, grey fabrics, finished apparel, and technical textiles.",
      points: [
        "FCL containerized ocean shipments & LCL consolidation",
        "Certificate of Origin under bilateral FTAs (CEPA, SAFTA)",
        "Garment export quota and duty drawback documentation",
      ],
    },
    {
      title: "Raw Materials, Minerals & Industrial Cargo",
      slug: "/industries/raw-materials",
      icon: Box,
      badge: "Bulk & Industrial",
      badgeVariant: "default" as const,
      summary:
        "Industrial polymers, specialty chemicals, mineral ores, agricultural commodities, and heavy manufacturing equipment dispatch.",
      points: [
        "Bulk vessel, breakbulk, and 20ft heavy container loading",
        "Independent third-party weight and quality surveys",
        "Port storage and demurrage minimization protocols",
      ],
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />

        {/* Hero Header */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Cross-Sector Capability
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Specialized Cargo Handling Across Multiple Commercial Sectors
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Different commodities demand distinct handling protocols, packaging standards, and regulatory filings. We tailor trade coordination to the unique technical specifications of each sector.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-8 hover:shadow-xl hover:border-teal-400 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <Badge variant={sec.badgeVariant}>{sec.badge}</Badge>
                  </div>

                  <h2 className="text-xl font-bold text-navy-950 mb-2">
                    {sec.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {sec.summary}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-6 space-y-2">
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-navy-900">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={sec.slug} className="block mt-auto">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>View Sector Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-navy-950 mb-2">
            Commodity Not Listed Above?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            We handle a wide range of general manufactured and commercial cargo. Submit your commodity specifications to our trade desk for evaluation.
          </p>
          <Link href="/contact#enquiry">
            <Button size="md" variant="primary">
              Contact Operations Desk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
