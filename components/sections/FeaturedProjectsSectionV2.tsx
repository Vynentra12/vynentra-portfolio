"use client";

import React, { useState } from "react";

interface ProjectCard {
  title: string;
  tags: string[];
  image: string;
}

export function FeaturedProjectsSectionV2() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: ProjectCard[] = [
    {
      title: "Designed for Modern Rooftops",
      tags: ["COMMERCIAL", "ROOFTOP"],
      image: "https://i.pinimg.com/736x/e6/7b/99/e67b9951d18c508437f685e64ebd11c1.jpg",
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
          
          {/* Main Giant Headline (India-focused) */}
          <div className="flex flex-col">
            <h2 className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-bold text-white tracking-[-0.035em] leading-[0.96]">
              National projects.<br />
              Local impact
            </h2>
          </div>

          {/* Right Column: Subtitle + Linear Stretching VIEW ALL CASES CTA */}
          <div className="flex flex-col items-start lg:items-end justify-between gap-6 lg:pb-1">
            <p className="text-[18px] sm:text-[21px] lg:text-[23px] font-medium text-white/95 leading-[1.28] max-w-[330px] text-left lg:text-right">
              Each project we complete is more than infrastructure
            </p>

            {/* Linear Stretching Circle-to-Pill Button */}
            <a
              href="#case-studies"
              className="group relative inline-flex items-center h-[46px] px-6 select-none cursor-pointer"
            >
              {/* Animated morph outline */}
              <div 
                className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full border border-white pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover:w-full group-hover:bg-white/10"
              />
              
              {/* Text */}
              <span className="relative z-10 text-[12px] sm:text-[12.5px] font-bold tracking-[0.06em] text-white uppercase pl-3.5 pr-2 whitespace-nowrap">
                VIEW ALL CASES
              </span>
            </a>
          </div>

        </div>

        {/* Horizontal Divider Line with Left Kicker */}
        <div className="w-full border-t border-white/20 pt-4 mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-bold text-white/90 uppercase tracking-[0.08em]">
            REAL RESULTS POWERED BY THE WIND
          </span>
        </div>

        {/* Interactive 3-Card Accordion Grid with directional linear stretch & Zero Overlap */}
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
              flexClass = isHovered ? "md:flex-[1.8]" : "md:flex-[0.9]";
            }

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`${flexClass} w-full flex flex-col group cursor-pointer transition-all duration-700 ease-[0.16,1,0.3,1] min-w-0`}
              >
                {/* Image Container with refined corner radius */}
                <div className="w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[480px] rounded-[16px] sm:rounded-[18px] overflow-hidden relative bg-black/20 shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
