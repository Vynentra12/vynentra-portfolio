"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCard {
  title: string;
  tags: string[];
  image: string;
}

export function FeaturedProjectsSectionV2() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: ProjectCard[] = [
    {
      title: "Designed for Commercial Solar Plants",
      tags: ["COMMERCIAL", "ROOFTOP"],
      image: "/solar_panels.jpg",
    },
    {
      title: "A Turbine for Every Rooftop",
      tags: ["URBAN", "CLEAN ENERGY"],
      image: "https://images.pexels.com/photos/32182706/pexels-photo-32182706.jpeg",
    },
    {
      title: "Engineered for Commercial Wind",
      tags: ["WIND POWER", "INDUSTRIAL"],
      image: "https://images.pexels.com/photos/32831487/pexels-photo-32831487.jpeg",
    },
  ];

  return (
    <section id="featured-projects" className="w-full bg-[#087589] text-white py-16 md:py-24 lg:py-28 font-sans relative">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10 md:mb-12">
          
          {/* Main Giant Headline matching reference: Global projects. Local impact */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[88px] font-bold text-white tracking-[-0.035em] leading-[0.94]">
              Global projects.<br />
              Local impact
            </h2>
          </motion.div>

          {/* Right Column: Subtitle + Linear Stretching VIEW ALL CASES CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start lg:items-end justify-between gap-6 lg:pb-1"
          >
            <p className="text-[18px] sm:text-[21px] lg:text-[23px] font-medium text-white/95 leading-[1.28] max-w-[340px] text-left lg:text-right">
              Each project we complete is more than infrastructure
            </p>

            {/* Linear Stretching Circle-to-Pill Button */}
            <a
              href="#case-studies"
              className="group/cta relative inline-flex items-center h-[46px] px-6 select-none cursor-pointer"
            >
              {/* Animated morph outline */}
              <div 
                className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full border border-white pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover/cta:w-full group-hover/cta:bg-white/10"
              />
              
              {/* Text */}
              <span className="relative z-10 text-[12px] sm:text-[12.5px] font-bold tracking-[0.06em] text-white uppercase pl-3.5 pr-2 whitespace-nowrap">
                VIEW ALL CASES
              </span>
            </a>
          </motion.div>

        </div>

        {/* Horizontal Divider Line with Left Kicker Sitting Above the Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full border-b border-white/20 pb-4 mb-8 sm:mb-10"
        >
          <span className="text-[11px] sm:text-[11.5px] font-bold text-white uppercase tracking-[0.1em] select-text">
            REAL RESULTS POWERED BY THE WIND
          </span>
        </motion.div>

        {/* Interactive 3-Card Accordion Grid: Center-anchored stationary images without zoom */}
        <div 
          onMouseLeave={() => setHoveredIndex(null)}
          className="flex flex-col md:flex-row gap-5 lg:gap-6 items-start w-full"
        >
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;

            // Smooth linear accordion expansion
            let flexClass = "md:flex-1";
            if (isAnyHovered) {
              flexClass = isHovered ? "md:flex-[1.85]" : "md:flex-[0.88]";
            }

            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: "easeOut" }}
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`${flexClass} w-full flex flex-col group cursor-pointer transition-[flex] duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] min-w-0`}
              >
                {/* Image Container: Center-locked canvas keeps turbine framed in the center as card expands */}
                <div className="w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[480px] rounded-[16px] sm:rounded-[18px] overflow-hidden relative bg-black/20 shadow-md">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[650px] md:w-[750px] lg:w-[850px] pointer-events-none">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center select-none"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Category Outlined Badges */}
                <div className="flex flex-wrap items-center gap-2 mt-4 mb-1 overflow-hidden">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="border border-white/60 text-white rounded-full px-2.5 sm:px-3 py-0.5 text-[9.5px] sm:text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title (Hover underline appears strictly on hover without text overlap) */}
                <div className="w-fit mt-2">
                  <h3 className="text-[20px] sm:text-[23px] md:text-[24px] lg:text-[26px] font-bold text-white tracking-tight leading-[1.24] cursor-pointer group-hover:underline underline-offset-4 decoration-white/90 decoration-[1.5px] transition-all duration-200">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
