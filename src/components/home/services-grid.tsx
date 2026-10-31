import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, FileCheck2, Ship } from "lucide-react";

const services = [
  {
    number: "01",
    title: "International Trade\nCoordination",
    slug: "/services/international-trade",
    icon: Globe,
    description:
      "Facilitating structured commercial transactions between international buyers and verified suppliers under standard Incoterms 2020 rules — FOB, CIF, CFR, DAP.",
    highlights: [
      "Letter of Credit (LC) trade payment coordination",
      "Pre-shipment supplier milestone verification",
      "Multi-country procurement chain execution",
    ],
  },
  {
    number: "02",
    title: "Customs Procedure &\nDocumentation",
    slug: "/services/customs-documentation",
    icon: FileCheck2,
    description:
      "Preparing and auditing trade documentation packs to satisfy destination country statutory filings and port inspection protocols across every corridor we operate.",
    highlights: [
      "HS code classification & commercial invoice generation",
      "Certificates of Origin — Non-Preferential & Preferential",
      "MSDS, Phytosanitary & Certificate of Analysis vetting",
    ],
  },
  {
    number: "03",
    title: "Freight & Shipping\nLogistics",
    slug: "/services/freight-logistics",
    icon: Ship,
    description:
      "Coordinating containerized maritime cargo, air charter/express freight, and multi-modal inland haulage through established carrier networks worldwide.",
    highlights: [
      "FCL & LCL ocean freight booking",
      "Temperature-controlled reefer & passive thermal packs",
      "End-to-end Bill of Lading (BL) management",
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#F7F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header — editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
                What We Do
              </span>
              <span className="flex-1 max-w-[40px] h-px bg-slate-300" />
            </div>
            <h2
              className="font-extrabold tracking-tight text-navy-950 leading-tight"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Core Trade &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Shipping Services
              </span>
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm lg:text-right">
            Precision at every stage — bridging suppliers, buyers, port customs authorities, and logistics carriers.
          </p>
        </div>

        {/* Services — large editorial tiles, no traditional card boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                href={service.slug}
                className="group flex flex-col justify-between p-8 lg:p-10 bg-white hover:bg-navy-950 transition-colors duration-500 first:rounded-t-3xl last:rounded-b-3xl lg:first:rounded-l-3xl lg:first:rounded-tr-none lg:last:rounded-r-3xl lg:last:rounded-bl-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div>
                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-extrabold font-mono text-slate-100 group-hover:text-navy-800 transition-colors leading-none">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-slate-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-navy-800 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-navy-950 group-hover:text-white transition-colors leading-tight mb-4 whitespace-pre-line">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors mb-8">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {service.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400 group-hover:text-slate-400 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow CTA */}
                <div className="mt-10 flex items-center justify-between pt-6 border-t border-slate-100 group-hover:border-navy-800 transition-colors">
                  <span className="text-xs font-bold text-navy-700 group-hover:text-primary-400 transition-colors uppercase tracking-wider">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary-500 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-navy-800 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
