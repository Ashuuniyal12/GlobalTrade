import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Globe2,
  ShieldCheck,
  FileCheck2,
  Scale,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "About Our Company | Operational Integrity in Global Trade",
  description:
    "Learn about Apex Global Trade's approach to cross-border import/export trade facilitation, customs documentation support, and multi-modal logistics coordination.",
  path: "/about",
  keywords: [
    "about global trade company",
    "international trade coordinator",
    "customs documentation firm",
    "cross border cargo execution",
  ],
});

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance First",
      desc: "We ensure cargo documentation strictly matches destination sovereign mandates before any freight commitment is made.",
    },
    {
      icon: Scale,
      title: "Contractual Transparency",
      desc: "All trade terms operate under clear Incoterms 2020 definitions so buyers, sellers, and carriers understand risk transfer milestones.",
    },
    {
      icon: FileCheck2,
      title: "Rigorous Pre-Shipment Audits",
      desc: "Every invoice, packing list, HS Code classification, and test certificate is checked line-by-line to prevent port detention.",
    },
    {
      icon: Users,
      title: "Dedicated Operational Coordination",
      desc: "Direct, personal point-of-contact for every client consignment, ensuring rapid answers and proactive transit exception management.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

        {/* Hero Banner */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Company Profile & Governance
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Built on Dependability, Documentation Precision, and Global Reach
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Apex Global Trade coordinates commercial transactions and cross-border shipping across key international trade corridors. We bridge the critical gap between product availability and compliant international delivery.
          </p>
        </div>

        {/* Story & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-navy-950 tracking-tight">
              Our Role in the International Trade Ecosystem
            </h2>
            <p>
              In modern cross-border commerce, the primary challenge is rarely moving freight from Point A to Point B—it is navigating the intricate web of destination customs rules, import licensing, export documentation, and risk allocation between commercial parties.
            </p>
            <p>
              Apex Global Trade operates as a dedicated international trade facilitation and logistics coordination partner. We assist commercial buyers and suppliers in structuring shipments correctly from the outset.
            </p>
            <p>
              While we maintain specialized expertise in the demanding requirements of pharmaceutical consignments and active pharmaceutical ingredients (APIs), our operational framework serves a diverse cross-section of global industry, including textiles, industrial raw materials, minerals, and general commercial cargo.
            </p>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-navy-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Our Clear Operational Boundaries</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We act as a trade coordination desk and documentation advisor. We do not claim to be a sovereign regulatory body, pharmaceutical manufacturer, or proprietary carrier. Freight transit is executed via vetted ocean lines and air carriers; destination clearance is performed through authorized, licensed customs brokers in each sovereign port of entry.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-navy-900 text-white border-navy-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-gold-400" />
                  <h3 className="text-lg font-bold text-white">
                    Operations Overview
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-slate-300">
                <div className="pb-3 border-b border-navy-800">
                  <strong className="text-slate-100 block mb-1">Trade Desks</strong>
                  <span>Asia-Pacific, Middle East & GCC, Europe, and North America</span>
                </div>
                <div className="pb-3 border-b border-navy-800">
                  <strong className="text-slate-100 block mb-1">Key Corridors</strong>
                  <span>Maritime routes connecting Mumbai, Jebel Ali, Rotterdam, Singapore, and Houston</span>
                </div>
                <div className="pb-3 border-b border-navy-800">
                  <strong className="text-slate-100 block mb-1">Core Sectors</strong>
                  <span>Pharmaceuticals & APIs, Textiles, Polymers, Minerals, General Merchandise</span>
                </div>
                <div>
                  <strong className="text-slate-100 block mb-1">Compliance Standards</strong>
                  <span>Incoterms 2020, GDP Protocol Awareness, Harmonized Tariff Classification</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Operational Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
              Principles Governing Every Transaction
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              How we protect buyer and seller interests across every international trade corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-950 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Discuss Your Trade Requirements with Our Team
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6">
            Contact our operations desk to evaluate documentation needs, carrier routes, or commercial transaction structures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact#enquiry">
              <Button size="md" variant="gold" className="font-bold">
                Submit Trade Enquiry
              </Button>
            </Link>
            <Link href="/services">
              <Button size="md" variant="outline" className="text-navy-900 border-white/30 bg-white/10 hover:bg-white/20 text-white">
                View Full Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
