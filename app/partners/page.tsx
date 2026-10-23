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
  Check, 
  Mail 
} from "lucide-react";

export default function PartnersPage() {
  const structuredPillars = [
    {
      num: "01",
      title: "Project Identification",
      desc: "Identifying investment opportunities, evaluating wind and solar resource viability, and establishing technical fundamentals.",
      icon: MapPin,
    },
    {
      num: "02",
      title: "Land & Site Development",
      desc: "Securing strategic land parcels, conducting feasibility assessments, and facilitating regulatory and grid connectivity clearances.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Investment Facilitation",
      desc: "Mobilizing strategic capital and establishing bankable renewable energy assets designed to deliver long-term value.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Commercial Structuring",
      desc: "Commercial advancement of IPP opportunities, tailored PPA structuring, and compliant frameworks for C&I power consumers.",
      icon: Building2,
    },
    {
      num: "05",
      title: "Long-Term Power Generation",
      desc: "Strengthening renewable generation capacity and delivering reliable, commercially viable clean power across India.",
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

        {/* Hero Content Container - Standardized Left & Right Spacing */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-12 sm:pb-16 md:pb-20 pt-28 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            {/* Minimal Frosted Glass Pill Breadcrumb */}
            <div className="mb-5 sm:mb-6">
              <nav aria-label="Breadcrumbs" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-[11.5px] font-normal text-white/80 shadow-sm">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-white/40 select-none">/</span>
                <span className="text-white font-medium select-none">Partners</span>
              </nav>
            </div>

            <h1 className="text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] mb-3 sm:mb-5 select-text">
              Strategic partnerships scaling India&apos;s renewable infrastructure.
            </h1>
            <p className="text-[14px] sm:text-[15.5px] md:text-[16.5px] text-white/80 leading-[1.65] max-w-3xl font-normal">
              Together, both organisations are committed to accelerating the adoption of clean energy, strengthening renewable power generation capacity, and creating sustainable, commercially viable energy solutions that contribute to India&apos;s energy transition.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SECTION 1: STRATEGIC PARTNERSHIP ── */}
      <section className="w-full py-16 sm:py-24 md:py-28 bg-white select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
              
              {/* Left Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <SectionBadge theme="dark" className="mb-3.5 sm:mb-4 w-fit">
                  Strategic Partnership
                </SectionBadge>

                {/* Section Title matching Home Page Typography */}
                <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-950 tracking-tight leading-[1.18] mb-4 sm:mb-5">
                  HRV Group - Strategic Partner
                </h2>

                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 leading-[1.65] mb-6 sm:mb-8 font-normal">
                  HRV Group is a strategic partner of Vynentra Energy Solutions, supporting the development and expansion of Independent Power Producer (IPP) projects across wind and solar energy. Through this partnership, HRV Group will play a key role in identifying investment opportunities, facilitating project development, and supporting the establishment of renewable energy assets designed to deliver long-term value.
                </p>

                {/* Action Buttons Row: Side by side (left & right) on all screens */}
                <div className="flex flex-row items-center gap-2.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
                  <Link
                    href="/contact#contact-form"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center h-[44px] sm:h-[46px] px-3.5 sm:px-7 rounded-full bg-[#0B2735] text-white border border-[#0B2735] text-[11px] min-[390px]:text-[11.5px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase hover:bg-[#AEF977] hover:text-neutral-950 hover:border-[#AEF977] transition-all duration-300 shadow-sm active:scale-[0.98] text-center whitespace-nowrap"
                  >
                    <span>Partner With Us</span>
                  </Link>
                  <a
                    href="mailto:partner@vynentra.com"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center h-[44px] sm:h-[46px] px-3.5 sm:px-7 rounded-full border border-neutral-300 text-neutral-800 text-[11px] min-[390px]:text-[11.5px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase hover:bg-[#AEF977] hover:text-neutral-950 hover:border-[#AEF977] transition-all duration-300 active:scale-[0.98] text-center whitespace-nowrap"
                  >
                    <span>Inquire Alliance</span>
                  </a>
                </div>

                {/* 3 Focus Highlight Cards - Dividing line removed */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1 sm:pt-2">
                  <div className="rounded-[16px] bg-[#F7F9FA] border border-neutral-200/70 p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                      <span className="w-2 h-2 rounded-[2px] bg-[#0A6B88] shrink-0" />
                      <span className="text-[14.5px] sm:text-[15.5px] font-semibold text-neutral-950 tracking-tight whitespace-nowrap">
                        IPP Projects
                      </span>
                    </div>
                    <p className="text-[12px] sm:text-[12.5px] text-neutral-500 font-normal leading-[1.45]">
                      Independent Power Producer Model
                    </p>
                  </div>

                  <div className="rounded-[16px] bg-[#F7F9FA] border border-neutral-200/70 p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                      <span className="w-2 h-2 rounded-[2px] bg-[#84D447] shrink-0" />
                      <span className="text-[14.5px] sm:text-[15.5px] font-semibold text-neutral-950 tracking-tight whitespace-nowrap">
                        Wind &amp; Solar
                      </span>
                    </div>
                    <p className="text-[12px] sm:text-[12.5px] text-neutral-500 font-normal leading-[1.45]">
                      Clean Power Generation Assets
                    </p>
                  </div>

                  <div className="rounded-[16px] bg-[#F7F9FA] border border-neutral-200/70 p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                      <span className="w-2 h-2 rounded-[2px] bg-[#0B2735] shrink-0" />
                      <span className="text-[14.5px] sm:text-[15.5px] font-semibold text-neutral-950 tracking-tight whitespace-nowrap">
                        EPC &amp; Capital
                      </span>
                    </div>
                    <p className="text-[12px] sm:text-[12.5px] text-neutral-500 font-normal leading-[1.45]">
                      Renewable Engineering &amp; Delivery
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Image Column - Reduced & Refined Height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="lg:col-span-5 relative"
              >
                <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/4.2] lg:aspect-[4/4.6] max-h-[350px] sm:max-h-[440px] lg:max-h-[480px] rounded-[22px] sm:rounded-[30px] overflow-hidden shadow-sm bg-neutral-100">
                  <img
                    src="/partners-executive.jpg"
                    alt="HRV Group & Vynentra Leadership"
                    className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SECTION 2: COLLABORATIVE STRENGTHS (Image Left, Content Right) ── */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#FBFDFD] border-y border-neutral-100 select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
              
              {/* Left Image Column - Reduced & Refined Height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-5 order-2 lg:order-1 relative"
              >
                <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/4.2] lg:aspect-[4/4.6] max-h-[350px] sm:max-h-[440px] lg:max-h-[480px] rounded-[22px] sm:rounded-[30px] overflow-hidden shadow-sm bg-neutral-100">
                  <img
                    src="/partners-director.jpg"
                    alt="Renewable Energy Project Development & Engineering"
                    className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>

              {/* Right Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center"
              >
                <SectionBadge theme="dark" className="mb-3.5 sm:mb-4 w-fit">
                  Collaborative Strengths
                </SectionBadge>

                {/* Section Title matching Home Page Typography */}
                <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-950 tracking-tight leading-[1.18] mb-4 sm:mb-5">
                  Scalable renewable infrastructure for commercial &amp; industrial consumers.
                </h2>

                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 leading-[1.65] mb-8 sm:mb-10 font-normal">
                  By combining Vynentra Energy Solutions&apos; capabilities in renewable energy engineering, procurement, construction (EPC), and project execution with HRV Group&apos;s role in the development and commercial advancement of IPP opportunities, the partnership seeks to build scalable renewable energy infrastructure for commercial, industrial, and institutional power consumers.
                </p>

                {/* 2-Column Checklist with Circular Icon Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 sm:gap-y-4">
                  
                  {/* Column 1: Vynentra Engineering Capabilities */}
                  <div className="space-y-3 sm:space-y-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Renewable energy engineering &amp; execution
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Turnkey procurement &amp; construction (EPC)
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Wind and solar power project delivery
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Commercially viable energy solutions
                      </span>
                    </div>
                  </div>

                  {/* Column 2: HRV Group Commercial Capabilities */}
                  <div className="space-y-3 sm:space-y-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Identifying strategic investment opportunities
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Facilitating comprehensive project development
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Land, site development &amp; commercial structuring
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0A6B88]/10 text-[#0A6B88] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        Long-term power generation opportunities
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SECTION 3: EXECUTION FRAMEWORK (Compact on Mobile, Standardized 5 Pillars) ── */}
      <section className="w-full py-16 sm:py-24 md:py-28 bg-white select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            
            {/* Top Header Row matching Home Page Typography */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-14 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <SectionBadge theme="dark" className="mb-3.5 sm:mb-4 w-fit">
                  Execution Framework
                </SectionBadge>
                <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-950 tracking-tight leading-[1.18]">
                  Our structured approach to wind and solar power projects
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 leading-[1.65] font-normal">
                  The collaboration aims to advance wind and solar power projects through a structured approach encompassing project identification, land and site development, investment facilitation, commercial structuring, and long-term power generation opportunities.
                </p>
              </motion.div>
            </div>

            {/* 5-Card Responsive Grid - Compact & Minimal on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7">
              {structuredPillars.map((pillar) => {
                const IconComponent = pillar.icon;

                return (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group bg-[#F7F9FA] rounded-[18px] sm:rounded-[24px] md:rounded-[26px] p-5 sm:p-7 md:p-8 flex flex-col justify-start transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-xs cursor-pointer border border-neutral-200/80"
                  >
                    {/* Icon Container matching How We Bring It Together UI (Compact on Mobile) */}
                    <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[12px] sm:rounded-[16px] bg-white border border-neutral-200/70 flex items-center justify-center mb-3.5 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:bg-[#AEF977] group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(174,249,119,0.35)]">
                      <IconComponent
                        strokeWidth={1.75}
                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-black"
                      />
                    </div>

                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-neutral-950 mb-1.5 sm:mb-2.5 md:mb-3 tracking-tight group-hover:text-[#0B2735] transition-colors leading-[1.25]">
                      {pillar.title}
                    </h3>

                    <p className="text-[12.5px] sm:text-[13px] md:text-[14px] text-neutral-600 leading-[1.6] font-normal">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. DIRECT CTA CARD ── */}
      <section className="w-full pb-16 sm:pb-24 md:pb-28 bg-white select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            <div className="rounded-[20px] sm:rounded-[32px] bg-[#0E2F3E] text-white p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-sm">
              <div className="max-w-2xl">
                <span className="text-[11px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-2 sm:mb-3">
                  Strategic Partnerships
                </span>
                <h3 className="text-[22px] sm:text-[28px] md:text-[38px] font-medium tracking-tight leading-[1.2] mb-2 sm:mb-3">
                  Partnering to accelerate India&apos;s clean energy transition.
                </h3>
                <p className="text-[13.5px] sm:text-[15px] text-white/80 leading-[1.6]">
                  Together, both organisations are committed to accelerating the adoption of clean energy, strengthening renewable power generation capacity, and creating sustainable, commercially viable energy solutions.
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
        </div>
      </section>

      {/* ── FOOTER ── */}
      <FooterV2 />

    </div>
  );
}
