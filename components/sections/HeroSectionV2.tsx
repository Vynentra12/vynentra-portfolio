'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export function HeroSectionV2() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse cursor tracking for 2.5D interactive parallax effect on the top wind turbine
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery-smooth spring physics for natural, fluid cursor following
  const springConfig = { damping: 28, stiffness: 100, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map normalized mouse (-1 to 1) to gentle pixel offsets mimicking wind movement
  const turbineX = useTransform(smoothX, [-1, 1], [-26, 26]);
  const turbineY = useTransform(smoothY, [-1, 1], [-18, 18]);
  const turbineRotate = useTransform(smoothX, [-1, 1], [-1.2, 1.2]);

  // Scroll stretch effect near the top of the hero section
  const { scrollY } = useScroll();
  const turbineScrollStretch = useTransform(scrollY, [0, 400], [1.02, 1.06]);
  const turbineScrollY = useTransform(scrollY, [0, 500], [0, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen max-h-screen w-full overflow-hidden flex flex-col justify-between bg-black select-text"
    >

      {/* 1. LAYER 1: Static Landscape Background Image (Scaled & Focused close-up like Reference) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/img/background-hero.png"
          alt="Renewable Energy Landscape"
          className="w-full h-full object-cover object-[center_38%] scale-[1.22] pointer-events-none select-none origin-center"
        />
        {/* Subtle cinematic overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* 2. LAYER 2: Foreground Wind Turbine with Interactive Cursor Tracker & Scroll Stretch */}
      <motion.div
        style={{
          x: turbineX,
          y: turbineY,
          rotate: turbineRotate,
          scale: turbineScrollStretch,
          translateY: turbineScrollY,
        }}
        className="absolute inset-[-40px] z-[2] pointer-events-none will-change-transform origin-center"
      >
        <img
          src="/assets/img/top-background-hero%20(2).png"
          alt="Wind Turbine Visual"
          className="w-full h-full object-cover object-[center_38%] scale-[1.22] pointer-events-none select-none origin-center"
        />
      </motion.div>

      {/* 3. LAYER 3: Hero Content Container (Exact Match to 100% Fit Reference UI) */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-8 sm:px-10 lg:px-12 xl:px-14 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-4 sm:pb-5 pointer-events-auto">

        {/* Upper: Massive Full-Span Headline "Powering Tomorrow" (Step 1: Starts First) */}
        <div className="w-full flex items-center justify-start select-none pt-2 sm:pt-4 md:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11.2vw] sm:text-[9.4vw] lg:text-[8.9vw] font-bold text-white tracking-[-0.035em] leading-[0.96] pb-2 select-none pointer-events-none drop-shadow-[0_4px_42px_rgba(0,0,0,0.35)] whitespace-nowrap w-full text-left"
          >
            Powering Tomorrow
          </motion.h1>
        </div>

        {/* Lower Content: Mission Statement, Action Cards, and Bottom Metadata Line */}
        <div className="w-full flex flex-col gap-5 sm:gap-6 mt-auto">

          {/* Lower Row: Supporting Text (Left) & Two Action Cards (Right) (Step 2: Starts After Title) */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">

            {/* Left: Supporting Text (Increased Width for Clean Multi-line Balance) */}
            <motion.div
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[560px] md:max-w-[640px] lg:max-w-[700px]"
            >
              <p className="text-[18px] sm:text-[21px] md:text-[23px] lg:text-[24px] font-medium text-white leading-[1.3] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                From project development to integrated renewable energy solutions, we are building a more sustainable and energy-efficient future across India.
              </p>
            </motion.div>

            {/* Right: Two Action Cards (OUR SERVICES & ABOUT COMPANY) */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 self-start lg:self-end">

              {/* Card 1: White Card -> Turns Green on Hover */}
              <motion.a
                href="#process"
                initial={{ opacity: 0, y: 35, scale: 0.92, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="w-[125px] h-[125px] sm:w-[138px] sm:h-[138px] md:w-[146px] md:h-[146px] bg-white hover:bg-[#AEF977] text-black rounded-[16px] p-5 flex flex-col justify-between shadow-2xl transition-colors duration-300 group cursor-pointer"
              >
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider leading-tight text-black select-none">
                  OUR<br />SERVICES
                </span>
                <div className="self-end w-6 h-6 relative overflow-hidden flex items-center justify-center">
                  <ArrowRight
                    className="w-5 h-5 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-7"
                    strokeWidth={2}
                  />
                  <ArrowRight
                    className="w-5 h-5 text-black absolute -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </div>
              </motion.a>

              {/* Card 2: Green Card -> Turns White on Hover */}
              <motion.a
                href="#about"
                initial={{ opacity: 0, y: 35, scale: 0.92, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
                className="w-[125px] h-[125px] sm:w-[138px] sm:h-[138px] md:w-[146px] md:h-[146px] bg-[#AEF977] hover:bg-white text-black rounded-[16px] p-5 flex flex-col justify-between shadow-2xl transition-colors duration-300 group cursor-pointer"
              >
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider leading-tight text-black select-none">
                  ABOUT<br />COMPANY
                </span>
                <div className="self-end w-6 h-6 relative overflow-hidden flex items-center justify-center">
                  <ArrowRight
                    className="w-5 h-5 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-7"
                    strokeWidth={2}
                  />
                  <ArrowRight
                    className="w-5 h-5 text-black absolute -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </div>
              </motion.a>

            </div>

          </div>

          {/* Bottom Horizontal Metadata Strip (Step 3: Starts Last) */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="w-full border-t border-white/20 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] sm:text-[12px] font-semibold tracking-wider text-white/90 uppercase gap-2 select-none"
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
