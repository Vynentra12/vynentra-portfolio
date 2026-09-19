'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProcessPanel {
  id: number;
  num: string;
  title: string;
  desc: string;
  bgColor: string;
  bgImage?: string;
}

const PANELS: ProcessPanel[] = [
  {
    id: 1,
    num: "1",
    title: "Reducing carbon emissions and fighting climate change",
    desc: "By replacing traditional energy sources, wind power significantly cuts greenhouse gas emissions, helping to slow down global warming and protect ecosystems.",
    bgColor: "#7FA6B9", // Slate/Steel Blue
  },
  {
    id: 2,
    num: "2",
    title: "Cutting greenhouse gases and combating global warming",
    desc: "By replacing traditional energy sources, wind power significantly cuts greenhouse gas emissions, helping to slow down global warming and protect ecosystems.",
    bgColor: "#0B2735", // Deep Navy
  },
  {
    id: 3,
    num: "3",
    title: "Lowering CO₂ footprint and tackling climate crisis",
    desc: "By replacing traditional energy sources, wind power significantly cuts greenhouse gas emissions, helping to slow down global warming and protect ecosystems.",
    bgColor: "#1c2e3d",
    bgImage: "https://images.pexels.com/photos/27382708/pexels-photo-27382708.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    num: "4",
    title: "Slashing carbon output and battling rising temperatures",
    desc: "By replacing traditional energy sources, wind power significantly cuts greenhouse gas emissions, helping to slow down global warming and protect ecosystems.",
    bgColor: "#84D447", // Vivid Leaf Green
  },
];

export function ProcessSectionV2() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section 
      id="process" 
      className="relative w-full h-[650px] sm:h-[650px] md:h-[580px] lg:h-[620px] overflow-hidden bg-black select-text"
    >
      <div className="w-full h-full flex flex-col md:flex-row">
        {PANELS.map((panel) => {
          const isActive = activeId === panel.id;

          return (
            <div
              key={panel.id}
              onMouseEnter={() => setActiveId(panel.id)}
              onClick={() => setActiveId(panel.id)}
              style={{ backgroundColor: panel.bgColor }}
              className={`relative h-full transition-[flex] duration-950 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer will-change-[flex] ${
                isActive 
                  ? "md:flex-[3.8] flex-[4] z-10" 
                  : "md:flex-[1] flex-[1] hover:brightness-105"
              }`}
            >
              {/* FIXED INNER CANVAS: 
                  Maintains absolute dimensions so the image and text NEVER reflow, stretch, zoom, or jump. 
                  The outer panel acts strictly as a sliding curtain/window reveal. 
              */}
              <div className="absolute left-0 top-0 h-full w-full md:w-[850px] lg:w-[950px] pointer-events-none">
                
                {/* Background Image (Locked in static coordinate space) */}
                {panel.bgImage && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={panel.bgImage}
                      alt={panel.title}
                      className="w-full h-full object-cover object-center brightness-95"
                      loading="lazy"
                    />
                    {/* Subtle Contrast Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
                  </div>
                )}

                {/* Content Container: Fully visible when active, clean fade when collapsed */}
                <div 
                  className={`relative z-10 w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between transition-opacity duration-500 ease-out ${
                    isActive ? "opacity-100 pointer-events-auto delay-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  
                  {/* Top: Headline */}
                  <div className="w-full max-w-lg">
                    <h3 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-bold text-white tracking-[-0.025em] leading-[1.18]">
                      {panel.title}
                    </h3>
                  </div>

                  {/* Bottom Left: Description & Blog-Style Circle-to-Pill Morphing Button */}
                  <div className="max-w-md pr-4 z-20">
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/95 leading-[1.55] font-normal mb-6 max-w-sm sm:max-w-md">
                      {panel.desc}
                    </p>

                    {/* Blog-Style Stretching Circle-to-Pill Button */}
                    <Link
                      href="/#case-studies"
                      className="group/readmore relative inline-flex items-center h-[44px] px-5 select-none cursor-pointer w-fit"
                    >
                      {/* Morphing circle outline that stretches into full pill on hover */}
                      <div 
                        className="absolute left-0 top-0 h-[44px] w-[44px] rounded-full border border-white pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover/readmore:w-full group-hover/readmore:bg-white/10"
                      />
                      
                      {/* Button text */}
                      <span className="relative z-10 text-[11.5px] sm:text-[12px] font-bold tracking-[0.08em] text-white uppercase pl-3 pr-1 whitespace-nowrap">
                        READ MORE
                      </span>
                    </Link>
                  </div>

                </div>
              </div>

              {/* Number: Centered at bottom when inactive, pinned to bottom-right when active */}
              <div 
                className={`absolute z-20 select-none pointer-events-none leading-none transition-all duration-950 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive 
                    ? "bottom-2 right-4 sm:bottom-4 sm:right-6 md:bottom-5 md:right-8 translate-x-0 translate-y-0" 
                    : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-6 md:translate-y-0"
                }`}
              >
                <span className={`font-bold text-white leading-[0.78] tracking-tight block transition-all duration-950 ${
                  isActive
                    ? "text-[85px] sm:text-[110px] md:text-[140px] lg:text-[170px] xl:text-[190px]"
                    : "text-[65px] sm:text-[110px] md:text-[140px] lg:text-[170px] xl:text-[190px]"
                }`}>
                  {panel.num}
                </span>
              </div>

              {/* Subtle vertical separator line between panels */}
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/20 pointer-events-none z-30" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
