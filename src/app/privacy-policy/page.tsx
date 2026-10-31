import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Commercial Data Protection & Confidentiality",
  description:
    "Privacy Policy for Apex Global Trade: how commercial enquiry data, company specifications, and trade documents are protected.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="mt-6 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Privacy & Commercial Data Protection Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: October 2026 • Apex Global Trade & Logistics
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">1. Scope & Commitment</h2>
            <p>
              Apex Global Trade ({`"${siteConfig.name}"`}, {`"we"`}, {`"our"`}) values the confidentiality of commercial traders, manufacturers, importers, and exporters. This Privacy Policy outlines how we collect, process, and protect the business contact and shipment data you submit through our website ({siteConfig.url}), direct email, or messaging channels.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">2. Information We Collect</h2>
            <p>We collect only the business data necessary to evaluate and coordinate international trade and logistics inquiries, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-2">
              <li>Contact name, corporate email address, and phone/WhatsApp number.</li>
              <li>Company name, jurisdiction, and trade profile.</li>
              <li>Consignment parameters: commodity names, HS codes, volume, origin, and destination ports.</li>
              <li>Trade specifications and document drafts shared for feasibility evaluation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">3. Commercial Confidentiality & Non-Disclosure</h2>
            <p>
              We treat all trade secrets, chemical intermediate specifications, client identities, pharmaceutical formulations, and pricing discussions as strictly confidential. We do not sell, rent, or monetize your commercial data to third parties. Data is shared exclusively with necessary operating partners (vetted ocean/air carriers, terminal operators, and licensed customs clearance agents) strictly to execute authorized shipments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">4. Data Security</h2>
            <p>
              All data transmitted through our web forms is encrypted in transit using industry-standard TLS/HTTPS protocols. Server-side inputs are validated to prevent injection and unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 mb-2">5. Inquiries & Data Rights</h2>
            <p>
              If you wish to review, update, or request the deletion of commercial contact information held in our operations system, please contact our privacy desk at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-700 font-semibold underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
