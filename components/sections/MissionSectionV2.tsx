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
    let lastTouchTime = 0;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const clearHideTimer = () => {
      if (hideTimer !== null) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    };

    const getCircleRadius = () => (window.innerWidth < 640 ? 95 : 115);

    const updateClipPath = () => {
      if (mask) {
        const clipValue = `circle(${maskState.r}px at ${maskState.x}px ${maskState.y}px)`;
        mask.style.clipPath = clipValue;
        (mask.style as CSSStyleDeclaration & { webkitClipPath?: string }).webkitClipPath = clipValue;
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

    // Handle mouse movement strictly over the text content area (desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (Date.now() - lastTouchTime < 800) return;
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      xTo(targetX);
      yTo(targetY);
      rTo(getCircleRadius());
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (Date.now() - lastTouchTime < 800) return;
      const sectionRect = section.getBoundingClientRect();
      const targetX = e.clientX - sectionRect.left;
      const targetY = e.clientY - sectionRect.top;

      xTo(targetX, targetX);
      yTo(targetY, targetY);
      rTo(getCircleRadius());
    };

    const handleMouseLeave = () => {
      if (Date.now() - lastTouchTime < 800) return;
      // Smoothly dissolve circle strictly when leaving the text
      rTo(0);
    };

    // Handle finger touch & drag over the text content area (mobile/touchscreens)
    const handleTouchStart = (e: TouchEvent) => {
      lastTouchTime = Date.now();
      clearHideTimer();

      const touch = e.touches[0];
      if (!touch) return;

      const sectionRect = section.getBoundingClientRect();
      const targetX = touch.clientX - sectionRect.left;
      const targetY = touch.clientY - sectionRect.top;

      if (maskState.r < 2) {
        xTo(targetX, targetX);
        yTo(targetY, targetY);
      } else {
        xTo(targetX);
        yTo(targetY);
      }
      rTo(getCircleRadius());
    };

    const handleTouchMove = (e: TouchEvent) => {
      lastTouchTime = Date.now();
      clearHideTimer();

      const touch = e.touches[0];
      if (!touch) return;

      const targetRect = textTarget.getBoundingClientRect();
      const isWithinBounds =
        touch.clientX >= targetRect.left - 24 &&
        touch.clientX <= targetRect.right + 24 &&
        touch.clientY >= targetRect.top - 24 &&
        touch.clientY <= targetRect.bottom + 24;

      if (!isWithinBounds) {
        rTo(0);
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const targetX = touch.clientX - sectionRect.left;
      const targetY = touch.clientY - sectionRect.top;

      xTo(targetX);
      yTo(targetY);
      rTo(getCircleRadius());
    };

    const handleTouchEnd = () => {
      lastTouchTime = Date.now();
      clearHideTimer();
      hideTimer = setTimeout(() => {
        rTo(0);
        hideTimer = null;
      }, 750);
    };

    const handleTouchCancel = () => {
      lastTouchTime = Date.now();
      clearHideTimer();
      rTo(0);
    };

    const handleDocumentTouchStart = (e: TouchEvent) => {
      if (textTarget.contains(e.target as Node)) return;
      clearHideTimer();
      if (maskState.r > 0) {
        rTo(0);
      }
    };

    textTarget.addEventListener('mousemove', handleMouseMove);
    textTarget.addEventListener('mouseenter', handleMouseEnter);
    textTarget.addEventListener('mouseleave', handleMouseLeave);
    textTarget.addEventListener('touchstart', handleTouchStart, { passive: true });
    textTarget.addEventListener('touchmove', handleTouchMove, { passive: true });
    textTarget.addEventListener('touchend', handleTouchEnd, { passive: true });
    textTarget.addEventListener('touchcancel', handleTouchCancel, { passive: true });
    document.addEventListener('touchstart', handleDocumentTouchStart, { passive: true });

    return () => {
      clearHideTimer();
      textTarget.removeEventListener('mousemove', handleMouseMove);
      textTarget.removeEventListener('mouseenter', handleMouseEnter);
      textTarget.removeEventListener('mouseleave', handleMouseLeave);
      textTarget.removeEventListener('touchstart', handleTouchStart);
      textTarget.removeEventListener('touchmove', handleTouchMove);
      textTarget.removeEventListener('touchend', handleTouchEnd);
      textTarget.removeEventListener('touchcancel', handleTouchCancel);
      document.removeEventListener('touchstart', handleDocumentTouchStart);
    };
  }, { scope: sectionRef });

  // Reusable statement typography with high-impact editorial presence
  const renderTypography = (textColor: string, kickerColor: string, kickerTheme: 'dark' | 'light' = 'dark') => (
    <div className="flex flex-col items-center justify-center text-center select-text max-w-[1040px] mx-auto">
      {/* Kicker Badge: Light blue #0A6B88 on white, white on mask */}
      <SectionBadge theme={kickerTheme} className={`mb-7 sm:mb-9 ${kickerColor}`}>
        OUR MISSION
      </SectionBadge>

      {/* Main Mission Headline */}
      <h2 className={`text-[30px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-medium tracking-[-0.03em] leading-[1.18] sm:leading-[1.16] max-w-[920px] mx-auto ${textColor}`}>
        What we believe
      </h2>

      {/* Supporting Mission Statement - Balanced typography without dangling orphans */}
      <p className={`mt-6 sm:mt-8 md:mt-9 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-normal leading-[1.65] sm:leading-[1.7] max-w-[760px] mx-auto opacity-75 ${textColor}`}>
        We intend to bring together wind, solar and hybrid energy solutions to help businesses, residencies and infrastructure move towards cleaner, more efficient and commercially viable power.
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
      {/* LAYER 1 (Base): Crisp white background with light blue badge #0A6B88 */}
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-center">
        <div ref={textTargetRef} className="cursor-default w-full py-6 -my-6 sm:py-0 sm:my-0">
          {renderTypography("text-neutral-900", "text-[#0A6B88]", "dark")}
        </div>
      </div>

      {/* LAYER 2 (GSAP Inverted Mask Layer): Brand Green #AEF977 with pure white text, clipped strictly to cursor */}
      <div
        ref={maskRef}
        style={{
          clipPath: "circle(0px at 50% 50%)",
          WebkitClipPath: "circle(0px at 50% 50%)",
        }}
        className="absolute inset-0 bg-[#AEF977] flex items-center justify-center pointer-events-none select-none will-change-[clip-path]"
        aria-hidden="true"
      >
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-center">
          <div className="w-full">
            {renderTypography("text-white", "text-white", "light")}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
