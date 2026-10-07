'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSectionV2() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[820px] md:min-h-[880px] bg-black select-text overflow-hidden flex flex-col justify-between"
    >
      {/* 1. LAYER 1: The Looping Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-[1.01]"
        >
          <source src="/hero-video-03.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Cinematic gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* 2. LAYER 2: UI Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-14 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 pointer-events-auto">
        {/* Upper: Massive Full-Span Headline (Positioned lower down with comfortable breathing room & fully selectable) */}
        <div className="w-full flex items-center justify-start pt-10 sm:pt-14 md:pt-20 mt-[40px] sm:mt-[60px] md:mt-[75px] select-text">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[9.4vw] lg:text-[8.9vw] font-bold text-white tracking-[-0.035em] leading-[1.05] sm:leading-[0.96] pb-2 drop-shadow-[0_4px_42px_rgba(0,0,0,0.45)] sm:whitespace-nowrap w-full text-left max-w-[90vw] sm:max-w-none select-text pointer-events-auto cursor-text"
          >
            Powering<br className="sm:hidden" /> India
          </motion.h1>
        </div>

        {/* Lower Content: Mission Statement & Liquid Glass Solar Project Card (Aligned Center) */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10 mt-auto">
          {/* Left: Supporting Text */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[100%] sm:max-w-[520px] md:max-w-[580px] lg:max-w-[620px]"
          >
            <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[23px] font-medium text-white/95 leading-[1.4] sm:leading-[1.35] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] select-text">
              From wind and solar solutions to project development and execution, we are building reliable, efficient and commercially viable renewable energy systems for businesses, institutions and infrastructure across India.
            </p>
          </motion.div>

          {/* Right: Authentic Translucent Liquid Glassmorphic Solar Card matching UI reference */}
          <motion.a
            href="#featured-projects"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-5 sm:gap-6 md:gap-7 p-3 sm:p-3.5 md:p-4 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-white/[0.08] backdrop-blur-xl border border-white/30 border-t-white/50 border-l-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.25)] shrink-0 self-start lg:self-auto transition-all duration-300 hover:border-white/60 hover:bg-white/[0.12] cursor-pointer overflow-hidden w-full max-w-[440px] sm:max-w-[480px] md:max-w-[520px] h-[135px] sm:h-[150px] md:h-[160px]"
          >
            {/* Glossy liquid specular glass reflection layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.14] via-transparent to-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

            {/* Solar Project Thumbnail */}
            <div className="w-[125px] sm:w-[150px] md:w-[170px] h-full rounded-[11px] sm:rounded-[13px] md:rounded-[14px] overflow-hidden shrink-0 relative border border-white/25 shadow-md z-10">
              <img
                src="/solar_panels.jpg"
                alt="Commercial solar plants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Text details matching reference layout */}
            <div className="flex flex-col justify-between h-full py-1 sm:py-2 select-text relative z-10">
              <span className="text-[17px] sm:text-[20px] md:text-[22px] font-medium text-white tracking-tight leading-[1.2] group-hover:text-white transition-colors">
                Commercial solar<br />plants
              </span>
              <span className="text-[12.5px] sm:text-[14px] text-white/70 font-normal tracking-wide">
                Photovoltaic project
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}


