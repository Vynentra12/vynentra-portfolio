"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { ALL_BLOG_POSTS } from "@/lib/blog-data";
import { Search, X, ArrowDown } from "lucide-react";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["ALL", "WIND ENERGY", "SOLAR ENERGY", "HYBRID"];

  const filteredPosts = ALL_BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === "ALL" || post.category.toUpperCase() === activeCategory.toUpperCase();
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const posts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="w-full bg-[#F4F6F8] text-neutral-900 font-sans min-h-screen">

      {/* ── HERO SECTION (Matching Reference Image 4 & 5 Layout) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/insights-hero.jpg"
            alt="Clean energy intelligence, technical analytics and smart grid insights"
            className="w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container: Left Info + Right Scroll to Explore Button */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Back to Home Link (Pure text with arrow, no background, no border) */}
              <div className="mb-4 sm:mb-5">
                <Link
                  href="/"
                  className="inline-flex items-center text-[12px] sm:text-[13px] font-medium tracking-[0.14em] text-white/80 hover:text-white uppercase transition-colors select-none"
                >

                  <span>Back to Home</span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[58px] font-medium text-white tracking-tight leading-[1.08] drop-shadow-sm mb-4 sm:mb-5 select-text">
                Exploring the ideas shaping India&apos;s renewable energy.
              </h1>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-[16px] md:text-[17px] text-white/80 leading-[1.6] max-w-2xl drop-shadow-sm font-normal">
                Perspectives on wind, solar, hybrid technologies, project engineering, and the clean energy transition.
              </p>
            </div>

            {/* Right Scroll Down Element (Matching Image 4 & 5) */}
            <div 
              onClick={() => {
                const el = document.getElementById('insights-grid');
                el ? el.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="shrink-0 flex flex-col items-center gap-2.5 cursor-pointer select-none self-start lg:self-end group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:scale-105">
                <ArrowDown strokeWidth={1.75} className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-white" />
              </div>
              <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/70 group-hover:text-white transition-colors">
                SCROLL TO EXPLORE
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Blog Grid Section */}
      <section id="insights-grid" className="w-full pt-16 pb-24 sm:pb-32 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

          {/* CATEGORY FILTER & SEARCH BAR WITH VISIBLE LIGHT STROKE */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 sm:mb-14">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[6px] text-[10.5px] sm:text-[11.5px] font-normal tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    activeCategory === category 
                      ? "bg-[#0A6B88] border-[#0A6B88] text-white shadow-xs" 
                      : "bg-white border-neutral-200 text-neutral-600 hover:border-[#0A6B88] hover:text-[#0A6B88]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar on Right: With visible light border stroke */}
            <div className="relative w-full sm:w-[280px] lg:w-[300px] xl:w-[320px] shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search insights..."
                className="w-full h-[42px] pl-10 pr-9 rounded-[10px] bg-white border border-neutral-300 shadow-xs text-[13px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#087589] focus:ring-1 focus:ring-[#087589] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5 rounded-full cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Empty State */}
          {posts.length === 0 ? (
            <div className="bg-white rounded-[20px] border border-neutral-200/80 p-12 text-center my-6">
              <p className="text-neutral-600 text-[15px] mb-4">
                No insights found matching &ldquo;{searchQuery}&rdquo; {activeCategory !== "ALL" ? `under ${activeCategory}` : ""}.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="px-5 py-2 rounded-full bg-[#087589] text-white text-[12px] font-semibold tracking-wider uppercase hover:bg-[#065b6b] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Blog Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 items-stretch">
                {posts.map((post, idx) => (
                  <Link
                    key={post.id}
                    href={`/insights/${post.slug || 'inside-the-engineering-of-wind-turbines'}`}
                    className="flex flex-col justify-between h-full group/blog cursor-pointer"
                  >
                    <div className="flex flex-col">
                      {/* Image Container with Dynamic Badge */}
                      <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 select-none">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover/blog:scale-105 transition-transform duration-500"
                        />

                        {/* Squareish Category Badge: Light blue #0A6B88 */}
                        <div className="absolute top-3 left-3 z-10">
                          {idx === 1 ? (
                            <span className="inline-flex items-center bg-[#AEF977] text-neutral-950 font-bold tracking-wider uppercase text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-[6px] shadow-sm">
                              {post.category}
                            </span>
                          ) : idx === 2 ? (
                            <span className="inline-flex items-center bg-black/40 backdrop-blur-md border border-white/30 text-white font-semibold tracking-wider uppercase text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-[6px] shadow-sm">
                              {post.category}
                            </span>
                          ) : (
                            <span className="inline-flex items-center bg-[#0A6B88] text-white font-semibold tracking-wider uppercase text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-[6px] shadow-sm">
                              {post.category}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Meta Date & Read Time */}
                      <div className="mt-4 mb-2">
                        <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-600 uppercase tracking-[0.04em]">
                          {post.date} · {post.readTime}
                        </p>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-neutral-900 leading-[1.3] tracking-tight group-hover/blog:text-[#087589] transition-colors min-h-[46px] sm:min-h-[50px]">
                        {post.title}
                      </h3>
                    </div>

                    {/* Read Insight Button */}
                    <div className="mt-4 sm:mt-5">
                      <span className="inline-flex items-center justify-center h-[38px] px-5 sm:px-6 rounded-full border border-[#0B2735] text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0B2735] transition-all duration-200 group-hover/blog:bg-[#0B2735] group-hover/blog:text-white">
                        READ INSIGHT
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredPosts.length && (
                <div className="flex justify-center mt-12 sm:mt-16">
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center h-[46px] px-8 rounded-full border border-[#0B2735] text-[#0B2735] text-[12px] font-semibold tracking-[0.08em] uppercase select-none cursor-pointer transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                  >
                    <span>LOAD MORE INSIGHTS</span>
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* Footer */}
      <FooterV2 />

    </div>
  );
}
