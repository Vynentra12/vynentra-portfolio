"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle, Lightbulb, Shield, Award, Users, Heart } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { HeroBackLink } from "@/components/ui/HeroBackLink";
import { FooterV2 } from "@/components/sections/FooterV2";


function AnimatedNumber({ to, decimals = 0, suffixText = "", colorClass = "text-[#0A6B88]", textClass = "text-neutral-900" }: { to: number, decimals?: number, suffixText?: string, colorClass?: string, textClass?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals);
          }
        }
      });
      return () => controls.stop();
    }
  }, [to, decimals, inView]);

  return (
    <div className={`text-[26px] xs:text-[28px] sm:text-[36px] lg:text-[40px] font-medium tracking-tight mb-1 sm:mb-2 lg:mb-2.5 whitespace-nowrap ${textClass}`}>
      <span ref={nodeRef}>{decimals > 0 ? (0).toFixed(decimals) : "0"}</span>
      <span className={colorClass}>{suffixText}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-hero.jpg"
            alt="Vynentra energy engineers, project developers and technical specialists collaborating on a renewable energy site"
            className="w-full h-full object-cover object-[center_35%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-14 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="w-full">
            {/* Back to Home Link */}
            <HeroBackLink />

            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 select-text">
              Who we are<br />What drives us
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl font-medium">
              We are a team of energy engineers, project developers and technical specialists building the infrastructure for a sustainable tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
                OUR STORY
              </SectionBadge>
              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-5 sm:mb-6 lg:mb-8 max-w-[640px]">
                From a vision to a leading renewable developer
              </h2>

              {/* Mobile-Only Founder Image: Positioned directly after Title on mobile (< lg) */}
              <div className="block lg:hidden w-full aspect-[4/3] sm:aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-xs mb-6 sm:mb-8">
                <img 
                  src="/founder-image.png" 
                  alt="Founder of Vynentra" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-[14px] sm:text-[15px] md:text-[17px] text-neutral-600 leading-[1.6] font-medium space-y-6">
                <p>
                  Vynentra began with a simple observation: the transition to renewable energy was happening too slowly because development was fragmented. 
                  We spent years working across the sector - navigating regulatory hurdles, managing supply chains, and commissioning plants. The insight was always there; the unified execution never was.
                </p>
                <p>
                  So we built a company that integrates the entire lifecycle. Today, we develop, execute, and operate large-scale utility projects across India, handing our clients turnkey solutions instead of complex management headaches.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-square max-h-[560px] rounded-[20px] overflow-hidden"
            >
              <img 
                src="/founder-image.png" 
                alt="Founder of Vynentra" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC PARTNERSHIP: HRV GROUP & VYNENTRA (White BG, Left Image on Desktop, After Title on Mobile) ── */}
      <section className="w-full pt-2 sm:pt-4 pb-14 sm:pb-20 md:pb-28 bg-white select-text">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
              
              {/* Desktop-Only Left Column Image: Hidden on mobile, shown on lg screens */}
              <div className="hidden lg:block lg:col-span-6 relative order-1 lg:order-1">
                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-square max-h-[560px] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-neutral-200/80 shadow-xs bg-neutral-100">
                  <img
                    src="/images/stock/pexels-5520322.jpg"
                    alt="Strategic Partners in Renewable Infrastructure - Vynentra & HRV Group"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Text Column: Full width on mobile, right column on desktop */}
              <div className="w-full lg:col-span-6 flex flex-col justify-center order-2 lg:order-2">
                <SectionBadge theme="dark" className="mb-3 sm:mb-3.5 w-fit">
                  STRATEGIC PARTNERSHIP
                </SectionBadge>

                <h2 className="text-[26px] xs:text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium text-neutral-950 tracking-tight leading-[1.18] mb-3.5 sm:mb-4 lg:mb-5">
                  HRV Group - Strategic Partner
                </h2>

                {/* Mobile-Only Image: Positioned directly after badge and title on mobile */}
                <div className="block lg:hidden w-full aspect-[16/10] sm:aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden border border-neutral-200/80 shadow-xs bg-neutral-100 mb-5 sm:mb-6">
                  <img
                    src="/images/stock/pexels-5520322.jpg"
                    alt="Strategic Partners in Renewable Infrastructure - Vynentra & HRV Group"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <p className="text-[14.5px] sm:text-[15.5px] md:text-[16.5px] text-neutral-800 leading-[1.65] mb-3.5 sm:mb-4 font-normal">
                  HRV Group is a strategic partner of Vynentra Energy Solutions, supporting the development and expansion of <strong className="font-semibold text-neutral-950">Independent Power Producer (IPP) projects across wind and solar energy</strong>.
                </p>

                <p className="text-[13.5px] sm:text-[14.5px] md:text-[15.5px] text-neutral-600 leading-[1.65] mb-6 sm:mb-8 font-normal">
                  Through this partnership, HRV Group will play a key role in identifying investment opportunities, facilitating project development, and supporting the establishment of renewable energy assets designed to deliver long-term value.
                </p>

                {/* Key Technical Metric Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300 mb-7 sm:mb-9 py-1 sm:py-1.5">
                  <div className="sm:pr-6 pb-3 sm:pb-0">
                    <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1">
                      Project Model
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-neutral-950 block">
                      Independent Power Producer (IPP)
                    </span>
                  </div>

                  <div className="sm:px-6 py-3 sm:py-0">
                    <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1">
                      Generation Scope
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-neutral-950 block">
                      Wind &amp; Solar Clean Energy
                    </span>
                  </div>

                  <div className="sm:pl-6 pt-3 sm:pt-0">
                    <span className="text-[10.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1">
                      Target Sector
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-neutral-950 block">
                      Commercial &amp; Industrial (C&amp;I)
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="w-full py-10 sm:py-20 md:py-28 bg-[#0A6B88]">
        <div className="w-full px-5 sm:px-10 lg:px-12 xl:px-14">
          <SectionBadge theme="light" className="mb-3 sm:mb-5 w-fit">
            BY THE NUMBERS
          </SectionBadge>
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-tight leading-[1.18] mb-6 sm:mb-10 lg:mb-14 max-w-[720px]">
            The numbers behind India&apos;s energy transition
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full border border-white/10 transition-all duration-300 hover:bg-white/[0.14]">
              <div>
                <AnimatedNumber to={299.25} decimals={2} suffixText=" GW" textClass="text-white" colorClass="text-white" />
                <h3 className="text-[13.5px] sm:text-[15.5px] font-semibold text-white mb-1 sm:mb-1.5 leading-snug">
                  Cumulative RE capacity
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] text-white/80 leading-snug sm:leading-relaxed font-normal">
                  Total renewable energy capacity of 299,246.53 MW as of 30 September 2026. Includes large hydro.
                </p>
              </div>
              <div className="pt-2.5 mt-3 sm:pt-4 sm:mt-5 border-t border-white/15">
                <a
                  href="https://mnre.gov.in/documents/guidelines/physical-achievements-kzN2kTMtQWa?pageTitle=Physical-Achievements&utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] sm:text-[11.5px] font-medium text-white/75 hover:text-white underline underline-offset-2 transition-colors duration-200"
                >
                  MNRE – Physical Achievements
                </a>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full border border-white/10 transition-all duration-300 hover:bg-white/[0.14]">
              <div>
                <AnimatedNumber to={171.05} decimals={2} suffixText=" GW" textClass="text-white" colorClass="text-white" />
                <h3 className="text-[13.5px] sm:text-[15.5px] font-semibold text-white mb-1 sm:mb-1.5 leading-snug">
                  Installed solar capacity
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] text-white/80 leading-snug sm:leading-relaxed font-normal">
                  171,051.46 MW across ground-mounted, rooftop, hybrid and off-grid solar installations.
                </p>
              </div>
              <div className="pt-2.5 mt-3 sm:pt-4 sm:mt-5 border-t border-white/15">
                <a
                  href="https://mnre.gov.in/documents/guidelines/physical-achievements-kzN2kTMtQWa?pageTitle=Physical-Achievements&utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] sm:text-[11.5px] font-medium text-white/75 hover:text-white underline underline-offset-2 transition-colors duration-200"
                >
                  MNRE – Solar Capacity Data
                </a>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full border border-white/10 transition-all duration-300 hover:bg-white/[0.14]">
              <div>
                <AnimatedNumber to={59.20} decimals={2} suffixText=" GW" textClass="text-white" colorClass="text-white" />
                <h3 className="text-[13.5px] sm:text-[15.5px] font-semibold text-white mb-1 sm:mb-1.5 leading-snug">
                  Installed wind capacity
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] text-white/80 leading-snug sm:leading-relaxed font-normal">
                  59,201.07 MW across utility and commercial wind installations as of 30 September 2026.
                </p>
              </div>
              <div className="pt-2.5 mt-3 sm:pt-4 sm:mt-5 border-t border-white/15">
                <a
                  href="https://mnre.gov.in/documents/guidelines/physical-achievements-kzN2kTMtQWa?pageTitle=Physical-Achievements&utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] sm:text-[11.5px] font-medium text-white/75 hover:text-white underline underline-offset-2 transition-colors duration-200"
                >
                  MNRE – Wind Capacity Data
                </a>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full border border-white/10 transition-all duration-300 hover:bg-white/[0.14]">
              <div>
                <AnimatedNumber to={500} suffixText=" GW" textClass="text-white" colorClass="text-white" />
                <h3 className="text-[13.5px] sm:text-[15.5px] font-semibold text-white mb-1 sm:mb-1.5 leading-snug">
                  India&apos;s 2030 non-fossil target
                </h3>
                <p className="text-[11.5px] sm:text-[12.5px] text-white/80 leading-snug sm:leading-relaxed font-normal">
                  National target of 500 GW non-fossil fuel-based installed electricity capacity by 2030.
                </p>
              </div>
              <div className="pt-2.5 mt-3 sm:pt-4 sm:mt-5 border-t border-white/15">
                <a
                  href="https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=293063&utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] sm:text-[11.5px] font-medium text-white/75 hover:text-white underline underline-offset-2 transition-colors duration-200"
                >
                  PIB – Landmark 300 GW Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT BINDS US ── */}
      <section className="w-full pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-14 lg:pb-16 bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
            WHAT BINDS US
          </SectionBadge>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 max-w-[640px]">
              What binds us
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-neutral-600 leading-[1.6] font-medium">
              Our principles guide every decision, from engineering and technology selection to project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14">
            {/* Value 1 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Shield strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">INTEGRITY FIRST</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Transparent operations, honest partnerships, and absolute commitment to regulatory compliance.</p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Lightbulb strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">INNOVATION</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Deploying cutting-edge solar and storage technology to maximize generation efficiency.</p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <CheckCircle strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">CONTINUOUS QUALITY</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">24/7 monitoring and proactive maintenance to ensure peak performance year-round.</p>
            </div>
            {/* Value 4 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Award strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">EXCELLENCE</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Field and lab diagnostics mapped perfectly to deliver premium engineering solutions.</p>
            </div>
            {/* Value 5 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Users strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">COMMUNITY IMPACT</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Empowering local communities with job creation and sustainable regional development.</p>
            </div>
            {/* Value 6 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Heart strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-wider uppercase text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">SAFETY FOCUSED</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Zero-compromise approach to workplace safety and environmental protection protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARBON MARKETS & VALUE CREATION ── */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 lg:pb-32 bg-white select-text">
        <div className="w-full px-5 sm:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] bg-[#0E2F3E] text-white p-6 sm:p-9 md:p-11 lg:p-14 border border-white/10 shadow-[0_24px_50px_-12px_rgba(11,37,51,0.18)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Editorial Content (7 cols on lg, 8 cols on xl) */}
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.1em] font-semibold text-[#AEF977] block mb-2.5 sm:mb-3">
                  CARBON MARKETS &amp; VALUE CREATION
                </span>
                <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-medium tracking-tight leading-[1.2] mb-3 sm:mb-4 text-white max-w-2xl">
                  Currently aligning with India&apos;s<br className="hidden sm:inline" /> evolving carbon market.
                </h2>
                <p className="text-[13.5px] sm:text-[14.5px] md:text-[15.5px] text-white/80 leading-[1.65] font-normal max-w-2xl mb-6 sm:mb-8">
                  We are taking steps to explore carbon credit opportunities under India&apos;s Carbon Credit Trading Scheme, aligning renewable energy project development with evolving carbon market frameworks.
                </p>
                <div>
                  <a
                    href="https://icapcarbonaction.com/en/ets/indian-carbon-credit-trading-scheme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[42px] sm:h-[44px] px-7 sm:px-8 rounded-full bg-white text-[#0B2533] text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#AEF977] hover:text-[#0B2533] active:scale-[0.98]"
                  >
                    <span>Read More</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Rectangular Image with Natural Proportions (5 cols on lg, 4 cols on xl) */}
              <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end w-full">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/10 shadow-lg bg-neutral-900 group/img">
                  <img
                    src="/wind_farm_sunset.jpg"
                    alt="India Carbon Credit and Clean Renewable Energy Landscape"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                </div>
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
