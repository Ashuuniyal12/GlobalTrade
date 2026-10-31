"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const points = [
  {
    title: "Temperature-Sensitive Cold Chain",
    desc: "Active reefer containers and verified passive shipper boxes for +2°C to +8°C and +15°C to +25°C pharmaceutical consignments.",
  },
  {
    title: "API & Chemical Dossier Alignment",
    desc: "MSDS, Certificates of Analysis (COA), and Drug Master File (DMF) open-part cross-checks before port clearance.",
  },
  {
    title: "Transparent Regulatory Scope",
    desc: "We assist with international logistics documentation; statutory market authorizations remain subject to destination sovereign health authorities.",
  },
];

export function PrioritySector() {
  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden relative">
      {/* Giant watermark text */}
      <div
        className="absolute inset-0 flex items-end justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-extrabold tracking-tighter leading-none text-right"
          style={{
            fontSize: "clamp(80px, 15vw, 220px)",
            color: "rgba(255,255,255,0.03)",
            letterSpacing: "-0.04em",
          }}
        >
          PHARMA
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary-400">
            Priority Sector Focus
          </span>
          <span className="flex-1 max-w-[40px] h-px bg-primary-900/40" />
          <Badge className="text-[10px] bg-primary-950/70 text-primary-300 border border-primary-800/40">Compliant Trade Facilitation</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — big text + content */}
          <div className="space-y-10">
            <h2
              className="font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              <span className="text-white">Pharmaceutical</span>{" "}
              <span className="text-slate-500">&</span>{" "}
              <span className="text-primary-400">API</span>{" "}
              <span className="text-white">Trade</span>
              <br />
              <span className="text-slate-500">Coordination.</span>
            </h2>

            <p className="text-base text-slate-400 leading-relaxed max-w-lg">
              Global pharmaceutical commerce requires{" "}
              <span className="text-slate-200 font-semibold">strict handling protocols</span>,
              accurate batch traceability, and flawless cross-border documentation.
              We coordinate shipments between qualified manufacturers and licensed international distributors.
            </p>

            {/* Points — editorial list */}
            <div className="space-y-6">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{pt.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/industries/pharmaceuticals">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-full font-bold shadow-lg shadow-primary-500/25"
                >
                  Pharmaceutical Trade Details
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/industries/active-pharmaceutical-ingredients">
                <Button
                  size="md"
                  className="rounded-full font-semibold bg-white/10 text-white border-0 hover:bg-white/20"
                >
                  API & Intermediates Scope
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — image with overlaid floating chips */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-teal-500/10 rounded-3xl blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <Image
                src="/images/pharma_logistics.jpg"
                alt="Pharmaceutical export cold chain packing and laboratory quality verification"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

              {/* Floating chip — top */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-teal-950/90 backdrop-blur-md border border-teal-700/50 text-teal-300 text-[11px] font-mono px-3 py-2 rounded-full">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                GDP VALIDATED · PASSIVE BOXES
              </div>

              {/* Floating chip — bottom */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                <p className="text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">Cold-Chain & API Trade Support</p>
                <p className="text-xs text-slate-600 leading-snug">
                  Documented transit milestones with continuous temperature log coordination across global corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
