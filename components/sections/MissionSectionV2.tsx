'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/ui/SectionBadge';

export function MissionSectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const textTargetRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !textTargetRef.current || !maskRef.current) return;

    const section = sectionRef.current;
    const textTarget = textTargetRef.current;
    const mask = maskRef.current;

    // Track mask position and radius with buttery-smooth GSAP quickTo
    const maskState = { x: 0, y: 0, r: 0 };

    const updateClipPath = () => {
      if (mask) {
        mask.style.clipPath = `circle(${maskState.r}px at ${maskState.x}px ${maskState.y}px)`;
      }
    };

    // Linear-smooth 60fps tracking using GSAP
    const xTo = gsap.quickTo(maskState, 'x', {
      duration: 0.22,
      ease: 'power2.out',
      onUpdate: updateClipPath,
    });

    const yTo = gsap.quickTo(maskState, 'y', {
      duration: 0.22,
      ease: 'power2.out',
      onUpdate: updateClipPath,
    });

    const rTo = gsap.quickTo(maskState, 'r', {
      duration: 0.25,
      ease: 'power2.out',
      onUpdate: updateClipPath,
    });

    // Handle mouse movement strictly over the text content area
    const handleMouseMove = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      xTo(targetX);
      yTo(targetY);
      rTo(115);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      maskState.x = targetX;
      maskState.y = targetY;
      xTo(targetX);
      yTo(targetY);
      rTo(115);
    };

    const handleMouseLeave = () => {
      // Smoothly dissolve circle strictly when leaving the text
      rTo(0);
    };

    textTarget.addEventListener('mousemove', handleMouseMove);
    textTarget.addEventListener('mouseenter', handleMouseEnter);
    textTarget.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      textTarget.removeEventListener('mousemove', handleMouseMove);
      textTarget.removeEventListener('mouseenter', handleMouseEnter);
      textTarget.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: sectionRef });

  // Reusable statement typography with high-impact editorial presence
  const renderTypography = (textColor: string, kickerColor: string) => (
    <div className="flex flex-col items-center justify-center text-center select-text max-w-[1040px] mx-auto">
      {/* Kicker Badge */}
      <SectionBadge className={`mb-7 sm:mb-9 ${kickerColor}`}>
        OUR MISSION
      </SectionBadge>

      {/* Main Mission Headline - Symmetrically balanced line break */}
      <h2 className={`text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-medium tracking-[-0.03em] leading-[1.18] sm:leading-[1.16] max-w-[920px] mx-auto ${textColor}`}>
        Renewable energy, designed around<br className="hidden sm:inline" /> the way India lives and works.
      </h2>

      {/* Supporting Mission Statement - Balanced typography without dangling orphans */}
      <p className={`mt-6 sm:mt-8 md:mt-9 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-normal leading-[1.65] sm:leading-[1.7] max-w-[760px] mx-auto opacity-75 ${textColor}`}>
        We are bringing together wind, solar and hybrid energy solutions to help businesses, institutions and infrastructure move towards cleaner, more efficient and commercially viable power.
      </p>
    </div>
  );

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[600px] lg:min-h-[640px] py-24 sm:py-32 md:py-40 lg:py-48 bg-white flex items-center justify-center overflow-hidden"
    >
      {/* LAYER 1 (Base): Crisp white background with dark text and cursor listener bounded strictly to the text */}
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-center">
        <div ref={textTargetRef} className="cursor-default w-full">
          {renderTypography("text-neutral-900", "text-neutral-900")}
        </div>
      </div>

      {/* LAYER 2 (GSAP Inverted Mask Layer): Brand Green #AEF977 with pure white text, clipped strictly to cursor */}
      <div
        ref={maskRef}
        style={{ clipPath: "circle(0px at 50% 50%)" }}
        className="absolute inset-0 bg-[#AEF977] flex items-center justify-center pointer-events-none select-none will-change-[clip-path]"
        aria-hidden="true"
      >
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-center">
          <div className="w-full">
            {renderTypography("text-white", "text-white")}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
