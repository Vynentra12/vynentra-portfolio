import React from "react";
import type { Metadata } from "next";
import { FooterV2 } from "@/components/sections/FooterV2";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vynentra Clean Energy",
  description: "Terms and conditions governing the use of Vynentra's website, renewable energy advisory, and project execution services.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
      {/* ── SIMPLE EDITORIAL LEGAL DOCUMENT (No hero section, clean text layout) ── */}
      <main className="max-w-[820px] mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
        
        {/* Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[46px] font-medium text-neutral-950 tracking-tight leading-[1.15] mb-3">
          Terms &amp; Conditions
        </h1>

        {/* Meta / Date */}
        <p className="text-[13px] sm:text-[14px] text-neutral-500 font-normal mb-8">
          Last Revised: October 2026 · Jurisdiction: Republic of India
        </p>

        {/* Intro */}
        <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-[1.75] font-normal mb-8">
          These Terms and Conditions outline the rules, obligations, and contractual standards governing your access to Vynentra Clean Energy&rsquo;s platforms, site energy assessments, and turnkey clean energy project advisory services.
        </p>

        {/* Content Clauses */}
        <div className="space-y-10 text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75]">
          
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By visiting, reviewing, or interacting with the digital touchpoints of Vynentra Clean Energy (&ldquo;Vynentra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), submitting inquiry forms, or communicating with our project engineering team, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not consent to these terms, please discontinue use of this site immediately.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              2. Scope of Clean Energy Services &amp; Advisory
            </h2>
            <p className="mb-3">
              Vynentra provides integrated clean energy solutions, encompassing distributed wind turbine deployment (vertical and horizontal axis technologies), wind-solar hybrid integration, battery energy storage systems (BESS), and captive power plant structuring.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
              <li><strong className="text-neutral-900 font-medium">Estimates &amp; Calculators:</strong> All online generation estimates, savings models, and preliminary sizing indicators are indicative and subject to detailed on-site anemometer surveys and architectural feasibility assessments.</li>
              <li><strong className="text-neutral-900 font-medium">Binding Agreements:</strong> Final equipment supply, performance ratios, installation terms, and ongoing operation and maintenance (O&amp;M) are governed solely by signed Engineering, Procurement, and Construction (EPC) agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              3. Client Responsibilities &amp; Site Parameters
            </h2>
            <p>
              Clients submitting inquiries for kilowatt-scale or megawatt-scale installations agree to provide accurate, truthful, and representative facility information (such as geographic coordinates, historical tariff bills, rooftop dimensions, and structural load allowances). Vynentra is not liable for performance variations caused by inaccurate or misrepresented client site metrics.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              4. Intellectual Property
            </h2>
            <p>
              The Vynentra trademark, proprietary system design layouts, technical whitepapers, architectural schematics, interface code, and brand collateral are the exclusive intellectual property of Vynentra Clean Energy. Any unauthorized reproduction, commercial distribution, or reverse-engineering is strictly prohibited under Indian and international copyright treaties.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              5. Limitation of Liability &amp; Environmental Variances
            </h2>
            <p>
              Renewable power generation is dependent on seasonal meteorological patterns, wind availability, and grid stability. While our engineering models use industry-standard meteorological databases, Vynentra disclaims liability for output variations arising from force majeure events, sudden grid curtails by local DISCOMs, or extraordinary weather phenomena.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions are governed by and construed under the laws of the Republic of India. Any disputes arising in connection with these terms shall be resolved exclusively through the courts having jurisdiction in the Gujarat and Maharashtra Corridor, India.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-neutral-950 tracking-tight mb-3">
              7. Contact Information
            </h2>
            <p>
              For questions regarding these terms or institutional contracts, contact our advisory team at <a href="mailto:hello@vynentra.in" className="text-[#0A6B88] underline underline-offset-4 hover:text-[#0E2F3E]">hello@vynentra.in</a> or by phone at <a href="tel:+917777024826" className="text-[#0A6B88] underline underline-offset-4 hover:text-[#0E2F3E]">+91 77770 24826</a>.
            </p>
          </section>

        </div>

      </main>

      {/* ── FOOTER ── */}
      <FooterV2 />

    </div>
  );
}
