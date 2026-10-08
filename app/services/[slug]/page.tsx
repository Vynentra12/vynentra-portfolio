"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { FooterV2 } from "@/components/sections/FooterV2";
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
      
      {/* ── 1. HERO SECTION (Half Frame) ── */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover object-[center_40%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area (Matching Blog Detail Hero Layout exactly) */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            
            {/* Service-style Title */}
            <h1 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-sm mb-4 sm:mb-6 select-text">
              {currentService.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm mb-8 sm:mb-10 font-medium">
              {currentService.subtitle}
            </p>

            {/* Breadcrumbs Navigation with top border (Matching Blog Meta Bar) */}
            <div className="w-full border-t border-white/20 pt-4 flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <Link
                href="/services"
                className="text-white/70 hover:text-white transition-colors"
              >
                SERVICES
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none truncate">
                {currentService.title.toUpperCase()}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. MAIN CONTENT (Minimalist Professional UI/UX with SWAPPED columns) ── */}
      <section ref={contentRef} className="w-full bg-[#F4F6F8] pt-20 sm:pt-28 pb-24 sm:pb-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* LEFT COLUMN: CAPABILITIES (Point-wise) */}
            <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
              
              {currentService.features && currentService.features.length > 0 && (
                <>
                  <div className="mb-6 gsap-fade-up">
                    <span className="inline-flex items-center gap-2.5 bg-transparent border border-black/15 text-black text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
                      <div className="w-[5px] h-[5px] rounded-full bg-black" />
                      OUR CAPABILITIES
                    </span>
                  </div>
                  
                  <div className="flex flex-col w-full divide-y divide-black/10">
                    {currentService.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex flex-col py-6 sm:py-7 gsap-fade-up group transition-colors duration-300"
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
                </>
              )}

              {/* Next Service Block - HORIZONTAL BOX WITH IMAGE PREVIEW */}
              <div className="mt-20 sm:mt-28 w-full pt-10 flex flex-col gsap-fade-up">
                <span className="text-[10px] text-neutral-500 tracking-[0.15em] uppercase mb-5 font-bold">
                  NEXT SERVICE
                </span>
                
                <Link 
                  href={`/services/${nextService.slug}`}
                  className="group/next flex flex-col sm:flex-row items-center w-full gap-6 bg-white p-4 sm:p-6 rounded-[24px] border border-black/5 transition-all duration-300 hover:border-black/15"
                >
                  {/* Image Preview */}
                  <div className="w-full sm:w-[140px] h-[140px] sm:h-[100px] shrink-0 rounded-[16px] overflow-hidden">
                    <img 
                      src={nextService.image} 
                      alt={nextService.title}
                      className="w-full h-full object-cover group-hover/next:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-[22px] sm:text-[28px] font-medium text-black tracking-tight leading-[1.2] mb-1 group-hover/next:text-[#087589] transition-colors">
                      {nextService.title}
                    </h3>
                    <p className="text-[14px] text-neutral-500 line-clamp-2 pr-4">
                      {nextService.subtitle}
                    </p>
                  </div>
                  
                  {/* Animated Arrow Icon */}
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-[#F4F6F8] group-hover/next:bg-[#AEF977] group-hover/next:border-[#AEF977] transition-all duration-300 shrink-0 mx-2 hidden sm:flex overflow-hidden">
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-black absolute transition-transform duration-300 ease-out group-hover/next:translate-x-8" />
                      <ArrowRight className="w-5 h-5 text-black absolute -translate-x-8 transition-transform duration-300 ease-out group-hover/next:translate-x-0" />
                    </div>
                  </div>
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: DESCRIPTION (Paragraph) */}
            <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
              <div className="sticky top-32 w-full gsap-fade-up">
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
