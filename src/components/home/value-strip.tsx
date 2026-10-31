import React from "react";
import { FileCheck, Globe2, ShieldAlert, GitFork } from "lucide-react";

const strengths = [
  {
    icon: FileCheck,
    number: "01",
    title: "Customs & Documentation Clarity",
    desc: "Proactive review of HS classifications, commercial invoices, and origin certificates before cargo dispatch.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Multi-Corridor Trade Routing",
    desc: "Coordinating sea freight and air transit across active hubs in the Middle East, Europe, Asia, and the Americas.",
  },
  {
    icon: ShieldAlert,
    number: "03",
    title: "Regulated Cargo Compliance",
    desc: "Clear segregation of pharmaceutical, API, chemical, and general goods documentation to avoid port holdups.",
  },
  {
    icon: GitFork,
    number: "04",
    title: "Direct Operations Coordination",
    desc: "Single-point commercial communications connecting suppliers, consignees, freight carriers, and clearance agents.",
  },
];

export function ValueStrip() {
  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
            Core Capabilities
          </span>
          <span className="flex-1 max-w-[40px] h-px bg-slate-200" />
        </div>

        {/* Editorial list layout — no boxes */}
        <div className="divide-y divide-slate-100">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-6 py-8 group hover:bg-slate-50/50 -mx-4 px-4 rounded-2xl transition-colors duration-200"
              >
                {/* Number */}
                <span
                  className="text-[11px] font-mono font-bold text-slate-300 tracking-widest flex-shrink-0 w-8"
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy-950 flex-shrink-0 sm:w-72 lg:w-80 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                {/* Separator line */}
                <div className="hidden sm:block flex-1 h-px bg-slate-100 group-hover:bg-primary-100 transition-colors" />

                {/* Desc */}
                <p className="text-sm text-slate-500 leading-relaxed sm:max-w-sm lg:max-w-md">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
