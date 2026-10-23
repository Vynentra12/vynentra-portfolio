"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Zap } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function FeaturedProjectsSectionV2() {
  const project = {
    title: "Hybrid Wind Turbine Installation by Vynentra",
    slug: "hybrid-wind-turbine-surat",
    location: "Surat, Gujarat",
    technology: "5 kW Hybrid Wind–Solar",
    image: "/case-studies/case-study-1-surat.webp",
  };

  return (
    <section id="featured-projects" className="w-full bg-[#087589] text-white py-16 md:py-24 font-sans relative select-text">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">

        {/* Top Header Row matching the Homepage Design System */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">

          {/* Left Column: Badge + Title + Subtitle aligned to design system */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col max-w-[820px]"
          >
            <SectionBadge theme="light" className="mb-4 sm:mb-5 w-fit">
              FEATURED PROJECTS
            </SectionBadge>

            {/* Standardized Title matching Blog & Why Choose Us sections */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-tight leading-[1.18] mb-2.5">
              Global projects, local impact
            </h2>

            {/* Standardized Subtitle matching design system body typography */}
            <p className="text-[14px] sm:text-[14.5px] text-white/80 leading-[1.6] max-w-[560px] font-normal">
              Each project we complete is more than infrastructure - it is practical, high-efficiency renewable energy built to perform.
            </p>
          </motion.div>

          {/* Right Column: Standardized CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 pb-1"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center h-[46px] px-6 sm:px-7 rounded-full border border-white text-white text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-white hover:text-[#087589] active:scale-[0.98]"
            >
              VIEW ALL CASES
            </Link>
          </motion.div>

        </div>

        {/* Single Featured Project Showcase - Links directly to 1st Case Study Detail Page */}
        <Link
          href={`/case-studies/${project.slug}`}
          className="w-full flex flex-col group cursor-pointer block"
        >
          {/* Hero Image Container: clean with original featured project image */}
          <div className="w-full h-[210px] xs:h-[230px] sm:h-[320px] md:h-[460px] lg:h-[520px] rounded-[18px] sm:rounded-[22px] md:rounded-[28px] overflow-hidden relative shadow-none">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center select-none"
            />
          </div>

          {/* Tags with MapPin & Zap Icons (Clean text without border/pill background) */}
          <div className="flex flex-wrap items-center gap-4 mt-5 sm:mt-6 mb-2 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 text-white/85 text-[11px] sm:text-[12px] font-normal tracking-[0.1em] uppercase whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-white/80" />
              <span>{project.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/85 text-[11px] sm:text-[12px] font-normal tracking-[0.1em] uppercase whitespace-nowrap">
              <Zap className="w-3.5 h-3.5 text-white/80" />
              <span>{project.technology}</span>
            </span>
          </div>

          {/* Title and Date Area (White text stays white on hover) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1 w-full">
            <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white tracking-tight leading-[1.2] cursor-pointer transition-all duration-200">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-2.5 text-white/90 shrink-0 pr-4">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.05em]">
                OCT 09, 2026 - 10:30 AM
              </span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
