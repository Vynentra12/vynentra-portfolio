"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Compass, Layers, Zap, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01 - Site Assessment",
    title: "Know the wind before you build.",
    description:
      "We assess site coordinates, altitude and local wind conditions to determine the feasibility and configuration of a wind energy system.",
    icon: Compass,
  },
  {
    step: "02 - System Design",
    title: "Designed for the site.",
    description:
      "Every system is configured around its energy requirement and wind conditions - from individual turbines to modular arrays and larger captive installations.",
    icon: Layers,
  },
  {
    step: "03 - Installation & Execution",
    title: "From specification to generation.",
    description:
      "Complete project execution, including turbine installation, wiring, distribution systems and commissioning.",
    icon: Zap,
  },
  {
    step: "04 - Operations & Maintenance",
    title: "Performance that lasts.",
    description:
      "Annual Maintenance Contracts designed to monitor systems, maintain performance and support long-term operation.",
    icon: ShieldCheck,
  },
];

export function SolutionsSectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ── Desktop Pinned Scroll Animation (min-width: 1024px) ──
      // When user reaches section, it locks in place:
      // User sees Title & Subtitle first.
      // As user scrolls down: Box 1 animates from bottom to top,
      // then Box 2, then Box 3, then Box 4.
      // Once all 4 boxes are shown, section unlocks smoothly to next section.
      mm.add("(min-width: 1024px)", () => {
        // All 4 boxes start hidden below
        gsap.set(cardsRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.96,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1800",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Step 1: User scrolls -> Box 1 animates from down to top
        tl.to(cardsRef.current[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.1);

        // Step 2: User scrolls more -> Box 2 animates from down to top
        tl.to(cardsRef.current[1], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.35);

        // Step 3: User scrolls more -> Box 3 animates from down to top
        tl.to(cardsRef.current[2], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.6);

        // Step 4: User scrolls more -> Box 4 animates from down to top
        tl.to(cardsRef.current[3], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, 0.85);

        // Hold pause so all 4 boxes are admired before transitioning to next section
        tl.to({}, { duration: 0.35 });
      });

      // ── Mobile / Tablet Scroll Reveal (max-width: 1023px) ──
      mm.add("(max-width: 1023px)", () => {
        cardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="process-overview"
      ref={sectionRef}
      className="w-full bg-white text-neutral-900 min-h-screen flex flex-col justify-center py-14 sm:py-16 md:py-20 font-sans select-text relative overflow-hidden"
    >
      <div ref={containerRef} className="w-full px-8 sm:px-10 lg:px-12 xl:px-14 relative z-10">
        
        {/* Top Header Row: Left Title/Subtitle & Right CTA Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 lg:mb-12">
          
          {/* Top Left: Badge Name, Title & Subtitle */}
          <div className="flex flex-col max-w-[760px]">
            {/* Badge Name (Matching FAQ section kicker) */}
            <span className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-800 uppercase tracking-[0.06em] mb-2.5 select-text">
              PROCESS
            </span>

            {/* Main Headline (Matching FAQ section headline size) */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold text-neutral-900 tracking-tight leading-[1.18] mb-2.5">
              Harnessing the power of nature to build a sustainable tomorrow
            </h2>

            {/* Subtitle (Matching FAQ section body text size) */}
            <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-[1.6] max-w-[560px] font-normal">
              From initial site assessment to ongoing maintenance, our structured methodology ensures maximum aerodynamic yield and reliable performance.
            </p>
          </div>

          {/* Top Right: CTA Button */}
          <div className="shrink-0 pb-1">
            <Link
              href="#contact"
              className="group/btn relative inline-flex items-center h-[46px] px-6 select-none cursor-pointer w-fit"
            >
              {/* Expanding circle outline that stretches into full pill on hover */}
              <div 
                className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full border border-neutral-900 pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover/btn:w-full group-hover/btn:bg-neutral-900/5"
              />
              
              {/* Button text */}
              <span className="relative z-10 text-[11.5px] sm:text-[12px] font-bold tracking-[0.08em] text-neutral-900 uppercase pl-3 pr-1 whitespace-nowrap">
                READ MORE
              </span>
            </Link>
          </div>

        </div>

        {/* Four Compact Horizontal Process Boxes */}
        <div 
          onMouseLeave={() => setHoveredCard(null)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5.5 items-stretch"
        >
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = hoveredCard === idx;

            return (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                className={`group rounded-[20px] sm:rounded-[22px] p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 ease-out shadow-xs hover:shadow-md hover:-translate-y-1 min-h-[210px] sm:min-h-[220px] cursor-pointer ${
                  isActive
                    ? "bg-[#AEF977] border border-[#9DEB62]"
                    : "bg-white border border-neutral-200/90 hover:border-neutral-300"
                }`}
              >
                <div className="flex flex-col">
                  {/* Top Row: Squircle Icon Badge + Step Number */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? "bg-white text-neutral-950 shadow-xs"
                          : "bg-[#AEF977] text-neutral-950"
                      }`}
                    >
                      <Icon className="w-5 h-5 text-neutral-950" />
                    </div>

                    <span className="text-xs sm:text-[13px] font-medium text-neutral-400">
                      {step.step.slice(0, 2)}
                    </span>
                  </div>

                  {/* Tiny Pre-title */}
                  <span className="text-[10px] sm:text-[10.5px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                    {step.step}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-neutral-950 tracking-tight leading-snug mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[12px] sm:text-[12.5px] text-neutral-600 leading-[1.5] font-normal line-clamp-4">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
