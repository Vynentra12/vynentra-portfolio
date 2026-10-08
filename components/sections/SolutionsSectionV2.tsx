"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionBadge } from "@/components/ui/SectionBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SolutionItem {
  number: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  alt: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    number: "01",
    title: "Understanding your site",
    lead: "We begin by understanding where renewable energy can work for you.",
    description:
      "We assess your location, available space, surrounding conditions and site characteristics to establish the potential for a renewable energy project.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop",
    alt: "Vast open terrain and landscape suitable for renewable energy project development",
  },
  {
    number: "02",
    title: "Assessing your energy needs",
    lead: "We understand how your energy is generated, consumed and required.",
    description:
      "We look at your energy consumption, operating requirements and project objectives to determine the scale and configuration that best fits your needs.",
    image: "/solutions/solar-installation.jpg",
    alt: "Professional technician installing solar panel array and evaluating energy system",
  },
  {
    number: "03",
    title: "Designing the right solution",
    lead: "We match the technology to the requirement.",
    description:
      "We evaluate wind, solar, hybrid and storage solutions against the site's conditions and energy requirements to develop a technically and commercially viable approach.",
    image: "/solutions/ev-charging.jpg",
    alt: "Modern electric vehicle charging station with solar tracker architecture",
  },
  {
    number: "04",
    title: "Developing and delivering the project",
    lead: "We bring the project together from development to execution.",
    description:
      "We coordinate technology providers, EPC partners and other strategic partners while supporting feasibility, regulatory coordination, financing and project execution.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1920&auto=format&fit=crop",
    alt: "Clean energy project development, engineering and EPC execution on site",
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
      if (cards.length < 4 || !container) return;

      const mm = gsap.matchMedia();

      // ── DESKTOP & TABLET (>= 768px): Pinned Stacking Card Deck ─────────────
      mm.add("(min-width: 768px)", () => {
        // Initial positions for desktop deck
        gsap.set(cards[0], { y: 0, scale: 1, opacity: 1 });
        gsap.set(cards[1], { y: "120vh", scale: 1, opacity: 1 });
        gsap.set(cards[2], { y: "120vh", scale: 1, opacity: 1 });
        gsap.set(cards[3], { y: "120vh", scale: 1, opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=350%", // 100% per card transition (x3) + 50% pause at the end
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Transition 1 (Card 1 enters, Card 0 recedes)
        tl.to(
          cards[0],
          { y: -55, scale: 0.9, opacity: 0.65, ease: "none", duration: 1 },
          0
        );
        tl.fromTo(
          cards[1],
          { y: "120vh" },
          { y: 0, ease: "none", duration: 1 },
          0
        );

        // Transition 2 (Card 2 enters, Card 1 & 0 recede)
        tl.to(
          cards[0],
          { y: -100, scale: 0.82, opacity: 0.3, ease: "none", duration: 1 },
          1
        );
        tl.to(
          cards[1],
          { y: -55, scale: 0.9, opacity: 0.65, ease: "none", duration: 1 },
          1
        );
        tl.fromTo(
          cards[2],
          { y: "120vh" },
          { y: 0, ease: "none", duration: 1 },
          1
        );

        // Transition 3 (Card 3 enters, stack shifts back)
        tl.to(
          cards[0],
          { y: -140, scale: 0.75, opacity: 0, ease: "none", duration: 1 },
          2
        );
        tl.to(
          cards[1],
          { y: -100, scale: 0.82, opacity: 0.3, ease: "none", duration: 1 },
          2
        );
        tl.to(
          cards[2],
          { y: -55, scale: 0.9, opacity: 0.65, ease: "none", duration: 1 },
          2
        );
        tl.fromTo(
          cards[3],
          { y: "120vh" },
          { y: 0, ease: "none", duration: 1 },
          2
        );

        // Pause at the end
        tl.set({}, {}, 3.5);
      });

      // ── MOBILE (< 768px): Natural Clean Stacked Cards Feed ────────────────
      mm.add("(max-width: 767px)", () => {
        cards.forEach((card) => {
          gsap.set(card, { clearProps: "all" });
        });
      });
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
      className="w-full bg-[#F4F6F8] font-sans relative select-text flex flex-col justify-center overflow-hidden py-12 sm:py-16 md:py-8 md:min-h-screen"
      style={{
        userSelect: "text",
        WebkitUserSelect: "text",
      }}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col flex-1 justify-center">

        {/* "Our service" header */}
        <div className="w-full text-center pb-6 sm:pb-8 md:pb-12 shrink-0">
          <SectionBadge theme="dark">
            OUR SERVICES
          </SectionBadge>
        </div>

        {/* ── Card canvas: Natural stacked list on mobile, pinned stack on desktop ── */}
        <div
          ref={containerRef}
          className="relative w-full flex flex-col gap-4 sm:gap-5 md:block md:flex-1 md:min-h-[580px] md:h-[78vh] lg:h-[82vh] md:max-h-[860px]"
        >
          {SOLUTIONS.map((solution, idx) => (
            <div
              key={solution.number}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="relative w-full rounded-[20px] xs:rounded-[22px] sm:rounded-[26px] overflow-hidden flex flex-col justify-center shadow-lg md:absolute md:inset-0 md:min-h-0 md:rounded-[34px] md:shadow-2xl md:will-change-transform"
              style={{
                zIndex: idx + 1,
              }}
            >
              {/* Background image */}
              <img
                src={solution.image}
                alt={solution.alt}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />

              {/* Gradient dark overlay for crystal clear text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/35 pointer-events-none" />

              {/* Card content - Clean compact layout on mobile matching reference, full layout on desktop */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-5 py-7 xs:px-6 xs:py-8 sm:px-10 sm:py-10 md:px-14 md:py-16 select-text">

                {/* ── Number + Title ── */}
                <div className="flex flex-col items-center cursor-text">
                  <span className="text-[11px] xs:text-[11.5px] sm:text-[13px] font-medium text-white/90 tracking-[0.2em] uppercase mb-1 sm:mb-1.5 drop-shadow-sm">
                    {solution.number}
                  </span>
                  <h3 className="text-[23px] xs:text-[25px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.14] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] mb-2 md:mb-0">
                    {solution.title}
                  </h3>
                </div>

                {/* Vertical accent divider line: Hidden on mobile matching reference, shown on desktop */}
                <div className="hidden md:block w-[1.5px] md:h-12 bg-white/45 md:my-4 pointer-events-none" />

                {/* ── Lead + Description + CTA ── */}
                <div className="flex flex-col items-center max-w-[700px] w-full cursor-text">
                  <p className="text-[13px] xs:text-[13.5px] sm:text-[15px] md:text-[17.5px] text-white font-medium leading-[1.38] drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] mb-1 sm:mb-1.5 md:mb-2 max-w-[660px]">
                    {solution.lead}
                  </p>
                  <p className="text-[11px] xs:text-[11.5px] sm:text-[13px] md:text-[15px] text-white/80 leading-[1.5] font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] mb-4 xs:mb-5 sm:mb-6 md:mb-7 max-w-[620px]">
                    {solution.description}
                  </p>

                  {/* Glassmorphism button: compact on mobile */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-[38px] xs:h-[40px] sm:h-[44px] md:h-[48px] px-6 xs:px-7 sm:px-8 md:px-9 rounded-full bg-white/10 backdrop-blur-md border border-white/35 text-white text-[10.5px] xs:text-[11px] sm:text-[12px] md:text-[12.5px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer whitespace-nowrap shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.25)] active:scale-[0.98]"
                  >
                    REQUEST A QUOTE
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
