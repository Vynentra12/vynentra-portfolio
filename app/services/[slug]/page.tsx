"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { 
  ArrowLeft,
  ChevronLeft,
  ChevronRight, 
  Search, 
  Cpu, 
  Wrench, 
  Activity, 
  Wind, 
  Sun, 
  BatteryCharging, 
  Layers, 
  Fan, 
  Building2, 
  Factory, 
  Warehouse, 
  TrendingUp, 
  Music, 
  Calendar, 
  Users 
} from "lucide-react";

function getFeatureIcon(featureName: string, index: number) {
  const name = featureName.toLowerCase();
  if (name.includes("concert") || name.includes("live") || name.includes("music")) {
    return Music;
  }
  if (name.includes("exhibition") || name.includes("conference") || name.includes("event")) {
    return Calendar;
  }
  if (name.includes("gathering") || name.includes("festival")) {
    return Users;
  }
  if (name.includes("hybrid") || name.includes("battery") || name.includes("storage")) {
    return BatteryCharging;
  }
  if (name.includes("vertical") || name.includes("vawt")) {
    return Fan;
  }
  if (name.includes("horizontal") || name.includes("hawt") || name.includes("wind")) {
    return Wind;
  }
  if (name.includes("solar")) {
    return Sun;
  }
  if (name.includes("industrial") || name.includes("manufacturing")) {
    return Factory;
  }
  if (name.includes("commercial") || name.includes("office")) {
    return Building2;
  }
  if (name.includes("warehousing") || name.includes("logistics")) {
    return Warehouse;
  }
  if (name.includes("msme") || name.includes("growing") || name.includes("captive")) {
    return TrendingUp;
  }
  const defaults = [Search, Cpu, Wrench, Activity, Layers];
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


  return (
    <div id="service-top" className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950 flex flex-col">
      
      {/* ── MAIN CONTENT CONTAINER (Optimized for Mobile & Desktop) ── */}
      <main className="max-w-[1240px] mx-auto px-5 sm:px-10 lg:px-12 pt-20 sm:pt-32 lg:pt-36 pb-14 sm:pb-24 w-full flex-1">
        
        {/* Back Link to All Services (Preserving light blue accent as requested) */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center my-4 sm:my-8 lg:my-12 pb-8 sm:pb-12 border-b border-neutral-300">
          
          {/* Left Column: Scope, Title, Subtitle, Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Scope Eyebrow Tag */}
            <div className="mb-2 sm:mb-3">
              <SectionBadge theme="dark" size="default">
                {currentService.scope}
              </SectionBadge>
            </div>

            {/* Service Title */}
            <h1 className="text-[25px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-2.5 sm:mb-3 select-text">
              {currentService.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[17px] text-neutral-700 font-medium leading-relaxed mb-3 sm:mb-4">
              {currentService.subtitle}
            </p>

            {/* Service Detailed Description */}
            <p className="text-[13.5px] sm:text-[15.5px] text-neutral-600 leading-[1.65] font-normal">
              {currentService.desc}
            </p>
          </div>

          {/* Right Column: Service Image - Increased width (6 cols) and height, with visible divider line */}
          <div className="lg:col-span-6 rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-100 w-full h-[250px] sm:h-[320px] lg:h-[360px] xl:h-[390px] relative shadow-xs border border-neutral-200/80">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

        {/* ── Key Solution Capabilities / Offerings Grid ── */}
        <div className="my-8 sm:my-12 lg:my-16">
          <div className="mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1.5">
              SERVICE ARCHITECTURE
            </span>
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-medium text-neutral-900 tracking-tight leading-[1.25]">
              {currentService.featuresSectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {currentService.features.map((feature, idx) => {
              const IconComponent = getFeatureIcon(feature.name, idx);

              return (
                <div
                  key={idx}
                  className="group bg-white rounded-[16px] sm:rounded-[22px] border border-neutral-200/90 p-4 sm:p-6 lg:p-7 shadow-xs hover:border-[#0A6B88]/40 transition-all duration-300 flex items-start gap-3.5 sm:gap-5"
                >
                  {/* Rounded Square Icon Box */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-[12px] sm:rounded-[16px] bg-[#F4F6F8] border border-neutral-200/80 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-105">
                    <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-neutral-800 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] sm:text-[18px] font-semibold text-neutral-900 tracking-tight leading-snug mb-1 sm:mb-1.5 group-hover:text-[#087589] transition-colors duration-300">
                      {feature.name}
                    </h3>
                    {feature.desc && (
                      <p className="text-[12.5px] sm:text-[14px] text-neutral-600 leading-[1.55] sm:leading-[1.6] font-normal">
                        {feature.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── EXECUTION ROADMAP: 3 Default Boxes on Desktop + Horizontal Manual Scroll for Remaining 2 (Matching Reference Image 2) ── */}
        {currentService.processSection && (
          <section className="my-10 sm:my-16 lg:my-20 pt-8 sm:pt-12 border-t border-neutral-200">
            <div className="flex items-end justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1.5">
                  EXECUTION ROADMAP
                </span>
                <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-medium text-neutral-900 tracking-tight leading-[1.25]">
                  {currentService.processSection.title}
                </h2>
                <p className="mt-2 text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.65] font-normal max-w-3xl">
                  {currentService.processSection.desc}
                </p>
              </div>

              {/* Manual Scroll Controls (Desktop & Tablet) */}
              <div className="hidden sm:flex items-center gap-2 shrink-0 pb-1">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("roadmap-scroll-track");
                    if (el) {
                      const scrollDist = el.clientWidth / (window.innerWidth >= 1024 ? 3 : 2);
                      el.scrollBy({ left: -scrollDist, behavior: "smooth" });
                    }
                  }}
                  aria-label="Previous step"
                  className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-[#0B2735] hover:border-[#0B2735] hover:text-white transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("roadmap-scroll-track");
                    if (el) {
                      const scrollDist = el.clientWidth / (window.innerWidth >= 1024 ? 3 : 2);
                      el.scrollBy({ left: scrollDist, behavior: "smooth" });
                    }
                  }}
                  aria-label="Next step"
                  className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-[#0B2735] hover:border-[#0B2735] hover:text-white transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Manual Scroll Track: Aligned to left margin, fits 3 boxes on desktop */}
            <div
              id="roadmap-scroll-track"
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {currentService.processSection.steps.map((step) => (
                <div
                  key={step.num}
                  className="w-[84vw] max-w-[340px] sm:max-w-none sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start flex flex-col group"
                >
                  {/* Image Box with less corner radius matching Reference Image 2 */}
                  <div className="w-full aspect-[16/10] rounded-[12px] sm:rounded-[14px] overflow-hidden bg-neutral-100 mb-3.5 sm:mb-4 border border-neutral-200/80 shadow-xs relative">
                    <img
                      src={step.image || "/solutions/solar-installation.jpg"}
                      alt={step.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Stage Badge in Brand Green inside Image Top-Left */}
                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                      <span className="inline-flex items-center bg-[#AEF977] text-neutral-950 font-bold uppercase tracking-wider text-[9px] sm:text-[9.5px] px-2.5 py-0.5 sm:py-1 rounded-[5px] select-none shadow-xs">
                        STAGE {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description Below Image matching Reference Image 2 */}
                  <h3 className="text-[16.5px] sm:text-[18px] font-semibold text-neutral-900 tracking-tight leading-snug mb-1.5 sm:mb-2 group-hover:text-[#087589] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13.5px] text-neutral-600 leading-[1.6] font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Direct CTA Banner matching Case Study Inner CTA Design ── */}
        <div className="mt-12 sm:mt-16 lg:mt-20 rounded-[20px] sm:rounded-[32px] bg-[#0E2F3E] text-white p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xs">
          <div className="max-w-xl">
            <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-1.5 sm:mb-2.5">
              {currentService.cta.badge}
            </span>
            <h3 className="text-[20px] sm:text-[26px] md:text-[28px] font-medium tracking-tight leading-[1.25] mb-2 sm:mb-2.5 text-white">
              {currentService.cta.title}
            </h3>
            <p className="text-[13px] sm:text-[14.5px] text-white/80 leading-[1.6]">
              {currentService.cta.desc}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href={currentService.cta.buttonLink}
              className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-7 sm:px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full sm:w-auto"
            >
              <span>{currentService.cta.buttonText}</span>
            </Link>
          </div>
        </div>

        {/* ── Two Remaining Clean Energy Services: Borderless, Shadowless, Green Badge inside Image Top-Right, Visible Separation Line ── */}
        <section className="mt-14 sm:mt-20 lg:mt-24 pt-10 sm:pt-14 border-t border-neutral-200">
          <div className="mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#087589] tracking-wider uppercase block mb-1.5">
              EXPLORE MORE
            </span>
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-medium text-neutral-900 tracking-tight leading-[1.25]">
              Other Clean Energy Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9 lg:gap-10">
            {SERVICES.filter((s) => s.slug !== currentService.slug).map((service) => (
              <div
                key={service.id}
                className="group bg-transparent flex flex-col justify-between"
              >
                <div>
                  {/* Rectangular Image with Green Badge at Top Right */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block w-full aspect-[16/10] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-100 mb-3.5 sm:mb-4 relative group/thumb border border-neutral-200/70"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-500"
                    />

                    {/* Green Scope Badge (Top Right inside Image matching Blog Card style) */}
                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                      <span className="inline-flex items-center bg-[#AEF977] text-neutral-950 font-bold tracking-wider uppercase text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-[6px] shadow-xs select-none">
                        {service.scope}
                      </span>
                    </div>
                  </Link>

                  {/* Title */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block group-hover:text-[#087589] transition-colors"
                  >
                    <h3 className="text-[17px] sm:text-[20px] font-medium text-neutral-900 tracking-tight leading-snug mb-1.5">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Subtitle */}
                  <p className="text-[12.5px] sm:text-[13.5px] text-neutral-600 font-normal leading-[1.6] mb-3.5 sm:mb-4 line-clamp-2">
                    {service.subtitle}
                  </p>
                </div>

                {/* Visible Separation Line and Action Button */}
                <div className="pt-1 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center h-[38px] sm:h-[40px] px-6 rounded-full border border-[#0B2735] text-[#0B2735] text-[11px] font-semibold tracking-[0.06em] uppercase hover:bg-[#0B2735] hover:text-white transition-all active:scale-[0.98]"
                  >
                    <span>VIEW DETAILS</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <FooterV2 />
    </div>
  );
}
