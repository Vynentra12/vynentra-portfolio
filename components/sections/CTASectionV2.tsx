"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";

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

export function CTASectionV2({
  badgeText = "START A PROJECT",
  title = "Have an energy requirement in mind?",
  description,
  buttonText = "GET IN TOUCH",
  buttonLink = "/contact"
}: {
  badgeText?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const gradientOverlayRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Clean button text: ensure no arrow is present
  const cleanButtonText = buttonText.replace(/[→\->]/g, "").trim();

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

          // ─── Responsive card dimensions ───
          // Cards are sized to maintain clear visible gaps between all 12 cards
          const imgW = isMobile
            ? (vw < 375 ? 58 : 64)
            : isTablet
            ? 92
            : Math.round(Math.min(122, Math.max(96, vw * 0.085)));

          const imgH = isMobile
            ? (vw < 375 ? 40 : 44)
            : isTablet
            ? 64
            : Math.round(Math.min(84, Math.max(68, vw * 0.058)));

          // Diagonal half of card for rotation collision safety
          const halfDiag = Math.sqrt((imgW / 2) ** 2 + (imgH / 2) ** 2);

          // Boundaries from screen edges
          const edgeMarginX = isMobile ? 8 : 24;
          const edgeMarginY = isMobile ? 12 : 24;

          const maxRadiusX = (vw / 2) - halfDiag - edgeMarginX;
          const maxRadiusY = (vh / 2) - halfDiag - edgeMarginY;

          // Radius calculation:
          // 12 cards -> perimeter step = (2 * PI * radius) / 12 = 0.5236 * radius
          // For mobile: target ~146px -> step is 76.4px, card width is 64px -> clean 12.4px gap!
          // For tablet: target ~210px -> step is 110px, card width is 92px -> clean 18px gap!
          // For desktop: target ~260px -> step is 136px, card width is 122px -> clean 14px gap!
          const targetRadius = isMobile
            ? (vw < 375 ? 134 : 146)
            : isTablet
            ? 210
            : 260;

          const radius = Math.max(110, Math.min(targetRadius, maxRadiusX, maxRadiusY));

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

            // Start invisible — images only appear when pinned animation fires
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
            y: 25,
            opacity: 0,
            scale: 0.96,
          });

          gsap.set(orbitRef.current, { rotation: 0 });

          // ─── Master timeline (tied to pin — nothing fires until section is pinned at top) ───
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

          // ── Background is immediately dark so there is NO white gap when scrolling to this section ──
          gsap.set(sectionRef.current, { backgroundColor: "#0B2735" });

          if (gradientOverlayRef.current) {
            tl.fromTo(
              gradientOverlayRef.current,
              { opacity: 0 },
              { opacity: 1, ease: "power1.inOut", duration: 2.5 },
              0
            );
          }

          // ── PHASE 1: Images fade in and fly to their circle coordinates ───────
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
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0B2735" }}
    >
      {/* ── Rich Dark Blue Radial Gradient Overlay (fades in smoothly as you scroll) ── */}
      <div
        ref={gradientOverlayRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #0E3547 0%, #0B2735 60%, #071F2C 100%)",
        }}
      />

      {/* ── Orbit ring (centered exactly at 50%/50%, non-interactive) ── */}
      <div
        ref={orbitRef}
        className="absolute z-10 select-none pointer-events-none"
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
            className="absolute rounded-[8px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-xl pointer-events-none select-none"
            style={{
              top: 0,
              left: 0,
              willChange: "transform",
            }}
          >
            <img
              src={src}
              alt={`Energy project ${idx + 1}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* ── CTA content (concentric with orbit ring, strictly sized to fit inside clearing) ── */}
      <div
        ref={ctaRef}
        className="absolute z-30 flex flex-col items-center justify-center text-center px-2 sm:px-4 w-full max-w-[210px] min-[390px]:max-w-[225px] sm:max-w-[320px] md:max-w-[390px] pointer-events-auto select-text cursor-text"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          userSelect: "text",
          WebkitUserSelect: "text",
        }}
      >
        {/* Badge */}
        <div className="mb-1.5 min-[390px]:mb-2 sm:mb-2.5 pointer-events-auto">
          <SectionBadge
            theme="light"
            size="xs"
            className="!px-2.5 !py-[2.5px] sm:!px-3 sm:!py-1 !text-[7.5px] min-[390px]:!text-[8px] sm:!text-[9px] md:!text-[9.5px] tracking-[0.14em]"
          >
            {badgeText}
          </SectionBadge>
        </div>

        {/* Title */}
        <h2
          className="text-[14px] min-[390px]:text-[16px] sm:text-[21px] md:text-[25px] lg:text-[28px] font-bold text-white tracking-tight leading-[1.2] mb-1.5 min-[390px]:mb-2 sm:mb-2.5 whitespace-normal text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] select-text cursor-text"
          style={{
            userSelect: "text",
            WebkitUserSelect: "text",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-[9px] min-[390px]:text-[10px] sm:text-[11px] md:text-[12.5px] text-white/80 leading-[1.35] sm:leading-[1.4] mb-2.5 min-[390px]:mb-3 sm:mb-4 md:mb-5 max-w-[205px] min-[390px]:max-w-[220px] sm:max-w-[300px] md:max-w-[350px] whitespace-normal text-center font-normal drop-shadow-sm select-text cursor-text">
            {description}
          </p>
        )}

        {/* Button - NO ARROW, compact and refined */}
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center h-[30px] min-[390px]:h-[32px] sm:h-[36px] md:h-[40px] px-4 min-[390px]:px-5 sm:px-6 rounded-full border border-white/65 text-white text-[9.5px] min-[390px]:text-[10px] sm:text-[11px] md:text-[11.5px] font-semibold tracking-[0.08em] uppercase select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-white hover:text-[#0B2735] hover:border-white active:scale-[0.98]"
        >
          {cleanButtonText}
        </Link>
      </div>
    </section>
  );
}
