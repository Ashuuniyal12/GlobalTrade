"use client";

import React, { useState } from "react";
import { enquirySchema, type EnquiryFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  MessageCircle,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatWhatsAppUrl } from "@/lib/utils";

export function EnquiryForm() {
  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    fullName: "",
    businessEmail: "",
    companyName: "",
    country: "",
    enquiryType: "trade_coordination",
    originCountry: "",
    destinationCountry: "",
    productDescription: "",
    message: "",
    consent: true,
    botTrap: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field-level error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerMessage("");

    // 1. Client-side Zod validation
    const validation = enquirySchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0]?.toString();
        if (fieldName) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      const firstError = Object.keys(fieldErrors)[0];
      const el = document.getElementById(`enquiry-${firstError}`);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setServerMessage(result.message);
        setFormData({
          fullName: "",
          businessEmail: "",
          companyName: "",
          country: "",
          enquiryType: "trade_coordination",
          originCountry: "",
          destinationCountry: "",
          productDescription: "",
          message: "",
          consent: true,
          botTrap: "",
        });
      } else {
        setSubmitStatus("error");
        setServerMessage(result.message || "Failed to submit enquiry. Please verify inputs.");
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setServerMessage(
        "Network transmission error. Please reach out directly to our trade desk via WhatsApp or email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Hello Euronext Global desk, I would like to submit a direct air/sea shipment enquiry."
  );

  return (
    <div id="enquiry" className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8 lg:p-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs font-semibold mb-3">
          <FileCheck className="w-3.5 h-3.5" />
          <span>Commercial Trade & Cargo Enquiry Desk</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          Request a Shipment or Trade Review
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Submit your product specifications, origin/destination corridors, or documentation requirements. Our trade desk provides practical feasibility reviews within 1 business day.
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-emerald-900 mb-2">
            Enquiry Received Successfully
          </h3>
          <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed mb-6">
            {serverMessage}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmitStatus("idle")}
            >
              Submit Another Request
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              Follow up on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field (hidden from view) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="enquiry-botTrap">Do not fill this field</label>
            <input
              id="enquiry-botTrap"
              name="botTrap"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.botTrap || ""}
              onChange={handleChange}
            />
          </div>

          {submitStatus === "error" && (
            <div className="rounded-lg bg-rose-50 border border-rose-200 p-4 flex items-start gap-3 text-rose-800 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold">Unable to process enquiry</p>
                <p className="text-xs text-rose-700 mt-0.5">{serverMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="enquiry-fullName"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
              >
                Contact Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="enquiry-fullName"
                name="fullName"
                type="text"
                required
                placeholder="e.g. Marcus Vance"
                value={formData.fullName || ""}
                onChange={handleChange}
                className={`w-full rounded-lg px-3.5 py-2.5 text-sm border bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800 ${
                  errors.fullName ? "border-rose-400 focus:ring-rose-400" : "border-slate-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Business Email */}
            <div>
              <label
                htmlFor="enquiry-businessEmail"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
              >
                Business Email <span className="text-rose-600">*</span>
              </label>
              <input
                id="enquiry-businessEmail"
                name="businessEmail"
                type="email"
                required
                placeholder="trade.desk@company.com"
                value={formData.businessEmail || ""}
                onChange={handleChange}
                className={`w-full rounded-lg px-3.5 py-2.5 text-sm border bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800 ${
                  errors.businessEmail ? "border-rose-400 focus:ring-rose-400" : "border-slate-300"
                }`}
              />
              {errors.businessEmail && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.businessEmail}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="enquiry-companyName"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
              >
                Company / Organization
              </label>
              <input
                id="enquiry-companyName"
                name="companyName"
                type="text"
                placeholder="e.g. Pharmatech Global Ltd"
                value={formData.companyName || ""}
                onChange={handleChange}
                className="w-full rounded-lg px-3.5 py-2.5 text-sm border border-slate-300 bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="enquiry-country"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
              >
                Country of Operation
              </label>
              <input
                id="enquiry-country"
                name="country"
                type="text"
                placeholder="e.g. Germany, UAE, India, Singapore"
                value={formData.country || ""}
                onChange={handleChange}
                className="w-full rounded-lg px-3.5 py-2.5 text-sm border border-slate-300 bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
            </div>
          </div>

          {/* Enquiry Category */}
          <div>
            <label
              htmlFor="enquiry-enquiryType"
              className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
            >
              Primary Enquiry Scope <span className="text-rose-600">*</span>
            </label>
            <select
              id="enquiry-enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-full rounded-lg px-3.5 py-2.5 text-sm border border-slate-300 bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
            >
              <option value="trade_coordination">International Trade Coordination (Buy / Sell Facilitation)</option>
              <option value="pharmaceutical_api">Pharmaceutical / API Trade & Cold-Chain Logistics</option>
              <option value="customs_documentation">Customs Procedure, HS Code & Documentation Support</option>
              <option value="freight_logistics">Freight Forwarding & Shipping Coordination (Ocean / Air)</option>
              <option value="raw_materials_textiles">Raw Materials, Minerals or Textiles Cargo</option>
              <option value="other">General Commercial Enquiry</option>
            </select>
          </div>

          {/* Trade Corridor (Origin & Destination) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="enquiry-originCountry"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
              >
                Origin Airport / Port / Country
              </label>
              <input
                id="enquiry-originCountry"
                name="originCountry"
                type="text"
                placeholder="e.g. Istanbul Airport (IST) / Ambarli, Türkiye"
                value={formData.originCountry || ""}
                onChange={handleChange}
                className="w-full rounded-lg px-3.5 py-2.5 text-sm border border-slate-300 bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-destinationCountry"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
              >
                Destination Airport / Port / Country
              </label>
              <input
                id="enquiry-destinationCountry"
                name="destinationCountry"
                type="text"
                placeholder="e.g. Frankfurt (FRA) / Rotterdam / Dubai (DXB)"
                value={formData.destinationCountry || ""}
                onChange={handleChange}
                className="w-full rounded-lg px-3.5 py-2.5 text-sm border border-slate-300 bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
            </div>
          </div>

          {/* Product / Cargo Description */}
          <div>
            <label
              htmlFor="enquiry-productDescription"
              className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
            >
              Commodity / Cargo Type (Optional)
            </label>
            <input
              id="enquiry-productDescription"
              name="productDescription"
              type="text"
              placeholder="e.g. Paracetamol BP/USP API drums, 20ft FCL Cotton Yarn, Polymer Pellets"
              value={formData.productDescription || ""}
              onChange={handleChange}
              className="w-full rounded-lg px-3.5 py-2.5 text-sm border border-slate-300 bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800"
            />
          </div>

          {/* Message / Specifications */}
          <div>
            <label
              htmlFor="enquiry-message"
              className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
            >
              Trade Specifications & Details <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              required
              placeholder="Please describe shipment volume, estimated shipping schedule, temperature requirements (if applicable), and any specific documentation needs."
              value={formData.message || ""}
              onChange={handleChange}
              className={`w-full rounded-lg px-3.5 py-2.5 text-sm border bg-slate-50/50 text-navy-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800 ${
                errors.message ? "border-rose-400 focus:ring-rose-400" : "border-slate-300"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-rose-600 mt-1 font-medium">{errors.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                id="enquiry-consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-xs text-slate-600 leading-normal">
                I understand that Euronext Global coordinates cross-border air &amp; ocean shipments and customs documentation in accordance with international trade rules. I consent to having my commercial enquiry reviewed by the Istanbul operations team.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-rose-600 mt-1 font-medium">{errors.consent}</p>
            )}
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-200">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="gap-2 font-semibold"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Enquiry</span>
            </Button>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-primary-600" />
              <span>Strict NDA & Data Confidentiality</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
