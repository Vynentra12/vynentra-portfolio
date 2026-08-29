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
        
        {/* Unified Section Header */}
        <div className="flex flex-col gap-3 mb-10 md:mb-14 border-t border-brand-softwhite/10 pt-6">
          {/* Standardized Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
              CASE STUDIES
            </span>
          </div>
          {/* Standardized Title */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
            Real Projects. Measurable Impact.
          </h2>
          {/* Standardized Subtitle */}
          <p className="text-[14px] md:text-[15px] text-brand-softwhite/70 max-w-2xl leading-relaxed mt-2">
            Explore how our renewable energy solutions are transforming sites, improving energy performance, and creating long-term value.
          </p>
        </div>

        {/* Horizontal Layout Container */}
        <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {cases.map((item, idx) => (
            <div 
              key={idx} 
              className="group snap-start bg-brand-graphite rounded-[16px] border border-brand-softwhite/10 overflow-hidden flex flex-col xl:flex-row w-full min-w-[100%] lg:min-w-[calc(50%-12px)] shadow-[0_2px_15px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300"
            >
              {/* Image Section */}
              <div className="w-full xl:w-[40%] h-[160px] xl:h-auto relative overflow-hidden bg-brand-midnight shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              {/* Content Section */}
              <div className="p-4 lg:py-5 lg:px-6 flex flex-col flex-1 justify-center">
                <span className="text-[9.5px] md:text-[10px] font-medium tracking-wider uppercase text-brand-titanium block mb-1.5">
                  <span className="text-brand-softwhite mr-1.5">{item.num}</span> — <span className="ml-1.5">{item.category}</span>
                </span>
                
                <h3 className="text-[17px] md:text-[18px] lg:text-[20px] font-normal text-brand-softwhite leading-[1.2] mb-2 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-[12px] md:text-[12.5px] text-brand-titanium leading-relaxed font-normal mb-4 max-w-[95%]">
                  {item.desc}
                </p>

                {/* Button matching the reference layout */}
                <div className="mt-auto flex items-center gap-3 cursor-pointer group/btn w-max pt-1">
                  <div className="w-8 h-8 rounded-full border border-brand-softwhite/20 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-brand-energyblue group-hover/btn:border-brand-energyblue group-hover/btn:text-brand-midnight text-brand-softwhite shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] font-medium text-brand-softwhite group-hover/btn:text-brand-energyblue transition-colors duration-300">
                    View Case Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Row (View All) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 lg:mt-8 px-1">
          <span className="text-[13px] md:text-[13.5px] font-normal text-brand-titanium whitespace-nowrap">
            Explore all our projects.
          </span>
          
          {/* Divider Line */}
          <div className="w-full flex-grow border-t border-brand-softwhite/10"></div>
          
          <button className="shrink-0 px-6 py-2 bg-brand-energyblue hover:bg-brand-softwhite text-brand-midnight hover:text-brand-midnight rounded-[4px] font-medium text-[13px] transition-colors shadow-sm whitespace-nowrap">
            View All Projects
          </button>
        </div>
        
      </div>
    </section>
  );
}
