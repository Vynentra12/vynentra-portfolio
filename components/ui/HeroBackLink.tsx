'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface HeroBackLinkProps {
  href?: string;
  label?: string;
  category?: string;
  className?: string;
}

export function HeroBackLink({
  href = '/',
  label = 'Home Page',
  category = 'BACK TO',
  className = 'mb-5 sm:mb-6',
}: HeroBackLinkProps) {
  return (
    <div className={className}>
      <Link
        href={href}
        className="group inline-flex items-center gap-3 sm:gap-3.5 select-none cursor-pointer"
      >
        {/* Circular Border Arrow Button - Turns Brand Green on Hover with dark arrow */}
        <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-white border border-white/20 flex items-center justify-center text-[#0B2735] transition-all duration-300 group-hover:bg-[#AEF977] group-hover:border-[#AEF977] group-hover:text-[#0B2735] group-hover:scale-105 shrink-0 shadow-xs">
          <ArrowLeft strokeWidth={2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        </div>

        {/* Stacked Labels - Green BACK TO and Home Page text remains white on hover */}
        <div className="flex flex-col text-left justify-center">
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#AEF977] uppercase leading-none mb-1">
            {category}
          </span>
          <span className="text-[15.5px] sm:text-[17.5px] font-normal text-white tracking-tight leading-none group-hover:text-white transition-colors">
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
}

