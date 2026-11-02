'use client';

import React from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/case-studies-data';
import { FooterV2 } from '@/components/sections/FooterV2';
import { CalendarDays, ArrowDown } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── 1. HERO SECTION (Matching Reference Image 4 & 5 Layout) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image with Cinematic Darkness */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop"
            alt="Wind turbines against vast horizon"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container: Left Info + Right Scroll to Explore Button */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Back to Home Link (Pure text with arrow, no background, no border) */}
              <div className="mb-4 sm:mb-5">
                <Link
                  href="/"
                  className="inline-flex items-center text-[12px] sm:text-[13px] font-medium tracking-[0.14em] text-white/80 hover:text-white uppercase transition-colors select-none"
                >
                  <span>Back to Home</span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-medium text-white tracking-tight leading-[1.08] drop-shadow-sm mb-4 sm:mb-5 select-text">
                Real projects.<br />Lasting impact.
              </h1>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-[16px] md:text-[17.5px] text-white/80 leading-[1.6] max-w-2xl drop-shadow-sm font-normal">
                Renewable energy solutions designed for real-world conditions across India.
              </p>
            </div>

            {/* Right Scroll Down Element */}
            <div 
              onClick={() => {
                const el = document.getElementById('case-studies-feed');
                el ? el.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="shrink-0 flex flex-col items-center gap-2.5 cursor-pointer select-none self-start lg:self-end group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:scale-105">
                <ArrowDown strokeWidth={1.75} className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-white" />
              </div>
              <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/70 group-hover:text-white transition-colors">
                SCROLL TO EXPLORE
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CASE STUDY FEED (Mobile Optimized & Clean Borderless Cards) ── */}
      <section
        id="case-studies-feed"
        className="w-full max-w-full overflow-hidden bg-white font-sans relative select-text py-10 sm:py-16 lg:py-24"
      >
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col space-y-10 sm:space-y-16 lg:space-y-20 w-full max-w-full min-w-0">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.slug}
                className="group bg-white flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 sm:gap-7 lg:gap-8 xl:gap-10 w-full max-w-full min-w-0 overflow-hidden py-2 sm:py-4"
              >
                {/* Left Column: Thumbnail */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="w-full lg:w-[380px] xl:w-[430px] aspect-[16/11] rounded-[16px] sm:rounded-[22px] overflow-hidden shrink-0 relative bg-neutral-100 block cursor-pointer group/img shadow-xs"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Middle Column: Location & Tech (Text-only with separator), Title, Description & Action */}
                <div className="flex-1 w-full min-w-0 max-w-full flex flex-col justify-between items-start py-0.5 sm:py-1 lg:py-2 h-full overflow-hidden">
                  <div className="w-full min-w-0 max-w-full">
                    
                    {/* Meta Info: Pure text in brand light blue */}
                    <div className="w-full max-w-full flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-2 sm:mb-2.5 text-[11px] sm:text-[12px] font-medium text-[#0A6B88] tracking-[0.05em] uppercase">
                      <span>{study.projectLocation}</span>
                      <span className="text-neutral-300 select-none font-light">|</span>
                      <span>{study.technology}</span>
                    </div>

                    {/* Title */}
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="block group-hover:text-[#0A6B88] transition-colors"
                    >
                      <h2 className="text-[18px] xs:text-[20px] sm:text-[23px] lg:text-[25px] font-medium text-[#0B2735] leading-[1.25] tracking-tight mb-2 sm:mb-2.5">
                        {study.title}
                      </h2>
                    </Link>

                    {/* Subtitle / Description */}
                    <p className="text-[12.5px] sm:text-[13.5px] text-neutral-600 font-normal leading-[1.55] sm:leading-[1.6] line-clamp-2 mb-4 sm:mb-5 max-w-xl">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Action Row: Outline Pill on Left, Date on Right */}
                  <div className="flex flex-row items-center justify-between w-full pt-0.5">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center justify-center h-[38px] sm:h-[42px] px-5 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11px] sm:text-[11.5px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                    >
                      <span>READ FULL STORY</span>
                    </Link>

                    {/* Mobile Date Indicator */}
                    <div className="lg:hidden flex items-center gap-1.5 text-neutral-500 text-[11.5px] font-medium pr-1">
                      <CalendarDays strokeWidth={1.5} className="w-3.5 h-3.5 text-[#0A6B88] shrink-0" />
                      <span>{study.date || "October 09, 2026"}</span>
                    </div>
                  </div>
                </div>

                {/* Big Visible Vertical Divider Line for Desktop */}
                <div className="hidden lg:block w-[1.5px] h-28 xl:h-32 bg-neutral-300 shrink-0 self-center mx-1 xl:mx-2" />

                {/* Right Column: Calendar Icon and Date (Desktop Only) */}
                <div className="hidden lg:flex w-[150px] xl:w-[170px] shrink-0 flex-col justify-center items-center gap-2.5">
                  <CalendarDays strokeWidth={1.4} className="w-11 h-11 sm:w-12 sm:h-12 text-[#0A6B88]" />
                  <div className="text-[13px] sm:text-[13.5px] font-semibold text-neutral-800 text-center leading-snug">
                    {study.date || "October 09, 2026"}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
