"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SolutionItem {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    number: "01",
    title: "Solar installation",
    description:
      "We offer complete solar installation services that ensure maximum energy efficiency and lasting performance for homes and businesses.",
    image: "/solutions/solar-installation.jpg",
    alt: "Professional solar technician installing solar panel array",
  },
  {
    number: "02",
    title: "Battery storage",
    description:
      "We provide advanced battery storage solutions that boost energy resilience, reduce grid reliance, and keep homes and businesses powered continuously.",
    image: "/solutions/battery-storage.jpg",
    alt: "High-tech modular home battery energy storage system",
  },
  {
    number: "03",
    title: "EV charging setup",
    description:
      "We provide EV charging solutions for homes and businesses, ensuring reliable performance, efficient energy use, and long-term durability.",
    image: "/solutions/ev-charging.jpg",
    alt: "Modern electric vehicle charging at solar-powered charging station",
  },
];

export function SolutionsSectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const container = containerRef.current;
      if (cards.length < 3 || !container) return;

      // ── Initial positions ─────────────────────────────────────────────
      // Card 01: already visible and centered
      // Card 02, 03: fully below the screen (120vh)
      gsap.set(cards[0], { y: 0, scale: 1, opacity: 1 });
      gsap.set(cards[1], { y: "120vh", scale: 1, opacity: 1 });
      gsap.set(cards[2], { y: "120vh", scale: 1, opacity: 1 });

      // ── Master pinned scroll timeline ─────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",   // 100% per card transition (x2) + 50% pause at the end
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── Transition 1 (timeline 0 → 1): Card 02 enters, Card 01 recedes ──
      //
      // Card 01: scale down + move up (goes "behind" into the stack)
      tl.to(
        cards[0],
        { y: -55, scale: 0.9, opacity: 0.65, ease: "none", duration: 1 },
        0
      );
      // Card 02: sweeps up from below screen → takes center stage
      tl.fromTo(
        cards[1],
        { y: "120vh" },
        { y: 0, ease: "none", duration: 1 },
        0
      );

      // ── Transition 2 (timeline 1 → 2): Card 03 enters, stack shifts back ──
      //
      // Card 01: recedes further (barely visible, deep in stack)
      tl.to(
        cards[0],
        { y: -100, scale: 0.82, opacity: 0.3, ease: "none", duration: 1 },
        1
      );
      // Card 02: scales down + moves up (goes "behind" Card 03)
      tl.to(
        cards[1],
        { y: -55, scale: 0.9, opacity: 0.65, ease: "none", duration: 1 },
        1
      );
      // Card 03: sweeps up from below screen → takes center stage
      tl.fromTo(
        cards[2],
        { y: "120vh" },
        { y: 0, ease: "none", duration: 1 },
        1
      );

      // ── Pause at the end (timeline 2 → 2.5) ──
      // This gives the user more "bottom space" to scroll while the 3rd image rests
      tl.set({}, {}, 2.5);
    },
    { scope: sectionRef, dependencies: [] }
  );

  // Let Lenis finish its first tick before refreshing ScrollTrigger positions
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="w-full bg-[#EBE7E0] font-sans relative select-text flex flex-col overflow-hidden"
      style={{
        userSelect: "text",
        WebkitUserSelect: "text",
        minHeight: "100dvh",
        paddingTop: "clamp(28px, 4vw, 52px)",
        paddingBottom: "clamp(28px, 4vw, 52px)",
      }}
    >
      {/* ── Symmetrical spacing matching WhyChooseUsSectionV2 ── */}
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14 flex flex-col flex-1">

        {/* "Our service" header */}
        <div className="w-full text-center pb-8 sm:pb-12 shrink-0">
          <span className="text-[13px] sm:text-[14px] font-medium text-neutral-700 tracking-wide">
            Our service
          </span>
        </div>

        {/* ── Card canvas ── */}
        <div
          ref={containerRef}
          className="relative w-full flex-1 min-h-[550px] sm:min-h-[650px] md:min-h-[75vh] rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
        >
          {SOLUTIONS.map((solution, idx) => (
            <div
              key={solution.number}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full will-change-transform rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col justify-center"
              style={{
                zIndex: idx + 1,
                // CSS initial transform prevents flash before GSAP initialises
                transform: idx === 0 ? "none" : "translateY(120vh)",
              }}
            >
              {/* Background image */}
              <img
                src={solution.image}
                alt={solution.alt}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />

              {/* Subtle dark overlay for text legibility (darkened for better visibility) */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />

              {/* Card content - Fully centered as a single block */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-14 select-text">

                {/* ── Number + Title ── */}
                <div className="flex flex-col items-center cursor-text">
                  <span className="text-[11.5px] sm:text-[13px] font-semibold text-white/85 tracking-widest uppercase mb-1.5 drop-shadow-sm">
                    {solution.number}
                  </span>
                  <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-bold text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
                    {solution.title}
                  </h3>
                </div>

                {/* Vertical accent line (extended for central layout) */}
                <div className="w-[1px] h-12 sm:h-16 md:h-20 bg-white/35 my-4 sm:my-6 pointer-events-none" />

                {/* ── Description + CTA ── */}
                <div className="flex flex-col items-center max-w-[640px] w-full">
                  <p className="text-[13px] sm:text-[15px] md:text-[16px] text-white/90 leading-[1.7] font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] mb-6 sm:mb-8">
                    {solution.description}
                  </p>

                  {/* Clean stroke button in default, matching lime hover */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-[46px] sm:h-[48px] md:h-[50px] px-7 sm:px-8 rounded-full border border-[#AEF977] text-white text-[11.5px] sm:text-[12.5px] md:text-[13px] font-semibold tracking-[0.08em] uppercase select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-[#AEF977] hover:text-black hover:border-[#AEF977] active:scale-[0.98]"
                  >
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
