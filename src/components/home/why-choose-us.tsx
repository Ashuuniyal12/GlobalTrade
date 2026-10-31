import React from "react";
import { CheckCircle2, ShieldCheck, Scale, FileText, Headphones } from "lucide-react";

const practices = [
  {
    icon: FileText,
    title: "Pre-Departure Documentation Audits",
    desc: "Every invoice, packing list, and HS classification is verified against destination port norms prior to container loading, minimizing demurrage risk.",
  },
  {
    icon: Scale,
    title: "Objective Carrier & Route Selection",
    desc: "Operating independently of single shipping lines allows us to recommend carrier sailings and air routes based strictly on schedule reliability and cargo safety.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Commercial Confidentiality",
    desc: "Formulas, supplier identities, batch certifications, and commercial pricing are protected under rigorous non-disclosure protocols.",
  },
  {
    icon: Headphones,
    title: "Direct Account Coordinator",
    desc: "You deal directly with dedicated trade operations managers who understand cross-border customs realities, not automated call trees.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
            Operational Rigor
          </span>
          <span className="flex-1 max-w-[40px] h-px bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — big headline + policy note */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <h2
              className="font-extrabold tracking-tight text-navy-950 leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
            >
              Verifiable{" "}
              <span className="text-slate-300">Practices.</span>
              <br />
              Practical Trade
              <br />
              <span className="text-primary-600">Execution.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              We do not rely on vague superlatives or unsupported claims. Our value lies in meticulous document vetting,
              clear risk boundaries under Incoterms 2020, and continuous operational vigilance.
            </p>

            {/* Policy statement */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-navy-900">Our Operational Policy</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We do not claim universal clearance guarantees. Regulated goods require sovereign inspection and correct buyer/seller licensing.
                We ensure your documentation and transport alignment meet every declared standard.
              </p>
            </div>
          </div>

          {/* Right — editorial vertical list */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-slate-200">
            {practices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-6 py-8 group hover:bg-white -mx-4 px-4 rounded-2xl transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-950 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
