import React from "react";
import { Hero } from "@/components/home/hero";
import { ValueStrip } from "@/components/home/value-strip";
import { ServicesGrid } from "@/components/home/services-grid";
import { PrioritySector } from "@/components/home/priority-sector";
import { IndustriesGrid } from "@/components/home/industries-grid";
import { GlobalMarketsSection } from "@/components/home/global-markets-section";
import { ProcessSteps } from "@/components/home/process-steps";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { HomeCargoShip } from "@/components/home/home-cargo-ship";

export default function HomePage() {
  return (
    <>
      {/* Whole-page autonomous cargo ship (active throughout page except Hero and Footer) */}
      <HomeCargoShip />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust / Value Strip */}
      <ValueStrip />

      {/* 3. Core Services Grid */}
      <ServicesGrid />

      {/* 4. Priority Sector Feature: Pharmaceuticals & APIs */}
      <PrioritySector />

      {/* 5. Other Sectors: Textiles, Raw Materials, Industrial */}
      <IndustriesGrid />

      {/* 6. Active Global Markets & Trade Corridors */}
      <GlobalMarketsSection />

      {/* 7. How It Works: 4-Step Process */}
      <ProcessSteps />

      {/* 8. Why Choose Us: Verifiable Business Practices */}
      <WhyChooseUs />

      {/* 9. Direct Enquiry Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
              Get In Touch
            </span>
            <span className="flex-1 max-w-[40px] h-px bg-slate-200" />
          </div>
          <h2
            className="font-extrabold tracking-tight text-navy-950 leading-tight mb-12"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Start a{" "}
            <span className="text-slate-300">Shipment</span>{" "}
            <span className="text-primary-600">Enquiry</span>
          </h2>
          <div className="max-w-3xl">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Final High-Impact CTA */}
      <FinalCta />
    </>
  );
}
