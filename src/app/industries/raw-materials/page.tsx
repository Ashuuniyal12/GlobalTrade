import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Box,
  Cog,
  Weight,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Raw Materials, Minerals & Industrial Goods Trade Coordination",
  description:
    "Bulk commodities, polymers, specialty minerals, and heavy machinery export logistics coordination across global industrial trade corridors.",
  path: "/industries/raw-materials",
  keywords: [
    "raw materials export coordination",
    "industrial minerals global trade",
    "polymer export logistics",
    "heavy machinery cross border shipping",
  ],
});

export default function RawMaterialsPage() {
  const categories = [
    {
      icon: Layers,
      title: "Polymers & Specialty Chemicals",
      desc: "Export coordination for polyethylene, polypropylene, PVC resins, specialty solvents, and pigment compounds packed in 25kg bags, big bags, or ISO tanks.",
    },
    {
      icon: Weight,
      title: "Industrial Minerals & Ores",
      desc: "Managing containerized and bulk cargo for quartz, feldspar, bauxite, bentonite, and processed mineral aggregates with independent draft survey coordination.",
    },
    {
      icon: Cog,
      title: "Heavy Machinery & Industrial Equipment",
      desc: "Specialized project cargo, flat-rack container securing, and out-of-gauge (OOG) road transport coordination for manufacturing plants and mechanical parts.",
    },
    {
      icon: Box,
      title: "Agro-Commodities & Biomass",
      desc: "Fumigation management, phytosanitary clearance checks, and dry container dispatch for spices, oilseeds, and processed agro-industrial inputs.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: "Raw Materials & Industrial", href: "/industries/raw-materials" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Heavy Industry & Bulk Cargo
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Raw Materials, Minerals & Industrial Equipment Trade
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Coordinating large-scale commodity movements, industrial polymers, and project cargo across international maritime routes with meticulous weight and quality verification.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                Managing Tonnage, Specifications & Port Operations
              </h2>
              <p>
                Industrial commodities and raw materials require precise coordination between mine or plant production schedules, port storage silos, and carrier loading deadlines. Demurrage costs for bulk vessels or container detentions can rapidly erode transactional profitability.
              </p>
              <p className="mt-3">
                Euronext Global works alongside producers, traders, and international end-users. We oversee pre-loading weight surveys, coordinate fumigation/phytosanitary certificates, and handle commercial invoicing alignment under Incoterms 2020 rules (EXW, FCA, FOB, CFR, CIF).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cat.desc}
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
                  Bulk & Industrial Enquiries
                </h3>
                <p className="text-xs text-slate-500">
                  Submit tonnage, packing type, and origin/destination ports.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Submit Cargo Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Our operations team evaluates vessel feasibility and terminal handling options.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
