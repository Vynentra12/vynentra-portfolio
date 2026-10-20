import React from "react";
import Link from "next/link";
import { MapPin, Zap } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { FooterV2 } from "@/components/sections/FooterV2";

export default function CaseStudiesPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── 1. HERO SECTION (Full 100vh Viewport Height matching insights and contact) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black select-text">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/case-studies/case-study-1-surat.webp"
            alt="Case Studies background"
            className="w-full h-full object-cover object-[center_35%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 select-text">
              Global projects, local impact.
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl mb-10 sm:mb-12 font-normal">
              Discover how Vynentra brings complex renewable energy projects to life, from initial planning to final commissioning, delivering turnkey solutions across India.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <div className="max-w-[1380px] mx-auto">
              <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">HOME</Link>
                <span className="text-white/40 font-normal select-none">/</span>
                <span className="text-[#AEF977] select-none">CASE STUDIES</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CASE STUDY FEED (Natural Stacked Feed, Minimized Top Spacing, Matching Reference UI) ── */}
      <section
        id="case-studies-feed"
        className="w-full max-w-full overflow-hidden bg-[#FAFAFA] font-sans relative select-text py-12 sm:py-16 lg:py-20"
      >
        <div className="w-full max-w-[1180px] lg:max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-7 sm:gap-8 lg:gap-10 w-full max-w-full min-w-0">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.slug}
                className="group bg-white rounded-[22px] sm:rounded-[26px] md:rounded-[28px] border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 lg:p-7 xl:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 xl:gap-10 w-full max-w-full min-w-0 overflow-hidden"
              >
                {/* Left Column: Clickable Image Thumbnail (No badge overlay) */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="w-full lg:w-[320px] xl:w-[350px] aspect-[16/10] sm:aspect-auto sm:h-[250px] lg:h-[270px] xl:h-[285px] rounded-[18px] sm:rounded-[20px] overflow-hidden shrink-0 relative bg-neutral-100 block cursor-pointer group/img"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>

                {/* Middle Column: Location & Tech Chips (Horizontal Single Line), Title (font-medium), Subtitle & Button */}
                <div className="flex-1 w-full min-w-0 max-w-full flex flex-col justify-between items-start py-1 lg:py-2 h-full overflow-hidden">
                  <div className="w-full min-w-0 max-w-full">
                    {/* Location & Technology Meta Chips: Aligned Horizontally */}
                    <div className="w-full max-w-full flex flex-row flex-nowrap items-center gap-2 mb-2 sm:mb-2.5 overflow-x-auto no-scrollbar">
                      <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#F4F6F8] text-[10.5px] sm:text-[11px] font-medium text-neutral-700 border border-neutral-200/60 whitespace-nowrap shrink-0">
                        <MapPin className="w-3 h-3 text-[#0A6B88] shrink-0" />
                        <span>{study.projectLocation}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#F4F6F8] text-[10.5px] sm:text-[11px] font-medium text-neutral-700 border border-neutral-200/60 whitespace-nowrap shrink-0">
                        <Zap className="w-3 h-3 text-[#0A6B88] shrink-0" />
                        <span>{study.technology}</span>
                      </span>
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="block group-hover:text-[#0A6B88] transition-colors"
                    >
                      <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] font-medium text-[#0B2735] leading-[1.25] tracking-tight mb-2.5 sm:mb-3">
                        {study.displayTitleLines ? (
                          study.displayTitleLines.map((line, lIdx) => (
                            <span key={lIdx} className="block">
                              {line}
                            </span>
                          ))
                        ) : (
                          study.title
                        )}
                      </h2>
                    </Link>
                    <p className="text-[13px] sm:text-[14px] text-neutral-500 font-normal leading-[1.6] line-clamp-3 mb-6 max-w-xl">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Button: Outline Pill matching 'WHAT WE DO' Section, slightly enlarged, no arrow */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-7 sm:px-8 rounded-full border border-[#0B2735] text-[#0B2735] text-[12px] sm:text-[12.5px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                  >
                    <span>READ FULL STORY</span>
                  </Link>
                </div>

                {/* Right Column: Key Impact Metrics (font-normal numbers, vertical divider) */}
                <div className="w-full lg:w-[200px] xl:w-[220px] shrink-0 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-neutral-100 lg:border-neutral-200/80 flex flex-row lg:flex-col justify-between lg:justify-center items-start lg:items-center gap-4 sm:gap-8 lg:pl-8 xl:pl-10 min-w-0 max-w-full">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-start lg:items-center text-left lg:text-center min-w-[95px]">
                      <div className="text-[34px] xs:text-[38px] sm:text-[42px] lg:text-[46px] xl:text-[48px] font-normal text-[#0B2735] tracking-tight leading-none whitespace-nowrap">
                        {stat.value}
                      </div>
                      <div className="text-[11.5px] sm:text-[12px] text-neutral-500 font-medium leading-[1.3] text-left lg:text-center mt-2 max-w-[130px]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
