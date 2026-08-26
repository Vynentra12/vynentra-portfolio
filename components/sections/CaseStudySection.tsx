'use client';
import Image from 'next/image';

export function CaseStudySection() {
  return (
    <section id="case-studies" className="py-16 md:py-20 px-6 bg-gradient-to-r from-[#DBEDF7] to-[#BFDBE8]">
      <div className="max-w-[1400px] mx-auto w-full md:px-8">
        
        {/* Header Row */}
        <div className="border-t border-white/60 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1 text-[#053A64]">
            <div className="w-2.5 h-2.5 bg-[#053A64] rounded-[2px]" />
            <span className="text-xs font-normal uppercase tracking-wider">
              FEATURED PROJECTS
            </span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-[#053A64] text-left max-w-sm leading-[1.25] tracking-tight">
            Renewable Developments Across Global Regions.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          
          {/* Left Project (Wider) */}
          <div className="w-full lg:w-[63%] flex flex-col gap-4 group cursor-pointer">
            <div className="w-full h-[250px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-[7px] overflow-hidden bg-[#d9ebf5] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop" 
                alt="AetherWind Horizon" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[18px] md:text-[20px] font-normal text-[#053A64]">AetherWind Horizon</h3>
              <span className="text-[13px] md:text-[14px] font-medium text-[#053A64]/80">2025</span>
            </div>
          </div>

          {/* Right Project (Narrower) */}
          <div className="w-full lg:w-[37%] flex flex-col gap-4 group cursor-pointer">
            <div className="w-full h-[250px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-[7px] overflow-hidden bg-[#d9ebf5] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop" 
                alt="Vortex Nova Park" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[18px] md:text-[20px] font-normal text-[#053A64]">Vortex Nova Park</h3>
              <span className="text-[13px] md:text-[14px] font-medium text-[#053A64]/80">2026</span>
            </div>
          </div>
        </div>

        {/* Footer Row */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-16 lg:mt-20 px-1">
          <span className="text-[13.5px] md:text-[14px] font-normal text-[#053A64]/80 whitespace-nowrap">
            Explore all wind energy projects.
          </span>
          
          {/* Divider Line */}
          <div className="w-full flex-grow border-t border-white/60"></div>
          
          <button className="shrink-0 px-7 py-2.5 bg-white hover:bg-[#053A64] text-[#053A64] hover:text-white rounded-full font-medium text-[13.5px] transition-colors shadow-sm whitespace-nowrap">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}
