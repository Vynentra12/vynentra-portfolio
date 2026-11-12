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
  title: React.ReactNode;
  lead?: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    number: "01",
    title: "Understanding your site",
    description:
      "We assess your location, available space, surrounding conditions and site characteristics to establish the feasibility of a renewable energy project.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop",
    alt: "Vast open terrain and landscape suitable for renewable energy project development",
    href: "/services",
  },
  {
    number: "02",
    title: "Assessing your energy needs",
    description:
      "We evaluate your energy consumption, operating requirements and project objectives to determine the appropriate system capacity and configuration.",
    image: "/solutions/solar-installation.jpg",
    alt: "Professional technician installing solar panel array and evaluating energy system",
    href: "/services",
  },
  {
    number: "03",
    title: "Designing the right solution",
    description:
      "We evaluate wind, solar, hybrid and energy storage technologies against site conditions and energy requirements to develop a technically and commercially viable system.",
    image: "/solutions/hybrid-solution.jpg",
    alt: "Integrated wind, solar hybrid generation and battery energy storage architecture",
    href: "/services",
  },
  {
    number: "04",
    title: (
      <>
        Developing and executing<br />the project
      </>
    ),
    description:
      "We coordinate technology providers, EPC partners and other stakeholders across feasibility, regulatory approvals, financing and project execution.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1920&auto=format&fit=crop",
    alt: "Clean energy project development, engineering and EPC execution on site",
    href: "/contact#contact-form",
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

      ScrollTrigger.config({ ignoreMobileResize: true });
      const mm = gsap.matchMedia();

      // ── DESKTOP & TABLET (>= 768px): Pinned Stacking Card Deck ─────────────
      mm.add("(min-width: 768px)", () => {
        // Initial positions for desktop deck
        gsap.set(cards[0], { y: 0, scale: 1, autoAlpha: 1 });
        gsap.set(cards[1], { y: "120vh", scale: 1, autoAlpha: 1 });
        gsap.set(cards[2], { y: "120vh", scale: 1, autoAlpha: 1 });
        gsap.set(cards[3], { y: "120vh", scale: 1, autoAlpha: 1 });

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

        // Transition 2 (Card 2 enters, Card 1 recedes)
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

        // Transition 3 (Card 3 enters, Card 2 recedes)
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

      // ── MOBILE (< 768px): Lightweight Pinned Stacking Card Deck ────────────
      mm.add("(max-width: 767px)", () => {
        gsap.set(cards[0], { y: 0, scale: 1, autoAlpha: 1, force3D: true });
        gsap.set(cards[1], { y: "82vh", scale: 1, autoAlpha: 1, force3D: true });
        gsap.set(cards[2], { y: "82vh", scale: 1, autoAlpha: 1, force3D: true });
        gsap.set(cards[3], { y: "82vh", scale: 1, autoAlpha: 1, force3D: true });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=210%", // Lightweight scroll distance (~1 swipe per card)
            pin: true,
            scrub: 0.45, // Snappy touch tracking without feeling heavy
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Transition 1 (Card 1 enters, Card 0 recedes)
        tl.to(
          cards[0],
          { y: -30, scale: 0.92, opacity: 0.65, ease: "none", duration: 1, force3D: true },
          0
        );
        tl.fromTo(
          cards[1],
          { y: "82vh" },
          { y: 0, ease: "none", duration: 1, force3D: true },
          0
        );

        // Transition 2 (Card 2 enters, Card 1 recedes, Card 0 hides to save GPU overdraw)
        tl.to(
          cards[0],
          { autoAlpha: 0, ease: "none", duration: 0.5 },
          1
        );
        tl.to(
          cards[1],
          { y: -30, scale: 0.92, opacity: 0.65, ease: "none", duration: 1, force3D: true },
          1
        );
        tl.fromTo(
          cards[2],
          { y: "82vh" },
          { y: 0, ease: "none", duration: 1, force3D: true },
          1
        );

        // Transition 3 (Card 3 enters, Card 2 recedes, Card 1 hides to save GPU overdraw)
        tl.to(
          cards[1],
          { autoAlpha: 0, ease: "none", duration: 0.5 },
          2
        );
        tl.to(
          cards[2],
          { y: -30, scale: 0.92, opacity: 0.65, ease: "none", duration: 1, force3D: true },
          2
        );
        tl.fromTo(
          cards[3],
          { y: "82vh" },
          { y: 0, ease: "none", duration: 1, force3D: true },
          2
        );

        // Brief pause on the final card before releasing to the next section
        tl.set({}, {}, 3.3);
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  // Let Lenis and images settle before refreshing ScrollTrigger positions
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="w-full bg-white font-sans relative select-text flex flex-col justify-center overflow-hidden min-h-screen py-10 sm:py-12 md:py-8"
      style={{
        userSelect: "text",
        WebkitUserSelect: "text",
      }}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col flex-1 justify-center">

        {/* "Our Services" header */}
        <div className="w-full text-center pb-6 sm:pb-8 md:pb-12 shrink-0">
          <SectionBadge theme="dark">
            OUR SERVICES
          </SectionBadge>
        </div>

        {/* ── Card canvas: Pinned stacking deck on mobile & desktop ── */}
        <div
          ref={containerRef}
          className="relative w-full h-[340px] min-[390px]:h-[350px] sm:h-[410px] md:flex-1 md:min-h-[580px] md:h-[78vh] lg:h-[82vh] md:max-h-[860px]"
        >
          {SOLUTIONS.map((solution, idx) => {
            const isLastCard = idx === SOLUTIONS.length - 1;

            return (
              <div
                key={solution.number}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="absolute inset-0 w-full h-full rounded-[22px] sm:rounded-[28px] md:rounded-[34px] overflow-hidden flex flex-col justify-center shadow-[0_12px_30px_rgba(0,0,0,0.16)] md:shadow-2xl will-change-transform"
                style={{
                  zIndex: idx + 1,
                }}
              >
                {/* Background image */}
                <img
                  src={solution.image}
                  alt={solution.alt}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                  draggable={false}
                />

                {/* Gradient dark overlay for crystal clear text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/35 pointer-events-none" />

                {/* Card content - Clean grouped centered layout */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 py-6 sm:px-10 sm:py-10 md:px-14 md:py-16 select-text">
                  <div className="flex flex-col items-center justify-center text-center max-w-[720px] w-full mx-auto my-auto cursor-text">
                    <span className="text-[11px] min-[390px]:text-[11.5px] sm:text-[13px] font-medium text-white/90 tracking-[0.2em] uppercase mb-2.5 sm:mb-3 md:mb-2 drop-shadow-sm">
                      {solution.number}
                    </span>
                    <h3 className="text-[22px] min-[390px]:text-[24px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.15] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] mb-3.5 sm:mb-4">
                      {solution.title}
                    </h3>
                    {solution.lead && (
                      <p className="text-[13px] min-[390px]:text-[13.5px] sm:text-[15px] md:text-[17.5px] text-white font-medium leading-[1.42] drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] mb-2.5 sm:mb-3 max-w-[660px]">
                        {solution.lead}
                      </p>
                    )}
                    <p className={`text-[13px] min-[390px]:text-[13.5px] sm:text-[14.5px] md:text-[16px] text-white/90 leading-[1.55] font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] max-w-[620px] ${isLastCard ? "mb-5 sm:mb-6" : "mb-0"}`}>
                      {solution.description}
                    </p>
                    {isLastCard && (
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center h-[40px] min-[390px]:h-[42px] sm:h-[46px] md:h-[48px] px-7 sm:px-9 rounded-full bg-white text-[#0B2735] border border-transparent text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase select-none cursor-pointer whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#0B2735] hover:text-white hover:border-white hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>REQUEST A QUOTE</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
