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
    <h3 className={`text-[40px] md:text-[48px] font-medium mb-6 ${textClass}`}>
      <span ref={nodeRef}>0</span>
      <span className={colorClass}>{suffixText}</span>
    </h3>
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
            src="/images/stock/pexels-414837.jpg"
            alt="About us background"
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
              Empowering India&apos;s renewable future<br />through innovation and scale
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl font-medium">
              We are a team of passionate engineers, designers, and operators building the infrastructure for a sustainable tomorrow. Our mission is to accelerate the transition to clean energy.
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

                {/* Single Inquire Alliance Button */}
                <div className="pt-1">
                  <a
                    href="mailto:partner@vynentra.com"
                    className="inline-flex items-center justify-center h-[44px] sm:h-[46px] px-7 sm:px-8 rounded-full border border-[#0B2735] text-[#0B2735] text-[11.5px] sm:text-[12px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                  >
                    <span>Inquire Alliance</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="w-full py-16 sm:py-24 md:py-32 bg-[#0A6B88]">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <SectionBadge theme="light" className="mb-4 sm:mb-5 w-fit">
            BY THE NUMBERS
          </SectionBadge>
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-tight leading-[1.18] mb-10 lg:mb-14 max-w-[640px]">
            Trusted where scale meets execution
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[24px] p-6 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[220px]">
              <AnimatedNumber to={450} suffixText="MW+" textClass="text-white" colorClass="text-white" />
              <p className="text-[14px] text-white/90 leading-snug font-medium">Developed and commissioned capacity across commercial projects</p>
            </div>
            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[24px] p-6 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[220px]">
              <AnimatedNumber to={12} suffixText="+" textClass="text-white" colorClass="text-white" />
              <p className="text-[14px] text-white/90 leading-snug font-medium">Utility-scale solar farms delivered successfully in 3 years</p>
            </div>
            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[24px] p-6 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[220px]">
              <AnimatedNumber to={98} suffixText="%" textClass="text-white" colorClass="text-white" />
              <p className="text-[14px] text-white/90 leading-snug font-medium">Average operational uptime rating for all our managed sites</p>
            </div>
            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[24px] p-6 sm:p-8 flex flex-col justify-between min-h-[160px] sm:min-h-[220px]">
              <AnimatedNumber to={2.5} decimals={1} suffixText="x" textClass="text-white" colorClass="text-white" />
              <p className="text-[14px] text-white/90 leading-snug font-medium">Faster project completion times compared to industry standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="w-full py-16 sm:py-24 md:py-32 bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
            WHAT WE VALUE
          </SectionBadge>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 max-w-[640px]">
              Principles that shape every project
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-neutral-600 leading-[1.6] font-medium">
              We build for clients who are judged on generation output and long-term viability, not just aesthetics. Our values are the foundation of our execution.
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

      {/* ── CARBON MARKETS & VALUE CREATION (With Separation Line, 2-line Title & Minimized Image Width) ── */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-white select-text border-t border-neutral-200/80">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="max-w-[1380px] mx-auto rounded-[20px] sm:rounded-[28px] bg-[#0E2F3E] text-white p-5 sm:p-7 lg:p-9 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 lg:gap-8 items-center">
              
              {/* Left Column: Editorial Content (8 cols) */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <span className="text-[10.5px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-2 sm:mb-2.5">
                  CARBON MARKETS &amp; VALUE CREATION
                </span>
                <h2 className="text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px] font-medium tracking-tight leading-[1.2] mb-2 sm:mb-2.5 text-white max-w-xl">
                  Currently aligning with India&apos;s<br className="hidden sm:inline" /> evolving carbon market.
                </h2>
                <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-white/80 leading-[1.6] font-normal max-w-2xl">
                  We are taking steps to explore carbon credit opportunities under India&apos;s Carbon Credit Trading Scheme, aligning renewable energy project development with evolving carbon market frameworks.
                </p>
              </div>

              {/* Right Column: Rectangular Image with Minimized Width (4 cols) */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end w-full">
                <div className="relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[310px] aspect-[16/10] rounded-[14px] sm:rounded-[18px] overflow-hidden border border-white/10 shadow-md bg-neutral-900">
                  <img
                    src="/wind_farm_sunset.jpg"
                    alt="India Carbon Credit and Clean Renewable Energy Landscape"
                    className="w-full h-full object-cover object-center"
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
