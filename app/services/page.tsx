"use client";

import React from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { HeroBackLink } from "@/components/ui/HeroBackLink";
import { SERVICES } from "@/lib/services-data";
import { Search, PenTool, Wrench, Truck, Activity, Zap } from "lucide-react";

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

      {/* Hero Section */}
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

        {/* Hero Content Container: Left Info */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left Content */}
            <div className="max-w-5xl">
              {/* Back to Home Link */}
              <HeroBackLink />

              <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-5 select-text">
                Building renewable energy solutions<br />around your requirements
              </h1>

              <p className="text-[14.5px] sm:text-[16px] md:text-[17px] text-white/80 leading-[1.6] max-w-2xl drop-shadow-sm font-normal">
                From solar and wind systems to hybrid installations and advanced energy management, we deliver turnkey clean energy infrastructure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3 Services Overview Section: Light Blue / Teal background matching Home Case Study section ── */}
      <section id="services-grid" className="w-full bg-[#087589] font-sans relative select-text py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header: Badge & Title */}
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <SectionBadge theme="light" className="mb-3 sm:mb-4 w-fit">
              OUR SERVICES
            </SectionBadge>
            <h2 className="text-[24px] xs:text-[26px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-white tracking-tight leading-[1.18]">
              Clean energy solutions engineered for reliability and scale
            </h2>
          </div>

          {/* 3 Horizontal Service Cards: Matching Reference UI (Image on Left, Text on Right, Line after body text) */}
          <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-9 w-full max-w-full min-w-0">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 lg:p-7 xl:p-8 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 sm:gap-7 lg:gap-8 xl:gap-10 transition-all duration-300 hover:shadow-md"
              >
                {/* Left: Image (on Mobile: Top, on Desktop: Left) */}
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full lg:w-[410px] xl:w-[450px] aspect-[16/10] lg:aspect-[16/11] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-100 relative shadow-xs shrink-0 block group/img"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Right: Text Content (on Mobile: Bottom, on Desktop: Right) */}
                <div className="flex-1 flex flex-col justify-between items-start text-left h-full">
                  <div className="w-full">
                    {/* Badge Text Only */}
                    <div className="mb-2 sm:mb-2.5">
                      <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#087589] tracking-wider uppercase">
                        {service.scope}
                      </span>
                    </div>

                    {/* Title */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="block group/title"
                    >
                      <h3 className="text-[20px] sm:text-[23px] md:text-[25px] font-medium text-neutral-950 tracking-tight leading-[1.22] mb-2 sm:mb-2.5 group-hover/title:text-[#087589] transition-colors">
                        {service.title}
                      </h3>
                    </Link>

                    {/* Subtitle / Lead */}
                    <p className="text-[13.5px] sm:text-[14.5px] font-medium text-neutral-800 leading-snug mb-2 sm:mb-2.5">
                      {service.subtitle}
                    </p>

                    {/* Description (Body text) */}
                    <p className="text-[13px] sm:text-[14px] text-neutral-600 font-normal leading-[1.65] mb-4 sm:mb-5 max-w-xl">
                      {service.desc}
                    </p>
                  </div>

                  {/* Horizontal Divider Line after body text, above button */}
                  <div className="w-full max-w-xl border-t border-neutral-300 pt-4 sm:pt-5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center h-[38px] sm:h-[42px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11px] sm:text-[11.5px] font-semibold tracking-[0.06em] uppercase select-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                    >
                      <span>VIEW DETAILS</span>
                    </Link>
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
            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-medium text-black tracking-tight leading-[1.16] max-w-4xl">
              One connected approach, from requirement<br />to renewable energy.
            </h2>
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15.5px] md:text-[16px] text-neutral-600 max-w-3xl leading-[1.65] font-normal">
              We are not starting with a predetermined technology. We are starting with the site, the energy requirement and the objective. From there, we are evaluating the available resources, selecting the appropriate solution and bringing together the partners required to develop and deliver it.
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
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-5">
                    {/* Background scales on hover */}
                    <div className="absolute inset-0 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] transition-all duration-300 ease-out group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[18px]" />
                    {/* Icon stays stable in size, only changes color to white */}
                    <IconComponent strokeWidth={1.5} className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2] tracking-wider uppercase">
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
