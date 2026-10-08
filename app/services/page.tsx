"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { CTASectionV2 } from "@/components/sections/CTASectionV2";
import { SERVICES } from "@/lib/services-data";
import { Search, PenTool, Wrench, Truck, Activity, ArrowRight, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const PROCESS_STEPS = [
  { id: "01", title: "ASSESS", desc: "Understanding the site, resources and energy requirement.", icon: Search },
  { id: "02", title: "DESIGN", desc: "Evaluating technologies and developing the appropriate configuration.", icon: PenTool },
  { id: "03", title: "DEVELOP", desc: "Taking the project through feasibility, regulatory and commercial development.", icon: Wrench },
  { id: "04", title: "DELIVER", desc: "Coordinating the technology, EPC and strategic partners required for execution.", icon: Truck },
  { id: "05", title: "OPERATE", desc: "Supporting monitoring, maintenance and long-term project performance.", icon: Activity },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const section = sectionRef.current;
    if (cards.length < 2 || !section) return;

    const mm = gsap.matchMedia();

    // ── DESKTOP & TABLET (>= 768px): Pinned Stacking Card Deck ─────────────
    mm.add("(min-width: 768px)", () => {
      // Set initial positions
      cards.forEach((card, index) => {
        if (index === 0) {
          gsap.set(card, { y: 0, scale: 1, opacity: 1, zIndex: 10 });
        } else {
          gsap.set(card, { y: "120vh", scale: 1, opacity: 1, zIndex: 10 + index });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${(cards.length - 1) * 70 + 40}%`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      cards.forEach((_, index) => {
        if (index === 0) return;
        const timePos = index - 1;

        // Bring current card smoothly up to center
        tl.fromTo(
          cards[index],
          { y: "120vh" },
          { y: 0, ease: "none", duration: 1 },
          timePos
        );

        // Adjust previous cards:
        // Card immediately behind (diff = 1): subtle tab behind (y: -35px, scale: 0.94, opacity: 0.5)
        // Card 2 behind (diff = 2): fades out (opacity: 0, scale: 0.88, y: -65px)
        // Further cards: remain opacity: 0
        for (let i = 0; i < index; i++) {
          const diff = index - i;
          let targetY = -35;
          let targetScale = 0.94;
          let targetOpacity = 0.5;

          if (diff === 2) {
            targetY = -65;
            targetScale = 0.88;
            targetOpacity = 0;
          } else if (diff > 2) {
            targetY = -80;
            targetScale = 0.84;
            targetOpacity = 0;
          }

          tl.to(
            cards[i],
            {
              y: targetY,
              scale: targetScale,
              opacity: targetOpacity,
              ease: "none",
              duration: 1,
            },
            timePos
          );
        }
      });

      // Brief hold on final card before unpinning
      tl.set({}, {}, cards.length - 0.7);
    });

    // Mobile view handles stacking natively through CSS (no GSAP animation)

  }, { scope: sectionRef, dependencies: [] });

  // Let Lenis finish its first tick before refreshing ScrollTrigger positions
  React.useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full bg-white text-black font-sans min-h-screen selection:bg-[#AEF977] selection:text-black">

      {/* Hero Section */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/35105436/pexels-photo-35105436.jpeg"
            alt="Renewable energy services hero"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-6 select-text">
              Building renewable energy solutions around your requirements.
            </h1>

            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm mb-10 sm:mb-12 font-medium">
              From renewable energy generation and storage to project development, engineering and execution, we are bringing together the capabilities required to develop practical and commercially viable energy solutions across India.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">SERVICES</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Scroll Section (Pinned Stacking Deck matching homepage) */}
      <section
        ref={sectionRef}
        className="w-full bg-[#F4F6F8] font-sans relative select-text flex flex-col justify-center overflow-hidden py-16 md:py-0 h-auto md:h-[100dvh] md:min-h-[640px] md:max-h-[1080px]"
      >
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col flex-1 justify-center py-4 sm:py-6 h-full">

          <div className="w-full text-center pb-6 sm:pb-8 md:pb-6 shrink-0">
            <SectionBadge theme="dark">
              OUR SERVICES
            </SectionBadge>
          </div>

          <div
            ref={containerRef}
            className="relative w-full flex flex-col gap-4 sm:gap-5 md:block md:flex-1 md:max-h-[72vh] lg:max-h-[76vh]"
          >
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="relative w-full rounded-[20px] xs:rounded-[22px] sm:rounded-[26px] overflow-hidden flex flex-col justify-center shadow-lg md:absolute md:inset-0 md:min-h-0 md:rounded-[34px] md:shadow-2xl bg-black will-change-transform"
                style={{ zIndex: 10 + idx }}
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-90"
                  draggable={false}
                />

                {/* Gradient dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 pointer-events-none" />

                {/* Card content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-5 py-6 xs:px-6 xs:py-7 sm:px-10 sm:py-9 md:px-14 md:py-14 select-text">

                  {/* ── Number + Title ── */}
                  <div className="flex flex-col items-center cursor-text">
                    <span className="text-[10px] xs:text-[11px] sm:text-[12.5px] font-medium text-white/90 tracking-[0.2em] uppercase mb-1 drop-shadow-sm">
                      {service.id}
                    </span>
                    <h3 className="text-[20px] xs:text-[23px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-medium text-white tracking-tight leading-[1.14] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] mb-1.5 md:mb-0">
                      {service.title}
                    </h3>
                  </div>

                  {/* Vertical accent divider line */}
                  <div className="hidden md:block w-[1.5px] md:h-10 bg-white/45 md:my-3 pointer-events-none" />

                  {/* ── Lead + Description + CTA ── */}
                  <div className="flex flex-col items-center max-w-[700px] w-full cursor-text">
                    <p className="text-[12px] xs:text-[13px] sm:text-[14.5px] md:text-[16.5px] text-white font-medium leading-[1.38] drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] mb-1 sm:mb-1.5 max-w-[660px]">
                      {service.subtitle}
                    </p>
                    <p className="text-[10.5px] xs:text-[11px] sm:text-[12.5px] md:text-[14px] text-white/80 leading-[1.48] font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] mb-3 xs:mb-4 sm:mb-5 md:mb-6 max-w-[620px] line-clamp-3 md:line-clamp-none">
                      {service.desc}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center h-[34px] xs:h-[38px] sm:h-[42px] md:h-[46px] px-5 xs:px-6 sm:px-7 md:px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/35 text-white text-[10px] xs:text-[10.5px] sm:text-[11.5px] md:text-[12px] font-bold tracking-[0.08em] uppercase select-none cursor-pointer whitespace-nowrap shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.25)] active:scale-[0.98]"
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (HOW WE BRING IT TOGETHER) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="mb-10 sm:mb-14 md:mb-16 flex flex-col items-start text-left">
            <SectionBadge theme="dark" className="w-fit mb-3 sm:mb-4 uppercase">
              HOW WE BRING IT TOGETHER
            </SectionBadge>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium text-black tracking-tight leading-[1.14] max-w-4xl">
              One connected approach, from requirement to renewable energy
            </h2>
            <p className="mt-3 sm:mt-5 text-[14px] sm:text-[16px] text-neutral-600 max-w-2xl leading-[1.6]">
              We start with the site, the energy requirement and the objective. From there, we evaluate the available resources, select the appropriate solution and bring together the partners required to develop and deliver it.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-start group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                    <Icon strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
            
            {/* Adding a 6th item to complete the 3-column grid for symmetry, mapping to the 6th service area */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Zap strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              
              <h3 className="text-[18px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2.5 leading-[1.2]">
                OPTIMISE
              </h3>
              <p className="text-[14px] sm:text-[15px] text-neutral-600 leading-[1.6]">
                Continuously improving system efficiency and output through advanced energy management and analytics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASectionV2 
        badgeText="FINAL CTA"
        title="Let's develop the right energy solution for your requirement."
        description="We are building renewable energy solutions across wind, solar, hybrid generation and storage, supported by the project development and execution capabilities required to take them forward."
        buttonText="GET IN TOUCH"
        buttonLink="/contact"
      />

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}
