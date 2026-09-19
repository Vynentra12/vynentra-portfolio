'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSectionV2() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[80vh] md:min-h-[850px] bg-black select-text overflow-hidden flex flex-col justify-between"
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
          <source src="/hero-video-02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Cinematic gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* 2. LAYER 2: UI Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-14 pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 pointer-events-auto">
        {/* Upper: Massive Full-Span Headline */}
        <div className="w-full flex items-center justify-start select-none pt-2 sm:pt-4 md:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[9.4vw] lg:text-[8.9vw] font-bold text-white tracking-[-0.035em] leading-[1.05] sm:leading-[0.96] pb-2 select-none pointer-events-none drop-shadow-[0_4px_42px_rgba(0,0,0,0.35)] sm:whitespace-nowrap w-full text-left max-w-[90vw] sm:max-w-none"
          >
            Powering<br className="sm:hidden" /> Tomorrow
          </motion.h1>
        </div>

        {/* Lower Content: Mission Statement, Action Cards, and Bottom Metadata Line */}
        <div className="w-full flex flex-col gap-6 sm:gap-8 mt-auto">
          {/* Lower Row: Supporting Text (Left) & Two Action Cards (Right) */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            {/* Left: Supporting Text */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 0, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[100%] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[700px]"
            >
              <p className="text-[16px] sm:text-[21px] md:text-[23px] lg:text-[24px] font-medium text-white/95 leading-[1.4] sm:leading-[1.3] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                From project development to integrated renewable energy solutions, we are building a more sustainable and energy-efficient future across India.
              </p>
            </motion.div>

            {/* Right: Two Action Cards (OUR SERVICES & ABOUT COMPANY) */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 sm:gap-4 shrink-0 self-start lg:self-end origin-bottom"
            >
              {/* Card 1: White Card -> Turns Green on Hover */}
              <a
                href="#process"
                className="w-[110px] h-[110px] sm:w-[138px] sm:h-[138px] md:w-[146px] md:h-[146px] bg-white hover:bg-[#AEF977] text-black rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-colors duration-300 group cursor-pointer"
              >
                <span className="text-[11px] sm:text-[13px] font-bold uppercase tracking-wider leading-tight text-black select-none">
                  OUR<br />SERVICES
                </span>
                <div className="self-end w-5 h-5 sm:w-6 sm:h-6 relative overflow-hidden flex items-center justify-center">
                  <ArrowRight
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-7"
                    strokeWidth={2}
                  />
                  <ArrowRight
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </div>
              </a>

              {/* Card 2: Green Card -> Turns White on Hover */}
              <a
                href="#about"
                className="w-[110px] h-[110px] sm:w-[138px] sm:h-[138px] md:w-[146px] md:h-[146px] bg-[#AEF977] hover:bg-white text-black rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-colors duration-300 group cursor-pointer"
              >
                <span className="text-[11px] sm:text-[13px] font-bold uppercase tracking-wider leading-tight text-black select-none">
                  ABOUT<br />COMPANY
                </span>
                <div className="self-end w-5 h-5 sm:w-6 sm:h-6 relative overflow-hidden flex items-center justify-center">
                  <ArrowRight
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-7"
                    strokeWidth={2}
                  />
                  <ArrowRight
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Bottom Horizontal Metadata Strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full border-t border-white/20 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[12px] font-semibold tracking-wider text-white/80 uppercase gap-3 sm:gap-2 select-none"
          >
            <a href="mailto:hello@vynentra.in" className="hover:text-white transition-colors">
              HELLO@VYNENTRA.IN
            </a>
            <span className="hidden sm:inline">
              GUJARAT &amp; RAJASTHAN CORRIDOR, INDIA
            </span>
            <a href="tel:+917777024826" className="hover:text-white transition-colors">
              +91 77770 24826
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
