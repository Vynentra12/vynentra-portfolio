"use client";

import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSectionV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const [isImageHovered, setIsImageHovered] = useState(false);
  const turbulenceRef = React.useRef<SVGFETurbulenceElement>(null);

  // Organic liquid water ripple animation on hover
  useEffect(() => {
    if (!isImageHovered) return;

    let animId: number;
    const startTime = performance.now();
    const turbElement = turbulenceRef.current;

    const animateWater = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const freqX = 0.005 + Math.sin(elapsed * 1.6) * 0.002;
      const freqY = 0.009 + Math.cos(elapsed * 1.4) * 0.003;
      if (turbElement) {
        turbElement.setAttribute("baseFrequency", `${freqX.toFixed(5)} ${freqY.toFixed(5)}`);
      }
      animId = requestAnimationFrame(animateWater);
    };

    animId = requestAnimationFrame(animateWater);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (turbElement) {
        turbElement.setAttribute("baseFrequency", "0.005 0.009");
      }
    };
  }, [isImageHovered]);

  const faqs: FAQItem[] = [
    {
      question: "How does Vynentra determine which renewable energy solution is right for a site?",
      answer:
        "We begin by understanding the site's location, available space, renewable resource potential and energy requirements. Based on these factors, we evaluate the suitability of wind, solar, hybrid and storage solutions before recommending an approach.",
    },
    {
      question: "Does Vynentra provide both wind and solar solutions?",
      answer:
        "Yes. We are developing solutions across wind, solar and wind-solar hybrid systems, allowing us to evaluate different generation options based on the requirements and conditions of each project.",
    },
    {
      question: "Can Vynentra develop a wind-solar hybrid system for my project?",
      answer:
        "Yes. We are developing hybrid projects that combine wind and solar generation where the two resources can complement each other and create a more suitable generation profile for the project's requirements.",
    },
    {
      question: "What types of projects does Vynentra work with?",
      answer:
        "We work across residential, commercial, industrial, hospitality, institutional, infrastructure and other captive energy applications, with solutions designed around the project's scale and energy requirements.",
    },
    {
      question: "Does Vynentra only work with small distributed wind projects?",
      answer:
        "No. While distributed wind is an important part of our focus, we are also working across larger captive wind projects, hybrid renewable systems and other renewable energy applications.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-white text-neutral-900 py-16 md:py-24 font-sans relative select-text">
      
      {/* SVG Liquid Wave Distortion Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="faq-water-wave-distortion" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence 
              ref={turbulenceRef}
              type="turbulence" 
              baseFrequency="0.005 0.009" 
              numOctaves={2} 
              result="noise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale={isImageHovered ? 8 : 0} 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* Left Column: Liquid Ripple Image on Hover (precisely leveled with right column content) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 w-full h-full min-h-0 flex flex-col"
          >
            <div 
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              className="w-full h-[260px] xs:h-[300px] sm:h-[340px] lg:h-full min-h-0 rounded-[20px] sm:rounded-[24px] overflow-hidden relative shadow-sm bg-neutral-100 cursor-pointer select-none group flex-1"
            >
              <img
                src="https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wind turbines in landscape"
                style={{
                  filter: isImageHovered ? "url(#faq-water-wave-distortion)" : "none",
                  transition: "filter 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                  isImageHovered ? "scale-[1.02]" : "scale-100"
                }`}
              />
            </div>
          </motion.div>

          {/* Right Column: Badge, Title & Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            {/* Badge: FAQ'S */}
            <SectionBadge theme="dark" className="mb-4 sm:mb-5 w-fit">
              FAQ&apos;S
            </SectionBadge>

            {/* Main Title */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium text-neutral-900 tracking-tight leading-[1.18] mb-6 lg:mb-8 max-w-[560px]">
              Understanding renewable energy for your project
            </h2>

            {/* FAQ Accordion List (Without 01,02,03 numbers, with What-We-Do arrows) */}
            <div className="w-full flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                    key={index}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`py-4 sm:py-5 cursor-pointer group select-none transition-colors duration-200 ${
                      index !== faqs.length - 1 ? "border-b border-neutral-200/90" : ""
                    }`}
                  >
                    {/* Question Row with What-We-Do Arrow */}
                    <div className="flex justify-between items-center gap-4 sm:gap-6">
                      <h3 
                        className={`text-[17px] sm:text-[18px] lg:text-[19px] font-medium tracking-tight leading-[1.3] transition-colors duration-200 ${
                          isOpen 
                            ? "text-[#087589]" 
                            : "text-neutral-900 group-hover:text-[#087589]"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      {/* Plus/Minus Toggle */}
                      <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                        <Plus
                          className={`w-5 h-5 text-neutral-800 absolute transition-all duration-300 ease-out ${
                            isOpen ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0 group-hover:text-[#087589]"
                          }`}
                        />
                        <Minus
                          className={`w-5 h-5 text-[#087589] absolute transition-all duration-300 ease-out ${
                            isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Smooth Collapsible Answer */}
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen 
                          ? "grid-rows-[1fr] opacity-100 mt-3 pb-1" 
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-[1.65] max-w-[560px] font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
