import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { formatWhatsAppUrl } from "@/lib/utils";
import { MessageCircle, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";

export function FinalCta() {
  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappPrefill
  );

  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden relative">
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-extrabold leading-none tracking-tighter text-center whitespace-nowrap"
          style={{
            fontSize: "clamp(80px, 18vw, 260px)",
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.04em",
          }}
        >
          SHIP WITH US
        </span>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Label */}
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-primary-400 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full mb-10">
          <span className="w-1 h-1 rounded-full bg-primary-500" />
          Start Your Trade Discussion
        </span>

        {/* Headline */}
        <h2
          className="font-extrabold tracking-tight leading-tight mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          <span className="text-white">Tell Us About</span>
          <br />
          <span className="text-slate-500">Your Next International</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Shipment.
          </span>
        </h2>

        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Whether you need documentation vetting, temperature-controlled cargo coordination, or full trade logistics
          across global corridors — our operations desk is ready to assist.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact#enquiry">
            <Button
              size="lg"
              className="rounded-full font-bold bg-primary-500 text-white hover:bg-primary-600 border-0 shadow-xl shadow-primary-500/25 px-8"
            >
              Submit Shipment Specifications
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-navy-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-400/20"
          >
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Operations
          </a>
        </div>

        {/* Trust bar */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-teal-500" />
          <span>Strict Commercial Privacy Guaranteed · Direct Trade Specialist Review</span>
        </div>
      </div>
    </section>
  );
}
