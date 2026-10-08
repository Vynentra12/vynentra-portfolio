"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { FooterV2 } from "@/components/sections/FooterV2";

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Solar", "Wind", "Hybrid"];

  return (
    <div className="w-full bg-[#F4F6F8] text-neutral-900 font-sans min-h-screen">
      {/* ── HERO SECTION ── */}
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
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-14 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="w-full">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                CASE STUDIES
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 select-text">
              Global projects, local impact.
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl mb-10 sm:mb-12 font-medium">
              Discover how Vynentra brings complex renewable energy projects to life, from initial planning to final commissioning, delivering turnkey solutions across India.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">HOME</Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">CASE STUDIES</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ── SEARCH & FILTER SECTION ── */}
      <section className="w-full py-8 sm:py-12 bg-white border-b border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category 
                    ? "bg-[#0A6B88] text-white" 
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72 md:w-96 shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-neutral-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search case studies..." 
              className="w-full h-11 pl-11 pr-4 bg-neutral-100 border-none rounded-full text-[14px] text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:ring-[#0A6B88]/20 focus:outline-none transition-all"
            />
          </div>

        </div>
      </section>

      {/* ── GRID SECTION ── */}
      <section className="w-full pb-16 sm:pb-24 pt-6 sm:pt-10 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Case Study Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-[24px] overflow-hidden transition-all duration-300"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img 
                  src="/solar_panels.jpg" 
                  alt="Designed for Commercial Solar Plants" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-[#0A6B88]">
                  Commercial / Rooftop
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-[20px] sm:text-[22px] font-medium text-neutral-900 leading-tight mb-3 transition-colors group-hover:text-[#0A6B88]">
                  Designed for Commercial Solar Plants
                </h3>
                <p className="text-[14px] text-neutral-600 leading-[1.6] mb-6">
                  Turnkey delivery of a utility-scale solar facility, completed 2 months ahead of schedule despite complex terrain challenges.
                </p>
                <Link href="#" className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-[#0A6B88] transition-colors">
                  View Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
