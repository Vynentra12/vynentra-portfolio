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
      className="relative w-full h-[520px] sm:h-[570px] md:h-[620px] lg:h-[660px] overflow-hidden bg-black select-text"
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
              className={`relative h-full transition-[flex] duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer will-change-[flex] ${
                isActive 
                  ? "md:flex-[3.6] flex-[3] z-10" 
                  : "md:flex-[0.9] flex-[0.9] hover:brightness-105"
              }`}
            >
              {/* Optional Background Image for Panel 3 */}
              {panel.bgImage && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={panel.bgImage}
                    alt={panel.title}
                    className={`w-full h-full object-cover object-center transition-transform duration-1200 ease-out ${
                      isActive ? "scale-105 brightness-95" : "scale-100 brightness-75"
                    }`}
                  />
                  {/* Subtle Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/35 pointer-events-none" />
                </div>
              )}

              {/* Panel Content Container */}
              <div className="relative z-10 w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between pointer-events-auto">
                
                {/* Top: Headline (Slightly decreased size with clean leading) */}
                <div 
                  className={`w-full max-w-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive 
                      ? "opacity-100 translate-y-0 pointer-events-auto delay-100" 
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[35px] font-bold text-white tracking-[-0.025em] leading-[1.18]">
                    {panel.title}
                  </h3>
                </div>

                {/* Bottom Left: Description and Overlapping Circle READ MORE button */}
                <div 
                  className={`max-w-md pr-4 z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive 
                      ? "opacity-100 translate-y-0 pointer-events-auto delay-150" 
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-white/95 leading-[1.58] font-normal mb-6 max-w-sm sm:max-w-md">
                    {panel.desc}
                  </p>

                  {/* Read More Action with Linear Arrow Pass-Through Animation (Right exit -> Left enter) */}
                  <Link
                    href="/#case-studies"
                    className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none"
                  >
                    <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                      <ArrowRight 
                        className="w-4 h-4 text-white absolute transition-transform duration-300 ease-out group-hover/readmore:translate-x-5" 
                        strokeWidth={2.5} 
                      />
                      <ArrowRight 
                        className="w-4 h-4 text-white absolute -translate-x-5 transition-transform duration-300 ease-out group-hover/readmore:translate-x-0" 
                        strokeWidth={2.5} 
                      />
                    </div>
                    <span className="group-hover/readmore:opacity-80 transition-opacity">READ MORE</span>
                  </Link>
                </div>

                {/* Giant Number Always Visible at Bottom Right of every panel (font-semibold) */}
                <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 md:bottom-5 md:right-8 z-10 select-none pointer-events-none leading-none">
                  <span 
                    className={`text-[85px] sm:text-[110px] md:text-[140px] lg:text-[180px] xl:text-[200px] font-semibold text-white leading-[0.78] tracking-tight block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "scale-100 opacity-100" : "scale-90 opacity-90"
                    }`}
                  >
                    {panel.num}
                  </span>
                </div>

              </div>

              {/* Subtle vertical separator border between panels */}
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/20 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
