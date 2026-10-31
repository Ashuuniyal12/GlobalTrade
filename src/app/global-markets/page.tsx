import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  Anchor,
  Plane,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Global Markets & Trade Corridors | Confirmed Sea & Air Routes",
  description:
    "Explore confirmed international shipping lanes and maritime corridors serviced by Apex Global Trade across the Middle East, Europe, Asia, and the Americas.",
  path: "/global-markets",
  keywords: [
    "global trade corridors",
    "international shipping lanes",
    "middle east trade corridor",
    "europe import export routes",
    "asia pacific maritime trade",
  ],
});

export default function GlobalMarketsPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Global Markets", href: "/global-markets" }]} />

        {/* Hero Header */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Active Shipping Corridors
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Strategic Maritime Corridors & International Air Hubs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We focus our trade facilitation on confirmed corridors where established shipping line relationships, port clearing protocols, and inland transport links ensure reliable delivery.
          </p>
        </div>

        {/* Corridors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {siteConfig.supportedCorridors.map((corridor, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-6 hover:shadow-lg border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-navy-800 text-white">
                      <Compass className="w-5 h-5 text-gold-400" />
                    </div>
                    <h2 className="text-lg font-bold text-navy-950">
                      {corridor.region}
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Active
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {corridor.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Gateway Terminals & Hubs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {corridor.keyHubs.map((hub, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1 text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      <Anchor className="w-3 h-3 text-teal-600" />
                      <span>{hub}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          {/* Custom Route Inquiry Card */}
          <Card className="flex flex-col justify-between p-6 bg-gradient-to-br from-navy-900 to-navy-950 text-white border-navy-800">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-white/10 text-gold-400">
                  <Plane className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-white">
                  Custom Route Assessment
                </h2>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Need cargo transit to a secondary or developing port not listed above? Our operations desk reviews vessel availability and transshipment options for non-standard destinations.
              </p>
            </div>

            <Link href="/contact#enquiry" className="block pt-4 border-t border-white/10">
              <Button size="sm" variant="gold" className="w-full justify-center font-bold">
                <span>Inquire About Your Route</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Corridor Governance Notice */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-navy-900 block mb-1">
              Geographic Scope & Route Transparency:
            </strong>
            Apex Global Trade does not claim to operate universal service to every sovereign territory. Trade execution is subject to international maritime sanctions, sovereign export restrictions, carrier equipment positioning, and reciprocal bilateral trade agreements.
          </div>
        </div>
      </div>
    </div>
  );
}
