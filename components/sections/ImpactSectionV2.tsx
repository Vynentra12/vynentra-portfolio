'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ImpactItem {
  id: number;
  stat: string;
  image: string;
  title: string;
  desc: string;
}

const IMPACT_ITEMS: ImpactItem[] = [
  {
    id: 1,
    stat: "1,163 GW",
    image: "https://images.pexels.com/photos/12828526/pexels-photo-12828526.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Harness a Clean Resource",
    desc: "Wind is abundant, renewable, and does not run out — making it a reliable foundation for sustainable energy.",
  },
  {
    id: 2,
    stat: "58+ GW",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Reduce Pollution and Emissions",
    desc: "Wind power produces electricity without greenhouse gases, helping fight climate change and improving air quality.",
  },
  {
    id: 3,
    stat: "8%",
    image: "https://images.pexels.com/photos/27382708/pexels-photo-27382708.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Lower Energy Costs Over Time",
    desc: "Once turbines are installed, wind energy becomes one of the cheapest forms of electricity, protecting consumers.",
  },
  {
    id: 4,
    stat: "80+ GW",
    image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Innovation That Drives Progress",
    desc: "Next-gen aerofoil designs and intelligent pitch control maximize kinetic capture across low-wind corridors.",
  },
  {
    id: 5,
    stat: "500 GW",
    image: "https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Decarbonizing Corporate Grids",
    desc: "Captive wind projects allow commercial and industrial campuses to reach net-zero emissions predictably.",
  },
];

export function ImpactSectionV2() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number>(0);

  // Update active page based on horizontal scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const progress = scrollLeft / maxScroll;
    setActivePage(progress > 0.4 ? 1 : 0);
  };

  // Scroll to page 0 or 1
  const scrollToPage = (pageIndex: number) => {
    if (!scrollContainerRef.current) return;
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    scrollContainerRef.current.scrollTo({
      left: pageIndex === 0 ? 0 : maxScroll,
      behavior: 'smooth',
    });
    setActivePage(pageIndex);
  };

  // Mouse drag handlers for effortless desktop scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-white text-neutral-900 py-16 sm:py-20 md:py-24 overflow-hidden select-text">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header Section */}
        <div className="flex flex-col mb-12 sm:mb-14 md:mb-16">
          <span className="text-[11px] sm:text-[11.5px] font-bold text-neutral-800 uppercase tracking-[0.1em] mb-3 sm:mb-4">
            ENERGY SOLUTIONS TAILORED TO YOUR NEEDS
          </span>

          <h2 className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-bold text-neutral-950 tracking-[-0.03em] leading-[1.12] max-w-3xl">
            Powering communities with clean, reliable,<br className="hidden sm:inline" /> and renewable wind energy
          </h2>
        </div>

        {/* Horizontal Scrollable Track Container */}
        <div className="relative w-full mb-12 sm:mb-14">
          
          {/* Continuous Horizontal Line passing right through the center of all capsule images */}
          <div className="hidden md:block absolute top-[48px] sm:top-[52px] md:top-[56px] -left-[100vw] -right-[100vw] h-[1px] bg-neutral-300 pointer-events-none z-0" />

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`relative z-10 flex gap-8 sm:gap-10 lg:gap-12 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-2 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {IMPACT_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[calc(33.333%-1.75rem)] lg:w-[calc(33.333%-2rem)] flex flex-col justify-between snap-start group/card"
              >
                <div>
                  {/* Compact Pill / Stadium Shaped Image Capsule */}
                  <div className="relative z-10 w-[190px] sm:w-[210px] md:w-[230px] aspect-[2.15/1] rounded-full overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/90 select-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-108"
                    />
                    
                    {/* Smooth Dark Blur Overlay revealing stat on hover */}
                    <div className="absolute inset-0 bg-neutral-950/75 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-center p-2 text-center pointer-events-none">
                      <span className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-none transform translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300 ease-out">
                        {item.stat}
                      </span>
                      <span className="text-[9px] font-semibold text-[#AEF977] uppercase tracking-[0.1em] mt-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-75">
                        METRIC
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-[19px] sm:text-[21px] md:text-[23px] font-bold text-neutral-950 tracking-[-0.015em] leading-[1.24] mt-6 sm:mt-7 mb-2.5 transition-colors group-hover/card:text-neutral-700 select-text">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-neutral-600 leading-[1.62] font-normal mb-5 max-w-sm select-text">
                    {item.desc}
                  </p>
                </div>

                {/* Read More Action with Linear Arrow Pass-Through Animation */}
                <div>
                  <Link
                    href="/#case-studies"
                    className="inline-flex items-center gap-2.5 text-xs sm:text-[12.5px] font-bold text-neutral-900 uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none"
                  >
                    <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                      <ArrowRight 
                        className="w-4 h-4 text-neutral-900 absolute transition-transform duration-300 ease-out group-hover/readmore:translate-x-5" 
                        strokeWidth={2.5} 
                      />
                      <ArrowRight 
                        className="w-4 h-4 text-neutral-900 absolute -translate-x-5 transition-transform duration-300 ease-out group-hover/readmore:translate-x-0" 
                        strokeWidth={2.5} 
                      />
                    </div>
                    <span className="group-hover/readmore:opacity-80 transition-opacity">READ MORE</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2 Carousel Scroll Indicator Dots */}
        <div className="w-full flex items-center justify-center gap-3 pt-2 select-none">
          {[0, 1].map((pageIndex) => {
            const isSelected = activePage === pageIndex;

            return (
              <button
                key={pageIndex}
                onClick={() => scrollToPage(pageIndex)}
                aria-label={`Scroll to page ${pageIndex + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center ${
                  isSelected 
                    ? "w-3 h-3 bg-transparent border-[2px] border-neutral-900" 
                    : "w-1.5 h-1.5 bg-neutral-900 hover:scale-125"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
