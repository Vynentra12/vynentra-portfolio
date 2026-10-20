import React from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function NotFound() {
  return (
    <div className="w-full bg-[#07131B] text-white font-sans min-h-screen selection:bg-[#AEF977] selection:text-black flex flex-col justify-between">
      
      {/* ── 404 HERO CONTENT CONTAINER ── */}
      <section className="relative w-full flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-16 pt-36 sm:pt-40 pb-20 overflow-hidden">
        
        {/* Subtle Ambient Energy Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] bg-[#0A6B88]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[220px] bg-[#AEF977]/10 blur-[110px] rounded-full pointer-events-none" />

        {/* Content Box */}
        <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
          
          {/* Simple Badge Text (No dot, no border, matching site standard) */}
          <SectionBadge theme="light" className="mb-4 text-[#AEF977]">
            404 ERROR • PAGE NOT FOUND
          </SectionBadge>

          {/* Giant Aesthetic 404 Headline */}
          <h1 className="text-[80px] sm:text-[104px] md:text-[130px] font-bold tracking-tighter leading-none bg-gradient-to-b from-white via-white/85 to-white/30 bg-clip-text text-transparent mb-2 select-none">
            404
          </h1>

          {/* Title */}
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-medium text-white tracking-tight leading-[1.2] mb-3 sm:mb-4">
            Lost in the energy grid?
          </h2>

          {/* Subtext */}
          <p className="text-[14.5px] sm:text-[16px] md:text-[17px] text-white/70 font-normal leading-[1.6] max-w-xl mb-10 sm:mb-12">
            The page or resource you are looking for has been decommissioned, relocated, or does not exist in our system. Let’s get your connection back online.
          </p>

          {/* Action Buttons (Clean text, no arrows) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-7 sm:px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[13px] font-semibold tracking-tight transition-all duration-300 hover:bg-white hover:shadow-lg active:scale-[0.98]"
            >
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-7 sm:px-8 rounded-full border border-white/25 text-white text-[13px] font-medium tracking-tight transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-[0.98]"
            >
              <span>Explore Services</span>
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-7 sm:px-8 rounded-full border border-white/25 text-white text-[13px] font-medium tracking-tight transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-[0.98]"
            >
              <span>Case Studies</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
