'use client';
import { ArrowUpRight, ChevronLeft, ChevronRight, Wind, Globe, Zap } from "lucide-react";

export function FeaturedProjectsSectionV2() {
  const projects = [
    {
      num: "01",
      name: "AETHERWIND HORIZON",
      title: "Large Scale Wind Farm Development",
      desc: "A multi-turbine installation designed to maximize energy generation across varying wind conditions, supporting regional clean energy goals.",
      year: "2025",
      location: "Western India",
      capacity: "120 MW",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop",
      width: "lg:col-span-7 xl:col-span-8"
    },
    {
      num: "02",
      name: "VORTEX NOVA PARK",
      title: "Advanced Wind Energy Park",
      desc: "A high-performance wind park built for long-term reliability and optimized energy output.",
      year: "2026",
      location: "Southern India",
      capacity: "90 MW",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      width: "lg:col-span-5 xl:col-span-4"
    }
  ];

  return (
    <section id="featured-projects" className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        
        {/* Standard Global Header Row */}
        <div className="border-t border-[#1D1D1F]/10 pt-6 mb-12 flex flex-col lg:flex-row justify-between items-start gap-8">
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:w-[60%]">
            <div className="flex items-center gap-2.5 pt-1 shrink-0">
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1D1D1F]"></div>
              <span className="text-xs font-normal text-[#1D1D1F] uppercase tracking-wider">
                FEATURED PROJECTS
              </span>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-[28px] font-light text-[#1D1D1F] text-left leading-[1.25] tracking-tight">
                Renewable Developments. Across Global Regions.
              </h2>
              <p className="text-[14px] md:text-[15px] font-medium text-[#1D1D1F]/70 leading-relaxed max-w-md">
                Explore our key wind energy projects delivering clean power, strengthening communities, and shaping a sustainable future.
              </p>
            </div>
          </div>

          {/* Stats on the right side of header */}
          <div className="flex items-center gap-6 md:gap-10 lg:w-[40%] justify-start lg:justify-end mt-2 lg:mt-0">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#1D1D1F]/5 shadow-[0_2px_10px_rgb(0,0,0,0.03)] flex items-center justify-center">
                 <Wind className="w-5 h-5 text-[#1D1D1F]/70" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-[#1D1D1F] leading-none mb-1">12+</span>
                <span className="block text-[10px] text-[#1D1D1F]/60">Projects Completed</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#1D1D1F]/5 shadow-[0_2px_10px_rgb(0,0,0,0.03)] flex items-center justify-center">
                 <Globe className="w-5 h-5 text-[#1D1D1F]/70" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-[#1D1D1F] leading-none mb-1">8+</span>
                <span className="block text-[10px] text-[#1D1D1F]/60">Countries</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-[#1D1D1F]/5 shadow-[0_2px_10px_rgb(0,0,0,0.03)] flex items-center justify-center">
                 <Zap className="w-5 h-5 text-[#1D1D1F]/70" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-[#1D1D1F] leading-none mb-1">250+</span>
                <span className="block text-[10px] text-[#1D1D1F]/60">MW Capacity Installed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[500px]">
          {projects.map((project, idx) => (
            <div key={idx} className={`${project.width} rounded-[16px] overflow-hidden relative h-[450px] lg:h-full group shadow-[0_4px_20px_rgb(0,0,0,0.04)]`}>
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              
              {/* Bottom White Info Box */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-[12px] p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col lg:flex-row gap-6 justify-between transition-transform duration-500 group-hover:-translate-y-1">
                
                {/* Left side text content */}
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#1D1D1F] block mb-2">
                    {project.num} <span className="ml-2 text-[#1D1D1F]/60">{project.name}</span>
                  </span>
                  <h3 className="text-lg md:text-[20px] font-bold text-[#1D1D1F] leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[11px] md:text-[12px] text-[#1D1D1F]/70 leading-relaxed font-medium mb-4 max-w-sm">
                    {project.desc}
                  </p>
                  
                  <button className="w-10 h-10 rounded-full border border-[#1D1D1F]/10 flex items-center justify-center hover:bg-[#F5F5F7] transition-colors group/btn mt-auto">
                    <ArrowUpRight className="w-4 h-4 text-[#1D1D1F] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={2} />
                  </button>
                </div>

                {/* Right side stats */}
                <div className="flex gap-4 md:gap-8 lg:gap-10 lg:items-end pb-1 shrink-0">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] text-[#1D1D1F]/60">Year</span>
                    <span className="text-[13px] font-bold text-[#1D1D1F]">{project.year}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] text-[#1D1D1F]/60">Location</span>
                    <span className="text-[13px] font-bold text-[#1D1D1F]">{project.location}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] text-[#1D1D1F]/60">Capacity</span>
                    <span className="text-[13px] font-bold text-[#1D1D1F]">{project.capacity}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls (Bottom) */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="w-8 h-8 rounded-full border border-[#1D1D1F]/10 flex items-center justify-center hover:bg-[#1D1D1F] hover:text-white transition-colors text-[#1D1D1F]/70">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 bg-[#1D1D1F] rounded-full"></div>
            <div className="w-6 h-1 bg-[#1D1D1F]/20 rounded-full"></div>
            <div className="w-6 h-1 bg-[#1D1D1F]/20 rounded-full"></div>
          </div>

          <button className="w-8 h-8 rounded-full border border-[#1D1D1F]/10 flex items-center justify-center hover:bg-[#1D1D1F] hover:text-white transition-colors text-[#1D1D1F]/70">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
