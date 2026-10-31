import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Anchor, Waves } from "lucide-react";

export function GlobalMarketsSection() {
  return (
    <section
      id="strategic-corridors"
      className="py-24 bg-[#F7F5F0] overflow-hidden relative select-auto"
    >
      {/* Giant background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-extrabold tracking-tighter leading-none"
          style={{
            fontSize: "clamp(60px, 14vw, 200px)",
            color: "rgba(16,42,67,0.04)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}
        >
          CORRIDORS
        </span>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 flex items-center gap-2">
                <Waves className="w-3.5 h-3.5 text-teal-600" />
                Active Maritime Trade Corridors
              </span>
              <span className="flex-1 max-w-[40px] h-px bg-slate-300" />
            </div>
            <h2
              className="font-extrabold tracking-tight text-navy-950 leading-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
            >
              Strategic Sea &{" "}
              <span className="text-primary-600">Air Routes</span>
            </h2>
          </div>

          <Link
            href="/global-markets"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-800 hover:text-primary-600 transition-colors self-start lg:self-auto group"
          >
            Explore All Corridors{" "}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Corridors — horizontal full-width row layout */}
        <div className="space-y-0 divide-y divide-slate-200 border-y border-slate-200 bg-white/50 backdrop-blur-[2px] rounded-2xl shadow-sm">
          {siteConfig.supportedCorridors.map((corridor, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center gap-4 py-6 group hover:bg-white/95 px-6 rounded-2xl transition-all duration-200 hover:shadow-sm"
            >
              {/* Region name */}
              <div className="sm:w-56 flex-shrink-0">
                <h3 className="text-base font-extrabold text-navy-950 group-hover:text-primary-600 transition-colors">
                  {corridor.region}
                </h3>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-8 h-px bg-slate-200 flex-shrink-0" />

              {/* Description */}
              <p className="flex-1 text-sm text-slate-600 leading-relaxed">
                {corridor.description}
              </p>

              {/* Key hubs */}
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {corridor.keyHubs.map((hub, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary-700 bg-primary-50/90 border border-primary-200/60 px-2.5 py-1 rounded-full group-hover:bg-primary-100/70 transition-colors"
                  >
                    <Anchor className="w-2.5 h-2.5 text-primary-600" />
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-navy-950 text-white shadow-xl relative overflow-hidden">
          {/* Subtle accent glow in banner */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="font-bold text-white text-base mb-1">Other Corridor Inquiries</p>
            <p className="text-sm text-slate-300 max-w-xl">
              Operating a trade transaction on an unlisted route? Contact us to evaluate custom ocean container feasibility and port handling.
            </p>
          </div>
          <Link
            href="/contact#enquiry"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-gold-400 text-navy-950 font-bold text-sm px-6 py-3 rounded-full hover:bg-gold-300 transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg active:scale-95"
          >
            Submit Corridor Query <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
