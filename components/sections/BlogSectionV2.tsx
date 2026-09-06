"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
}

export function BlogSectionV2() {
  const blogs: BlogPost[] = [
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
      category: "RENEWABLE",
      date: "DECEMBER 10, 2025",
      author: "HARRY WUKO",
      title: "Inside the engineering of wind turbines",
    },
    {
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop",
      category: "EQUIPMENT",
      date: "DECEMBER 10, 2025",
      author: "HARRY WUKO",
      title: "The environmental impact of wind energy",
    },
    {
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      category: "SOLAR",
      date: "DECEMBER 10, 2025",
      author: "HARRY WUKO",
      title: "The real numbers behind green energy",
    },
    {
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
      category: "WIND ENERGY",
      date: "DECEMBER 10, 2025",
      author: "HARRY WUKO",
      title: "How wind power connects technology",
    },
  ];

  return (
    <section id="blog" className="w-full bg-[#EBE7E0] text-neutral-900 py-16 md:py-24 font-sans">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div className="flex flex-col gap-2.5 max-w-[760px]">
            {/* Tagline (1 Line) */}
            <span className="text-[11px] sm:text-xs font-bold text-neutral-800 uppercase tracking-widest">
              EXPLORE LATEST NEWS &amp; TIPS
            </span>
            
            {/* Main Title (2 Lines) */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-semibold text-neutral-900 tracking-tight leading-[1.12]">
              News, updates, and analysis shaping the future of energy
            </h2>
          </div>

          {/* Top Right "READ ALL NEWS" Linear Stretching Button */}
          <div className="shrink-0 pb-1">
            <a
              href="/blog"
              className="group relative inline-flex items-center h-[48px] px-6 select-none cursor-pointer"
            >
              {/* The Linear Stretching Circle-to-Pill Outline Animation */}
              <div 
                className="absolute left-0 top-0 h-[48px] w-[48px] rounded-full border border-neutral-900 pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover:w-full group-hover:bg-neutral-900/5"
              />
              
              {/* Text with natural positioning */}
              <span className="relative z-10 text-[12.5px] sm:text-[13px] font-bold tracking-[0.06em] text-neutral-900 uppercase pl-3.5 pr-2 whitespace-nowrap">
                READ ALL NEWS
              </span>
            </a>
          </div>
        </div>

        {/* 4-Column Blog Cards Grid matching exact reference styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {blogs.map((blog, idx) => (
            <article 
              key={idx}
              className="flex flex-col"
            >
              {/* Image Container with precise aspect ratio and rounded corners matching reference */}
              <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-300 select-none">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />

                {/* Category Lime Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-block bg-[#AEF977] text-black text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card Meta (Date _ By Author) */}
              <div className="mt-5 mb-2.5">
                <p className="text-[11px] sm:text-[12px] font-bold text-neutral-800 uppercase tracking-[0.02em]">
                  {blog.date} _ BY {blog.author}
                </p>
              </div>

              {/* Card Title (Semibold) */}
              <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-neutral-900 leading-[1.2] tracking-tight">
                {blog.title}
              </h3>

              {/* Read More Action with Linear Arrow Pass-Through Animation (Right exit -> Left enter) */}
              <a 
                href="#contact"
                className="mt-5 inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-neutral-900 uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none"
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
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
