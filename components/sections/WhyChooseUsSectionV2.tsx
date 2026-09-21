"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

interface FeatureItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export function WhyChooseUsSectionV2() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to item 1 ("Eco-friendly impact")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Image element refs for GSAP wind turbine momentum animation
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevIndexRef = useRef<number>(1);

  // 4 Features: Left Big Hero Image dynamically changes to these on hover
  const features: FeatureItem[] = [
    {
      id: "reliable-performance",
      title: "Reliable performance",
      image: "/why-choose-us/reliable-performance.jpg",
      alt: "Reliable wind energy turbine rotating in breeze over hills",
    },
    {
      id: "eco-friendly-impact",
      title: "Eco-friendly impact",
      image: "/why-choose-us/hero-windmill.jpg",
      alt: "Architectural windmill house with solar panels on rotor blades",
    },
    {
      id: "expert-guidance",
      title: "Expert guidance",
      image: "/why-choose-us/expert-guidance.jpg",
      alt: "Renewable energy engineers reviewing architectural plans on site",
    },
    {
      id: "long-term-savings",
      title: "Long-term savings",
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
      {/* Symmetrical left and right padding exactly matching BlogSectionV2 */}
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14">
        {/* Main Grid: Left Dynamic Big Hero Card (5 cols) + Right Content Section (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* ─── LEFT COLUMN: Dynamic Big Hero Card (Increased Height, Lessened Corner Radius, No Badges) ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col w-full"
          >
            <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[650px] xl:h-[700px] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] overflow-hidden shadow-sm bg-neutral-100 group/hero">
              
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
              
              {/* Badge Name: Matched to FAQ Section Typography & fully selectable */}
              <span
                className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-800 uppercase tracking-[0.06em] mb-2.5 select-text cursor-text w-fit"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                WHY CHOOSE US
              </span>

              {/* Main Headline: Exact requested copy & fully selectable */}
              <h2
                className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold text-neutral-900 tracking-tight leading-[1.18] mb-6 lg:mb-8 max-w-[620px] select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                Trusted clean energy solutions powering homes and businesses sustainably.
              </h2>

              {/* Stroke-Only Stretching Circle-to-Pill CTA Button (No green, no arrow) */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center h-[44px] sm:h-[46px] px-6 select-none cursor-pointer w-fit"
              >
                {/* The Morphing Outline that stretches on hover (clean border, no green background) */}
                <div 
                  className="absolute left-0 top-0 h-[44px] sm:h-[46px] w-[44px] sm:w-[46px] rounded-full border border-[#0B2735] pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover:w-full group-hover:bg-[#0B2735]/5"
                />
                
                <span className="relative z-10 text-[11.5px] sm:text-[12px] font-bold tracking-[0.08em] text-[#0B2735] uppercase pl-3.5 pr-2 whitespace-nowrap">
                  FIND OUT MORE
                </span>
              </Link>
            </motion.div>

            {/* Bottom Sub-Split: Left Feature Rows + Right Fixed Solar Energy Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-end pt-3"
            >
              
              {/* ── Feature Rows (Only ONE line with linear fill; turns teal-blue #0A6B88 on hover) ── */}
              <div 
                className="md:col-span-7 flex flex-col justify-between"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {features.map((feature, idx) => {
                  const isCurrent = activeLineIndex === idx;

                  return (
                    <div
                      key={feature.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      className="group/item relative py-3.5 sm:py-4 cursor-pointer transition-colors"
                    >
                      {/* Row Title & Morphing Arrow */}
                      <div className="flex items-center justify-between gap-4 pb-2.5">
                        <span
                          className={`text-[17px] sm:text-[18px] lg:text-[19px] tracking-tight transition-colors duration-200 select-text cursor-text ${
                            isCurrent
                              ? "text-[#0A6B88] font-semibold"
                              : "text-neutral-900 group-hover/item:text-[#0A6B88]"
                          }`}
                          style={{ userSelect: "text", WebkitUserSelect: "text" }}
                        >
                          {feature.title}
                        </span>

                        {/* Arrow with Smooth Morph & Color Shift to Teal-Blue */}
                        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                          {/* Inactive Diagonal Arrow */}
                          <ArrowUpRight
                            className={`w-4 h-4 text-neutral-800 absolute transition-all duration-300 ease-out ${
                              isCurrent ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0"
                            }`}
                          />
                          {/* Active / Hovered Horizontal Arrow */}
                          <ArrowRight
                            className={`w-4 h-4 text-[#0A6B88] absolute transition-all duration-300 ease-out ${
                              isCurrent ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-75 -translate-x-1"
                            }`}
                          />
                        </div>
                      </div>

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

              {/* ── Fixed Solar Energy Preview Card & Description (Stays unchanged as requested) ── */}
              <div className="md:col-span-5 flex flex-col justify-between">
                
                {/* Fixed Solar Panel Sunset Image */}
                <div className="relative w-full aspect-[16/10.5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-neutral-100 shadow-sm">
                  <img
                    src="/why-choose-us/eco-friendly-impact.jpg"
                    alt="Solar panel arrays under sunset sky"
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    draggable={false}
                  />
                </div>

                {/* Fixed Clean Energy Solutions Description (Selectable) */}
                <div className="mt-3.5 min-h-[58px] flex items-start">
                  <p
                    className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.62] font-normal select-text cursor-text"
                    style={{ userSelect: "text", WebkitUserSelect: "text" }}
                  >
                    Our clean energy solutions merge innovation and sustainability to help homes and businesses thrive while minimizing environmental impact
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
