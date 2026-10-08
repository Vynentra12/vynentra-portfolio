'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CaseStudySectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  // Single set of pattern phrases
  const singleSet = [
    "Site-Specific",
    "—",
    "Technology-Neutral",
    "—",
    "Future-Ready",
    "—",
    "Site-Specific",
    "—",
    "Technology-Neutral",
    "—",
    "Future-Ready",
    "—",
  ];

  // Full track contains 2 identical sets for seamless continuous -50% loop
  const repeatedMarquee = [...singleSet, ...singleSet];

  useGSAP(
    () => {
      const t1 = track1Ref.current;
      const t2 = track2Ref.current;
      const sec = sectionRef.current;
      const cap = capsuleRef.current;
      const inner = innerContainerRef.current;
      if (!t1 || !t2 || !sec || !cap || !inner) return;

      // Mathematically synchronize the inner capsule track coordinate origin to the section
      const syncAlignment = () => {
        const secRect = sec.getBoundingClientRect();
        const capRect = cap.getBoundingClientRect();
        const offsetLeft = capRect.left - secRect.left;
        inner.style.left = `-${offsetLeft}px`;
        inner.style.width = `${secRect.width}px`;
      };

      syncAlignment();
      window.addEventListener("resize", syncAlignment);

      // Single unified GSAP tween driving BOTH text tracks simultaneously on every frame
      const anim = gsap.to([t1, t2], {
        xPercent: -50,
        ease: "none",
        duration: 38,
        repeat: -1,
      });

      return () => {
        window.removeEventListener("resize", syncAlignment);
        anim.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section 
      id="case-studies" 
      ref={sectionRef}
      className="relative w-full bg-white text-neutral-900 py-28 sm:py-32 md:py-40 overflow-hidden select-text font-sans flex items-center justify-center"
    >
      
      {/* 1. LAYER 1 (Base Background): Continuous Deep Teal Marquee */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div 
          ref={track1Ref} 
          className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform shrink-0"
        >
          {repeatedMarquee.map((word, idx) => (
            <span
              key={`base-${idx}`}
              className={`text-[46px] sm:text-[66px] md:text-[84px] lg:text-[98px] font-medium tracking-tight leading-none select-none ${
                word === "—" ? "text-[#005869]/35" : "text-[#005869]"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* 2. LAYER 2: Centered Capsule Visual Element with 100% Synced White Text Masking */}
      <div 
        ref={capsuleRef}
        className="relative z-10 w-[290px] sm:w-[380px] md:w-[480px] lg:w-[540px] aspect-[2.25/1] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-[3.5px] border-white pointer-events-none select-none"
      >
        {/* Base Turbine Landscape Visual */}
        <img
          src="https://images.pexels.com/photos/12828526/pexels-photo-12828526.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Renewable Wind Turbine"
          className="w-full h-full object-cover brightness-[1.02] contrast-[0.98]"
        />

        {/* Gentle Soft Light Atmosphere */}
        <div className="absolute inset-0 bg-sky-100/10 pointer-events-none" />

        {/* 100% Mathematically Aligned Masked Foreground Marquee inside Capsule */}
        <div
          ref={innerContainerRef}
          className="absolute inset-y-0 flex items-center pointer-events-none select-none overflow-hidden"
          style={{ willChange: "transform, left" }}
        >
          <div 
            ref={track2Ref} 
            className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform shrink-0"
          >
            {repeatedMarquee.map((word, idx) => (
              <span
                key={`mask-${idx}`}
                className={`text-[46px] sm:text-[66px] md:text-[84px] lg:text-[98px] font-medium tracking-tight leading-none select-none ${
                  word === "—" ? "text-white/45" : "text-white"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
