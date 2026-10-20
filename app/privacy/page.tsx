import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Lock, Shield, EyeOff, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vynentra Clean Energy",
  description: "Learn how Vynentra collects, handles, and protects client data, site feasibility metrics, and renewable energy consultations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#F4F6F8] text-neutral-900 font-sans min-h-screen">

      {/* ── 1. CLEAN PROFESSIONAL HEADER (No background image) ── */}
      <header className="relative w-full bg-[#0E2F3E] text-white pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-16 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-10 lg:px-12">
          <h1 className="text-[26px] min-[380px]:text-[30px] sm:text-[42px] md:text-[48px] font-medium text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 select-text">
            Privacy Policy
          </h1>

          <p className="text-[13.5px] sm:text-[16px] text-white/80 leading-[1.65] max-w-2xl mb-6 sm:mb-8 font-normal">
            We value institutional and client trust. This Privacy Policy outlines how Vynentra Clean Energy collects, handles, and protects facility data, site assessments, and personal information.
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[12px] sm:text-[13px] text-white/60 pb-6 border-b border-white/15">
            <span>Last Revised: October 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block"></span>
            <span>Compliance: Digital Personal Data Protection (DPDP) Act, India</span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block"></span>
            <span>Status: Active</span>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="pt-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-white/70">LEGAL</span>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">PRIVACY POLICY</span>
            </nav>
          </div>

        </div>
      </header>

      {/* ── 2. DOCUMENT SHEET (Clean white sheet on graphite background) ── */}
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 md:py-16">

        <div className="bg-white rounded-[18px] sm:rounded-[24px] border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-10 md:p-14">

          {/* Executive Principles Card */}
          <div className="bg-[#F4F6F8] rounded-[14px] sm:rounded-[16px] p-5 sm:p-8 border border-neutral-200/80 mb-10 sm:mb-16">
            <div className="pb-4 sm:pb-5 border-b border-neutral-200/80 mb-5 sm:mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A6B88] block mb-1">
                OUR PRIVACY STANDARD
              </span>
              <h2 className="text-[19px] sm:text-[21px] font-medium text-neutral-950">
                Core Commitments to Your Data
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <EyeOff className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 mb-1">Zero Data Selling</h3>
                  <p className="text-[13px] text-neutral-600 leading-[1.55]">We never trade, monetize, or sell client contacts or facility power profiles to third parties.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 mb-1">Encrypted Transmission</h3>
                  <p className="text-[13px] text-neutral-600 leading-[1.55]">Digital inquiries and telemetry are safeguarded using modern TLS/SSL encrypted protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 mb-1">Audit Confidentiality</h3>
                  <p className="text-[13px] text-neutral-600 leading-[1.55]">Utility invoices, site coordinates, and custom EPC proposals remain strictly confidential.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Privacy Clauses */}
          <div className="space-y-12 sm:space-y-14 divide-y divide-neutral-200/80">

            {/* Clause 01 */}
            <section className="space-y-4 pt-0">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">01</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Information We Collect
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                When you request a renewable energy consultation, submit feasibility parameters, or reach out to Vynentra, we may collect the following categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14.5px] sm:text-[15px] text-neutral-700 leading-[1.7]">
                <li><strong className="text-neutral-900 font-semibold">Contact Identifiers:</strong> Your name, official work email, contact telephone number, and professional role.</li>
                <li><strong className="text-neutral-900 font-semibold">Institutional Profile:</strong> Company name, facility type (e.g., manufacturing plant, commercial real estate, educational institution, hospital, or luxury residence).</li>
                <li><strong className="text-neutral-900 font-semibold">Site Parameters:</strong> Geographic coordinates (latitude/longitude), rooftop surface area, monthly energy consumption units, and utility connection details.</li>
                <li><strong className="text-neutral-900 font-semibold">System Analytics:</strong> Aggregated anonymous web performance metrics (browser type, session duration, and page view sequences).</li>
              </ul>
            </section>

            {/* Clause 02 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">02</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Purpose &amp; Usage of Data
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Collected information is processed strictly for legitimate engineering, operational, and commercial evaluation purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[14.5px] sm:text-[15px] text-neutral-700 leading-[1.7]">
                <li>Calculating wind resource density, solar generation profiles, and hybrid payback timelines.</li>
                <li>Preparing and delivering customized techno-commercial proposals and site feasibility dossiers.</li>
                <li>Coordinating state DISCOM captive wheeling compliance and renewable energy regulatory updates.</li>
                <li>Transmitting service notifications or company updates (solely when affirmative marketing consent has been provided).</li>
              </ul>
            </section>

            {/* Clause 03 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">03</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Confidentiality of Site Audits &amp; Tariff Data
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                We treat all client electricity invoices, power consumption metrics, and facility structural plans as strictly confidential corporate intelligence. We will never release specific facility generation metrics, photographs, or case studies without explicit written authorization from the client.
              </p>
            </section>

            {/* Clause 04 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">04</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Data Security &amp; Storage Protocols
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Electronic records are maintained in secured cloud environments governed by role-based access control, industry-standard cryptographic protection at rest and in transit, and active vulnerability assessments. Access to technical site dossiers is limited exclusively to authorized engineering and project personnel.
              </p>
            </section>

            {/* Clause 05 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">05</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Third-Party EPC Execution Partners
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Where turnkey execution involves vetted hardware OEMs (e.g. certified turbine fabricators or tier-1 solar panel manufacturers) and on-ground EPC contractors, data shared is confined strictly to the physical and electrical dimensions necessary to fabricate and commission the installation. All partners are bound by non-disclosure terms.
              </p>
            </section>

            {/* Clause 06 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">06</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Your Rights &amp; Data Control
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Under applicable Indian data privacy regulations, you have the right to request access to, rectification of, or erasure of your personal records from our databases. You can also withdraw consent for commercial communications at any time by utilizing the unsubscribe option in our emails or writing directly to our data desk.
              </p>
            </section>

          </div>

          {/* COMPLIANCE & LEGAL DESK - Styled with bg-[#0E2F3E] and green button matching JOIN OUR NETWORK */}
          <div className="mt-12 sm:mt-16 rounded-[20px] sm:rounded-[28px] bg-[#0E2F3E] text-white p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xs">
            <div>
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-[#AEF977] block mb-2">
                COMPLIANCE &amp; LEGAL DESK
              </span>
              <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium text-white mb-2 tracking-tight leading-[1.25]">
                Have questions or data deletion requests?
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-white/80 max-w-xl leading-relaxed">
                Contact our privacy compliance team at hello@vynentra.in or reach our central office at +91 77770 24826.
              </p>
            </div>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-8 sm:px-9 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full md:w-auto shrink-0 select-none cursor-pointer"
            >
              <span>CONTACT PRIVACY DESK</span>
            </Link>
          </div>

        </div>

      </main>

      {/* ── 3. FOOTER ── */}
      <FooterV2 />

    </div>
  );
}
