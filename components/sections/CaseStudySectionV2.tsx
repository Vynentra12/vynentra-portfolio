'use client';
import { ArrowUpRight } from "lucide-react";

export function CaseStudySectionV2() {
  const cases = [
    {
      num: "01",
      category: "WIND ENERGY",
      title: "Scaling Wind Power for a Smarter Future",
      desc: "A large-scale renewable energy deployment designed to improve generation capacity, optimize performance, and support long-term energy independence.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "02",
      category: "SYSTEM DESIGN",
      title: "Engineered Around Every Site",
      desc: "Site-specific renewable energy systems designed around local conditions, energy requirements, and long-term performance.",
      image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=800&auto=format&fit=crop"
    },
    {
      num: "03",
      category: "PERFORMANCE",
      title: "Built for Long-Term Impact",
      desc: "From installation to ongoing maintenance, every system is designed for reliable performance and measurable environmental impact.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="case-studies" className="relative w-full bg-brand-midnight text-brand-softwhite py-16 md:py-32">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        
        {/* Standard Global Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-16 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-softwhite uppercase tracking-wider">
              CASE STUDIES
            </span>
          </div>
          <div className="flex flex-col gap-4 max-w-[600px]">
            <h2 className="text-2xl md:text-[28px] font-light text-brand-softwhite text-left leading-[1.25] tracking-tight">
              Real Projects. Measurable Impact.
            </h2>
            <p className="text-[14px] md:text-[15px] font-medium text-brand-titanium leading-relaxed">
              Explore how our renewable energy solutions are transforming sites, improving energy performance, and creating long-term value.
            </p>
          </div>
        </div>

        {/* Clean, strict design system layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-brand-graphite rounded-[8px] border border-brand-softwhite/10 overflow-hidden flex flex-col shadow-[0_2px_15px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300"
            >
              {/* Image Section */}
              <div className="w-full h-[280px] md:h-[240px] relative overflow-hidden bg-brand-midnight">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[11px] font-medium tracking-wider uppercase text-brand-energyblue block mb-3">
                  {item.num} — {item.category}
                </span>
                
                <h3 className="text-[20px] md:text-[22px] font-normal text-brand-softwhite leading-[1.3] mb-4">
                  {item.title}
                </h3>
                
                <p className="text-[14px] text-brand-titanium leading-relaxed font-normal mb-8 flex-1">
                  {item.desc}
                </p>

                {/* Strict Design System CTA (4px radius) */}
                <button className="self-start px-6 py-2.5 rounded-[4px] border border-brand-energyblue text-brand-energyblue text-[13px] font-medium hover:bg-brand-energyblue hover:text-brand-midnight transition-colors flex items-center gap-2">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
