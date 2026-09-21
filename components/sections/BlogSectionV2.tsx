import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
}

export function BlogSectionV2() {
  const blogs: BlogPost[] = [
    {
      slug: "inside-the-engineering-of-wind-turbines",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
      category: "WIND ENERGY",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "Designing wind projects for long-term performance",
    },
    {
      slug: "the-environmental-impact-of-wind-energy",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop",
      category: "PROJECT DEVELOPMENT",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "From planning to power: building renewable energy projects",
    },
    {
      slug: "the-real-numbers-behind-green-energy",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      category: "RENEWABLE TECHNOLOGY",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "The innovations making clean energy more efficient",
    },
    {
      slug: "a-world-powered-by-wind-and-sunlight",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
      category: "ENERGY INFRASTRUCTURE",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "Building the infrastructure for a cleaner energy future",
    },
  ];

  return (
    <section id="blog" className="w-full bg-[#EBE7E0] text-neutral-900 py-16 md:py-24 font-sans select-text">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col max-w-[820px]"
          >
            {/* Tagline / Section Name (Matching FAQ section) */}
            <span className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-800 uppercase tracking-[0.06em] mb-2.5">
              ENERGY INSIGHTS
            </span>
            
            {/* Main Title (Matching FAQ section) */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold text-neutral-900 tracking-tight leading-[1.18] mb-2.5">
              Insights, ideas, and stories shaping <br className="hidden sm:inline" />
              the future of renewable energy
            </h2>

            {/* Subtitle / Body Text (Matching FAQ section) */}
            <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-[1.6] max-w-[560px] font-normal">
              Exploring the innovations, environmental impacts, and project developments driving the global energy transition.
            </p>
          </motion.div>

          {/* Top Right "VIEW ALL INSIGHTS" Linear Stretching Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 pb-1"
          >
            <Link
              href="/blog"
              className="group relative inline-flex items-center h-[46px] px-6 select-none cursor-pointer"
            >
              {/* The Linear Stretching Circle-to-Pill Outline Animation */}
              <div 
                className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full border border-[#0B2735] pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover:w-full group-hover:bg-[#0B2735]/5"
              />
              
              {/* Text with natural positioning */}
              <span className="relative z-10 text-[12px] sm:text-[12.5px] font-bold tracking-[0.06em] text-[#0B2735] uppercase pl-3.5 pr-2 whitespace-nowrap">
                VIEW ALL INSIGHTS
              </span>
            </Link>
          </motion.div>
        </div>

        {/* 4-Column Blog Cards Grid with Uniform Equal Card Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 items-stretch">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, ease: "easeOut" }}
              className="h-full"
            >
              <Link 
                href={`/blog/${blog.slug}`}
                className="flex flex-col justify-between h-full group/blog cursor-pointer"
              >
              <div className="flex flex-col">
                {/* Image Container */}
                <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-300 select-none">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/blog:scale-105"
                  />

                  {/* Category Lime Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-block bg-[#AEF977] text-black text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Card Meta (DECEMBER 10, 2025 · 5 MIN READ) */}
                <div className="mt-4 mb-2">
                  <p className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-700 uppercase tracking-[0.04em]">
                    {blog.date} · {blog.readTime}
                  </p>
                </div>

                {/* Card Title (Uniform multi-line alignment matching FAQ h3 font size) */}
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-neutral-900 leading-[1.3] tracking-tight group-hover/blog:text-neutral-700 transition-colors min-h-[48px] sm:min-h-[54px] lg:min-h-[60px]">
                  {blog.title}
                </h3>
              </div>

              {/* Read Insight Action with Linear Arrow Pass-Through Animation (Aligned at bottom) */}
              <div 
                className="mt-5 inline-flex items-center gap-2 text-xs sm:text-[12.5px] font-semibold text-neutral-900 uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none"
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
                <span className="group-hover/readmore:opacity-80 transition-opacity">READ INSIGHT</span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
