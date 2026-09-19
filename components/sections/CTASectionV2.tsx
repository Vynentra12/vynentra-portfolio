"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ctaImages = [
  "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/822419/pexels-photo-822419.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/822419/pexels-photo-822419.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export function CTASectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const gradientOverlayRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // ─── Responsive sizing ───────────────────────────────────────────────
      const isMobile = vw < 640;
      const isTablet = vw >= 640 && vw < 1024;

      // Enlarged image card dimensions
      const imgW = isMobile ? 86 : isTablet ? 124 : 160;
      const imgH = isMobile ? 66 : isTablet ? 94 : 120;

      // Circle radius: keeps images comfortably inside viewport with balanced spacing
      const minDimension = Math.min(vw, vh);
      const maxR = minDimension * 0.38;
      const radius = Math.min(maxR, isMobile ? 165 : isTablet ? 235 : 300);

      // ─── Utility: circle position for index i (out of 12) ───────────────
      const circlePos = (i: number) => {
        const deg = (i / 12) * 360 - 90; // -90 so index 0 is at top (12 o'clock)
        const rad = (deg * Math.PI) / 180;
        return {
          x: Math.cos(rad) * radius,
          y: Math.sin(rad) * radius,
          rotation: deg + 90, // each card faces outward
        };
      };

      // ─── Starting positions (Framed to footer left & right bounds) ────────
      // Matches footer content constraints: max-w-[1380px] with responsive padding
      const maxContentW = 1380;
      const paddingX = isMobile ? 24 : isTablet ? 48 : 64;
      const contentWidth = Math.min(vw - paddingX * 2, maxContentW - paddingX * 2);

      // Top 7 images spread smoothly to fit the left and right margin boundaries
      const topStep = (contentWidth - imgW) / 6;
      const topBaseY = -vh * 0.28; // Upper screen

      // Bottom 5 images starting below viewport
      const botStep = (contentWidth * 0.65 - imgW) / 4;
      const botBaseY = vh * 0.70;

      imagesRef.current.forEach((el, i) => {
        if (!el) return;

        let sx: number, sy: number;

        if (i <= 6) {
          sx = (i - 3) * topStep;
          sy = topBaseY;
        } else {
          sx = (i - 9) * botStep;
          sy = botBaseY;
        }

        gsap.set(el, {
          x: sx,
          y: sy,
          rotation: 0,
          xPercent: -50,
          yPercent: -50,
          width: imgW,
          height: imgH,
          willChange: "transform",
        });
      });

      // CTA content starts hidden below
      gsap.set(ctaRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.92,
      });

      gsap.set(orbitRef.current, { rotation: 0 });

      // ─── Master timeline ─────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%", // Crisp scroll distance
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      // ── Background transition: Light White (#FFFFFF) → Deep Brand Navy (#0B2735) ──
      // Starts clean white matching the FAQ section above, smoothly transitioning into dark blue gradient
      tl.fromTo(
        sectionRef.current,
        { backgroundColor: "#FFFFFF" },
        { backgroundColor: "#0B2735", ease: "power1.inOut", duration: 3.5 },
        0
      );

      if (gradientOverlayRef.current) {
        tl.fromTo(
          gradientOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "power1.inOut", duration: 3.5 },
          0
        );
      }

      // ── PHASE 1: Images smoothly travel to their circle coordinates ───────
      imagesRef.current.forEach((el, i) => {
        if (!el) return;
        const { x, y, rotation } = circlePos(i);
        const startAt = i <= 6 ? 0 : 0.2;

        tl.to(
          el,
          {
            x,
            y,
            rotation,
            ease: "power2.inOut",
            duration: 2.8,
          },
          startAt
        );
      });

      // ── PHASE 2: Orbit ring rotates 120 degrees ──────────────────────────
      tl.to(
        orbitRef.current,
        {
          rotation: 120,
          ease: "power1.inOut",
          duration: 2.2,
        },
        2.8
      );

      // ── PHASE 3: CTA rises into the center ────────────────────────────────
      tl.to(
        ctaRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 2.0,
        },
        2.9
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center select-none"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* ── Rich Dark Blue Radial Gradient Overlay (fades in smoothly as you scroll) ── */}
      <div
        ref={gradientOverlayRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #0E3547 0%, #0B2735 60%, #071F2C 100%)",
        }}
      />

      {/* ── Orbit ring (rotates as a group in Phase 2) ──────────────── */}
      <div
        ref={orbitRef}
        className="absolute z-10"
        style={{
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
        }}
      >
        {ctaImages.map((src, idx) => (
          <div
            key={idx}
            ref={(el) => {
              imagesRef.current[idx] = el;
            }}
            className="absolute rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl"
            style={{
              top: 0,
              left: 0,
              willChange: "transform",
            }}
          >
            <img
              src={src}
              alt={`Wind energy project ${idx + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* ── CTA content (z-above circle, centered and scaled to fit circle with breathing room) ─────────── */}
      <div
        ref={ctaRef}
        className="absolute z-20 flex flex-col items-center justify-center text-center px-4"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(84vw, 410px)",
          pointerEvents: "auto",
        }}
      >
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#AEF977] mb-3">
          Clean Energy Starts Here
        </p>
        <h2 className="text-[21px] sm:text-[25px] md:text-[29px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.22] mb-6 max-w-[390px]">
          Start Your Renewable Energy Project And Build The Future
        </h2>

        <button className="group relative h-[48px] sm:h-[50px] flex items-center overflow-hidden rounded-full bg-[#AEF977] text-[#0B2735] px-6 font-semibold text-[13.5px] sm:text-[14px] transition-all duration-300 hover:pr-4 hover:shadow-lg hover:shadow-[#AEF977]/20 active:scale-95">
          <span className="mr-3">Get Started</span>
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#0B2735] transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#AEF977]" />
          </div>
        </button>
      </div>
    </section>
  );
}
