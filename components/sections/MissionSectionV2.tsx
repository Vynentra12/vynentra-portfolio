'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function MissionSectionV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      rTo(69);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      maskState.x = targetX;
      maskState.y = targetY;
      xTo(targetX);
      yTo(targetY);
      rTo(69);
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

  // Reusable statement typography with original Vynentra mission content
  const renderTypography = (textColor: string, kickerColor: string) => (
    <div className="flex flex-col items-center justify-center text-center select-text">
      {/* Kicker */}
      <span className={`text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-4 sm:mb-5 ${kickerColor}`}>
        OUR MISSION
      </span>

      {/* Main Mission Statement */}
      <h2 className={`text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-[-0.02em] leading-[1.3] max-w-[840px] mx-auto ${textColor}`}>
        Unlock the power of wind energy and build a sustainable future. By bringing wind to rooftops, institutions, businesses and captive power projects, Vynentra is expanding where wind can work and what it can power.
      </h2>
    </div>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-[110px] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* LAYER 1 (Base): Crisp white background with dark text and cursor listener bounded strictly to the text */}
      <div className="w-full max-w-[960px] mx-auto px-6 sm:px-8 flex items-center justify-center">
        <div ref={textTargetRef} className="cursor-default inline-block">
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
        <div className="w-full max-w-[960px] mx-auto px-6 sm:px-8 flex items-center justify-center">
          <div className="inline-block">
            {renderTypography("text-white", "text-white")}
          </div>
        </div>
      </div>
    </section>
  );
}
