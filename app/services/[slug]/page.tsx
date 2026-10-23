"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentService = SERVICES.find((s) => s.slug === slug);
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle fade up for content
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll(".gsap-fade-up");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, { dependencies: [slug] });

  if (!currentService) return notFound();

  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div className="w-full bg-[#F4F6F8] text-black font-sans min-h-screen selection:bg-[#AEF977] selection:text-black flex flex-col">
      
      {/* ── 1. HERO SECTION (Full Viewport Height) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            {/* Minimal Frosted Glass Pill Breadcrumb (Option C) */}
            <div className="mb-5 sm:mb-6">
              <nav aria-label="Breadcrumbs" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-[11.5px] font-normal text-white/80 shadow-sm max-w-full overflow-hidden">
                <Link
                  href="/"
                  className="hover:text-white transition-colors shrink-0"
                >
                  Home
                </Link>
                <span className="text-white/40 select-none shrink-0">/</span>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors shrink-0"
                >
                  Services
                </Link>
                <span className="text-white/40 select-none shrink-0">/</span>
                <span className="text-white font-medium select-none truncate">
                  {currentService.title}
                </span>
              </nav>
            </div>
            
            {/* Service-style Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-sm mb-4 sm:mb-6 select-text">
              {currentService.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm font-medium">
              {currentService.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN CONTENT (Top-aligned OUR CAPABILITIES with sticky right description) ── */}
      <section ref={contentRef} className="w-full bg-[#F4F6F8] pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-36">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          {/* Section Badge at the top */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <SectionBadge theme="dark" className="w-fit">
              OUR CAPABILITIES
            </SectionBadge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* LEFT COLUMN: CAPABILITIES (Point-wise grouped text that scrolls) */}
            <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
              
              {currentService.features && currentService.features.length > 0 && (
                <div className="flex flex-col w-full divide-y divide-black/10">
                  {currentService.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col py-6 sm:py-7 first:pt-0 gsap-fade-up group transition-colors duration-300"
                    >
                      <h3 className="text-[20px] sm:text-[22px] font-medium text-black tracking-tight leading-[1.3] group-hover:text-[#087589] transition-colors duration-300">
                        {feature.name}
                      </h3>
                      {feature.desc && (
                        <p className="text-[15px] sm:text-[16px] text-neutral-600 mt-2.5 leading-[1.6]">
                          {feature.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Next Service Block - HORIZONTAL BOX WITH IMAGE PREVIEW */}
              <div className="mt-20 sm:mt-28 w-full pt-10 flex flex-col">
                <SectionBadge theme="dark" className="w-fit mb-5">
                  NEXT SERVICE
                </SectionBadge>
                
                <Link 
                  href={`/services/${nextService.slug}`}
                  className="group/next flex flex-col sm:flex-row items-center w-full gap-6 bg-white p-4 sm:p-6 rounded-[24px] border border-black/5"
                >
                  {/* Image Preview */}
                  <div className="w-full sm:w-[140px] h-[140px] sm:h-[100px] shrink-0 rounded-[16px] overflow-hidden">
                    <img 
                      src={nextService.image} 
                      alt={nextService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-[22px] sm:text-[28px] font-medium text-black tracking-tight leading-[1.2] mb-1">
                      {nextService.title}
                    </h3>
                    <p className="text-[14px] text-neutral-500 line-clamp-2 pr-4">
                      {nextService.subtitle}
                    </p>
                  </div>
                  
                  {/* Green Click Button - only animated element */}
                  <div className="w-12 h-12 rounded-full bg-[#AEF977] flex items-center justify-center text-black shrink-0 mx-2 hidden sm:flex transition-transform duration-200 group-hover/next:scale-105 active:scale-95 shadow-sm">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: DESCRIPTION (Paragraph) - Top-aligned and sticky while left scrolls */}
            <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
              <div className="lg:sticky lg:top-28 sm:lg:top-32 w-full">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-black leading-[1.45] tracking-tight">
                  {currentService.desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
