import React from "react";
import { ClipboardList, SearchCheck, FileSignature, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share Trade Parameters",
    desc: "Submit your commodity details, volume, Incoterms preference, origin port, and target destination corridor.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Review Feasibility & Rules",
    desc: "Our trade desk evaluates HS code classification, destination importability, carrier equipment, and documentation mandates.",
  },
  {
    number: "03",
    icon: FileSignature,
    title: "Confirm Documentation Scope",
    desc: "We finalize the exact documentation bundle — Invoices, Packing Lists, Certificates of Origin, COA/MSDS — and carrier terms.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Coordinated Dispatch & Tracking",
    desc: "We coordinate with vetted vessel/air operators and clearance intermediaries, providing milestone updates through to delivery.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Big background number watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontSize: "clamp(120px, 20vw, 320px)",
          fontWeight: 900,
          color: "rgba(16,42,67,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
          transform: "translateY(-50%) translateX(10%)",
        }}
      >
        HOW
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
            Clear Workflow
          </span>
          <span className="flex-1 max-w-[40px] h-px bg-slate-200" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2
            className="font-extrabold tracking-tight text-navy-950 leading-tight max-w-lg"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            How Our Trade
            <br />
            <span className="text-slate-300">Coordination</span> Works
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            A transparent 4-step execution framework designed to minimize cross-border delays and ensure complete compliance.
          </p>
        </div>

        {/* Steps — horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative group"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-100 z-0 -translate-x-4" />
                )}

                {/* Step content */}
                <div className="relative z-10">
                  {/* Large number */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-950 flex items-center justify-center group-hover:bg-primary-500 transition-colors shadow-lg shadow-navy-950/10">
                      <Icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-100 font-mono group-hover:text-primary-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-navy-950 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
