'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" className="py-16 md:py-20 px-6 bg-gradient-to-r from-[#DBEDF7] to-[#BFDBE8]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top White Divider Line & Header Row */}
        <div className="border-t border-white/60 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#053A64]"></div>
            <span className="text-xs font-normal text-[#053A64] uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-light text-[#053A64] text-left max-w-md leading-[1.25] tracking-tight">
            Answers To Common Questions About Solutions.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="bg-[#ECF7FF] rounded-[7px] border-[0.9px] border-white px-6 md:px-7 py-4 md:py-4.5 cursor-pointer group transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[17px] md:text-[19px] font-light text-[#053A64] pr-8">
                  {faq.question}
                </h3>
                <Plus 
                  className="w-5 h-5 text-[#053A64] stroke-[1.25] transition-transform duration-300 shrink-0" 
                  style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }} 
                />
              </div>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-3.5 border-t border-[#053A64]/10 pt-3.5' : 'grid-rows-[0fr] opacity-0 mt-0 border-t-0 pt-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#053A64]/80 text-xs md:text-[13px] font-light leading-relaxed">
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
