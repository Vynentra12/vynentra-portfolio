"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { ALL_BLOG_POSTS } from "@/lib/blog-data";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(ALL_BLOG_POSTS.map(post => post.category)))];

  const filteredPosts = ALL_BLOG_POSTS.filter(post => {
    return activeCategory === "ALL" || post.category === activeCategory;
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
            src="/insights-hero.jpg"
            alt="Clean energy intelligence, technical analytics and smart grid insights"
            className="w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            {/* Minimal Frosted Glass Pill Breadcrumb (Option C) */}
            <div className="mb-5 sm:mb-6">
              <nav aria-label="Breadcrumbs" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-[11.5px] font-normal text-white/80 shadow-sm">
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
                <span className="text-white/40 select-none">/</span>
                <span className="text-white font-medium select-none">Insights</span>
              </nav>
            </div>

            {/* Same font size as ServicesPage Hero Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-6 select-text">
              Insights
            </h1>

            {/* Subtitle matching ServicesPage Hero Paragraph */}
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm font-medium">
              Exploring insights, trends, and project developments in the renewable energy landscape to help you stay informed and inspired.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Grid Section */}
      <section className="w-full pt-16 pb-24 sm:pb-32 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(6);
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[6px] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-300 border ${
                  activeCategory === category 
                    ? "bg-[#087589] border-[#087589] text-white shadow-sm" 
                    : "bg-white border-black/10 text-neutral-600 hover:border-[#087589] hover:text-[#087589]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 3-Column Responsive Cards Grid matching Home Page Blog Section UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9 lg:gap-10">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug || 'inside-the-engineering-of-wind-turbines'}`}
                className="flex flex-col justify-between h-full group/blog cursor-pointer"
              >
                <div className="flex flex-col">
                  {/* Image Container with Squareish Badge */}
                  <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 select-none">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Squareish Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center bg-black/55 backdrop-blur-md border border-white/30 text-white text-[9.5px] sm:text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-[6px] shadow-sm">
                        {post.category}
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

                {/* Read Insight Button: Cohesive stroke component without arrows */}
                <div className="mt-4 sm:mt-5">
                  <span className="inline-flex items-center justify-center h-[34px] px-4 rounded-full border border-neutral-300 text-[11px] font-medium tracking-[0.06em] uppercase text-neutral-800 group-hover/blog:bg-[#0B2735] group-hover/blog:text-white group-hover/blog:border-[#0B2735] transition-all duration-200">
                    READ INSIGHT
                  </span>
                </div>
              </Link>
            ))}
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
