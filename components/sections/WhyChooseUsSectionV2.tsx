"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // 3 Services matching the new services on /services
  const features: FeatureItem[] = [
    {
      id: "bess-battery-energy-storage-systems",
      title: "BESS: Battery Energy Storage Systems",
      desc: "We are providing battery energy storage solutions for large-scale events, supporting temporary power requirements through energy storage systems designed around event demand, duration and site conditions.",
      image: "/why-choose-us/battery-storage.webp",
      alt: "Battery energy storage systems (BESS) for clean power resilience",
    },
    {
      id: "end-to-end-project-development",
      title: "End-To-End Project Development",
      desc: "We are developing wind, solar and hybrid energy projects around site conditions, energy requirements and project feasibility, from initial assessment and planning to execution.",
      image: "/solutions/solar-installation.jpg",
      alt: "End-to-end renewable energy project development, assessment and execution",
    },
    {
      id: "ipp-independent-power-producer",
      title: "IPP: Independent Power Producer",
      desc: "Designed for businesses with energy requirements of up to 3 MW, we are creating opportunities to access renewable power without directly investing in the generation infrastructure.",
      image: "/hybrid-wind-solar.jpg",
      alt: "Independent power producer renewable energy solutions for businesses",
    },
  ];

  const currentFeature = features[selectedIndex] ?? features[0];

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

          {/* ─── LEFT COLUMN: Static Hero Card (10px smaller on desktop, center-aligned) ─── */}
          <div className="lg:col-span-5 flex flex-col w-full h-full justify-center">
            <div className="relative w-full h-[280px] sm:h-[370px] md:h-[440px] lg:h-[calc(100%-10px)] min-h-[280px] lg:min-h-[470px] my-auto rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-sm bg-neutral-100">
              <img
                src="/why-choose-us/hero-windmill.webp"
                alt="Architectural windmill house with solar panels on rotor blades"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />

              {/* Gentle bottom-light gradient for richness */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Header, CTA Button & Interactive Split View ─── */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-1 lg:pt-2">

            {/* Top Section: Headline & Stroke-Only CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col mb-6 lg:mb-8"
            >
              {/* Badge: WHAT WE DO */}
              <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
                WHAT WE DO
              </SectionBadge>

              {/* Main Headline: Exact requested copy & fully selectable */}
              <h2
                className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 lg:mb-8 max-w-[640px] select-text cursor-text"
                style={{ userSelect: "text", WebkitUserSelect: "text" }}
              >
                Develop renewable energy solutions for evolving energy needs
              </h2>

              {/* CTA Button with clean stroke in default & matching hover */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11.5px] sm:text-[12px] font-medium tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
              >
                <span>EXPLORE OUR SERVICES</span>
              </Link>
            </motion.div>

            {/* Bottom Sub-Split: Left Feature Rows + Right Dynamic Service Preview (Center-Aligned) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center pt-3"
            >

              {/* ── Feature Rows (Clean title rows, center aligned) ── */}
              <div className="md:col-span-7 flex flex-col justify-center">
                {features.map((feature, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <div
                      key={feature.id}
                      onClick={() => {
                        setSelectedIndex(idx);
                      }}
                      className="group/item relative py-3.5 sm:py-4 cursor-pointer transition-colors"
                    >
                      {/* Row Title */}
                      <div className="flex items-center justify-between gap-4 pb-2.5">
                        <span
                          className={`text-[17px] sm:text-[18px] lg:text-[19px] tracking-tight transition-colors duration-200 select-text cursor-pointer ${isSelected
                            ? "text-[#0A6B88] font-medium"
                            : "text-neutral-900 group-hover/item:text-[#0A6B88]"
                            }`}
                          style={{ userSelect: "text", WebkitUserSelect: "text" }}
                        >
                          {feature.title}
                        </span>
                      </div>

                      {/* ── Single Unified Border Line with Controlled Max-Width to prevent excessive right line width ── */}
                      <div className="relative w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[375px] h-[1.5px] bg-neutral-200 overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-[#0A6B88] transition-[width] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isSelected ? "w-full" : "w-0"
                            }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Dynamic Service Preview Card: Top Image, Bottom Description (Center aligned) ── */}
              <div className="md:col-span-5 flex flex-col items-start justify-center gap-3.5">

                {/* Dynamic Service Image (Top) */}
                <div className="relative w-full aspect-[16/10.5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-neutral-100 shadow-sm shrink-0">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={currentFeature.id}
                      src={currentFeature.image}
                      alt={currentFeature.alt}
                      loading="lazy"
                      decoding="async"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: "linear" }}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                      draggable={false}
                    />
                  </AnimatePresence>
                </div>

                {/* Clean Energy Solutions Description (Bottom - text baseline perfectly aligns with bottom of left hero image) */}
                <div className="w-full">
                  <p
                    key={currentFeature.id}
                    className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.62] font-normal select-text cursor-text transition-opacity duration-200"
                    style={{ userSelect: "text", WebkitUserSelect: "text" }}
                  >
                    {currentFeature.desc}
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

