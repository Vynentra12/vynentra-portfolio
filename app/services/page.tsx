"use client";

import React from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SERVICES } from "@/lib/services-data";
import { Search, PenTool, Wrench, Truck, Activity, Zap, ArrowDown } from "lucide-react";

const PROCESS_STEPS = [
  { id: "01", title: "ASSESS", desc: "Understanding the site, resources and energy requirement.", icon: Search },
  { id: "02", title: "DESIGN", desc: "Evaluating technologies and developing the appropriate configuration.", icon: PenTool },
  { id: "03", title: "DEVELOP", desc: "Taking the project through feasibility, regulatory and commercial development.", icon: Wrench },
  { id: "04", title: "DELIVER", desc: "Coordinating the technology, EPC and strategic partners required for execution.", icon: Truck },
  { id: "05", title: "OPERATE", desc: "Supporting monitoring, maintenance and long-term project performance.", icon: Activity },
  { id: "06", title: "OPTIMISE", desc: "Continuously improving system efficiency and output through advanced energy management and analytics.", icon: Zap },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-white text-black font-sans min-h-screen selection:bg-[#AEF977] selection:text-black">

      {/* Hero Section (Matching Reference Image 4 & 5 Layout) */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/35105436/pexels-photo-35105436.jpeg"
            alt="Renewable energy services hero"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container: Left Info + Right Scroll down element */}
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

              <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[58px] font-medium text-white tracking-tight leading-[1.08] drop-shadow-sm mb-4 sm:mb-5 select-text">
                Building renewable energy solutions around your requirements.
              </h1>

              <p className="text-[14.5px] sm:text-[16px] md:text-[17px] text-white/80 leading-[1.6] max-w-2xl drop-shadow-sm font-normal">
                From solar and wind systems to hybrid installations and advanced energy management, we deliver turnkey clean energy infrastructure.
              </p>
            </div>

            {/* Right Scroll Down Element (Matching Image 4 & 5) */}
            <div 
              onClick={() => {
                const el = document.getElementById('services-grid');
                el ? el.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="shrink-0 flex flex-row sm:flex-col items-center gap-3 sm:gap-2.5 cursor-pointer select-none self-start lg:self-end group pt-2 sm:pt-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:scale-105">
                <ArrowDown strokeWidth={1.75} className="w-3.5 h-3.5 sm:w-5 sm:h-5 animate-bounce text-white" />
              </div>
              <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.16em] uppercase text-white/80 group-hover:text-white transition-colors">
                SCROLL TO EXPLORE
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Services Overview Cards Section */}
      <section id="services-grid" className="w-full bg-[#F4F6F8] font-sans relative select-text py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

          {/* Section Header */}
          <div className="mb-10 sm:mb-14 md:mb-16 flex flex-col items-start text-left">
            <SectionBadge theme="dark" className="w-fit mb-3 sm:mb-4">
              OUR SERVICES
            </SectionBadge>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium text-black tracking-tight leading-[1.14] max-w-4xl">
              Complete turnkey capabilities for clean energy
            </h2>
            <p className="mt-3 sm:mt-5 text-[14px] sm:text-[16px] text-neutral-600 max-w-2xl leading-[1.6] font-normal">
              Explore our six end-to-end service domains, engineered to take complex wind, solar, and hybrid infrastructure from initial site assessment through to lifetime operational excellence.
            </p>
          </div>

          {/* 3-Column Responsive Grid: Displays all 6 services simultaneously with compact sleek cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-[22px] sm:rounded-[24px] border border-neutral-200/80 p-5 flex flex-col justify-between transition-all duration-300 hover:border-neutral-300 hover:shadow-xs"
              >
                <div>
                  {/* Top Thumbnail Image Box */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block relative w-full h-[165px] sm:h-[180px] rounded-[16px] overflow-hidden bg-neutral-100 mb-4 cursor-pointer"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Service Title */}
                  <h3 className="text-[17px] sm:text-[18px] md:text-[19px] font-medium text-black mb-2 transition-colors group-hover:text-[#087589]">
                    {service.title}
                  </h3>

                  {/* Short Summary Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-neutral-600 leading-[1.55] mb-4">
                    {service.subtitle}
                  </p>
                </div>

                {/* Bottom View Details Link with Pill styling & Scope Badge on the right */}
                <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center h-[34px] px-5 rounded-full border border-[#0B2735] text-[#0B2735] text-[11px] font-semibold uppercase tracking-[0.06em] transition-all duration-200 hover:bg-[#0B2735] hover:text-white shrink-0"
                  >
                    VIEW DETAILS
                  </Link>

                  <div className="inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] font-medium text-neutral-500 truncate">
                    <Zap strokeWidth={1.5} className="w-3.5 h-3.5 text-[#0A6B88] shrink-0" />
                    <span className="truncate">{service.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6-Step Process Section: HOW WE BRING IT TOGETHER */}
      <section className="w-full bg-white font-sans relative select-text py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

          <div className="mb-12 sm:mb-16 md:mb-20 flex flex-col items-start text-left">
            <SectionBadge theme="dark" className="w-fit mb-3 sm:mb-4 uppercase">
              HOW WE BRING IT TOGETHER
            </SectionBadge>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-medium text-black tracking-tight leading-[1.14] max-w-4xl">
              From site assessment to ongoing operations
            </h2>
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[16px] text-neutral-600 max-w-2xl leading-[1.6] font-normal">
              A clear, structured execution methodology across every phase of project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16">
            {PROCESS_STEPS.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="group flex flex-col items-start text-left cursor-default"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                    <IconComponent strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2] tracking-wider uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-neutral-600 leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer / Sitemap */}
      <FooterV2 />
    </div>
  );
}
