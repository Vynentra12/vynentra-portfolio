"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FooterV2 } from "@/components/sections/FooterV2";
import { 
  Building2, 
  TrendingUp, 
  Zap, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Mail,
  ShieldCheck
} from "lucide-react";

export default function PartnersPage() {
  const structuredPillars = [
    {
      num: "01",
      title: "Project Identification",
      desc: "Identifying high-yield site locations, evaluating wind and solar resource data, and establishing technical and commercial viability.",
      icon: MapPin,
    },
    {
      num: "02",
      title: "Land & Site Development",
      desc: "Securing strategic land parcels, conducting environmental assessments, and facilitating regulatory and grid connectivity clearances.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Investment Facilitation",
      desc: "Mobilizing strategic capital, evaluating project economics, and structuring bankable renewable energy assets with long-term value.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Commercial Structuring",
      desc: "Designing tailored Power Purchase Agreements (PPAs), captive power frameworks, and compliant commercial models for C&I consumers.",
      icon: Building2,
    },
    {
      num: "05",
      title: "Long-Term Generation",
      desc: "Delivering reliable, clean power output that supports commercial resilience, stable operating costs, and India's clean energy transition.",
      icon: Zap,
    },
  ];

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── 1. HERO SECTION (100vh Panoramic Viewport Height matching design system) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black select-text">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5520322/pexels-photo-5520322.jpeg"
            alt="Strategic Partners in Renewable Infrastructure"
            className="w-full h-full object-cover object-[center_40%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-28 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            <h1 className="text-[26px] min-[380px]:text-[30px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] mb-3 sm:mb-6 select-text">
              Strategic partnerships scaling India&apos;s renewable infrastructure.
            </h1>
            <p className="text-[13.5px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl mb-8 sm:mb-12 font-normal">
              Collaborating with visionary leaders, investment groups, and development partners to advance Independent Power Producer (IPP) wind and solar projects.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <div className="max-w-[1380px] mx-auto">
              <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">HOME</Link>
                <span className="text-white/40 font-normal select-none">/</span>
                <span className="text-[#AEF977] select-none">PARTNERS</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED STRATEGIC PARTNER: HRV GROUP ── */}
      <section className="w-full py-16 sm:py-24 md:py-28 bg-white select-text">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          {/* Top Header Row matching "What We Do" layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col max-w-[840px]"
            >
              <SectionBadge theme="dark" className="mb-3 sm:mb-5 w-fit">
                STRATEGIC PARTNERSHIP
              </SectionBadge>
              <h2 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-3 sm:mb-4">
                HRV Group - Strategic Partner
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[17px] text-[#0A6B88] font-medium leading-[1.5]">
                Accelerating the development and expansion of Independent Power Producer (IPP) projects across wind and solar energy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="shrink-0"
            >
              <a
                href="mailto:partner@vynentra.com"
                className="inline-flex items-center justify-center h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11.5px] sm:text-[12px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
              >
                <span>PARTNER WITH US</span>
              </a>
            </motion.div>
          </div>

          {/* Main Editorial Narrative Card with Sticky Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="rounded-[20px] sm:rounded-[32px] bg-[#F7F9FA] border border-neutral-200/80 p-5 sm:p-10 lg:p-14 mb-16 sm:mb-20 shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
              
              {/* Left Column: Fixed / Sticky during scroll through this section, NO middle divider line */}
              <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32 self-start">
                <div>
                  <span className="text-[11px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#0A6B88] block mb-2 sm:mb-3">
                    ALLIANCE OVERVIEW
                  </span>
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-medium text-neutral-950 leading-[1.25] tracking-tight mb-3 sm:mb-4">
                    Building scalable, bankable renewable energy assets that deliver long-term value.
                  </h3>
                </div>

                <div className="flex items-center gap-2.5 text-neutral-700">
                  <ShieldCheck className="w-5 h-5 text-[#0A6B88] shrink-0" />
                  <span className="text-[13px] sm:text-[13.5px] font-medium">
                    Joint IPP Development &amp; Capital Structuring
                  </span>
                </div>
              </div>

              {/* Right Column: Exact Partnership Narrative */}
              <div className="lg:col-span-7 flex flex-col text-[14.5px] sm:text-[15.5px] text-neutral-700 leading-[1.75] font-normal space-y-5">
                <p>
                  <strong className="text-neutral-950 font-semibold">HRV Group</strong> is a strategic partner of <strong className="text-neutral-950 font-semibold">Vynentra Energy Solutions</strong>, supporting the development and expansion of <span className="text-[#0A6B88] font-medium">Independent Power Producer (IPP) projects across wind and solar energy</span>.
                </p>
                <p>
                  Through this partnership, HRV Group will play a key role in identifying investment opportunities, facilitating project development, and supporting the establishment of renewable energy assets designed to deliver long-term value.
                </p>
                <p>
                  The collaboration aims to advance wind and solar power projects through a structured approach encompassing project identification, land and site development, investment facilitation, commercial structuring, and long-term power generation opportunities.
                </p>
                <p>
                  By combining Vynentra Energy Solutions&apos; capabilities in renewable energy engineering, procurement, construction (EPC), and project execution with HRV Group&apos;s role in the development and commercial advancement of IPP opportunities, the partnership seeks to build scalable renewable energy infrastructure for commercial, industrial, and institutional power consumers.
                </p>
                <p className="text-neutral-900 font-medium">
                  Together, both organisations are committed to accelerating the adoption of clean energy, strengthening renewable power generation capacity, and creating sustainable, commercially viable energy solutions that contribute to India&apos;s energy transition.
                </p>
              </div>

            </div>
          </motion.div>

          {/* ── 3. STRUCTURED APPROACH: 5 PILLARS ── */}
          <div className="mb-20 sm:mb-28">
            <div className="mb-10 sm:mb-12">
              <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#0A6B88] block mb-2">
                EXECUTION FRAMEWORK
              </span>
              <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-medium text-neutral-950 tracking-tight leading-[1.2]">
                Our Structured Approach to IPP Development
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {structuredPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group bg-white rounded-[20px] sm:rounded-[24px] border border-neutral-200/80 p-7 sm:p-8 flex flex-col justify-between hover:border-[#0A6B88]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-11 h-11 rounded-xl bg-[#F0F7F9] text-[#0A6B88] flex items-center justify-center group-hover:bg-[#0A6B88] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[28px] sm:text-[32px] font-bold text-neutral-300 group-hover:text-[#0A6B88] transition-colors leading-none tracking-tight">
                          {pillar.num}
                        </span>
                      </div>
                      <h4 className="text-[18px] sm:text-[19px] font-medium text-neutral-950 mb-3 group-hover:text-[#0A6B88] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-[13.5px] sm:text-[14px] text-neutral-600 leading-[1.65] font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* 6th Card: Synergies Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-[#0B2735] text-white rounded-[20px] sm:rounded-[24px] p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#AEF977] block mb-4">
                    STRATEGIC SYNERGY
                  </span>
                  <h4 className="text-[18px] sm:text-[20px] font-medium text-white mb-3">
                    EPC Delivery &times; Commercial Advancement
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-white/80 leading-[1.65] font-normal">
                    Combining Vynentra&apos;s renewable engineering excellence with HRV Group&apos;s capital and IPP commercial enablement.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2 text-[#AEF977] text-[12px] font-semibold tracking-wider uppercase">
                  <span>SCALABLE UTILITY IPP</span>
                  <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center shrink-0">
                    <ArrowRight 
                      strokeWidth={2}
                      className="w-3.5 h-3.5 absolute text-current transition-transform duration-300 ease-linear group-hover:translate-x-5" 
                    />
                    <ArrowRight 
                      strokeWidth={2}
                      className="w-3.5 h-3.5 absolute -translate-x-5 text-current transition-transform duration-300 ease-linear group-hover:translate-x-0" 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── 4. PARTNERSHIP SYNERGIES COMPARISON (Fully Responsive on Mobile) ── */}
          <div className="rounded-[20px] sm:rounded-[32px] border border-neutral-200/80 p-5 sm:p-8 md:p-12 lg:p-16 mb-16 sm:mb-20 bg-white">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <span className="text-[11px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#0A6B88] block mb-2">
                COLLABORATIVE STRENGTHS
              </span>
              <h3 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[36px] font-medium text-neutral-950 tracking-tight leading-[1.2] mb-3 sm:mb-4">
                Complementary Expertise Driving Sustainable Growth
              </h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">
                Our partnership bridges technical engineering with institutional commercial structuring to build clean infrastructure that lasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12">
              
              {/* Vynentra Capabilities */}
              <div className="bg-[#F7F9FA] rounded-[18px] sm:rounded-[20px] p-5 sm:p-7 md:p-8 border border-neutral-200/70">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A6B88]" />
                  <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-neutral-950">
                    Vynentra Energy Solutions
                  </h4>
                </div>
                <ul className="space-y-3 sm:space-y-3.5 text-[13px] sm:text-[14px] text-neutral-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A6B88] shrink-0 mt-0.5" />
                    <span>Renewable energy engineering &amp; feasibility assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A6B88] shrink-0 mt-0.5" />
                    <span>Turnkey Procurement &amp; Construction (EPC) execution</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A6B88] shrink-0 mt-0.5" />
                    <span>Technology evaluation across wind, solar, and BESS storage</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A6B88] shrink-0 mt-0.5" />
                    <span>Grid interconnection, testing, and lifecycle maintenance</span>
                  </li>
                </ul>
              </div>

              {/* HRV Group Capabilities */}
              <div className="bg-[#F7F9FA] rounded-[18px] sm:rounded-[20px] p-5 sm:p-7 md:p-8 border border-neutral-200/70">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#84D447]" />
                  <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-neutral-950">
                    HRV Group
                  </h4>
                </div>
                <ul className="space-y-3 sm:space-y-3.5 text-[13px] sm:text-[14px] text-neutral-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84D447] shrink-0 mt-0.5" />
                    <span>IPP investment identification &amp; capital mobilization</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84D447] shrink-0 mt-0.5" />
                    <span>Land development and institutional stakeholder alignment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84D447] shrink-0 mt-0.5" />
                    <span>Commercial PPA structuring for C&amp;I energy consumers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84D447] shrink-0 mt-0.5" />
                    <span>Asset expansion strategy and long-term revenue optimization</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* ── 5. DIRECT CTA CARD ── */}
          <div className="rounded-[20px] sm:rounded-[32px] bg-[#0E2F3E] text-white p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-2 sm:mb-3">
                JOIN OUR NETWORK
              </span>
              <h3 className="text-[22px] sm:text-[28px] md:text-[38px] font-medium tracking-tight leading-[1.2] mb-2 sm:mb-3">
                Interested in partnering on clean energy projects?
              </h3>
              <p className="text-[13.5px] sm:text-[15px] text-white/80 leading-[1.6]">
                Reach out to our strategic partnerships desk to explore co-development, investment, or captive power opportunities across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="mailto:partner@vynentra.com"
                className="inline-flex items-center justify-center gap-2 h-[46px] sm:h-[48px] px-6 sm:px-7 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>partner@vynentra.com</span>
              </a>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-8 sm:px-9 rounded-full border border-white/40 text-white text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white hover:text-neutral-950 transition-colors duration-200 w-full sm:w-auto sm:min-w-[170px]"
              >
                <span>GET IN TOUCH</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <FooterV2 />

    </div>
  );
}
