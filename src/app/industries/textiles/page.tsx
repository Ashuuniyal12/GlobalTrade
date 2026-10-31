import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Shirt,
  Scissors,
  CheckCircle2,
  ArrowRight,
  Ship,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Textiles, Yarns & Garment Export Coordination | International Logistics",
  description:
    "Cross-border trade coordination and containerized maritime freight for cotton yarns, synthetic fabrics, technical textiles, and ready-made apparel.",
  path: "/industries/textiles",
  keywords: [
    "textile export coordination",
    "yarn export shipping",
    "garment export logistics",
    "textile customs documentation",
    "apparel cross border trade",
  ],
});

export default function TextilesPage() {
  const textileAreas = [
    {
      icon: Scissors,
      title: "Yarns & Greige Fabrics",
      desc: "Containerized export coordination for combed cotton yarn, open-end yarn, blended polyester fibers, and woven/knitted grey fabrics.",
    },
    {
      icon: Shirt,
      title: "Ready-Made Garments (RMG)",
      desc: "Full container load (FCL) and consolidated shipments for woven shirts, denim, knitwear, and seasonal apparel collections with buyer SKU tracking.",
    },
    {
      icon: FileCheck2,
      title: "FTA Certificate of Origin (COO)",
      desc: "Facilitating preferential origin documentation under regional and bilateral agreements (such as India-UAE CEPA, SAFTA, and ASEAN frameworks) to reduce tariff duties.",
    },
    {
      icon: Ship,
      title: "Container Positioning & Moisture Control",
      desc: "Arranging high-cube dry containers with silica desiccants and anti-fungal treatments to protect fabric consignments during trans-oceanic voyages.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Textiles & Garments", href: "/industries/textiles" },
          ]}
        />

        {/* Hero Banner */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Commercial Cargo Sector
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Textile, Yarn & Apparel Trade Coordination
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From raw spinning mills to retail distribution warehouses. We coordinate commercial contracts, export incentive documentation, and maritime container shipping across major global textile corridors.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                High-Volume Apparel & Fabric Export Execution
              </h2>
              <p>
                The global textile and apparel industry is driven by rapid fashion seasons, strict delivery windows, and delicate margin structures. Delays at departure ports or clerical discrepancies in commercial invoices can disrupt entire retail inventory pipelines.
              </p>
              <p className="mt-3">
                Euronext Global works directly with spinning units, weaving mills, and apparel buying houses across Türkiye, Europe, and Asia. We coordinate pre-shipment quality certifications, air freight garments-on-hangers (GOH), container space reservations, and A.TR / EUR.1 customs paperwork to ensure your fabric and garment consignments move on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {textileAreas.map((item, idx) => {
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
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <h3 className="text-base font-bold text-navy-950">
                  Request a Textile Shipment Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Container pricing and sailing schedules for yarn or fabric.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Discuss Textile Trade</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  FCL and LCL options available across all major trade lanes.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
