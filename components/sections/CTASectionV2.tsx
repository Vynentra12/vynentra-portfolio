"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

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
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 639px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions as {
            isMobile: boolean;
            isTablet: boolean;
            isDesktop: boolean;
          };

          const vw = window.innerWidth;
          const vh = window.innerHeight;

          // Fixed navbar height is 80px
          const navH = 80;

          // Gentle adaptive scale factor for short laptop viewports to preserve large cards
          const fitScale = isMobile
            ? 1
            : isTablet
            ? Math.min(1, Math.max(0.85, (vh - 80) / 720))
            : Math.min(1, Math.max(0.85, (vh - 80) / 760));

          // ─── Responsive card dimensions (Increased image size, tighter perimeter ring) ───
          const imgW = Math.round((isMobile ? 88 : isTablet ? 128 : 164) * fitScale);
          const imgH = Math.round((isMobile ? 60 : isTablet ? 88 : 112) * fitScale);

          // Card corner diagonal half-extent for rotation safety
          const halfDiag = Math.sqrt((imgW / 2) ** 2 + (imgH / 2) ** 2);

          // Available vertical half-extent in the visible area below the 80px navbar
          const usableHalfH = (vh - navH) / 2;
          const safeMarginY = isMobile ? 10 : 14;
          const safeMarginX = isMobile ? 10 : 18;

          const maxRadiusY = Math.max(120, usableHalfH - halfDiag - safeMarginY);
          const maxRadiusX = Math.max(120, (vw / 2) - halfDiag - safeMarginX);

          // Circle radius: calibrated to tighten gaps between cards while leaving clean space for center text
          const targetRadius = isMobile ? 136 : isTablet ? 220 : 262;
          const radius = Math.min(maxRadiusX, maxRadiusY, targetRadius);

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

          // ─── Starting positions (Framed to content bounds) ───────────────────
          const maxContentW = 1380;
          const paddingX = isMobile ? 16 : isTablet ? 48 : 64;
          const contentWidth = Math.min(vw - paddingX * 2, maxContentW - paddingX * 2);

          const topStep = (contentWidth - imgW) / 6;
          const topBaseY = isMobile ? -vh * 0.35 : -vh * 0.28;

          const botStep = (contentWidth * (isMobile ? 0.85 : 0.65) - imgW) / 4;
          const botBaseY = isMobile ? vh * 0.75 : vh * 0.70;

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

          // CTA content starts hidden below with centered anchor
          gsap.set(ctaRef.current, {
            xPercent: -50,
            yPercent: -50,
            y: 35,
            opacity: 0,
            scale: 0.95,
          });

          gsap.set(orbitRef.current, { rotation: 0 });

          // ─── Master timeline ─────────────────────────────────────────────────
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: isMobile ? "+=140%" : "+=180%",
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // ── Background transition: Light White (#FFFFFF) → Deep Brand Navy (#0B2735) ──
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
              xPercent: -50,
              yPercent: -50,
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              duration: 2.0,
            },
            2.9
          );
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center"
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

      {/* ── Orbit ring (centered at true midpoint below 80px fixed navbar, non-interactive) ── */}
      <div
        ref={orbitRef}
        className="absolute z-10 select-none pointer-events-none"
        style={{
          top: "calc(50% + 40px)",
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
            className="absolute rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-2xl pointer-events-none select-none"
            style={{
              top: 0,
              left: 0,
              willChange: "transform",
            }}
          >
            <img
              src={src}
              alt={`Wind energy project ${idx + 1}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* ── CTA content (z-30 above orbit, centered with GSAP xPercent/yPercent) ── */}
      <div
        ref={ctaRef}
        className="absolute z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-auto select-text cursor-text"
        style={{
          top: "calc(50% + 40px)",
          left: "50%",
          width: "max-content",
          userSelect: "text",
          WebkitUserSelect: "text",
        }}
      >
        <h2
          className="text-[17px] min-[380px]:text-[18.5px] sm:text-[22px] md:text-[24px] lg:text-[25px] font-bold text-white tracking-tight leading-tight mb-5 sm:mb-6 whitespace-nowrap text-center drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] select-text cursor-text"
          style={{
            userSelect: "text",
            WebkitUserSelect: "text",
          }}
        >
          Clean Energy Starts Here
        </h2>

        {/* Header-matching CTA button with linear stretching circle-to-pill animation */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center h-[46px] sm:h-[48px] md:h-[50px] px-6 sm:px-7 select-none cursor-pointer text-white transition-colors"
        >
          {/* The Stretching Circle Outline */}
          <div 
            className="absolute left-0 top-0 h-full w-[46px] sm:w-[48px] md:w-[50px] rounded-full border border-white/60 pointer-events-none transition-[width,background-color,border-color] duration-500 ease-out group-hover:w-full group-hover:bg-white/20 group-hover:border-white"
          />
          
          <span className="relative z-10 text-[11.5px] sm:text-[12.5px] md:text-[13px] font-semibold tracking-[0.08em] uppercase pl-3.5 sm:pl-4 pr-2 sm:pr-2.5 whitespace-nowrap select-none">
            GET STARTED
          </span>
        </Link>
      </div>
    </section>
  );
}
