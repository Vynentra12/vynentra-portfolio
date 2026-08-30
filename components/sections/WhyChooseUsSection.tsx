'use client';

const SOLUTIONS_DATA = [
  {
    subtitle: "Site Assessment",
    title: "We start with the site.",
    description: "We study the location, altitude and local wind conditions before recommending a system. Because the right wind solution starts with understanding the wind.",
    imgSrc: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
  },
  {
    subtitle: "Custom Configuration",
    title: "No two projects need to look the same.",
    description: "From a single turbine to a combination of different capacities, we configure the system around your energy requirement, available space and site conditions.",
    imgSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    subtitle: "Scalable Capacity",
    title: "From a rooftop to a captive power project.",
    description: "Our solutions work across the kW scale and larger power requirements - helping more businesses, institutions and properties explore what wind can do for them.",
    imgSrc: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
  },
  {
    subtitle: "Ongoing Maintenance",
    title: "From installation to what comes after.",
    description: "Our work doesn't stop when the turbine is installed. We take care of the wiring, distribution, commissioning and ongoing maintenance needed to keep the system running.",
    imgSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative w-full bg-brand-midnight py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
        
        {/* Unified Section Header */}
        <div className="flex flex-col gap-3 mb-10 md:mb-14 border-t border-brand-softwhite/10 pt-6">
          {/* Standardized Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
              SOLUTIONS
            </span>
          </div>
          {/* Standardized Title */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
            Renewable Infrastructure<br className="hidden md:block" /> Driven By Innovation.
          </h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full auto-rows-[minmax(0,1fr)] lg:h-[800px]">
          
          {/* Card 1: Tall (Left Column, spans 2 rows) */}
          <div className="group relative lg:col-span-1 lg:row-span-2 rounded-[12px] overflow-hidden bg-brand-graphite shadow-lg border border-brand-softwhite/10 flex flex-col min-h-[450px] lg:min-h-full">
            <img 
              src={SOLUTIONS_DATA[0].imgSrc} 
              alt={SOLUTIONS_DATA[0].subtitle} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Heavy gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/40 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <span className="text-brand-energyblue text-[11px] md:text-[12px] uppercase tracking-wider font-semibold mb-3">
                01 — {SOLUTIONS_DATA[0].subtitle}
              </span>
              <h3 className="text-brand-softwhite text-[28px] md:text-[34px] leading-[1.2] font-semibold mb-4">
                {SOLUTIONS_DATA[0].title}
              </h3>
              <p className="text-brand-titanium text-[14px] md:text-[15px] leading-relaxed">
                {SOLUTIONS_DATA[0].description}
              </p>
            </div>
          </div>
          
          {/* Card 2: Wide (Top Right, spans 2 columns, 1 row) */}
          <div className="group lg:col-span-2 lg:row-span-1 rounded-[12px] overflow-hidden bg-brand-graphite shadow-lg border border-brand-softwhite/10 flex flex-col md:flex-row min-h-[350px] lg:min-h-0 relative">
            {/* Background graphic/image shifted to the right */}
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 overflow-hidden">
               <img 
                  src={SOLUTIONS_DATA[1].imgSrc} 
                  alt={SOLUTIONS_DATA[1].subtitle} 
                  className="w-full h-full object-cover opacity-30 md:opacity-100 transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-brand-graphite via-brand-graphite/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 w-full md:w-[60%] flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <span className="text-brand-energyblue text-[11px] md:text-[12px] uppercase tracking-wider font-semibold mb-3">
                02 — {SOLUTIONS_DATA[1].subtitle}
              </span>
              <h3 className="text-brand-softwhite text-[26px] md:text-[32px] leading-[1.2] font-semibold mb-4">
                {SOLUTIONS_DATA[1].title}
              </h3>
              <p className="text-brand-titanium text-[14px] md:text-[15px] leading-relaxed max-w-[450px]">
                {SOLUTIONS_DATA[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: Standard (Bottom Middle, 1 column, 1 row) */}
          <div className="lg:col-span-1 lg:row-span-1 rounded-[12px] overflow-hidden bg-brand-graphite shadow-lg border border-brand-softwhite/10 p-8 md:p-10 flex flex-col justify-between min-h-[350px] lg:min-h-0 relative group">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-brand-energyblue/0 group-hover:bg-brand-energyblue/5 transition-colors duration-500 pointer-events-none"></div>
            
            <div>
              <span className="text-brand-energyblue text-[11px] md:text-[12px] uppercase tracking-wider font-semibold mb-8 block">
                03 — {SOLUTIONS_DATA[2].subtitle}
              </span>
              <h3 className="text-brand-softwhite text-[24px] md:text-[28px] leading-[1.25] font-semibold mb-4">
                {SOLUTIONS_DATA[2].title}
              </h3>
            </div>
            <p className="text-brand-titanium text-[14px] md:text-[15px] leading-relaxed relative z-10">
              {SOLUTIONS_DATA[2].description}
            </p>
          </div>

          {/* Card 4: Standard (Bottom Right, 1 column, 1 row) */}
          <div className="lg:col-span-1 lg:row-span-1 rounded-[12px] overflow-hidden bg-[#252A30] shadow-lg border border-brand-softwhite/10 p-8 md:p-10 flex flex-col justify-between min-h-[350px] lg:min-h-0 relative group">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-brand-energyblue/0 group-hover:bg-brand-energyblue/5 transition-colors duration-500 pointer-events-none"></div>
            
            <div>
              <span className="text-brand-energyblue text-[11px] md:text-[12px] uppercase tracking-wider font-semibold mb-8 block">
                04 — {SOLUTIONS_DATA[3].subtitle}
              </span>
              <h3 className="text-brand-softwhite text-[24px] md:text-[28px] leading-[1.25] font-semibold mb-4">
                {SOLUTIONS_DATA[3].title}
              </h3>
            </div>
            <p className="text-brand-titanium text-[14px] md:text-[15px] leading-relaxed relative z-10">
              {SOLUTIONS_DATA[3].description}
            </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
