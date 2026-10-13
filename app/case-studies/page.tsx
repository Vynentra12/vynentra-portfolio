"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FooterV2 } from "@/components/sections/FooterV2";

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Solar", "Wind", "Hybrid"];

  // The single featured case study as specified
  const isVisible = activeCategory === "All" || activeCategory === "Solar";

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── 1. HERO SECTION (100vh Panoramic Full Viewport Height) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
            alt="Case Studies background"
            className="w-full h-full object-cover object-[center_35%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                CASE STUDIES
              </span>
            </div>
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

      {/* ── 2. CATEGORY FILTER BAR (Compact vertical spacing to card) ── */}
      <section className="w-full pt-8 sm:pt-10 pb-3 sm:pb-4 bg-white sticky top-0 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex items-center justify-between">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? "bg-[#0A6B88] text-white shadow-xs" 
                      : "bg-[#F4F6F8] text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900 border border-neutral-200/50"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. CASE STUDY SHOWCASE (Spacious High Box Matching Reference, Pure White BG, Font-Medium, What We Do Button) ── */}
      <section className="w-full pt-3 sm:pt-4 pb-20 sm:pb-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <AnimatePresence mode="wait">
            {isVisible ? (
              <motion.div
                key="solar-case-study"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group bg-white rounded-[28px] sm:rounded-[32px] border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 p-8 sm:p-10 lg:p-12 xl:p-14 min-h-[420px] lg:min-h-[460px] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12"
              >
                
                {/* Left Column: Big Image Thumbnail with Overlay Badge */}
                <div className="w-full lg:w-[360px] xl:w-[420px] h-[280px] sm:h-[320px] lg:h-[340px] xl:h-[360px] rounded-[20px] sm:rounded-[24px] overflow-hidden shrink-0 relative bg-neutral-100">
                  <img
                    src="/solar_panels.jpg"
                    alt="Designed for Commercial Solar Plants"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase text-[#0A6B88] shadow-xs">
                    Commercial / Rooftop
                  </div>
                </div>

                {/* Middle Column: Title (font-medium), Description (font-normal), and Button matching "What We Do" */}
                <div className="flex-1 min-w-0 flex flex-col justify-between items-start py-2 lg:py-4">
                  <div>
                    <Link 
                      href="/case-studies/commercial-solar-plants" 
                      className="block group-hover:text-[#0A6B88] transition-colors"
                    >
                      <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#111827] leading-[1.25] tracking-tight mb-4">
                        Designed for Commercial Solar Plants
                      </h2>
                    </Link>
                    <p className="text-[14.5px] sm:text-[15.5px] text-neutral-500 font-normal leading-[1.65] mb-8 max-w-xl">
                      Turnkey delivery of a utility-scale solar facility, completed 2 months ahead of schedule despite complex terrain challenges.
                    </p>
                  </div>

                  {/* Button: Matching "What We Do" section (EXPLORE OUR SERVICES) style, no arrow */}
                  <Link
                    href="/case-studies/commercial-solar-plants"
                    className="inline-flex items-center justify-center h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11.5px] sm:text-[12px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                  >
                    <span>VIEW PROJECT</span>
                  </Link>
                </div>

                {/* Right Column: Key Impact Metrics (Generous vertical spacing, font-medium numbers, font-normal labels) */}
                <div className="w-full lg:w-[260px] xl:w-[290px] shrink-0 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-neutral-100 flex flex-row lg:flex-col justify-between lg:justify-center items-start lg:items-end gap-10 sm:gap-12 lg:gap-14 lg:pl-10 xl:pl-12">
                  
                  {/* Metric 1 */}
                  <div className="flex flex-col items-start lg:items-end">
                    <div className="text-[48px] sm:text-[54px] lg:text-[60px] font-medium text-[#111827] tracking-tight leading-none">
                      248%
                    </div>
                    <div className="text-[13px] sm:text-[13.5px] text-neutral-500 font-normal leading-tight text-left lg:text-right mt-2 max-w-[150px]">
                      Revenue Boost in Last 30 Days
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col items-start lg:items-end">
                    <div className="text-[48px] sm:text-[54px] lg:text-[60px] font-medium text-[#111827] tracking-tight leading-none">
                      15X
                    </div>
                    <div className="text-[13px] sm:text-[13.5px] text-neutral-500 font-normal leading-tight text-left lg:text-right mt-2 max-w-[150px]">
                      Team Efficiency
                    </div>
                  </div>

                </div>

              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-[28px] border border-neutral-200/90 p-14 text-center"
              >
                <p className="text-neutral-500 font-normal text-[15px] mb-4">
                  No active case studies found under <span className="font-medium text-neutral-800">{activeCategory}</span>.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="px-6 py-2.5 rounded-full bg-[#0A6B88] text-white text-[13px] font-medium hover:bg-[#005869] transition-colors"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
