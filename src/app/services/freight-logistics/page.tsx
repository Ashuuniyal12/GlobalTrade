import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Ship,
  Plane,
  Truck,
  ThermometerSnowflake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Freight & Shipping Logistics Coordination | Ocean & Air Transport",
  description:
    "International ocean freight, temperature-controlled air cargo, and multi-modal transit coordination across global maritime and air trade lanes.",
  path: "/services/freight-logistics",
  keywords: [
    "freight shipping coordination",
    "ocean container freight FCL LCL",
    "cold chain air cargo coordination",
    "international logistics coordination",
  ],
});

export default function FreightLogisticsPage() {
  const freightModes = [
    {
      icon: Ship,
      title: "Ocean Containerized Freight (FCL / LCL)",
      desc: "Full Container Loads (20ft, 40ft standard and High Cube) and Less-than-Container Load consolidations. Coordinating sailing schedules, container positioning, and terminal handling charges (THC).",
    },
    {
      icon: Plane,
      title: "Commercial & Pharmaceutical Air Freight",
      desc: "Scheduled cargo flights and express air bookings for time-critical, high-value, or urgent spare parts and active pharmaceutical ingredients.",
    },
    {
      icon: ThermometerSnowflake,
      title: "Reefer & Cold-Chain Logistics",
      desc: "Active temperature-monitored refrigerated containers and validated passive packaging (+2°C to +8°C, +15°C to +25°C) with continuous data logger reporting.",
    },
    {
      icon: Truck,
      title: "Multi-Modal Port Drayage & Haulage",
      desc: "Seamless connection between manufacturing warehouses, dry ports (ICDs), and maritime gateway terminals.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "Freight & Logistics Coordination", href: "/services/freight-logistics" },
          ]}
        />

        {/* Hero Banner */}
        <div className="mt-6 mb-16 max-w-3xl">
          <Badge variant="teal" className="mb-3">
            Core Service Pillar
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Freight & Shipping Logistics Coordination
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Reliable ocean and air transit coordination across major global shipping lanes. We manage carrier bookings, cargo space allocations, and milestone monitoring.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-4">
                Carrier-Neutral Shipping Management
              </h2>
              <p>
                Unlike single-carrier freight forwarders restricted to their own vessels or flights, Apex Global Trade operates as an independent logistics coordinator. This allows our operations team to evaluate multiple carrier sailings, transit times, and demurrage policies to select the optimal route for your specific commodity.
              </p>
              <p className="mt-3">
                From container release at origin to final delivery order (DO) release at destination, we coordinate every operational handoff so your supply chain remains transparent and punctual.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {freightModes.map((mode, idx) => {
                const Icon = mode.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">
                      {mode.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mode.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-navy-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Operational Clarification</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ocean carriage and air transport are performed by contracted vessel-operating common carriers (VOCC) and licensed air airlines. Bills of Lading and Air Waybills are issued in accordance with international maritime and IATA conventions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <h3 className="text-base font-bold text-navy-950">
                  Request a Shipping Route Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Get container or air space availability on active corridors.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact#enquiry" className="block">
                  <Button variant="primary" size="md" className="w-full justify-center font-bold">
                    <span>Submit Route Query</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <div className="text-[11px] text-slate-500 leading-normal">
                  Provide origin port, destination port, container type, and estimated dispatch date.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
