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
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
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
                transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform"
              >
                {repeatedMarquee.map((word, idx) => (
                  <span
                    key={`mask-${idx}`}
                    className={`text-[46px] sm:text-[66px] md:text-[84px] lg:text-[98px] font-bold tracking-tight leading-none ${
                      word === "—" ? "text-[#C85A32]/45" : "text-[#C85A32]"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Minimal, Sleek Floating Hover Overlay */}
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-center p-3 text-center pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#AEF977] uppercase tracking-widest mb-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              FEATURED CASE STUDY
            </span>
            <p className="text-[14px] sm:text-[16px] font-bold text-white tracking-tight leading-snug mb-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 delay-50">
              120 MW Utility Wind Farm • Rajasthan
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold text-white bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              <span>View Case Details</span>
              <ArrowRight className="w-3 h-3 text-[#AEF977]" />
            </div>
          </div>

        </Link>
      </div>

    </section>
  );
}
