"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSectionV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default matching reference
  const [isImageHovered, setIsImageHovered] = useState(false);
  const turbulenceRef = React.useRef<SVGFETurbulenceElement>(null);

  // Silky-smooth, organic continuous water ripple animation while hovered
  useEffect(() => {
    if (!isImageHovered) return;

    let animId: number;
    const startTime = performance.now();
    const turbElement = turbulenceRef.current;

    const animateWater = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      // Gentle, low-frequency smooth liquid flow waves
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
      question: "What kind of wind energy systems does Vynentra offer?",
      answer: "We offer wind solutions all and any scales you'll ever need - from Vertical Axis Wind Turbines to large-scale captive wind power projects.",
    },
    {
      question: "How do I know if my property is suitable for a wind turbine?",
      answer: "We offer a free initial site assessment. Just reach out through our Contact Us page and our team will get in touch with you.",
    },
    {
      question: "Can the system be customised for my energy requirement?",
      answer: "Yes. We offer advisory services to recommend the right configuration, including when wind needs to work alongside other energy sources such as solar.",
    },
    {
      question: "Can you work on larger wind power requirements?",
      answer: "Yes. Beyond smaller distributed systems, Vynentra works on captive wind power projects for larger commercial and industrial energy requirements.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-white text-neutral-900 py-14 md:py-20 font-sans relative">
      
      {/* SVG Ultra-Smooth Liquid Wave Filter */}
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

      <div className="w-full max-w-[1380px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* 2-Column Grid with aligned spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Wind Turbine Image with Silky Smooth Liquid Ripple on Hover */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div 
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] lg:h-[460px] xl:h-[480px] rounded-[20px] sm:rounded-[24px] overflow-hidden relative shadow-sm bg-neutral-100 cursor-pointer select-none group"
            >
              <img
                src="https://images.pexels.com/photos/16550751/pexels-photo-16550751.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wind turbines in landscape"
                style={{
                  filter: isImageHovered ? "url(#faq-water-wave-distortion)" : "none",
                  transition: "filter 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  isImageHovered ? "scale-[1.02]" : "scale-100"
                }`}
              />
            </div>
          </motion.div>

          {/* Right Column: Title, Kicker & Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            
            {/* Tagline */}
            <span className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-800 uppercase tracking-[0.06em] mb-2.5">
              ENERGY SOLUTIONS TAILORED TO YOUR NEEDS
            </span>

            {/* Main Headline */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold text-neutral-900 tracking-tight leading-[1.18] mb-6 lg:mb-8 max-w-[520px]">
              Everything you need to know about wind power
            </h2>

            {/* FAQ Accordion List */}
            <div className="w-full flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    key={index}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="border-b border-neutral-200/90 py-4 sm:py-5 cursor-pointer group select-none transition-colors"
                  >
                    {/* Question Row */}
                    <div className="flex justify-between items-center gap-4">
                      <h3 
                        className={`text-[17px] sm:text-[18px] lg:text-[19px] font-medium tracking-tight leading-[1.3] transition-colors duration-200 ${
                          isOpen 
                            ? "text-[#0A6B88]" 
                            : "text-neutral-900 group-hover:text-neutral-700"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      {/* Expand / Collapse Icon */}
                      <div className="shrink-0">
                        {isOpen ? (
                          <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0A6B88] stroke-[2.5]" />
                        ) : (
                          <ArrowDown className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-900 stroke-[2.5] group-hover:translate-y-0.5 transition-transform duration-200" />
                        )}
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
                        <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-[1.6] max-w-[540px] font-normal">
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
