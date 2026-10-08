"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface BlogPost {
  step: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

export function BlogSectionV2() {
  const blogs: BlogPost[] = [
    {
      step: "01",
      slug: "inside-the-engineering-of-wind-turbines",
      image: "/wind_farm_sunset.jpg",
      category: "WIND ENERGY",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "Why wind energy is becoming an important part of India's energy mix",
      description:
        "Exploring the changing role of wind energy and how it can complement solar generation as India's energy requirements continue to grow.",
    },
    {
      step: "02",
      slug: "the-environmental-impact-of-wind-energy",
      image: "/why-choose-us/expert-guidance.jpg",
      category: "PROJECT DEVELOPMENT",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "What actually goes into developing a renewable energy project",
      description:
        "From understanding the site and assessing energy potential to selecting technology and coordinating execution, we are breaking down what happens behind the project.",
    },
    {
      step: "03",
      slug: "the-real-numbers-behind-green-energy",
      image: "/solutions/solar-installation.jpg",
      category: "RENEWABLE TECHNOLOGY",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "Why the right renewable technology starts with the site",
      description:
        "Wind speed, available space, energy consumption and surrounding conditions can all influence the right solution. We are looking at why technology selection needs to begin with the site.",
    },
    {
      step: "04",
      slug: "a-world-powered-by-wind-and-sunlight",
      image: "/hybrid-wind-solar.jpg",
      category: "WIND + SOLAR",
      date: "DECEMBER 10, 2025",
      readTime: "5 MIN READ",
      title: "Wind and solar are not competing technologies",
      description:
        "Exploring how different generation profiles can work together through hybrid renewable energy systems and create more effective solutions for different energy requirements.",
    },
  ];

  return (
    <section id="blog" className="w-full bg-[#F4F6F8] text-neutral-900 py-16 md:py-24 font-sans select-text">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col max-w-[820px]"
          >
            <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
              ENERGY INSIGHTS
            </SectionBadge>
            
            {/* Main Title */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-2.5">
              Exploring the ideas shaping India&apos;s renewable energy landscape.
            </h2>

            {/* Subtitle / Description */}
            <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-[1.6] max-w-[580px] font-normal">
              We are sharing perspectives on wind, solar, hybrid energy, project development and the technologies shaping how India generates and uses power.
            </p>
          </motion.div>

          {/* Top Right "VIEW ALL INSIGHTS" Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 pb-1"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center h-[46px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
            >
              VIEW ALL INSIGHTS
            </Link>
          </motion.div>
        </div>

        {/* 3-Column Blog Cards Grid with Clean Layout (No White Box Enclosure) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 items-stretch">
          {blogs.slice(0, 3).map((blog, idx) => (
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
                  {/* Image Container with Sleek Glassmorphic Pill Badge */}
                  <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 select-none">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/blog:scale-105"
                    />

                    {/* Small Glassmorphism Badge with hyphen (-) */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-md border border-white/25 text-white text-[9px] sm:text-[9.5px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                        <span>{blog.step}</span>
                        <span className="opacity-60 font-normal">-</span>
                        <span>{blog.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Meta Date & Read Time */}
                  <div className="mt-4 mb-2">
                    <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-600 uppercase tracking-[0.04em]">
                      {blog.date} · {blog.readTime}
                    </p>
                  </div>

                  {/* Card Title (font-medium matching FAQ section question font weight) */}
                  <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-neutral-900 leading-[1.3] tracking-tight group-hover/blog:text-[#087589] transition-colors min-h-[46px] sm:min-h-[50px]">
                    {blog.title}
                  </h3>
                </div>

                {/* Read Insight CTA: Regular weight font matching user request */}
                <div 
                  className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-normal text-neutral-900 uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none"
                >
                  <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                    <ArrowRight 
                      className="w-4 h-4 text-neutral-900 group-hover/blog:text-[#087589] absolute transition-transform duration-300 ease-out group-hover/blog:translate-x-5" 
                      strokeWidth={1.8} 
                    />
                    <ArrowRight 
                      className="w-4 h-4 text-neutral-900 group-hover/blog:text-[#087589] absolute -translate-x-5 transition-transform duration-300 ease-out group-hover/blog:translate-x-0" 
                      strokeWidth={1.8} 
                    />
                  </div>
                  <span className="group-hover/blog:text-[#087589] transition-colors">READ INSIGHT</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
