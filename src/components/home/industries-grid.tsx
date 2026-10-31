import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shirt, Box, Cog, Shield } from "lucide-react";

const sectors = [
  {
    title: "Textiles & Garments",
    slug: "/industries/textiles",
    icon: Shirt,
    desc: "Export and import logistics for cotton yarns, synthetic fabrics, technical textiles, and ready-made garments.",
    highlights: ["Yarn & fabric consignments", "Garment export quotas & duty drawback", "Containerized maritime dispatch"],
  },
  {
    title: "Raw Materials & Minerals",
    slug: "/industries/raw-materials",
    icon: Box,
    desc: "Bulk and breakbulk trade coordination for industrial minerals, specialty chemicals, polymers, and agricultural commodities.",
    highlights: ["Bulk vessel & containerized freight", "Weight & quality survey coordination", "MSDS & Hazmat categorization"],
  },
  {
    title: "Industrial Goods & Machinery",
    slug: "/industries/raw-materials#machinery",
    icon: Cog,
    desc: "Specialized project cargo and standard containerized transport for manufacturing equipment, mechanical parts, and tools.",
    highlights: ["Out-of-gauge (OOG) & flat rack", "Commercial invoice depreciation checks", "Consolidated LCL spares"],
  },
  {
    title: "General Merchandise",
    slug: "/contact#enquiry",
    icon: Shield,
    desc: "End-to-end commercial trade support for verified goods, consumer merchandise, packaging materials, and hardware.",
    highlights: ["Incoterms transaction advisory", "Pre-shipment inspection coordination", "Multi-modal port transport"],
  },
];

export function IndustriesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
                Cross-Sector Capability
              </span>
              <span className="flex-1 max-w-[40px] h-px bg-slate-200" />
            </div>
            <h2
              className="font-extrabold tracking-tight text-navy-950 leading-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
            >
              Serving Diverse{" "}
              <span className="text-slate-300">Commercial</span>
              <br />
              Industries
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-sm text-slate-500 max-w-xs lg:text-right leading-relaxed">
              Beyond pharmaceuticals, our trade desk actively handles standard, bulk, and manufactured commodities.
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors"
            >
              View All Industries <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Horizontal scrollable — asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isLarge = idx === 0;
            return (
              <Link
                key={idx}
                href={sec.slug}
                className={`group relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  isLarge
                    ? "sm:col-span-2 lg:col-span-1 bg-navy-950 text-white border-navy-800 hover:border-primary-500"
                    : "bg-slate-50 text-navy-950 border-slate-100 hover:border-slate-200 hover:bg-white"
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isLarge
                        ? "bg-primary-500/20 group-hover:bg-primary-500 text-primary-400 group-hover:text-white"
                        : "bg-navy-100 group-hover:bg-primary-50 text-navy-800 group-hover:text-primary-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isLarge
                        ? "bg-white/10 group-hover:bg-primary-500"
                        : "bg-slate-200 group-hover:bg-primary-500"
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 transition-colors ${
                        isLarge ? "text-white" : "text-navy-800 group-hover:text-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-extrabold leading-tight mb-3 ${
                    isLarge ? "text-white" : "text-navy-950"
                  }`}
                >
                  {sec.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isLarge ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {sec.desc}
                </p>

                {/* Highlights — pill tags */}
                <div className="flex flex-wrap gap-2">
                  {sec.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className={`text-[11px] font-medium px-3 py-1 rounded-full ${
                        isLarge
                          ? "bg-white/10 text-slate-300"
                          : "bg-white text-slate-500 border border-slate-200"
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
