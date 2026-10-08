"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface ProjectCard {
  title: string;
  tags: string[];
  image: string;
}

export function FeaturedProjectsSectionV2() {
  // Only 1 project kept as requested
  const project: ProjectCard = {
    title: "Designed for Commercial Solar Plants",
    tags: ["COMMERCIAL", "ROOFTOP"],
    image: "/solar_panels.jpg",
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
              href="/contact"
              className="inline-flex items-center justify-center h-[46px] px-6 sm:px-7 rounded-full border border-white text-white text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-white hover:text-[#087589] active:scale-[0.98]"
            >
              VIEW ALL CASES
            </Link>
          </motion.div>

        </div>

        {/* Horizontal Divider Line with Left Kicker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full border-b border-white/20 pb-4 mb-8 sm:mb-10"
        >
          <span className="text-[11px] sm:text-[11.5px] font-medium text-white uppercase tracking-[0.1em] select-text">
            REAL RESULTS POWERED BY CLEAN ENERGY
          </span>
        </motion.div>

        {/* Single Featured Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col group cursor-pointer"
        >
          {/* Hero Image Container: completely clean without drop shadow or dark tint */}
          <div className="w-full h-[210px] xs:h-[230px] sm:h-[320px] md:h-[460px] lg:h-[520px] rounded-[18px] sm:rounded-[22px] md:rounded-[28px] overflow-hidden relative shadow-none">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-5 sm:mt-6 mb-2 overflow-hidden">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="border border-white/60 text-white rounded-full px-3 py-1 text-[10px] sm:text-[10.5px] font-medium tracking-wider uppercase whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title with hover underline */}
          <div className="w-fit mt-1">
            <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-medium text-white tracking-tight leading-[1.2] cursor-pointer group-hover:underline underline-offset-4 decoration-white/90 decoration-[1.5px] transition-all duration-200">
              {project.title}
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
