"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { FooterV2 } from "@/components/sections/FooterV2";
import { ALL_BLOG_POSTS } from "@/lib/blog-data";

export default function BlogGridPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["ALL", ...Array.from(new Set(ALL_BLOG_POSTS.map(post => post.category)))];

  const filteredPosts = ALL_BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "ALL" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const posts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div className="w-full bg-[#F4F6F8] text-neutral-900 font-sans min-h-screen">

      {/* ── HERO SECTION (Restored 100vh Hero) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/12828526/pexels-photo-12828526.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt="Wind turbines landscape hero"
            className="w-full h-full object-cover object-[center_38%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 pt-24">
          
          <div className="max-w-4xl">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                OUR BLOG
              </span>
            </div>
            {/* Same font size as ServicesPage Hero Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-6 select-text">
              Blog & Insights
            </h1>

            {/* Subtitle matching ServicesPage Hero Paragraph */}
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm mb-10 sm:mb-12 font-medium">
              Exploring insights, trends, and project developments in the renewable energy landscape to help you stay informed and inspired.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">BLOG</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Blog Grid Section */}
      <section className="w-full pt-16 pb-24 sm:pb-32 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

          {/* FILTER & SEARCH ROW */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
            
            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-300 border ${
                    activeCategory === category 
                      ? "bg-[#087589] border-[#087589] text-white shadow-sm" 
                      : "bg-white border-black/10 text-neutral-600 hover:border-[#087589] hover:text-[#087589]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full lg:w-[280px] xl:w-[300px] shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search insights..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-black/10 rounded-full py-2 sm:py-2.5 pl-10 pr-4 text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#087589] focus:ring-1 focus:ring-[#087589] transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          {/* 3-Column Responsive Cards Grid matching Home Page Blog Section UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9 lg:gap-10">
            {posts.map((post, idx) => {
              const stepStr = String(idx + 1).padStart(2, '0');
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug || 'inside-the-engineering-of-wind-turbines'}`}
                  className="flex flex-col justify-between h-full group/blog cursor-pointer"
                >
                  <div className="flex flex-col">
                    {/* Image Container with Sleek Glassmorphic Pill Badge */}
                    <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 select-none">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/blog:scale-105"
                      />

                      {/* Small Glassmorphism Badge with hyphen (-) */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-md border border-white/25 text-white text-[9px] sm:text-[9.5px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                          <span>{stepStr}</span>
                          <span className="opacity-60 font-normal">-</span>
                          <span>{post.category}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Meta Date & Read Time */}
                    <div className="mt-4 mb-2">
                      <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-600 uppercase tracking-[0.04em]">
                        {post.date} · {post.readTime}
                      </p>
                    </div>

                    {/* Card Title (font-medium matching home page) */}
                    <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-neutral-900 leading-[1.3] tracking-tight group-hover/blog:text-[#087589] transition-colors min-h-[46px] sm:min-h-[50px]">
                      {post.title}
                    </h3>
                  </div>

                  {/* Read Insight CTA: Regular weight font matching home page */}
                  <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-normal text-neutral-900 uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none">
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
              );
            })}
          </div>

          {/* Centered LOAD MORE NEWS Button */}
          {hasMore && (
            <div className="mt-16 sm:mt-20 flex justify-center w-full">
              <button
                onClick={handleLoadMore}
                className="h-[48px] px-9 rounded-full border border-black text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.06em] text-neutral-900 hover:bg-black hover:text-white transition-all duration-300 shadow-sm active:scale-95 flex items-center justify-center cursor-pointer"
              >
                LOAD MORE INSIGHTS
              </button>
            </div>
          )}

        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
