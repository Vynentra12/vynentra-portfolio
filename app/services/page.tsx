"use client";

import React from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { CTASectionV2 } from "@/components/sections/CTASectionV2";
import { SERVICES } from "@/lib/services-data";
import { Search, PenTool, Wrench, Truck, Activity, ArrowRight, ArrowUpRight, Zap } from "lucide-react";

const PROCESS_STEPS = [
  { id: "01", title: "ASSESS", desc: "Understanding the site, resources and energy requirement.", icon: Search },
  { id: "02", title: "DESIGN", desc: "Evaluating technologies and developing the appropriate configuration.", icon: PenTool },
  { id: "03", title: "DEVELOP", desc: "Taking the project through feasibility, regulatory and commercial development.", icon: Wrench },
  { id: "04", title: "DELIVER", desc: "Coordinating the technology, EPC and strategic partners required for execution.", icon: Truck },
  { id: "05", title: "OPERATE", desc: "Supporting monitoring, maintenance and long-term project performance.", icon: Activity },
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

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-6 select-text">
              Building renewable energy solutions around your requirements.
            </h1>

            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm mb-10 sm:mb-12 font-normal">
              From renewable energy generation and storage to project development, engineering and execution, we are bringing together the capabilities required to develop practical and commercially viable energy solutions across India.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">SERVICES</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Section: 6 Services visible in one-go (3x2 grid matching reference UI) */}
      <section className="w-full bg-[#F4F6F8] font-sans relative select-text py-16 sm:py-20 lg:py-24">
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

          {/* 3-Column Responsive Grid: Displays all 6 services simultaneously */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-[24px] sm:rounded-[28px] border border-neutral-200/80 p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200 hover:border-neutral-300"
              >
                <div>
                  {/* Top Thumbnail Image Box - Light blue tint on hover + Top-right explore pill */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block relative w-full h-[210px] sm:h-[230px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-neutral-100 mb-5 cursor-pointer"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Light blue overlay on hover */}
                    <div className="absolute inset-0 bg-[#0A6B88]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" />

                    {/* Top-Right Floating Element visible on hover */}
                    <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-medium text-neutral-900 shadow-md flex items-center gap-1.5 pointer-events-none">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0A6B88]" />
                    </div>
                  </Link>

                  {/* Service Title */}
                  <Link href={`/services/${service.slug}`} className="block">
                    <h3 className="text-[19px] sm:text-[21px] font-medium text-[#111827] group-hover:text-[#0A6B88] transition-colors leading-[1.3] mb-2.5">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Subtitle / Excerpt */}
                  <p className="text-[13.5px] sm:text-[14px] text-neutral-500 font-normal leading-[1.6] line-clamp-3 mb-5">
                    {service.subtitle}
                  </p>
                </div>

                {/* Card Footer: Dashed Divider + Bottom Meta Row matching reference UI */}
                <div>
                  <div className="w-full border-t border-dashed border-neutral-200/90 my-4" />
                  
                  <div className="flex items-center justify-between text-neutral-600">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#F4F6F8] border border-neutral-200/80 flex items-center justify-center text-[10.5px] font-bold text-[#0A6B88]">
                        {service.id}
                      </div>
                      <span className="text-[12px] sm:text-[12.5px] text-neutral-600 font-normal">
                        {service.features?.length || 4} Core Capabilities
                      </span>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group/btn inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-medium tracking-[0.06em] uppercase text-[#0B2735] hover:text-[#0A6B88] transition-colors"
                    >
                      <span>DETAILS</span>
                      <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center shrink-0">
                        {/* Current arrow: moves to right and exits */}
                        <ArrowRight 
                          strokeWidth={1.8}
                          className="w-3.5 h-3.5 absolute text-current transition-transform duration-300 ease-linear group-hover:translate-x-5 group-hover/btn:translate-x-5" 
                        />
                        {/* New arrow: enters from left to center */}
                        <ArrowRight 
                          strokeWidth={1.8}
                          className="w-3.5 h-3.5 absolute -translate-x-5 text-current transition-transform duration-300 ease-linear group-hover:translate-x-0 group-hover/btn:translate-x-0" 
                        />
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process Section (HOW WE BRING IT TOGETHER) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          <div className="mb-10 sm:mb-14 md:mb-16 flex flex-col items-start text-left">
            <SectionBadge theme="dark" className="w-fit mb-3 sm:mb-4 uppercase">
              HOW WE BRING IT TOGETHER
            </SectionBadge>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium text-black tracking-tight leading-[1.14] max-w-4xl">
              One connected approach, from requirement to renewable energy
            </h2>
            <p className="mt-3 sm:mt-5 text-[14px] sm:text-[16px] text-neutral-600 max-w-2xl leading-[1.6]">
              We start with the site, the energy requirement and the objective. From there, we evaluate the available resources, select the appropriate solution and bring together the partners required to develop and deliver it.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-start group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                    <Icon strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2 sm:mb-2.5 leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
            
            {/* Adding a 6th item to complete the 3-column grid for symmetry, mapping to the 6th service area */}
            <div className="flex flex-col items-start group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[16px] bg-[#F4F6F8] flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:scale-110 group-hover:rounded-[20px]">
                <Zap strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-800 transition-colors duration-300 group-hover:text-white" />
              </div>
              
              <h3 className="text-[18px] sm:text-[20px] font-medium text-black group-hover:text-[#087589] transition-colors duration-300 mb-2.5 leading-[1.2]">
                OPTIMISE
              </h3>
              <p className="text-[14px] sm:text-[15px] text-neutral-600 leading-[1.6]">
                Continuously improving system efficiency and output through advanced energy management and analytics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASectionV2 
        title="Let's develop the right energy solution for your requirement."
        buttonText="GET IN TOUCH"
        buttonLink="/contact"
      />

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}
