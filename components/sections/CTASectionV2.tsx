"use client";

import React, { useRef, useEffect } from "react";
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
  badgeText = "ENERGY, REIMAGINED.",
  title = "Power Your Next Move.",
  description,
  buttonText = "Get Started",
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

  // Ensure ScrollTrigger positions are perfectly calculated once layout and images load
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 600);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 1200);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useGSAP(
    () => {
      ScrollTrigger.config({ ignoreMobileResize: true });
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
          const imgW = isMobile
            ? (vw < 375 ? 58 : 66)
            : isTablet
            ? 104
            : Math.round(Math.min(144, Math.max(116, vw * 0.095)));

          const imgH = isMobile
            ? (vw < 375 ? 40 : 45)
            : isTablet
            ? 72
            : Math.round(Math.min(100, Math.max(80, vw * 0.065)));

          // Diagonal half of card for rotation collision safety
          const halfDiag = Math.sqrt((imgW / 2) ** 2 + (imgH / 2) ** 2);

          // Boundaries from screen edges
          const edgeMarginX = isMobile ? 6 : 24;
          const edgeMarginY = isMobile ? 10 : 24;

          const maxRadiusX = (vw / 2) - halfDiag - edgeMarginX;
          const maxRadiusY = (vh / 2) - halfDiag - edgeMarginY;

          const targetRadius = isMobile
            ? (vw < 375 ? 144 : 158)
            : isTablet
            ? 240
            : 330;

          const radius = Math.max(120, Math.min(targetRadius, maxRadiusX, maxRadiusY));

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
          const topBaseY = -vh * 0.28;

          const botStep = (contentWidth * (isMobile ? 0.85 : 0.65) - imgW) / 4;
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

          // ─── Master timeline (tied to pin — identical scroll behavior across mobile & desktop) ───
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=180%",
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
      className="relative w-full h-screen min-h-[100vh] overflow-hidden flex items-center justify-center"
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
            className="absolute rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-2xl pointer-events-none select-none"
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

      {/* ── CTA content (concentric with orbit ring, sized to fit comfortably inside circular clearing) ── */}
      <div
        ref={ctaRef}
        className="absolute z-30 flex flex-col items-center justify-center text-center px-3 sm:px-4 w-full max-w-[210px] sm:max-w-[310px] md:max-w-[360px] lg:max-w-[390px] pointer-events-auto select-text cursor-text"
        style={{
          top: "50%",
          left: "50%",
          userSelect: "text",
          WebkitUserSelect: "text",
        }}
      >
        {/* Badge: Green text matching reference Image 2 */}
        {badgeText && (
          <div className="mb-1 sm:mb-2 pointer-events-auto">
            <span className="text-[8.5px] sm:text-[11px] md:text-[11.5px] font-bold text-[#AEF977] uppercase tracking-[0.14em] select-text">
              {badgeText}
            </span>
          </div>
        )}

        {/* Title */}
        <h2
          className={`text-[13px] sm:text-[21px] md:text-[24px] lg:text-[27px] font-bold text-white tracking-tight leading-[1.2] whitespace-normal text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] select-text cursor-text ${
            description ? "mb-1 sm:mb-2" : "mb-2 sm:mb-4"
          }`}
          style={{
            userSelect: "text",
            WebkitUserSelect: "text",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-[8.5px] sm:text-[11px] md:text-[12.5px] text-white/80 leading-[1.3] sm:leading-[1.4] mb-2 sm:mb-4 max-w-[190px] sm:max-w-[280px] md:max-w-[330px] whitespace-normal text-center font-normal drop-shadow-sm select-text cursor-text">
            {description}
          </p>
        )}

        {/* Button - Green Solid Pill Button, refined mobile size, hover changes bg to white (no shine, no scale-up) */}
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center h-[32px] sm:h-[48px] md:h-[52px] px-5 sm:px-8 md:px-9 rounded-full bg-[#AEF977] text-neutral-950 text-[11px] sm:text-[13.5px] md:text-[14px] font-semibold tracking-tight select-none cursor-pointer whitespace-nowrap transition-colors duration-200 hover:bg-white active:scale-[0.98]"
        >
          {cleanButtonText}
        </Link>
      </div>
    </section>
  );
}
