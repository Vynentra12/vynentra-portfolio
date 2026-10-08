"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle, Lightbulb, Shield, Award, Users, Heart } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { CTASectionV2 } from "@/components/sections/CTASectionV2";
import { FooterV2 } from "@/components/sections/FooterV2";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
            src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
            alt="About us background"
            className="w-full h-full object-cover object-[center_35%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-14 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="w-full">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                ABOUT US
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 select-text">
              Empowering India's renewable future through innovation and scale.
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl mb-10 sm:mb-12 font-medium">
              We are a team of passionate engineers, designers, and operators building the infrastructure for a sustainable tomorrow. Our mission is to accelerate the transition to clean energy.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">HOME</Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">ABOUT</span>
            </nav>
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
              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 lg:mb-8 max-w-[640px]">
                From a vision to a leading renewable developer
              </h2>
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
              className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-square max-h-[560px] rounded-[20px] overflow-hidden"
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
              <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">Integrity First</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Transparent operations, honest partnerships, and absolute commitment to regulatory compliance.</p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Lightbulb strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">Innovation</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Deploying cutting-edge solar and storage technology to maximize generation efficiency.</p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <CheckCircle strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">Continuous Quality</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">24/7 monitoring and proactive maintenance to ensure peak performance year-round.</p>
            </div>
            {/* Value 4 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Award strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">Excellence</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Field and lab diagnostics mapped perfectly to deliver premium engineering solutions.</p>
            </div>
            {/* Value 5 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Users strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">Community Impact</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Empowering local communities with job creation and sustainable regional development.</p>
            </div>
            {/* Value 6 */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Heart strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">Safety Focused</h3>
              <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">Zero-compromise approach to workplace safety and environmental protection protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE TEAM ── */}
      <section className="w-full py-16 sm:py-24 md:py-32 bg-[#F4F6F8]">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
            THE TEAM
          </SectionBadge>
          <div className="max-w-2xl mb-12 lg:mb-16">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 max-w-[640px]">
              Operators, not observers
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-neutral-600 leading-[1.6] font-medium">
              A mix of energy experts, structural engineers and project managers who have all shipped large-scale infrastructure under tight deadlines.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0">
            {/* Team 1 */}
            <div className="min-w-[85vw] sm:min-w-0 snap-center group cursor-pointer">
              <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-5 bg-[#F4F6F8]">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rajeev Patel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-neutral-950 mb-1">Rajeev Patel</h3>
                  <p className="text-[13px] text-neutral-500">Co-founder & CEO</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-colors group-hover:bg-[#0A6B88]">
                  <LinkedinIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Team 2 */}
            <div className="min-w-[85vw] sm:min-w-0 snap-center group cursor-pointer">
              <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-5 bg-[#F4F6F8]">
                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sneha Desai" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-neutral-950 mb-1">Sneha Desai</h3>
                  <p className="text-[13px] text-neutral-500">Head of Strategy</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-colors group-hover:bg-[#0A6B88]">
                  <LinkedinIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Team 3 */}
            <div className="min-w-[85vw] sm:min-w-0 snap-center group cursor-pointer">
              <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-5 bg-[#F4F6F8]">
                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Amit Kumar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-neutral-950 mb-1">Amit Kumar</h3>
                  <p className="text-[13px] text-neutral-500">Lead Engineer</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-colors group-hover:bg-[#0A6B88]">
                  <LinkedinIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Team 4 */}
            <div className="min-w-[85vw] sm:min-w-0 snap-center group cursor-pointer">
              <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-5 bg-[#F4F6F8]">
                <img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Priya Sharma" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-neutral-950 mb-1">Priya Sharma</h3>
                  <p className="text-[13px] text-neutral-500">Project Director</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-colors group-hover:bg-[#0A6B88]">
                  <LinkedinIcon className="w-4 h-4" />
                </button>
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
