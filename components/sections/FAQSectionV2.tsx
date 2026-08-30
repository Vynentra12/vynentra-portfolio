'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FAQSectionV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default to match image

  const faqs = [
    {
      question: "What kind of wind energy systems does Vynentra offer?",
      answer: "We offer wind solutions all and any scales you'll ever need - from Vertical Axis Wind Turbines to large-scale captive wind power projects."
    },
    {
      question: "How do I know if my property is suitable for a wind turbine?",
      answer: "We offer a free initial site assessment. Just reach out through our Contact Us page and our team will get in touch with you."
    },
    {
      question: "Can the system be customised for my energy requirement?",
      answer: "Yes. We offer advisory services to recommend the right configuration, including when wind needs to work alongside other energy sources such as solar."
    },
    {
      question: "Can you work on larger wind power requirements?",
      answer: "Yes. Beyond smaller distributed systems, Vynentra works on captive wind power projects for larger commercial and industrial energy requirements."
    }
  ];

  return (
    <section id="faq" className="w-full bg-brand-midnight py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto w-full px-6 md:px-12">
        
        {/* Unified Section Header */}
        <div className="flex flex-col gap-3 mb-10 md:mb-14 border-t border-brand-softwhite/10 pt-6">
          {/* Standardized Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
              FAQ
            </span>
          </div>
          {/* Standardized Title */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
          {/* Standardized Subtitle */}
          <p className="text-[14px] md:text-[15px] text-brand-softwhite/70 max-w-2xl leading-relaxed mt-2">
            To help you make informed decisions, we've compiled answers to some of the most commonly asked questions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full border-t border-brand-softwhite/20">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="border-b border-brand-softwhite/20 py-6 md:py-8 cursor-pointer group"
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-normal text-brand-softwhite pr-4 group-hover:text-brand-energyblue transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-brand-energyblue text-brand-midnight' : 'bg-brand-softwhite/10 text-brand-softwhite group-hover:bg-brand-softwhite/20'}`}>
                  <ArrowUpRight 
                    className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5] transition-transform duration-300" 
                    style={{ transform: openIndex === index ? 'rotate(90deg)' : 'none' }} 
                  />
                </div>
              </div>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-brand-titanium text-[15px] md:text-[16px] font-normal leading-relaxed pr-12 md:pr-20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
