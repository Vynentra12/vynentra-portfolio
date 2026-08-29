'use client';
import { Wind, BarChart2, Settings, ShieldCheck } from "lucide-react";

export function ProcessSectionV2() {
  const steps = [
    { 
      num: "01", 
      title: "Site Assessment",
      subtitle: "Know the wind before you build.",
      desc: "We assess site coordinates, altitude and local wind conditions to determine the feasibility and configuration of a wind energy system.",
      icon: Wind
    },
    { 
      num: "02", 
      title: "System Design",
      subtitle: "Designed for the site.",
      desc: "Every system is configured around its energy requirement and wind conditions - from individual turbines to modular arrays and larger captive installations.",
      icon: BarChart2
    },
    { 
      num: "03", 
      title: "Installation & Execution",
      subtitle: "From specification to generation.",
      desc: "Complete project execution, including turbine installation, wiring, distribution systems and commissioning.",
      icon: Settings
    },
    { 
      num: "04", 
      title: "Operations & Maintenance",
      subtitle: "Performance that lasts.",
      desc: "Annual Maintenance Contracts designed to monitor systems, maintain performance and support long-term operation.",
      icon: ShieldCheck
    },
  ];

  return (
    <section id="process" className="relative w-full bg-brand-midnight text-brand-softwhite py-16 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        {/* Standard Global Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-softwhite uppercase tracking-wider">
              PROCESS
            </span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-brand-softwhite text-left max-w-md leading-[1.25] tracking-tight">
            Comprehensive Renewable Tech Energy Solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left Column: Sticky Graphic & Subtitle */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-32">
              <p className="text-brand-titanium text-[14px] md:text-[15px] leading-relaxed max-w-[340px] font-medium mb-12">
                End-to-end wind energy solutions built on precision, performance, and long-term value.
              </p>

              {/* Faint Graphic Illustration */}
              <div className="relative opacity-[0.03] pointer-events-none w-[500px] h-[500px] left-[-80px]">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white fill-none" strokeWidth="0.75">
                  <path d="M 0,350 Q 150,250 250,350 T 500,300 L 500,500 L 0,500 Z" stroke="none" fill="#ffffff" fillOpacity="0.02" />
                  <path d="M 0,350 Q 150,250 250,350 T 500,300" />
                  <path d="M 0,400 Q 200,300 350,450 T 500,400" />
                  <path d="M -50,450 Q 150,380 300,480 T 550,420" />
                  {/* Turbine 1 (Big) */}
                  <g transform="translate(180, 260)">
                    <line x1="0" y1="0" x2="0" y2="150" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                    <line x1="0" y1="0" x2="-60" y2="-90" strokeWidth="1" />
                    <line x1="0" y1="0" x2="90" y2="-15" strokeWidth="1" />
                    <line x1="0" y1="0" x2="-30" y2="75" strokeWidth="1" />
                  </g>
                  {/* Turbine 2 (Small) */}
                  <g transform="translate(320, 310) scale(0.6)">
                    <line x1="0" y1="0" x2="0" y2="150" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                    <line x1="0" y1="0" x2="-60" y2="-90" strokeWidth="1" />
                    <line x1="0" y1="0" x2="90" y2="-15" strokeWidth="1" />
                    <line x1="0" y1="0" x2="-30" y2="75" strokeWidth="1" />
                  </g>
                  {/* Turbine 3 (Smallest) */}
                  <g transform="translate(70, 310) scale(0.4)">
                    <line x1="0" y1="0" x2="0" y2="150" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                    <line x1="0" y1="0" x2="-60" y2="-90" strokeWidth="1" />
                    <line x1="0" y1="0" x2="90" y2="-15" strokeWidth="1" />
                    <line x1="0" y1="0" x2="-30" y2="75" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 relative z-10 pt-4 lg:pt-0">
            {/* The vertical connecting line */}
            <div className="absolute left-[52px] top-[4rem] bottom-[4rem] w-[1px] bg-brand-softwhite/10 hidden md:block z-0"></div>

            <div className="flex flex-col gap-3 md:gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-brand-graphite rounded-[16px] p-5 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.2)] border border-brand-softwhite/10 flex flex-col md:flex-row items-start gap-4 md:gap-8 relative z-10 group hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Icon Circle */}
                  <div className="w-[56px] h-[56px] rounded-full bg-brand-midnight shadow-[0_4px_15px_rgb(0,0,0,0.2)] border border-brand-softwhite/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <step.icon className="w-6 h-6 text-brand-energyblue" strokeWidth={1.25} />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full pt-1 md:pt-2">
                    {/* Big Number */}
                    <div className="text-[28px] md:text-[36px] font-medium text-brand-softwhite/20 leading-none shrink-0 w-[44px]">
                      {step.num}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col pt-1">
                      <h3 className="text-lg md:text-[20px] font-bold text-brand-softwhite mb-1.5 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[13px] md:text-[14px] font-semibold text-brand-energyblue mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-[13px] text-brand-titanium leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
