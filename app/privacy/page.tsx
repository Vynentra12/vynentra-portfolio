import React from "react";
import type { Metadata } from "next";
import { FooterV2 } from "@/components/sections/FooterV2";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Learn how Vynentra collects, handles, and protects client data, site feasibility metrics, and renewable energy consultations.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
      {/* ── SIMPLE EDITORIAL LEGAL DOCUMENT (No hero section, clean text layout) ── */}
      <div className="max-w-[820px] mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
        
        {/* Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[46px] font-medium text-neutral-950 tracking-tight leading-[1.15] mb-3">
          Privacy Policy
        </h1>

        {/* Meta / Date */}
        <p className="text-[13px] sm:text-[14px] text-neutral-500 font-normal mb-8">
          Last Revised: October 2026 · Compliance: Digital Personal Data Protection (DPDP) Act, India
        </p>

        {/* Intro */}
        <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-[1.75] font-normal mb-8">
          We value institutional and client trust. This Privacy Policy outlines how Vynentra Clean Energy collects, handles, and protects facility data, site assessments, and personal information across our platforms and advisory operations.
        </p>

        {/* Content Clauses */}
        <div className="space-y-10 text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75]">
          
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              When you request a renewable energy consultation, submit feasibility parameters, or reach out to Vynentra, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
              <li><strong className="text-neutral-900 font-medium">Contact Identifiers:</strong> Your name, official work email, telephone number, and professional role.</li>
              <li><strong className="text-neutral-900 font-medium">Institutional Profile:</strong> Company name, facility type (e.g., manufacturing plant, commercial real estate, educational institution, hospital, or residential property).</li>
              <li><strong className="text-neutral-900 font-medium">Site Parameters:</strong> Geographic coordinates, rooftop or land surface area, monthly energy consumption units, and utility connection details.</li>
              <li><strong className="text-neutral-900 font-medium">System Analytics:</strong> Aggregated anonymous web performance metrics (browser type, session duration, and page view sequences).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              2. Purpose &amp; Usage of Data
            </h2>
            <p className="mb-3">
              Collected information is processed strictly for legitimate engineering, operational, and commercial evaluation purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
              <li>Calculating wind resource density, solar generation profiles, and hybrid payback timelines.</li>
              <li>Preparing and delivering customized techno-commercial proposals and site feasibility dossiers.</li>
              <li>Coordinating state DISCOM captive wheeling compliance and renewable energy regulatory updates.</li>
              <li>Transmitting service notifications or company updates (solely when affirmative marketing consent has been provided).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              3. Confidentiality of Site Audits &amp; Tariff Data
            </h2>
            <p>
              We treat all client electricity invoices, power consumption metrics, and facility structural plans as strictly confidential corporate intelligence. We will never release specific facility generation metrics, photographs, or case studies without explicit written authorization from the client.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              4. Data Security &amp; Storage Protocols
            </h2>
            <p>
              Electronic records are maintained in secured cloud environments governed by role-based access control, industry-standard cryptographic protection at rest and in transit, and active vulnerability assessments. Access to technical site dossiers is limited exclusively to authorized engineering and project personnel.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              5. Third-Party EPC Execution Partners
            </h2>
            <p>
              Where turnkey execution involves vetted hardware OEMs (e.g. certified turbine fabricators or tier-1 solar panel manufacturers) and on-ground EPC contractors, data shared is confined strictly to the physical and electrical dimensions necessary to fabricate and commission the installation. All partners are bound by non-disclosure terms.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              6. Your Rights &amp; Contact Desk
            </h2>
            <p className="mb-3">
              Under applicable Indian data privacy regulations, you have the right to request access to, rectification of, or erasure of your personal records from our databases.
            </p>
            <p>
              For any privacy inquiries or data requests, please write directly to our privacy desk at <a href="mailto:info@vynentra.com" className="text-[#0A6B88] hover:underline">info@vynentra.com</a> or contact our main desk at <a href="tel:+917777024826" className="text-[#0A6B88] hover:underline">+91 77770 24826</a>.
            </p>
          </section>

        </div>

      </div>

      <FooterV2 />
    </div>
  );
}
