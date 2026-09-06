"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterV2 } from "@/components/sections/FooterV2";

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
}

const INITIAL_POSTS: BlogPost[] = [
  {
    id: 1,
    category: "RENEWABLE",
    date: "DECEMBER 10, 2025",
    title: "Inside the engineering of wind turbines",
    image: "https://images.pexels.com/photos/32831487/pexels-photo-32831487.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    category: "EQUIPMENT",
    date: "DECEMBER 10, 2025",
    title: "The environmental impact of wind energy",
    image: "https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    category: "SOLAR",
    date: "DECEMBER 10, 2025",
    title: "The real numbers behind green energy",
    image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    category: "SOLAR",
    date: "DECEMBER 10, 2025",
    title: "A world powered by wind and sunlight",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    category: "EQUIPMENT",
    date: "DECEMBER 10, 2025",
    title: "The economic ripple of renewable energy",
    image: "https://images.pexels.com/photos/34727208/pexels-photo-34727208.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    category: "SOLAR",
    date: "DECEMBER 10, 2025",
    title: "Building the future of sustainable power",
    image: "https://images.pexels.com/photos/7763083/pexels-photo-7763083.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const MORE_POSTS: BlogPost[] = [
  {
    id: 7,
    category: "SOLAR",
    date: "OCTOBER 14, 2025",
    title: "Hybrid wind-solar configurations for zero-outage sites",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 8,
    category: "RENEWABLE",
    date: "SEPTEMBER 28, 2025",
    title: "Life cycle assessment of composite wind turbine blades",
    image: "https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 9,
    category: "WIND ENERGY",
    date: "SEPTEMBER 12, 2025",
    title: "The role of captive wind in corporate decarbonization",
    image: "https://images.pexels.com/photos/32831487/pexels-photo-32831487.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function BlogGridPage() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = () => {
    setPosts((prev) => [...prev, ...MORE_POSTS]);
    setHasMore(false);
  };

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">

      {/* Hero Section with Panoramic Wind Landscape (Height decreased by 70px) */}
      <section className="relative w-full min-h-[390px] sm:min-h-[450px] md:min-h-[490px] lg:min-h-[530px] flex flex-col justify-end overflow-hidden bg-[#0e2736]">

        {/* Panoramic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/12828526/pexels-photo-12828526.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt="Wind turbines landscape hero"
            className="w-full h-full object-cover object-[center_38%]"
          />
          {/* Subtle natural contrast overlay to keep the blue sky vibrant like the reference */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/15 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-8 sm:px-10 lg:px-12 xl:px-14 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-36">

          {/* Giant Title matching reference proportion with generous bottom spacing */}
          <h1 className="text-[52px] sm:text-[66px] md:text-[76px] lg:text-[86px] font-bold text-white tracking-[-0.035em] leading-[0.98] drop-shadow-sm mb-6 sm:mb-8 md:mb-10 select-none">
            Blog grid
          </h1>

          {/* Breadcrumbs Navigation with sleek horizontal dividing line UNDERNEATH */}
          <div className="w-full border-b border-white/25 pb-3 sm:pb-3.5">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.06em]">
              <Link
                href="/"
                className="text-white/85 hover:text-white transition-colors"
              >
                HOME
              </Link>

              <span className="text-white/60 font-normal select-none">→</span>

              <span className="text-white select-none">
                BLOG GRID
              </span>
            </nav>
          </div>

        </div>
      </section>

      {/* Main Blog Grid Section */}
      <section className="w-full py-20 sm:py-24 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

          {/* 3-Column Responsive Cards Grid with Uniform Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9 lg:gap-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col justify-between h-full group cursor-pointer"
              >
                <div>
                  {/* Image Container with Rounded Corners & Lime Badge */}
                  <div className="w-full aspect-[16/10.5] rounded-[20px] sm:rounded-[22px] overflow-hidden relative bg-neutral-200 select-none">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Category Lime Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block bg-[#AEF977] text-black text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Meta: Date */}
                  <div className="mt-5 mb-2.5">
                    <p className="text-[11.5px] sm:text-[12px] font-bold text-neutral-800 uppercase tracking-[0.04em]">
                      {post.date}
                    </p>
                  </div>

                  {/* Card Title (Uniform minimum height for perfect multi-line alignment) */}
                  <h2 className="min-h-[58px] sm:min-h-[62px] flex items-start text-[21px] sm:text-[23px] lg:text-[24px] font-bold text-neutral-900 leading-[1.24] tracking-tight group-hover:text-neutral-700 transition-colors">
                    {post.title}
                  </h2>
                </div>

                {/* READ MORE with Linear Continuous Arrow Pass-Through Animation */}
                <div className="mt-5 pt-2 inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-neutral-900 uppercase tracking-wider group/readmore w-fit py-1 select-none">
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
                  <span className="group-hover/readmore:opacity-80 transition-opacity">
                    READ MORE
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Centered LOAD MORE NEWS Button */}
          {hasMore && (
            <div className="mt-16 sm:mt-20 flex justify-center w-full">
              <button
                onClick={handleLoadMore}
                className="h-[48px] px-9 rounded-full border border-black text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.06em] text-neutral-900 hover:bg-black hover:text-white transition-all duration-300 shadow-sm active:scale-95 flex items-center justify-center cursor-pointer"
              >
                LOAD MORE NEWS
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <FooterV2 />

    </div>
  );
}
