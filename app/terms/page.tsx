import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { ShieldCheck, FileText, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Service | Vynentra Clean Energy",
  description: "Terms and conditions governing the use of Vynentra's website, renewable energy advisory, and project execution services.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F4F6F8] text-neutral-900 font-sans min-h-screen">
      
      {/* ── 1. CLEAN PROFESSIONAL HEADER (No background image) ── */}
      <header className="relative w-full bg-[#0E2F3E] text-white pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-16 border-b border-white/10">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-10 lg:px-12">
          {/* Minimal Frosted Glass Pill Breadcrumb (Option C) */}
          <div className="mb-5 sm:mb-6">
            <nav aria-label="Breadcrumbs" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-[11.5px] font-normal text-white/80 shadow-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40 select-none">/</span>
              <span className="text-white/70">Legal</span>
              <span className="text-white/40 select-none">/</span>
              <span className="text-white font-medium select-none">Terms &amp; Service</span>
            </nav>
          </div>

          <h1 className="text-[26px] min-[380px]:text-[30px] sm:text-[42px] md:text-[48px] font-medium text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 select-text">
            Terms &amp; Service
          </h1>

          <p className="text-[13.5px] sm:text-[16px] text-white/80 leading-[1.65] max-w-2xl mb-6 sm:mb-8 font-normal">
            These terms outline the rules, obligations, and contractual standards governing your access to Vynentra’s platforms, site energy assessments, and turnkey clean energy project services.
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[12px] sm:text-[13px] text-white/60">
            <span>Effective Date: October 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block"></span>
            <span>Version: 1.2</span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block"></span>
            <span>Applicable Law: Republic of India</span>
          </div>
        </div>
      </header>

      {/* ── 2. DOCUMENT SHEET (Clean white sheet on graphite background) ── */}
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 md:py-16">
        
        <div className="bg-white rounded-[18px] sm:rounded-[24px] border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-10 md:p-14">
          
          {/* Executive Summary Card */}
          <div className="bg-[#F4F6F8] rounded-[14px] sm:rounded-[16px] p-5 sm:p-8 border border-neutral-200/80 mb-10 sm:mb-16">
            <div className="pb-4 sm:pb-5 border-b border-neutral-200/80 mb-5 sm:mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A6B88] block mb-1">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-[19px] sm:text-[21px] font-medium text-neutral-950">
                Key Highlights of Our Agreement
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 mb-1">Transparent Advisory</h3>
                  <p className="text-[13px] text-neutral-600 leading-[1.55]">Feasibility audits and renewable yield projections are tailored specifically to your site data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 mb-1">Regulatory Governance</h3>
                  <p className="text-[13px] text-neutral-600 leading-[1.55]">Compliant with Indian DISCOM wheeling norms and commercial captive power regulations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[14px] font-bold text-neutral-900 mb-1">Definitive Contracts</h3>
                  <p className="text-[13px] text-neutral-600 leading-[1.55]">Turnkey equipment supply, warranties, and Annual Maintenance Contracts are governed by formal EPC contracts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Legal Clauses */}
          <div className="space-y-12 sm:space-y-14 divide-y divide-neutral-200/80">
            
            {/* Clause 01 */}
            <section className="space-y-4 pt-0">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">01</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                By visiting, reviewing, or interacting with the digital touchpoints of Vynentra Clean Energy (&ldquo;Vynentra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), submitting inquiry forms, or communicating with our project engineering team, you confirm that you have read, understood, and agreed to be bound by these Terms of Service. If you do not consent to these terms, please discontinue use of this site immediately.
              </p>
            </section>

            {/* Clause 02 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">02</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Scope of Clean Energy Services &amp; Advisory
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Vynentra provides integrated clean energy solutions, encompassing distributed wind turbine deployment (vertical and horizontal axis technologies), wind-solar hybrid integration, battery energy storage systems (BESS), and captive power plant (CPP) structuring.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6B88] shrink-0 mt-1" />
                  <span><strong className="font-semibold text-neutral-900">Estimates &amp; Calculators:</strong> All online generation estimates, savings models, and preliminary sizing indicators are indicative and subject to detailed on-site anemometer surveys and architectural feasibility assessments.</span>
                </div>
                <div className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6B88] shrink-0 mt-1" />
                  <span><strong className="font-semibold text-neutral-900">Binding Agreements:</strong> Final equipment supply, performance ratios, installation terms, and ongoing operation and maintenance (O&amp;M) are governed solely by signed Engineering, Procurement, and Construction (EPC) agreements.</span>
                </div>
              </div>
            </section>

            {/* Clause 03 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">03</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Client Responsibilities &amp; Site Parameters
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Clients submitting inquiries for kilowatt-scale or megawatt-scale installations agree to provide accurate, truthful, and representative facility information (such as geographic coordinates, historical tariff bills, rooftop dimensions, and structural load allowances). Vynentra is not liable for performance variations caused by inaccurate or misrepresented client site metrics.
              </p>
            </section>

            {/* Clause 04 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">04</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                The Vynentra trademark, proprietary system design layouts, technical whitepapers, architectural schematics, interface code, and brand collateral are the exclusive intellectual property of Vynentra Clean Energy. Any unauthorized reproduction, scraping, commercial distribution, or reverse-engineering is strictly prohibited under Indian and international copyright treaties.
              </p>
            </section>

            {/* Clause 05 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">05</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Limitation of Liability &amp; Environmental Variances
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                Renewable power generation is dependent on seasonal meteorological patterns, wind availability, and grid stability. While our engineering models use industry-standard meteorological databases, Vynentra disclaims liability for output variations arising from force majeure events, sudden grid curtails by local DISCOMs, or extraordinary weather phenomena.
              </p>
            </section>

            {/* Clause 06 */}
            <section className="space-y-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-[#0A6B88] tracking-widest uppercase">06</span>
                <h2 className="text-[20px] sm:text-[24px] font-medium text-neutral-900 tracking-tight">
                  Governing Law &amp; Jurisdiction
                </h2>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal">
                These Terms of Service are governed by and construed under the laws of the Republic of India. Any disputes arising in connection with these terms shall be resolved exclusively through the courts having jurisdiction in the Gujarat &amp; Maharashtra Corridor, India.
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
                Have questions regarding our terms or contracts?
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-white/80 max-w-xl leading-relaxed">
                Reach out to our advisory desk at hello@vynentra.in or call +91 77770 24826 for clarification on any clause or agreement.
              </p>
            </div>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-8 sm:px-9 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full md:w-auto shrink-0 select-none cursor-pointer"
            >
              <span>CONTACT DESK</span>
            </Link>
          </div>

        </div>

      </main>

      {/* ── 3. FOOTER ── */}
      <FooterV2 />

    </div>
  );
}
