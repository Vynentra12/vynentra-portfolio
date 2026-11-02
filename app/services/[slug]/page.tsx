"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowLeft, Search, Cpu, Wrench, Activity, Wind, Sun, BatteryCharging, ShieldCheck, Layers, Fan } from "lucide-react";

function getFeatureIcon(featureName: string, index: number) {
  const name = featureName.toLowerCase();
  if (name.includes("vertical") || name.includes("vawt")) {
    return Fan;
  }
  if (name.includes("horizontal") || name.includes("hawt")) {
    return Wind;
  }
  if (name.includes("feasibility") || name.includes("audit") || name.includes("assessment") || name.includes("site") || name.includes("resource")) {
    return Search;
  }
  if (name.includes("design") || name.includes("engineering") || name.includes("configuration") || name.includes("planning") || name.includes("technology")) {
    return Cpu;
  }
  if (name.includes("installation") || name.includes("commissioning") || name.includes("execution") || name.includes("epc")) {
    return Wrench;
  }
  if (name.includes("monitoring") || name.includes("o&m") || name.includes("operations") || name.includes("maintenance")) {
    return Activity;
  }
  if (name.includes("wind")) {
    return Wind;
  }
  if (name.includes("solar")) {
    return Sun;
  }
  if (name.includes("storage") || name.includes("bess") || name.includes("battery")) {
    return BatteryCharging;
  }
  if (name.includes("regulatory") || name.includes("compliance")) {
    return ShieldCheck;
  }
  if (name.includes("financing") || name.includes("finance")) {
    return Layers;
  }
  const defaults = [Search, Cpu, Wrench, Activity];
  return defaults[index % defaults.length];
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentService = SERVICES.find((s) => s.slug === slug);
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!currentService) return notFound();

  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div id="service-top" className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950 flex flex-col">
      
      {/* ── MAIN CONTENT CONTAINER (Optimized for Mobile & Desktop) ── */}
      <main className="max-w-[1240px] mx-auto px-5 sm:px-10 lg:px-12 pt-20 sm:pt-32 lg:pt-36 pb-14 sm:pb-24 w-full flex-1">
        
        {/* Back Link to All Services */}
        <div className="mb-6 sm:mb-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 sm:gap-4 select-none cursor-pointer"
          >
            {/* Circular Border Arrow Button */}
            <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full bg-white border border-[#0B2735] flex items-center justify-center text-[#0B2735] transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:border-[#0A6B88] group-hover:text-white group-hover:scale-105 shrink-0 shadow-xs">
              <ArrowLeft strokeWidth={2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </div>

            {/* Stacked Labels */}
            <div className="flex flex-col text-left justify-center">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#0A6B88] uppercase leading-none mb-0.5 sm:mb-1">
                BACK TO
              </span>
              <span className="text-[15.5px] sm:text-[19px] font-normal text-[#0B2735] tracking-tight leading-none group-hover:text-[#0A6B88] transition-colors">
                All Services
              </span>
            </div>
          </Link>
        </div>

        {/* Intro Section: Content on Left, Big Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center my-4 sm:my-8 lg:my-12 pb-3 sm:pb-6">
          
          {/* Left Column: Scope, Title, Subtitle, Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Scope Eyebrow Tag */}
            <div className="mb-2 sm:mb-3">
              <SectionBadge theme="dark" size="default">
                {currentService.scope}
              </SectionBadge>
            </div>

            {/* Service Title */}
            <h1 className="text-[25px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-2.5 sm:mb-3 select-text">
              {currentService.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed mb-3 sm:mb-5">
              {currentService.subtitle}
            </p>

            {/* Service Detailed Description */}
            <p className="text-[13.5px] sm:text-[16px] text-neutral-800 leading-[1.65] font-normal">
              {currentService.desc}
            </p>
          </div>

          {/* Right Column: Service Image */}
          <div className="lg:col-span-5 rounded-[16px] sm:rounded-[22px] overflow-hidden bg-neutral-100 w-full h-[200px] sm:h-[260px] lg:h-[280px] relative shadow-xs border border-neutral-200/60">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

        {/* Capability Feature Cards: Compact height on mobile, comfortable padding on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 lg:gap-6 my-6 sm:my-10 lg:my-14">
          {currentService.features.map((feature, idx) => {
            const IconComponent = getFeatureIcon(feature.name, idx);

            return (
              <div
                key={idx}
                className="group bg-white rounded-[16px] sm:rounded-[22px] border border-neutral-200/90 p-4 sm:p-6 lg:p-7 shadow-xs hover:border-[#0A6B88]/40 transition-all duration-300 flex items-start gap-3.5 sm:gap-5"
              >
                {/* Rounded Square Icon Box: Optimized compact size on mobile */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[12px] sm:rounded-[16px] md:rounded-[18px] bg-[#F4F6F8] border border-neutral-200/80 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-105">
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" strokeWidth={1.75} />
                </div>

                {/* Content: Compact spacing */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15.5px] sm:text-[18px] md:text-[19px] font-semibold text-neutral-900 tracking-tight leading-snug mb-1 sm:mb-2 select-text group-hover:text-[#087589] transition-colors duration-300">
                    {feature.name}
                  </h3>
                  {feature.desc && (
                    <p className="text-[12.5px] sm:text-[13.5px] sm:text-[14px] text-neutral-600 leading-[1.55] sm:leading-[1.62] font-normal select-text">
                      {feature.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Service Block - Direct Scroll to Top Navigation */}
        <div className="mt-10 sm:mt-16 lg:mt-24 rounded-[20px] sm:rounded-[32px] bg-[#0B2735] text-white p-5 sm:p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8 shadow-sm">
          <div className="max-w-xl">
            <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-1.5 sm:mb-2.5">
              NEXT SERVICE
            </span>
            <h3 className="text-[20px] sm:text-[26px] md:text-[28px] font-medium tracking-tight leading-[1.25] mb-1.5 sm:mb-2.5 text-white">
              {nextService.title}
            </h3>
            <p className="text-[13px] sm:text-[14.5px] text-white/80 leading-[1.6]">
              {nextService.subtitle}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href={`/services/${nextService.slug}#service-top`}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-7 sm:px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full sm:w-auto"
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
