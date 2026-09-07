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
      duration: 0.28,
      ease: 'power2.out',
      onUpdate: updateClipPath,
    });

    const yTo = gsap.quickTo(maskState, 'y', {
      duration: 0.28,
      ease: 'power2.out',
      onUpdate: updateClipPath,
    });

    const rTo = gsap.quickTo(maskState, 'r', {
      duration: 0.38,
      ease: 'power3.out',
      onUpdate: updateClipPath,
    });

    // Handle mouse movement strictly over the text content area
    const handleMouseMove = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      xTo(targetX);
      yTo(targetY);
      rTo(135);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      maskState.x = targetX;
      maskState.y = targetY;
      xTo(targetX);
      yTo(targetY);
      rTo(135);
    };

    const handleMouseLeave = () => {
      // Smoothly dissolve circle when leaving the text into the white space
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

  // Reusable statement typography matching the exact proportions & 4-line flow of the reference image
  const renderTypography = (textColor: string, kickerColor: string) => (
    <div className="w-full max-w-[960px] mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center select-text">
      {/* Kicker */}
      <span className={`text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.08em] mb-4 sm:mb-6 ${kickerColor}`}>
        OUR MISSION
      </span>

      {/* Main Mission Statement (4-line proportional typography) */}
      <h2 className={`text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[48px] font-semibold tracking-[-0.025em] leading-[1.22] sm:leading-[1.26] max-w-[920px] ${textColor}`}>
        With a focus on innovation and efficiency, we design, build, and operate modern wind farms that bring long-term value to communities, businesses, and the planet.
      </h2>
    </div>
  );

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-white overflow-hidden"
    >
      {/* LAYER 1 (Base): Crisp white background with dark black text and mouse listener restricted to text target */}
      <div className="w-full flex items-center justify-center">
        <div ref={textTargetRef} className="cursor-default">
          {renderTypography("text-neutral-900", "text-neutral-900")}
        </div>
      </div>

      {/* LAYER 2 (GSAP Inverted Mask Layer): Brand Green #AEF977 with pure white text, clipped to cursor */}
      <div 
        ref={maskRef}
        style={{ clipPath: "circle(0px at 50% 50%)" }}
        className="absolute inset-0 bg-[#AEF977] flex items-center justify-center pointer-events-none select-none will-change-[clip-path]"
        aria-hidden="true"
      >
        {renderTypography("text-white", "text-white")}
      </div>
    </section>
  );
}
