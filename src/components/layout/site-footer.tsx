import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
import {
  Globe,
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

      {/* ── CTA Top Band ──────────────────────────────────────────────────── */}
      <div className="relative border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Big tagline */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-400">
                  Ready to Ship Globally?
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-primary-300 bg-primary-950/70 border border-primary-500/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  Maritime Corridors Active
                </span>
              </div>
              <h2
                className="font-extrabold text-white tracking-tight leading-tight"
                style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
              >
                Start a Trade{" "}
                <span className="text-slate-400">Discussion</span>{" "}
                <span className="text-primary-400">Today.</span>
              </h2>
            </div>

            {/* Right: Two CTA buttons */}
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/contact#enquiry"
                className="inline-flex items-center gap-2 bg-primary-500 text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25 whitespace-nowrap group"
              >
                Submit Shipment Specs
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 font-semibold text-sm px-6 py-3.5 rounded-full border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Trade Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/8">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500 border border-primary-400/30 flex items-center justify-center text-white shadow-md shadow-primary-500/25">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-white">
                  APEX <span className="text-primary-400 font-semibold">GLOBAL</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Trade & Logistics Coordination
                </span>
              </div>
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
                {["Dubai", "Rotterdam", "Singapore", "Houston", "Mombasa"].map((port) => (
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
            Apex Global Trade operates as a commercial trade coordination, documentation advisory, and cross-border shipment facilitator.
            Specific customs declarations, licensed freight transport, and pharmaceutical authorizations are executed strictly in compliance with sovereign port authorities and vetted licensed operators.
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
