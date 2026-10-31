import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import {
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { formatWhatsAppUrl } from "@/lib/utils";

export function SiteFooter() {
  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.whatsappPrefill
  );

  return (
    <footer id="site-footer" className="relative bg-navy-950 text-slate-300 overflow-hidden">

      {/* ── Maritime World Trade Map & Shipping Lanes backdrop ────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* High-res maritime trade map with glowing sea routes, ports & coordinates */}
        <Image
          src="/images/maritime_trade_map.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-65 mix-blend-screen scale-105"
          sizes="100vw"
          quality={95}
          priority={false}
        />
        {/* Subtle cyan ambient glow over active shipping hubs */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
        {/* Balanced radial vignette — keeps center routes luminous while preserving edge text clarity */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,22,40,0.4)_10%,rgba(10,22,40,0.8)_65%,rgba(10,22,40,0.95)_100%)]" />
        {/* Top & bottom gentle gradient for smooth page boundaries */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/35 to-navy-950/95" />
      </div>

      {/* ── Unified High-Impact Trade CTA Section ─────────────────────────── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Left: Merged Headline & Operational Copy */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-primary-400 bg-primary-500/10 border border-primary-500/25 px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  Start Your Trade Discussion
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-teal-300 bg-teal-950/70 border border-teal-500/30 px-3 py-1 rounded-full">
                  Air &amp; Maritime Corridors Active · Istanbul HQ
                </span>
              </div>

              <h2
                className="font-extrabold text-white tracking-tight leading-[1.08] mb-4"
                style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
              >
                Tell Us About{" "}
                <span className="text-slate-400">Your Next International</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
                  Shipment.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need airport or seaport customs documentation vetting, temperature-controlled
                pharma air/sea coordination, or full FCL/LCL container logistics across global corridors — our Istanbul operations desk is ready to assist.
              </p>
            </div>

            {/* Right: Unified Action Buttons & Trust Guarantee */}
            <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact#enquiry"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-primary-600 transition-colors shadow-xl shadow-primary-500/25 whitespace-nowrap group"
                >
                  Submit Shipment Specifications
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-400 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-400/20 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Trade Desk
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/15 hover:bg-white/15 transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  Email Operations
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Strict Commercial Privacy Guaranteed · Direct Trade Specialist Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/8">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" aria-label="Euronext Global Home" className="inline-block">
              <BrandLogo theme="dark" size="md" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Cross-border import/export trade coordination, documentation alignment, and international freight facilitation across global maritime and air corridors.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-white/5 group-hover:bg-teal-500/20 flex items-center justify-center transition-colors flex-shrink-0">
                  <Mail className="w-3 h-3 text-teal-400" />
                </div>
                {siteConfig.contact.email}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-white/5 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors flex-shrink-0">
                  <MessageCircle className="w-3 h-3 text-emerald-400" />
                </div>
                WhatsApp: {siteConfig.contact.phoneDisplay}
              </a>
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-gold-400" />
                </div>
                <span>
                  {siteConfig.contact.address.line1},{" "}
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3 h-3 text-slate-400" />
                </div>
                {siteConfig.contact.workingHours}
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-5">
              Core Services
            </h3>
            <ul className="space-y-3 text-sm">
              {navigationConfig.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary-500 transition-all duration-200 overflow-hidden" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-5">
              Sectors & Cargo
            </h3>
            <ul className="space-y-3 text-sm">
              {navigationConfig.footerNav.industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary-500 transition-all duration-200 overflow-hidden" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-5">
              Company & Network
            </h3>
            <ul className="space-y-3 text-sm">
              {navigationConfig.footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary-500 transition-all duration-200 overflow-hidden" />
                    {item.title}
                  </Link>
                </li>
              ))}
              {navigationConfig.footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary-500 transition-all duration-200 overflow-hidden" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Live corridors pills */}
            <div className="mt-6 pt-6 border-t border-white/8">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                Active Corridors
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Istanbul (IST)", "Frankfurt (FRA)", "Dubai (DXB)", "Rotterdam", "Singapore", "Houston"].map((port) => (
                  <span
                    key={port}
                    className="text-[10px] text-primary-400/90 bg-primary-500/10 border border-primary-500/20 px-2 py-0.5 rounded-full"
                  >
                    {port}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory notice */}
        <div className="py-6 border-b border-white/8 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <strong className="text-slate-400">Statutory Notice & Operational Boundaries: </strong>
            Euronext Global operates from Istanbul, Türkiye as a commercial trade coordination, airport/port customs documentation advisory, and cross-border shipment facilitator.
            Specific customs declarations, licensed air/ocean freight transport, and pharmaceutical authorizations are executed strictly in compliance with sovereign port/airport authorities and vetted licensed operators.
            Product importability is subject to destination country regulations and buyer/seller statutory licenses.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Trade
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Desk Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
