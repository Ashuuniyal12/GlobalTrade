"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of cargo and commodities does Apex Global Trade handle?",
    a: "We coordinate shipments across multiple industries, including general commercial cargo, textiles & yarns, raw materials & specialty minerals, and regulated pharmaceutical finished goods and active pharmaceutical ingredients (APIs). Each sector is handled with specific documentation protocols.",
  },
  {
    q: "How are temperature-sensitive pharmaceutical and API shipments coordinated?",
    a: "For pharmaceutical products, we coordinate with certified cold-chain carriers offering validated active reefer containers or pre-qualified passive thermal packaging (+2°C to +8°C or +15°C to +25°C). We review Certificates of Analysis (COA), batch documents, and MSDS before booking transit.",
  },
  {
    q: "Do you guarantee customs clearance in every destination country?",
    a: "No legitimate international trade entity can provide universal clearance guarantees. Customs clearance is the sovereign legal prerogative of port and border authorities in the importing nation. What we do provide is rigorous pre-shipment documentation auditing (HS codes, valuations, origin proofs, and regulatory dossiers) to ensure submissions meet every statutory requirement and eliminate common administrative rejections.",
  },
  {
    q: "What information is needed to receive an accurate shipment coordination quote?",
    a: "To provide a comprehensive quotation, our trade desk requires: (1) Commodity name and HS Code if known, (2) Cargo dimensions, gross weight, and volume (CBM), (3) Origin port and target destination, (4) Preferred Incoterms rule (e.g. FOB, CIF, DAP), and (5) Any special requirements such as temperature logs or hazardous material classifications.",
  },
  {
    q: "How does Apex Global Trade work with freight forwarders and customs brokers?",
    a: "We act as your dedicated trade and logistics coordinator. We work alongside vetted international shipping lines, air carriers, and licensed customs clearance agents at destination ports, coordinating the entire flow of documents, payments, and cargo milestones on your behalf.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — sticky label */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
                FAQ
              </span>
              <span className="flex-1 max-w-[40px] h-px bg-slate-200" />
            </div>
            <h2
              className="font-extrabold tracking-tight text-navy-950 leading-tight mb-4"
              style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
            >
              Common Trade &{" "}
              <span className="text-slate-300">Shipping</span> Inquiries
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Clear answers regarding our service boundaries, documentation standards, and operational process.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="group">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-lg"
                    >
                      <span className={`text-base font-bold pr-8 transition-colors ${isOpen ? "text-teal-700" : "text-navy-950 group-hover:text-navy-700"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isOpen ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pb-6 text-sm text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 max-w-2xl">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
