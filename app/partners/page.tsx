"use client";

import React from "react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FooterV2 } from "@/components/sections/FooterV2";
import { 
  Search, 
  Layers, 
  TrendingUp, 
  Building2, 
  Wrench, 
  Zap 
} from "lucide-react";

export default function PartnersPage() {
  const structuredStages = [
    {
      num: "01",
      title: "Project Identification",
      desc: "Identifying viable investment opportunities across wind and solar resources, evaluating site fundamentals, and establishing long-term project parameters.",
      icon: Search,
    },
    {
      num: "02",
      title: "Land & Site Development",
      desc: "Securing strategic land parcels, conducting environmental and topographical feasibility assessments, and planning grid-interconnection access.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Investment Facilitation",
      desc: "Mobilizing strategic capital partnerships and establishing bankable renewable energy assets designed to deliver sustained long-term value.",
      icon: TrendingUp,
    },
    {
      num: "04",
      title: "Commercial Structuring",
      desc: "Developing tailored power purchase agreements (PPAs), tariff structuring, and compliant commercial frameworks for commercial and industrial off-takers.",
      icon: Building2,
    },
    {
      num: "05",
      title: "Turnkey EPC Execution",
      desc: "Managing engineering design, equipment procurement, balance-of-plant construction, and rigorous testing for seamless execution.",
      icon: Wrench,
    },
    {
      num: "06",
      title: "Long-Term Generation",
      desc: "Executing grid synchronization, ongoing plant management, and sustained clean power generation strengthening India’s clean energy capacity.",
      icon: Zap,
    },
  ];

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
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
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-12 sm:pb-16 md:pb-20 pt-28 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            {/* Back to Home Link (Pure text, no arrow, no background, no border) */}
            <div className="mb-5 sm:mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-[12px] sm:text-[13px] font-medium tracking-[0.14em] text-white/80 hover:text-white uppercase transition-colors select-none"
              >
                <span>Back to Home</span>
              </Link>
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

      {/* ── 2. STRATEGIC PARTNERSHIP: HRV GROUP & VYNENTRA ── */}
      <section className="w-full py-12 sm:py-20 md:py-28 bg-white select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
              
              {/* Left Column: Direct Partnership Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <SectionBadge theme="dark" className="mb-3 sm:mb-4 w-fit">
                  STRATEGIC PARTNERSHIP
                </SectionBadge>

                {/* Heading without dash (—) */}
                <h2 className="text-[26px] xs:text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium text-neutral-950 tracking-tight leading-[1.18] mb-4 sm:mb-6">
                  HRV Group Strategic Partner
                </h2>

                <p className="text-[14.5px] sm:text-[16px] md:text-[17px] text-neutral-800 leading-[1.65] mb-3.5 sm:mb-4 font-normal">
                  HRV Group is a strategic partner of Vynentra Energy Solutions, supporting the development and expansion of <strong className="font-semibold text-neutral-950">Independent Power Producer (IPP) projects across wind and solar energy</strong>.
                </p>

                <p className="text-[13.5px] sm:text-[15px] md:text-[15.5px] text-neutral-600 leading-[1.65] mb-6 sm:mb-8 font-normal">
                  Through this partnership, HRV Group will play a key role in identifying investment opportunities, facilitating project development, and supporting the establishment of renewable energy assets designed to deliver long-term value.
                </p>

                {/* Key Technical Metric Points - Clean Borderless Row with Divider Lines (Mobile Optimized) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 mb-6 sm:mb-10 py-1">
                  <div className="sm:pr-6 pb-3 sm:pb-0">
                    <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-0.5 sm:mb-1">
                      Project Model
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-neutral-950 block">
                      Independent Power Producer (IPP)
                    </span>
                  </div>

                  <div className="sm:px-6 py-3 sm:py-0">
                    <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-0.5 sm:mb-1">
                      Generation Scope
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-neutral-950 block">
                      Wind &amp; Solar Clean Energy
                    </span>
                  </div>

                  <div className="sm:pl-6 pt-3 sm:pt-0">
                    <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-0.5 sm:mb-1">
                      Target Sector
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-neutral-950 block">
                      Commercial &amp; Industrial (C&amp;I)
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons - Mobile Responsive Row */}
                <div className="flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-8 lg:mb-0">
                  <Link
                    href="/contact#contact-form"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center h-[42px] sm:h-[46px] px-4 sm:px-8 rounded-full bg-[#0B2735] text-white border border-[#0B2735] text-[11px] sm:text-[12px] font-medium tracking-[0.06em] uppercase hover:bg-[#087589] hover:border-[#087589] transition-all duration-300 shadow-xs active:scale-[0.98] text-center whitespace-nowrap cursor-pointer"
                  >
                    <span>Partner With Us</span>
                  </Link>
  
                  <a
                    href="mailto:partner@vynentra.com"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center h-[42px] sm:h-[46px] px-4 sm:px-8 rounded-full border border-neutral-300 text-neutral-800 text-[11px] sm:text-[12px] font-medium tracking-[0.06em] uppercase hover:border-[#087589] hover:text-[#087589] transition-all duration-300 active:scale-[0.98] text-center whitespace-nowrap cursor-pointer"
                  >
                    <span>Inquire Alliance</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Authentic Infrastructure Photography (Increased width on Desktop) */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/12] xl:aspect-[16/11] rounded-[18px] sm:rounded-[24px] overflow-hidden border border-neutral-200/80 shadow-xs bg-neutral-100">
                  <img
                    src="/solutions/solar-installation.jpg"
                    alt="Renewable Energy Infrastructure - Commercial Solar Plant Installation"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COLLABORATIVE STRENGTHS (Light Blue Background Matching Featured Projects) ── */}
      <section className="w-full py-12 sm:py-20 md:py-24 bg-[#087589] text-white select-text relative">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            
            <div className="max-w-3xl mb-10 sm:mb-16">
              <SectionBadge theme="light" className="mb-3 sm:mb-4 w-fit">
                COLLABORATIVE STRENGTHS
              </SectionBadge>
              <h2 className="text-[24px] xs:text-[26px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-tight leading-[1.18] mb-3 sm:mb-4">
                Combining engineering execution with commercial IPP development
              </h2>
              <p className="text-[13.5px] sm:text-[15.5px] text-white/85 leading-[1.65] font-normal">
                By combining Vynentra Energy Solutions’ capabilities in renewable energy engineering, procurement, construction (EPC), and project execution with HRV Group’s role in the development and commercial advancement of IPP opportunities, the partnership seeks to build scalable renewable energy infrastructure for commercial, industrial, and institutional power consumers.
              </p>
            </div>

            {/* 2 Institutional Capability Cards - Mobile Optimized Header & Padding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-10 text-neutral-900">
              
              {/* Card 1: Vynentra Energy Solutions */}
              <div className="bg-white rounded-[18px] sm:rounded-[24px] p-5 sm:p-8 lg:p-10 border border-white/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-neutral-100">
                    <div>
                      <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1">
                        Technical &amp; Delivery Partner
                      </span>
                      <h3 className="text-[19px] sm:text-[22px] font-medium text-neutral-950 leading-tight">
                        Vynentra Energy Solutions
                      </h3>
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-semibold text-[#087589] uppercase tracking-wider shrink-0 pt-0.5">
                      EPC &amp; Execution
                    </span>
                  </div>

                  <p className="text-[13px] sm:text-[14.5px] text-neutral-600 leading-[1.6] mb-5 sm:mb-6">
                    Directing end-to-end technical execution, engineering design, equipment procurement, and reliable construction across clean energy assets.
                  </p>

                  <ul className="space-y-3 sm:space-y-3.5">
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087589] mt-1.5 shrink-0" />
                      <span>Renewable energy engineering, plant configuration &amp; system sizing</span>
                    </li>
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087589] mt-1.5 shrink-0" />
                      <span>Turnkey equipment procurement, OEM coordination &amp; supply chain</span>
                    </li>
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087589] mt-1.5 shrink-0" />
                      <span>Balance of plant construction, civil works &amp; grid interconnection</span>
                    </li>
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087589] mt-1.5 shrink-0" />
                      <span>Testing, commissioning, and operational project execution</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: HRV Group */}
              <div className="bg-white rounded-[18px] sm:rounded-[24px] p-5 sm:p-8 lg:p-10 border border-white/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-neutral-100">
                    <div>
                      <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1">
                        Development &amp; Commercial Partner
                      </span>
                      <h3 className="text-[19px] sm:text-[22px] font-medium text-neutral-950 leading-tight">
                        HRV Group
                      </h3>
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-semibold text-[#087589] uppercase tracking-wider shrink-0 pt-0.5">
                      IPP &amp; Commercial
                    </span>
                  </div>

                  <p className="text-[13px] sm:text-[14.5px] text-neutral-600 leading-[1.6] mb-5 sm:mb-6">
                    Leading project identification, strategic capital facilitation, land development, and commercial structuring of IPP opportunities.
                  </p>

                  <ul className="space-y-3 sm:space-y-3.5">
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B2735] mt-1.5 shrink-0" />
                      <span>Identifying high-yield renewable energy investment opportunities</span>
                    </li>
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B2735] mt-1.5 shrink-0" />
                      <span>Strategic land parcel aggregation &amp; site development facilitation</span>
                    </li>
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B2735] mt-1.5 shrink-0" />
                      <span>Commercial structuring &amp; bankable off-taker PPA arrangements</span>
                    </li>
                    <li className="flex items-start gap-3 text-[13px] sm:text-[14px] text-neutral-800 leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B2735] mt-1.5 shrink-0" />
                      <span>Establishing renewable energy assets designed to deliver long-term value</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Callout Banner (Without Dot and Without Arrow) */}
            <div className="w-full bg-white text-neutral-900 rounded-[14px] sm:rounded-[16px] p-4 sm:p-6 border border-white/20 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center">
                <span className="text-[13px] sm:text-[14.5px] text-neutral-900 font-medium">
                  Building scalable renewable energy infrastructure for commercial, industrial, and institutional power consumers across India.
                </span>
              </div>
              <Link
                href="/contact#contact-form"
                className="text-[11.5px] sm:text-[12px] font-bold text-[#087589] hover:text-[#0B2735] uppercase tracking-wider whitespace-nowrap transition-colors"
              >
                INQUIRE FOR YOUR FACILITY
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. STRUCTURED APPROACH (6 Boxes matching Image 4 with Circular Icon & Number Badge) ── */}
      <section className="w-full py-16 sm:py-24 md:py-28 bg-[#FBFDFD] select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-12 sm:mb-16 md:mb-20">
              <div className="lg:col-span-7">
                <SectionBadge theme="dark" className="mb-3.5 sm:mb-4 w-fit">
                  STRUCTURED APPROACH
                </SectionBadge>
                <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-950 tracking-tight leading-[1.18]">
                  Our structured approach to wind<br className="hidden sm:inline" /> and solar power projects
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 leading-[1.65] font-normal">
                  The collaboration aims to advance wind and solar power projects through a structured approach encompassing project identification, land and site development, investment facilitation, commercial structuring, and long-term power generation opportunities.
                </p>
              </div>
            </div>

            {/* 6 Structured Cards: 3 on Top Row, 3 on Bottom Row (Clean Borderless UI with HOW WE BRING IT TOGETHER hover states) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-12 sm:gap-y-16">
              {structuredStages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <div
                    key={stage.num}
                    className="flex flex-col items-center text-center group cursor-pointer p-2 sm:p-4"
                  >
                    {/* Circular Icon Container matching Image 4 with Overlapping Number Badge & HOW WE BRING IT TOGETHER hover colors */}
                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border border-neutral-200 bg-[#F4F6F8] flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:border-[#0A6B88] group-hover:scale-105">
                      {/* Overlapping Badge */}
                      <div className="absolute -top-1 -left-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0B2735] text-white text-[11px] sm:text-[12px] font-bold flex items-center justify-center shadow-xs select-none transition-colors duration-300 group-hover:bg-neutral-950">
                        {stage.num}
                      </div>

                      {/* Lucide Outline Icon - Default dark text-neutral-800, Hover pure white */}
                      <Icon
                        strokeWidth={1.5}
                        className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-neutral-950 mb-2 sm:mb-2.5 tracking-tight group-hover:text-[#0A6B88] transition-colors leading-[1.3]">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.6] font-normal max-w-[280px]">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. SHARED COMMITMENT & CLOSING ACTION (Green Badge & Default Green Email Button, No Mail Icon) ── */}
      <section className="w-full pb-12 sm:pb-24 md:pb-28 bg-white select-text">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            <div className="rounded-[18px] sm:rounded-[28px] bg-[#0B2735] text-white p-6 sm:p-12 lg:p-16 border border-neutral-800 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
              
              <div className="max-w-2xl">
                {/* Green badge text */}
                <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#AEF977] uppercase block mb-2 sm:mb-3">
                  SHARED COMMITMENT
                </span>
                <h3 className="text-[22px] xs:text-[25px] sm:text-[32px] md:text-[38px] font-medium tracking-tight leading-[1.18] mb-2.5 sm:mb-4">
                  Accelerating India&apos;s clean energy transition.
                </h3>
                <p className="text-[13.5px] sm:text-[15.5px] text-white/80 leading-[1.65] font-normal">
                  Together, both organisations are committed to accelerating the adoption of clean energy, strengthening renewable power generation capacity, and creating sustainable, commercially viable energy solutions that contribute to India&apos;s energy transition.
                </p>
              </div>

              {/* Direct Buttons: Email in Green by Default (No Mail Icon) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 shrink-0 w-full lg:w-auto">
                <a
                  href="mailto:partner@vynentra.com"
                  className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-6 sm:px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white hover:text-neutral-950 transition-colors duration-200 w-full sm:w-auto text-center"
                >
                  <span>PARTNER@VYNENTRA.COM</span>
                </a>
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-6 sm:px-8 rounded-full border border-white/40 text-white text-[11.5px] sm:text-[12px] font-medium tracking-[0.06em] uppercase hover:bg-white hover:text-neutral-950 transition-colors duration-200 w-full sm:w-auto text-center cursor-pointer"
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
