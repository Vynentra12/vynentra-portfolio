'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CaseStudySectionV2() {
  const marqueeItems = [
    "Clean & renewable",
    "—",
    "Energy independence",
    "—",
    "Protects ecosystems",
    "—",
    "Sustainable power",
    "—",
    "Zero emissions",
    "—",
  ];

  // Repeat for continuous seamless loop
  const repeatedMarquee = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <section 
      id="case-studies" 
      className="relative w-full bg-white text-neutral-900 py-28 sm:py-32 md:py-40 overflow-hidden select-text font-sans flex items-center justify-center"
    >
      
      {/* 1. LAYER 1 (Base Background): Continuous Deep Teal Marquee */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 110 }}
          className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform"
        >
          {repeatedMarquee.map((word, idx) => (
            <span
              key={`base-${idx}`}
              className={`text-[46px] sm:text-[66px] md:text-[84px] lg:text-[98px] font-bold tracking-tight leading-none ${
                word === "—" ? "text-[#005869]/35" : "text-[#005869]"
              }`}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. LAYER 2: Centered Interactive Capsule Card with Synced Rust/Terracotta Text Masking */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="group relative block w-[290px] sm:w-[380px] md:w-[480px] lg:w-[540px] aspect-[2.25/1] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-[3.5px] border-white cursor-pointer transition-transform duration-500 ease-out hover:scale-105"
          >
            {/* Base Turbine Landscape Visual with Subtle Light Blue Atmosphere */}
          <img
            src="https://images.pexels.com/photos/12828526/pexels-photo-12828526.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Renewable Wind Energy Case Study"
            className="w-full h-full object-cover brightness-[1.02] contrast-[0.98] transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Gentle Soft Light Overlay */}
          <div className="absolute inset-0 bg-sky-100/15 pointer-events-none" />

          {/* Masked Foreground Marquee inside Capsule (Color: Terracotta / Warm Rust #C85A32) */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
            <div className="w-[100vw] absolute left-1/2 -translate-x-1/2 flex items-center">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 110 }}
                className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform"
              >
                {repeatedMarquee.map((word, idx) => (
                  <span
                    key={`mask-${idx}`}
                    className={`text-[46px] sm:text-[66px] md:text-[84px] lg:text-[98px] font-bold tracking-tight leading-none ${
                      word === "—" ? "text-white/45" : "text-white"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Minimal, Sleek Floating Hover Overlay (Left-Aligned Layout) */}
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-start justify-center pl-12 sm:pl-16 md:pl-20 lg:pl-24 pr-8 pointer-events-none">
            
            {/* Inner Wrapper to keep everything tightly grouped and vertically centered */}
            <div className="flex flex-col max-w-[85%]">
              {/* Top Badge: Vertical Line + Text */}
              <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-[2px] h-[10px] sm:h-[12px] bg-[#AEF977]" />
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-[#AEF977] uppercase tracking-[0.14em]">
                  FEATURED CASE STUDY
                </span>
              </div>

              {/* Main Title */}
              <h3 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white tracking-tight leading-[1.1] mb-0.5 sm:mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-[50ms]">
                120 MW Utility Wind Farm
              </h3>

              {/* Subtitle / Location */}
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#85AEC2]/80 tracking-tight leading-snug mb-3 sm:mb-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-[75ms]">
                Rajasthan
              </p>

              {/* Stretching Circle-to-Pill CTA (Circle on the Left, stretches Right) */}
              <div className="group/btn relative inline-flex items-center h-[38px] sm:h-[42px] px-5 sm:px-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-[100ms] pointer-events-auto w-fit cursor-pointer">
                <div className="absolute left-0 top-0 h-full w-[38px] sm:w-[42px] rounded-full border border-white/30 transition-[width,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:w-full group-hover/btn:bg-white/10 group-hover/btn:border-white/80" />
                <span className="relative z-10 text-[11.5px] sm:text-[13px] font-normal text-white pl-1 sm:pl-2 pr-3">
                  View Case Details
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            </div>

          </div>

          </Link>
        </motion.div>
      </div>

    </section>
  );
}
