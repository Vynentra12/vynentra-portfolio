"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Zap, Lightbulb, Leaf, ShieldCheck, Settings } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const currentService = SERVICES.find((s) => s.slug === slug);

  if (!currentService) {
    return notFound();
  }

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
      {/* Hero Section with Panoramic Image (Blog UI Style) */}
      <section className="relative w-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col justify-end overflow-hidden bg-[#0e2736]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32">
          
          <h1 className="text-[42px] sm:text-[56px] md:text-[66px] lg:text-[76px] font-bold text-white tracking-tight leading-[0.98] drop-shadow-sm mb-6 sm:mb-8 md:mb-10 select-none max-w-5xl">
            {currentService.title}
          </h1>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/25 pb-3 sm:pb-3.5">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.06em]">
              <Link href="/" className="text-white/85 hover:text-white transition-colors">HOME</Link>
              <span className="text-white/60 font-normal select-none">→</span>
              <Link href="/services" className="text-white/85 hover:text-white transition-colors">SERVICES</Link>
              <span className="text-white/60 font-normal select-none">→</span>
              <span className="text-white select-none">{currentService.title}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full py-20 sm:py-28 md:py-36 bg-white px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-28 max-w-[1200px] mx-auto">
            
            {/* Left Sidebar: Services Navigation */}
            <div className="w-full lg:w-[320px] flex-shrink-0">
              <div className="flex flex-col border-t border-neutral-200">
                {SERVICES.map((service) => {
                  const isActive = service.slug === currentService.slug;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className={`group flex items-center justify-between py-6 border-b border-neutral-200 transition-colors ${
                        isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <span className={`text-[15px] font-medium ${isActive ? 'text-neutral-900' : 'text-neutral-400'}`}>
                          {service.id}
                        </span>
                        <span className={`text-[18px] sm:text-[20px] font-semibold tracking-tight ${isActive ? 'font-bold' : ''}`}>
                          {service.title.charAt(0) + service.title.slice(1).toLowerCase()}
                        </span>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-0 text-neutral-900' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-neutral-900'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Main Content */}
            <div className="w-full lg:flex-1 flex flex-col">
              <SectionBadge theme="dark" className="w-fit mb-4">
                SERVICE OVERVIEW
              </SectionBadge>
              <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.15] mb-8">
                {currentService.subtitle}
              </h2>
              
              <div className="text-[16px] sm:text-[17px] text-neutral-600 leading-[1.7] space-y-6 mb-16">
                <p>{currentService.desc}</p>
              </div>

              {currentService.features && currentService.features.length > 0 && (
                <>
                  <div className="w-full h-[1px] bg-neutral-200 mb-12"></div>
                  
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-neutral-900 tracking-tight leading-[1.2] mb-8">
                    Get a closer look at our expert services engineered for maximum efficiency and long-term savings
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 mt-12">
                    {currentService.features.map((feature, idx) => {
                      const icons = [CheckCircle2, Zap, Lightbulb, Leaf, ShieldCheck, Settings];
                      const Icon = icons[idx % icons.length];
                      
                      return (
                        <div key={idx} className="flex flex-col items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] sm:rounded-[16px] bg-[#162024] text-[#AEF977] flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                          </div>
                          <h4 className="text-[15px] sm:text-[18px] md:text-[20px] font-bold text-neutral-900 mb-2 sm:mb-3 tracking-tight">
                            {feature.name}
                          </h4>
                          {feature.desc && (
                            <p className="text-[13px] sm:text-[15px] md:text-[16px] text-neutral-600 leading-[1.5] sm:leading-[1.6]">
                              {feature.desc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            
          </div>

        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
