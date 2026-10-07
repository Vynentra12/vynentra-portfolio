"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/services-data";
import { Search, PenTool, Wrench, Truck, Activity, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROCESS_STEPS = [
  { id: "01", title: "ASSESS", desc: "Understanding the site, resources and energy requirement.", icon: Search },
  { id: "02", title: "DESIGN", desc: "Evaluating technologies and developing the appropriate configuration.", icon: PenTool },
  { id: "03", title: "DEVELOP", desc: "Taking the project through feasibility, regulatory and commercial development.", icon: Wrench },
  { id: "04", title: "DELIVER", desc: "Coordinating the technology, EPC and strategic partners required for execution.", icon: Truck },
  { id: "05", title: "OPERATE", desc: "Supporting monitoring, maintenance and long-term project performance.", icon: Activity },
];

export default function ServicesPage() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-[#0e2736]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/35105436/pexels-photo-35105436.jpeg"
            alt="Renewable energy services hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32">
          
          <div className="max-w-5xl">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.05] drop-shadow-sm mb-6 sm:mb-8 select-none">
              <span className="text-[#AEF977]">Building renewable</span> energy solutions around your requirements.
            </h1>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/80 leading-[1.6] max-w-2xl drop-shadow-sm mb-12 sm:mb-16">
              From renewable energy generation and storage to project development, engineering and execution, we are bringing together the capabilities required to develop practical and commercially viable energy solutions across India.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/25 pb-3 sm:pb-3.5">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.06em]">
              <Link
                href="/"
                className="text-white/85 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/60 font-normal select-none">→</span>
              <span className="text-white select-none">SERVICES</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services List Section (Hover UI) - Mix Blend Difference for overlapping text */}
      <section className="relative w-full min-h-screen py-16 sm:py-20 lg:py-24 bg-white flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
          
          {/* Mobile Title (Hidden on Desktop) */}
          <div className="w-full lg:hidden flex flex-col mb-2">
            <SectionBadge theme="dark" className="w-fit mb-3">
              OUR SERVICES
            </SectionBadge>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-neutral-900 mt-4 leading-[1.2] max-w-lg">
              Powering communities with clean, reliable, and renewable energy
            </h2>
          </div>

          {/* Mobile Services List (Hidden on Desktop) */}
          <div className="w-full lg:hidden flex flex-col gap-6 relative z-10">
            {SERVICES.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id} className="flex items-center gap-5 group bg-white rounded-2xl">
                <img src={service.image} alt={service.title} className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-[20px] object-cover flex-shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.06)]" />
                <div className="flex flex-col">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-neutral-900 leading-[1.2] mb-2 group-hover:text-neutral-600 transition-colors">
                    {service.title.charAt(0) + service.title.slice(1).toLowerCase()}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.06em] uppercase text-neutral-500 leading-[1.4] max-w-[200px]">
                    OUR EXPERT TEAM HANDLES THE FULL PROCESS
                  </p>
                </div>
              </Link>
            ))}
            <div className="mt-8">
              <Link 
                href="/services/solar-energy" 
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-neutral-900 text-neutral-900 text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#AEF977] hover:border-[#AEF977] hover:text-neutral-900 active:scale-[0.98]"
              >
                View all services
              </Link>
            </div>
          </div>
          
          {/* Desktop Left Column: Titles (Hidden on Mobile) */}
          <div className="hidden lg:flex w-[60%] flex-col relative z-20 mix-blend-difference text-white">
            <div className="mb-16">
              <SectionBadge theme="light" className="w-fit mb-4">
                OUR SERVICES
              </SectionBadge>
              <h2 className="text-[38px] font-bold mt-4 leading-[1.2] max-w-lg">
                Powering communities with clean, reliable, and renewable energy
              </h2>
            </div>

            <div className="flex flex-col space-y-4">
              {SERVICES.map((service, idx) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setActiveServiceIdx(idx)}
                  className={`group block w-fit py-1`}
                >
                  <h3 
                    className={`text-[54px] xl:text-[60px] font-bold tracking-tight leading-[1] whitespace-nowrap transition-all duration-500 ease-out ${
                      activeServiceIdx === idx 
                        ? 'opacity-100 translate-x-6' 
                        : 'opacity-30 hover:opacity-50'
                    }`}
                  >
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>
            
            <div className="mt-16">
              <Link 
                href="/services/solar-energy" 
                className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-white text-white text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:bg-white hover:text-[#0B2735] active:scale-[0.98]"
              >
                View all services
              </Link>
            </div>
          </div>

          {/* Desktop Right Column: Dynamic Image (Hidden on Mobile) */}
          <div className="hidden lg:flex w-[50%] justify-end -ml-[10%] relative z-10 pointer-events-none">
            <div className="w-full max-w-[500px] xl:max-w-[550px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative bg-neutral-100">
              {SERVICES.map((service, idx) => (
                <img
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeServiceIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-black/10 pointer-events-none z-20" />
            </div>
          </div>

        </div>
      </section>

      {/* Process Section (HOW WE BRING IT TOGETHER) */}
      <section className="w-full py-24 sm:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          
          {/* Top Row: Title */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-16 lg:mb-20">
            <div className="w-full md:w-1/3 pt-2">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-neutral-500 uppercase block mb-4">
                HOW WE BRING IT TOGETHER
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-neutral-900 leading-[1.2]">
                One connected approach, from requirement to renewable energy.
              </h3>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold text-neutral-900 tracking-tight leading-[1.2] max-w-3xl">
                We are not starting with a predetermined technology. We are starting with the site, the energy requirement and the objective. From there, we are evaluating the available resources, selecting the appropriate solution and bringing together the partners required to develop and deliver it.
              </h2>
            </div>
          </div>

          {/* Bottom Row: 2-column Layout (Cards on Left, Image on Right) */}
          <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
            
            {/* Left: 5 Cards Grid */}
            <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 xl:gap-6">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isWhite = idx === 1 || idx === 2; // 2nd (1), 3rd (2) are white. 1st (0), 4th (3), 5th (4) are skin color. This creates a checkerboard for the 2x2 part!
                
                return (
                  <div 
                    key={step.id} 
                    className={`rounded-[24px] p-6 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[280px] transition-colors duration-300 ${
                      isWhite 
                        ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#F9F9F9]" 
                        : "bg-[#F4F0EA] hover:bg-[#EAE6DF]"
                    } ${
                      idx === 4 ? "sm:col-span-2 sm:flex-row sm:items-center sm:min-h-[auto] sm:py-8" : ""
                    }`}
                  >
                    <div className={`flex justify-between items-start ${idx === 4 ? "sm:w-[30%]" : ""}`}>
                      <span className="text-[36px] sm:text-[44px] font-bold text-neutral-900 tracking-tighter leading-none">
                        {step.id}
                      </span>
                      <div className="text-neutral-300">
                        <Icon strokeWidth={1.5} className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                    </div>
                    
                    {/* Divider Lines */}
                    {idx !== 4 && <div className="w-full h-[1px] bg-black/10 my-4 sm:my-8" />}
                    {idx === 4 && <div className="hidden sm:block w-[1px] h-20 bg-black/10 mx-8" />}
                    {idx === 4 && <div className="block sm:hidden w-full h-[1px] bg-black/10 my-4" />}
                    
                    <div className={idx === 4 ? "sm:w-[70%]" : ""}>
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-neutral-900 mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-neutral-600 leading-[1.6]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Large Vertical Image */}
            <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-auto rounded-[24px] overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/10180236/pexels-photo-10180236.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Wind turbine field"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section - Floating Team Layout */}
      <section className="relative w-full py-40 sm:py-56 md:py-64 lg:py-[280px] bg-white overflow-hidden flex items-center justify-center">
        
        {/* Floating Images (Static layout) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none max-w-[1440px] mx-auto z-0 hidden sm:block">
          {/* Top Left Image */}
          <div className="absolute sm:top-[15%] lg:top-[20%] sm:left-[5%] lg:left-[8%] sm:w-[140px] sm:h-[180px] lg:w-[180px] lg:h-[220px] rounded-[20px] overflow-hidden shadow-2xl animate-float">
            <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Omar Bergson" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
              <span className="text-white text-[12px] font-semibold">Omar Bergson</span>
            </div>
          </div>
          
          {/* Top Right Image */}
          <div className="absolute sm:top-[12%] lg:top-[15%] sm:right-[5%] lg:right-[8%] sm:w-[150px] sm:h-[190px] lg:w-[200px] lg:h-[240px] rounded-[24px] overflow-hidden shadow-2xl animate-float-alt">
            <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Anika Bergson" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
              <span className="text-white text-[12px] font-semibold">Anika Bergson</span>
            </div>
          </div>

          {/* Bottom Left Image */}
          <div className="absolute sm:bottom-[15%] lg:bottom-[20%] sm:left-[8%] lg:left-[12%] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] rounded-[20px] overflow-hidden shadow-2xl animate-float-alt">
            <img src="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ruben Geidt" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
              <span className="text-white text-[12px] font-semibold">Ruben Geidt</span>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="absolute sm:bottom-[18%] lg:bottom-[25%] sm:right-[10%] lg:right-[12%] sm:w-[150px] sm:h-[180px] lg:w-[190px] lg:h-[230px] rounded-[20px] overflow-hidden shadow-2xl animate-float">
            <img src="https://images.pexels.com/photos/20853488/pexels-photo-20853488.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Emerson Bergson" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
              <span className="text-white text-[12px] font-semibold">Emerson Bergson</span>
            </div>
          </div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.1em] text-neutral-500 uppercase mb-4 sm:mb-8">
            FINAL CTA
          </span>
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.15] mb-6">
            Let's develop the right energy solution for your requirement.
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-neutral-600 leading-[1.6] mb-10 max-w-xl">
            We are building renewable energy solutions across wind, solar, hybrid generation and storage, supported by the project development and execution capabilities required to take them forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-neutral-900 text-neutral-900 bg-transparent text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#AEF977] hover:border-[#AEF977] active:scale-[0.98] shadow-sm hover:shadow-md"
          >
            GET IN TOUCH
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

      </section>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}
