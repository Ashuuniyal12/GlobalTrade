"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { formatWhatsAppUrl } from "@/lib/utils";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function Hero() {
  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappPrefill
  );

  return (
    <section id="home-hero" className="relative min-h-screen bg-[#F7F5F0] overflow-hidden flex flex-col justify-center">

      {/* ── LEFT IMAGE: Airplane ───────────────────────────────────────────── */}
      <div
        className="absolute left-0 bottom-0 h-[90%] w-[38vw] max-w-[520px] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/hero_airplane.jpg"
          alt=""
          fill
          priority
          className="object-cover object-right-bottom"
          sizes="38vw"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 70%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {/* Extra soft fade on right edge to blend into content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F7F5F0]" />
      </div>

      {/* ── RIGHT IMAGE: Container ─────────────────────────────────────────── */}
      <div
        className="absolute right-0 bottom-0 h-[85%] w-[36vw] max-w-[500px] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/hero_container.jpg"
          alt=""
          fill
          priority
          className="object-cover object-left-bottom"
          sizes="36vw"
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 70%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {/* Extra soft fade on left edge */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F7F5F0]" />
      </div>

      {/* ── Giant watermark text ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-extrabold leading-none tracking-tighter text-center"
          style={{
            fontSize: "clamp(80px, 18vw, 260px)",
            color: "rgba(16,42,67,0.045)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}
        >
          GLOBAL TRADE
        </span>
      </div>

      {/* ── Floating status badge — bottom right ──────────────────────────── */}
      <div
        className="absolute bottom-10 right-8 hidden lg:flex flex-col items-end gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 bg-navy-950/90 backdrop-blur-md text-white text-xs font-mono px-4 py-2.5 rounded-full border border-white/10 shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Transit Active · FCL · LCL · AIR
        </div>
        <div className="text-[10px] text-slate-400 font-mono tracking-wider">
          Jebel Ali · Rotterdam · Singapore · Houston
        </div>
      </div>

      {/* ── Hero Content — centered, floats above images ───────────────────── */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 sm:px-10 lg:px-16 py-28 sm:py-36">

        {/* Top label row */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
            Import · Export · Logistics
          </span>
          <span className="w-10 h-px bg-slate-300" />
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Live Corridors
          </span>
        </div>

        {/* Giant editorial headline */}
        <h1
          className="font-extrabold tracking-tight leading-[1.05] max-w-4xl"
          style={{ fontSize: "clamp(40px, 7vw, 88px)" }}
        >
          <span className="text-navy-950">Connecting</span>{" "}
          <span className="text-slate-300">Global</span>{" "}
          <span className="text-navy-950">Markets</span>
          <br />
          <span className="text-slate-300">with</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
            Confidence.
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Cross-border import/export and logistics coordination backed by a{" "}
          <span className="text-navy-900 font-semibold">practical understanding</span>{" "}
          of customs procedures — serving{" "}
          <span className="text-navy-900 font-semibold">Asia, the Middle East, Europe,</span>{" "}
          and the Americas.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center gap-2 bg-primary-500 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25 group"
          >
            Discuss Your Shipment
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold text-sm px-8 py-3.5 rounded-full border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
          >
            Our Services
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Trade Desk
          </a>
        </div>

        {/* Horizontal trust pills */}
        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 justify-center">
          {[
            "Incoterms 2020 Alignment",
            "Destination Documentation",
            "Regulated & General Cargo",
            "Cold-Chain Coordination",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-xs text-slate-500 font-medium"
            >
              <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
