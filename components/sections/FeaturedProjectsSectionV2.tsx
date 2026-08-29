'use client';
import { ArrowUpRight, ChevronLeft, ChevronRight, Wind, Globe, Zap } from "lucide-react";
import { useState } from "react";

export function FeaturedProjectsSectionV2() {
  const [activeIndex, setActiveIndex] = useState(0);

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
    },
    {
      num: "03",
      name: "SOLARIS RIDGE",
      title: "High-Altitude Wind Farm",
      desc: "Harnessing high-altitude winds to provide continuous power to remote grid networks.",
      year: "2027",
      location: "Northern India",
      capacity: "150 MW",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    },
    {
      num: "04",
      name: "MARITIME BREEZE",
      title: "Offshore Wind Platform",
      desc: "Our flagship offshore installation utilizing advanced floating turbine technology.",
      year: "2028",
      location: "Coastal India",
      capacity: "300 MW",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  // Pagination logic: max 4 dots shown at a time
  const maxDots = Math.min(4, projects.length);
  let startDot = 0;
  if (projects.length > 4) {
    if (activeIndex >= projects.length - 2) {
      startDot = projects.length - 4;
    } else if (activeIndex > 1) {
      startDot = activeIndex - 1;
    }
  }
  const visibleDots = Array.from({ length: maxDots }).map((_, i) => startDot + i);

  return (
    <section id="featured-projects" className="relative w-full bg-brand-midnight text-brand-softwhite py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        
        {/* Standard Global Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-12 flex flex-col lg:flex-row justify-between items-start gap-8">
          
          <div className="flex flex-col gap-6 lg:w-[60%]">
            <div className="flex items-center gap-2.5 pt-1 shrink-0">
              <div className="w-2.5 h-2.5 bg-brand-softwhite"></div>
              <span className="text-[11px] font-semibold text-brand-softwhite uppercase tracking-wider">
                FEATURED PROJECTS
              </span>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-medium text-brand-softwhite text-left leading-[1.1] tracking-tight">
                Renewable Developments.<br />Across Global Regions.
              </h2>
              <p className="text-[14px] md:text-[15px] font-medium text-brand-titanium leading-relaxed max-w-[500px]">
                Explore our key wind energy projects delivering clean power, strengthening communities, and shaping a sustainable future.
              </p>
            </div>
          </div>

          {/* Stats on the right side of header */}
          <div className="flex items-center gap-6 md:gap-12 lg:w-[40%] justify-start lg:justify-end mt-2 lg:mt-0">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-[12px] bg-brand-graphite border border-brand-softwhite/10 flex items-center justify-center">
                 <Wind className="w-6 h-6 text-brand-softwhite" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-[22px] font-semibold text-brand-energyblue leading-none mb-1.5">12+</span>
                <span className="block text-[11px] text-brand-titanium font-medium">Projects Completed</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-[12px] bg-brand-graphite border border-brand-softwhite/10 flex items-center justify-center">
                 <Globe className="w-6 h-6 text-brand-softwhite" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-[22px] font-semibold text-brand-energyblue leading-none mb-1.5">8+</span>
                <span className="block text-[11px] text-brand-titanium font-medium">Countries</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-[12px] bg-brand-graphite border border-brand-softwhite/10 flex items-center justify-center">
                 <Zap className="w-6 h-6 text-brand-softwhite" strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-[22px] font-semibold text-brand-energyblue leading-none mb-1.5">250+</span>
                <span className="block text-[11px] text-brand-titanium font-medium">MW Capacity Installed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Cards Container */}
        <div className="flex flex-col lg:flex-row w-full h-auto">
          {projects.map((project, idx) => {
            const isExpanded = idx === activeIndex;
            const isCollapsed = idx === activeIndex + 1;
            const isHidden = idx < activeIndex || idx > activeIndex + 1;
            
            return (
            <div 
              key={project.num} 
              className={`
                transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isExpanded ? 'lg:flex-[1.8] opacity-100 mb-6 lg:mb-0 lg:mr-6' : ''}
                ${isCollapsed ? 'lg:flex-[1] opacity-100' : ''}
                ${isHidden ? 'flex-[0] opacity-0 m-0 w-0 h-0 lg:h-auto overflow-hidden border-0 pointer-events-none' : 'w-full lg:w-auto'}
                rounded-[20px] relative flex flex-col group shadow-lg min-h-[500px] lg:min-h-[600px] border border-brand-softwhite/10 bg-brand-graphite
              `}
            >
              {/* Wrapping inner content to prevent squishing during animation */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[20px]">
                
                {/* Background Image (Stops before the bottom) */}
                <div className="absolute top-0 left-0 right-0 bottom-[15%] lg:bottom-[20%]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Gradient blur matching the card color at the bottom of the image */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-graphite to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-brand-midnight/10 z-10 pointer-events-none"></div>
                </div>
                
                {/* Floating Bottom Content Box */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-6 md:p-8 flex flex-col bg-brand-graphite rounded-[16px] z-20 shadow-[0_-8px_30px_rgba(0,0,0,0.2),0_8px_30px_rgba(0,0,0,0.3)] border border-brand-softwhite/5 transition-transform duration-500 group-hover:-translate-y-1">
                  
                  {/* Top of content box: Name and Title */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-brand-titanium block mb-3 whitespace-nowrap">
                      <span className="text-brand-energyblue mr-2">{project.num}</span> {project.name}
                    </span>
                    <h3 className="text-[24px] md:text-[28px] font-medium text-brand-softwhite leading-[1.2] whitespace-nowrap truncate">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className={`flex flex-col xl:flex-row xl:items-end justify-between transition-all duration-500 ${isCollapsed ? 'gap-0 mt-0' : 'gap-8 mt-auto'}`}>
                    
                    {/* Left Column: Description & Button */}
                    <div className={`flex flex-col transition-all duration-500 ${isCollapsed ? 'gap-0 w-0 xl:w-0 max-h-0 overflow-hidden opacity-0' : 'gap-6 w-full xl:w-[60%] max-h-[500px] opacity-100'}`}>
                      <p className="text-[13px] md:text-[14px] text-brand-titanium leading-relaxed font-medium">
                        {project.desc}
                      </p>
                      
                      {/* Button is placed alongside description on Expanded, but bottom-row on Collapsed */}
                      <button className="w-12 h-12 rounded-full border border-brand-softwhite/20 flex items-center justify-center hover:bg-brand-energyblue hover:border-brand-energyblue hover:text-brand-midnight transition-colors group/btn shrink-0 mt-2">
                        <ArrowUpRight className="w-5 h-5 text-brand-softwhite group-hover/btn:text-brand-midnight group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Right Column: Stats (Always flex, but adjust for collapsed) */}
                    <div className={`flex items-center shrink-0 transition-all duration-500 ${isCollapsed ? 'flex-1 w-full justify-between' : 'w-full xl:w-[40%] justify-start xl:justify-end gap-6 md:gap-8'}`}>
                      
                      {/* Button for Collapsed State */}
                      <button className={`w-10 h-10 rounded-full border border-brand-softwhite/20 flex items-center justify-center hover:bg-brand-energyblue hover:border-brand-energyblue hover:text-brand-midnight transition-colors group/btn shrink-0 ${isCollapsed ? 'flex' : 'hidden'}`}>
                        <ArrowUpRight className="w-4 h-4 text-brand-softwhite group-hover/btn:text-brand-midnight group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                      </button>

                      <div className={`flex items-center ${isCollapsed ? 'gap-3 sm:gap-4' : 'gap-6 md:gap-8'}`}>
                        <div className="flex flex-col gap-1.5">
                          <span className={`text-brand-titanium ${isCollapsed ? 'text-[10px]' : 'text-[11px]'}`}>Year</span>
                          <span className={`font-semibold text-brand-energyblue ${isCollapsed ? 'text-[12px]' : 'text-[14px]'}`}>{project.year}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-brand-softwhite/10"></div>
                        <div className="flex flex-col gap-1.5">
                          <span className={`text-brand-titanium ${isCollapsed ? 'text-[10px]' : 'text-[11px]'}`}>Location</span>
                          <span className={`font-semibold text-brand-energyblue ${isCollapsed ? 'text-[12px]' : 'text-[14px]'}`}>{project.location}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-brand-softwhite/10 hidden sm:block"></div>
                        <div className="flex flex-col gap-1.5 hidden sm:flex">
                          <span className={`text-brand-titanium ${isCollapsed ? 'text-[10px]' : 'text-[11px]'}`}>Capacity</span>
                          <span className={`font-semibold text-brand-energyblue ${isCollapsed ? 'text-[12px]' : 'text-[14px]'}`}>{project.capacity}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>

        {/* Carousel Controls (Bottom) */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <button 
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-brand-softwhite/20 flex items-center justify-center hover:bg-brand-softwhite hover:text-brand-midnight transition-colors text-brand-softwhite"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            {visibleDots.map((dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  dotIdx === activeIndex ? 'w-6 bg-brand-energyblue' : 'w-4 bg-brand-energyblue/30 hover:bg-brand-energyblue/60'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-brand-softwhite/20 flex items-center justify-center hover:bg-brand-softwhite hover:text-brand-midnight transition-colors text-brand-softwhite"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
