"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
}

export function WhyChooseUsSectionV2() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to item 1 ("Wind-Solar Hybrid Solutions")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1); // Expanded by default matching reference
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Image element refs for GSAP wind turbine momentum animation
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevIndexRef = useRef<number>(1);

  // 4 Features: Left Big Hero Image dynamically changes to these on hover
  const features: FeatureItem[] = [
    {
      id: "wind-energy-solutions",
      title: "Wind Energy Solutions",
      desc: "We are developing distributed and captive wind solutions across vertical and horizontal axis technologies, designed around different site conditions and energy requirements.",
      image: "/why-choose-us/reliable-performance.jpg",
      alt: "Reliable wind energy turbine rotating in breeze over hills",
    },
    {
      id: "wind-solar-hybrid",
      title: "Wind-Solar Hybrid Solutions",
      desc: "We are integrating wind and solar generation to create hybrid renewable energy systems that make better use of available resources and complement different generation profiles.",
      image: "/why-choose-us/hero-windmill.jpg",
      alt: "Architectural windmill house with solar panels on rotor blades",
    },
    {
      id: "energy-storage-solutions",
      title: "Energy Storage Solutions",
      desc: "We are incorporating battery energy storage systems where appropriate to support renewable generation, energy management and more resilient power infrastructure",
      image: "/why-choose-us/expert-guidance.jpg",
      alt: "Renewable energy engineers reviewing architectural plans on site",
    },
    {
      id: "project-development-advisory",
      title: "Project Development & Advisory",
      desc: "We are supporting projects from energy audits and feasibility studies through technology evaluation, regulatory coordination, financing facilitation and EPC partner management.",
      image: "/why-choose-us/long-term-savings.jpg",
      alt: "Modern architectural home with solar roof and vertical wind turbine",
    },
  ];

  // If hovering any item, ONLY that item is active/highlighted. Otherwise, fallback to default activeIndex.
  const activeLineIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Smart GSAP Wind Turbine Motion Transition (Zero blur, aerodynamic torque & wind momentum)
  useEffect(() => {
    const prevIdx = prevIndexRef.current;
    const nextIdx = activeLineIndex;

    if (prevIdx === nextIdx) return;

    const prevEl = imageRefs.current[prevIdx];
    const nextEl = imageRefs.current[nextIdx];

    if (prevEl && nextEl) {
      // Wind direction matches cursor traversal (downward vs upward)
      const direction = nextIdx > prevIdx ? 1 : -1;

      // Kill any in-flight tweens on both elements for immediate responsiveness
      gsap.killTweensOf(prevEl);
      gsap.killTweensOf(nextEl);

      // Previous image glides out with wind wake (softer, slower)
      gsap.to(prevEl, {
        opacity: 0,
        x: -20 * direction,
        rotation: -1.5 * direction,
        scale: 0.98,
        duration: 0.8,
        ease: "power2.inOut",
        zIndex: 1,
      });

      // Next image sweeps in with gentle breeze momentum (softer, slower)
      gsap.fromTo(
        nextEl,
        {
          opacity: 0,
          x: 25 * direction,
          rotation: 2.0 * direction,
          scale: 1.04,
          zIndex: 2,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          scale: 1,
          duration: 0.95,
          ease: "power3.out",
        }
      );
    }

    prevIndexRef.current = nextIdx;
  }, [activeLineIndex]);

  return (
    <section
      id="why-choose-us"
      className="w-full bg-white text-neutral-900 py-16 md:py-24 font-sans relative overflow-hidden select-text"
      style={{ userSelect: "text", WebkitUserSelect: "text" }}
    >
      {/* Symmetrical left and right padding matching other sections */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Main Grid: Left Dynamic Big Hero Card (5 cols) + Right Content Section (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* ─── LEFT COLUMN: Dynamic Big Hero Card (Responsive Height on Mobile) ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col w-full"
          >
            <div className="relative w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[650px] xl:h-[700px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm bg-neutral-100 group/hero">
              
              {/* Dynamic Images Layered for GSAP Wind Turbine Motion */}
              {features.map((feature, idx) => {
                const isInitial = idx === 1;

                return (
                  <div
                    key={feature.id}
                    ref={(el) => {
                      imageRefs.current[idx] = el;
                    }}
                    className="absolute inset-0 will-change-transform pointer-events-none select-none"
                    style={{
                      opacity: isInitial ? 1 : 0,
                      zIndex: isInitial ? 2 : 1,
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover object-center pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                );
              })}

              {/* Gentle bottom-light gradient for richness */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Header, CTA Button & Interactive Split View ─── */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-1 lg:pt-2">
            
            {/* Top Section: Kicker, Headline & Stroke-Only CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col mb-8 lg:mb-10"
            >
              
              <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
                WHAT WE DO
              </SectionBadge>

              {/* Main Headline: Exact requested copy & fully selectable */}
              <h2
                className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 lg:mb-8 max-w-[640px] select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                Developing integrated renewable energy solutions for a changing energy landscape.
              </h2>

              {/* CTA Button with clean stroke in default & matching hover */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11.5px] sm:text-[12px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
              >
                <span>EXPLORE OUR SERVICES</span>
              </Link>
            </motion.div>

            {/* Bottom Sub-Split: Left Feature Rows + Right Fixed Solar Energy Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch pt-3"
            >
              
              {/* ── Feature Rows (Expandable Accordion on click with smooth arrow morph) ── */}
              <div 
                className="md:col-span-7 flex flex-col justify-between"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {features.map((feature, idx) => {
                  const isCurrent = activeLineIndex === idx;
                  const isExpanded = expandedIndex === idx;

                  return (
                    <div
                      key={feature.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        setExpandedIndex(expandedIndex === idx ? null : idx);
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      className="group/item relative py-3.5 sm:py-4 cursor-pointer transition-colors"
                    >
                      {/* Row Title & Morphing Arrow */}
                      <div className="flex items-center justify-between gap-4 pb-2.5">
                        <span
                          className={`text-[17px] sm:text-[18px] lg:text-[19px] tracking-tight transition-colors duration-200 select-text cursor-text ${
                            isCurrent
                              ? "text-[#0A6B88] font-medium"
                              : "text-neutral-900 group-hover/item:text-[#0A6B88]"
                          }`}
                          style={{ userSelect: "text", WebkitUserSelect: "text" }}
                        >
                          {feature.title}
                        </span>

                        {/* Plus/Minus Toggle */}
                        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                          <Plus
                            className={`w-5 h-5 text-neutral-800 absolute transition-all duration-300 ease-out ${
                              isExpanded ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"
                            }`}
                          />
                          <Minus
                            className={`w-5 h-5 text-[#0A6B88] absolute transition-all duration-300 ease-out ${
                              isExpanded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expandable Answer / Description */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p
                              className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.62] font-normal pb-3.5 pt-0.5 select-text cursor-text"
                              style={{ userSelect: "text", WebkitUserSelect: "text" }}
                            >
                              {feature.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* ── Single Unified Border Line with Linear Fill (No double lines) ── */}
                      <div className="relative w-full h-[1.5px] bg-neutral-200 overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-[#0A6B88] transition-[width] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isCurrent ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Fixed Solar Energy Preview Card & Description (Dynamic sync with active item) ── */}
              <div className="md:col-span-5 flex flex-col justify-between gap-6">
                
                {/* Fixed Solar Panel Sunset Image */}
                <div className="relative w-full aspect-[16/10.5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-neutral-100 shadow-sm">
                  <img
                    src="/why-choose-us/eco-friendly-impact.jpg"
                    alt="Solar panel arrays under sunset sky"
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    draggable={false}
                  />
                </div>

                {/* Clean Energy Solutions Description (Selectable) */}
                <div className="mt-3.5 min-h-[58px] flex items-start">
                  <p
                    className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.62] font-normal select-text cursor-text"
                    style={{ userSelect: "text", WebkitUserSelect: "text" }}
                  >
                    {features[activeLineIndex]?.desc || "Our clean energy solutions merge innovation and sustainability to help homes and businesses thrive while minimizing environmental impact"}
                  </p>
                </div>

              </div>


            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
