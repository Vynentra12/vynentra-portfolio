"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  image?: string;
  alt?: string;
}

export function WhyChooseUsSectionV2() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 4 Features
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

  return (
    <section
      id="why-choose-us"
      className="w-full bg-white text-neutral-900 py-16 md:py-24 font-sans relative overflow-hidden select-text"
      style={{ userSelect: "text", WebkitUserSelect: "text" }}
    >
      {/* Symmetrical left and right padding matching other sections */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Main Grid: Left Static Hero Card (5 cols) + Right Content Section (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* ─── LEFT COLUMN: Static Big Hero Card (No animations or sliding transitions) ─── */}
          <div className="lg:col-span-5 flex flex-col w-full">
            <div className="relative w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[650px] xl:h-[700px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm bg-neutral-100">
              <img
                src="/why-choose-us/hero-windmill.jpg"
                alt="Architectural windmill house with solar panels on rotor blades"
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />

              {/* Gentle bottom-light gradient for richness */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

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
              
              {/* ── Feature Rows (Clean title rows, no external-link arrows) ── */}
              <div className="md:col-span-7 flex flex-col justify-between">
                {features.map((feature, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <div
                      key={feature.id}
                      onClick={() => {
                        setSelectedIndex((prev) => (prev === idx ? null : idx));
                      }}
                      className="group/item relative py-3.5 sm:py-4 cursor-pointer transition-colors"
                    >
                      {/* Row Title */}
                      <div className="flex items-center justify-between gap-4 pb-2.5">
                        <span
                          className={`text-[17px] sm:text-[18px] lg:text-[19px] tracking-tight transition-colors duration-200 select-text cursor-pointer ${
                            isSelected
                              ? "text-[#0A6B88] font-medium"
                              : "text-neutral-900 group-hover/item:text-[#0A6B88]"
                          }`}
                          style={{ userSelect: "text", WebkitUserSelect: "text" }}
                        >
                          {feature.title}
                        </span>
                      </div>

                      {/* ── Single Unified Border Line with Linear Fill ── */}
                      <div className="relative w-full h-[1.5px] bg-neutral-200 overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-[#0A6B88] transition-[width] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isSelected ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Fixed Solar Energy Preview Card & Description (Dynamic sync with selected title) ── */}
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

                {/* Clean Energy Solutions Description (Only visible when a title is selected) */}
                <div className="mt-3.5 min-h-[72px] flex items-start">
                  <AnimatePresence mode="wait">
                    {selectedIndex !== null && features[selectedIndex] && (
                      <motion.p
                        key={features[selectedIndex].id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.62] font-normal select-text cursor-text"
                        style={{ userSelect: "text", WebkitUserSelect: "text" }}
                      >
                        {features[selectedIndex].desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
