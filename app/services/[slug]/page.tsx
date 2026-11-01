"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowLeft, Zap } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentService = SERVICES.find((s) => s.slug === slug);
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);

  if (!currentService) return notFound();

  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950 flex flex-col">
      
      {/* ── MAIN CONTENT CONTAINER (Clean Editorial Layout) ── */}
      <main className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 w-full flex-1">
        
        {/* Back Link to All Services (Matching Reference Image with regular font) */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3.5 sm:gap-4 select-none cursor-pointer"
          >
            {/* Circular Border Arrow Button with smaller arrow */}
            <div className="w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full border border-[#0B2735] flex items-center justify-center text-[#0B2735] transition-all duration-300 group-hover:bg-[#0B2735] group-hover:text-white shrink-0">
              <ArrowLeft strokeWidth={1.75} className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </div>

            {/* Stacked Labels with regular font */}
            <div className="flex flex-col text-left justify-center">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#0A6B88] uppercase leading-none mb-1">
                BACK TO
              </span>
              <span className="text-[17px] sm:text-[19px] font-normal text-[#0B2735] tracking-tight leading-none group-hover:text-[#0A6B88] transition-colors">
                All Services
              </span>
            </div>
          </Link>
        </div>

        {/* Intro Section: Content on Left, Big Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-8 sm:my-12 pb-10 sm:pb-12 border-b border-neutral-200/80">
          
          {/* Left Column: Scope, Title, Subtitle, Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Scope Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-3.5 h-3.5 text-[#0A6B88]" />
              <span className="text-[11.5px] sm:text-[12px] font-semibold tracking-[0.12em] text-[#0A6B88] uppercase">
                {currentService.scope}
              </span>
            </div>

            {/* Service Title - Minimized size matching other detail pages */}
            <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#0B2735] uppercase tracking-tight leading-[1.12] mb-3 select-text">
              {currentService.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[15.5px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed mb-5">
              {currentService.subtitle}
            </p>

            {/* Service Detailed Description */}
            <p className="text-[15px] sm:text-[16px] text-neutral-800 leading-[1.7] font-normal">
              {currentService.desc}
            </p>
          </div>

          {/* Right Column: Big Service Image (Aligned to right side of content) */}
          <div className="lg:col-span-5 rounded-[22px] sm:rounded-[26px] overflow-hidden bg-neutral-100 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full relative shadow-xs border border-neutral-200/60">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

        {/* 4 Feature Capability Cards (01, 02, 03, 04 numbers removed, Featured Projects Blue #087589 applied) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {currentService.features.slice(0, 4).map((feature, idx) => {
            // Color themes:
            // idx 0: Light Green (#AEF977)
            // idx 1: Featured Projects Blue (#087589)
            // idx 2: Deep Dark Blue (#0B2735)
            // idx 3: Light Neutral (#F4F6F8)
            const cardStyles = [
              "bg-[#AEF977] text-neutral-950",
              "bg-[#087589] text-white",
              "bg-[#0B2735] text-white",
              "bg-[#F4F6F8] border border-neutral-200/80 text-neutral-900",
            ];
            const style = cardStyles[idx % cardStyles.length];
            const isDark = idx === 1 || idx === 2;

            return (
              <div
                key={idx}
                className={`${style} p-6 sm:p-7 rounded-[20px] sm:rounded-[24px] flex flex-col justify-between min-h-[170px] sm:min-h-[190px] shadow-xs`}
              >
                <span className={`text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider leading-snug ${isDark ? "text-white/80" : "text-neutral-800"}`}>
                  {currentService.scope}
                </span>
                <div className="mt-4">
                  <h3 className={`text-[17px] sm:text-[19px] font-bold tracking-tight leading-[1.25] mb-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
                    {feature.name}
                  </h3>
                  {feature.desc && (
                    <p className={`text-[12.5px] sm:text-[13px] leading-[1.55] line-clamp-3 ${isDark ? "text-white/80" : "text-neutral-700"}`}>
                      {feature.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Any Additional Features Beyond the First 4 */}
        {currentService.features.length > 4 && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <SectionBadge theme="dark" className="w-fit mb-6">
              ADDITIONAL CAPABILITIES
            </SectionBadge>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentService.features.slice(4).map((feature, idx) => (
                <div key={idx} className="p-6 rounded-[20px] border border-neutral-200 bg-white">
                  <h3 className="text-[17px] font-semibold text-[#0B2735] mb-1.5">{feature.name}</h3>
                  {feature.desc && <p className="text-[13.5px] text-neutral-600 leading-[1.6]">{feature.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Service Block - Matching Case Study Last Card UI in Dark Blue */}
        <div className="mt-16 sm:mt-24 rounded-[24px] sm:rounded-[32px] bg-[#0B2735] text-white p-7 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-sm">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-2 sm:mb-2.5">
              NEXT SERVICE
            </span>
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-medium tracking-tight leading-[1.25] mb-2 sm:mb-2.5 text-white">
              {nextService.title}
            </h3>
            <p className="text-[13.5px] sm:text-[14.5px] text-white/80 leading-[1.6]">
              {nextService.subtitle}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href={`/services/${nextService.slug}`}
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full sm:w-auto"
            >
              <span>VIEW NEXT SERVICE</span>
            </Link>
          </div>
        </div>

      </main>

      <FooterV2 />
    </div>
  );
}
