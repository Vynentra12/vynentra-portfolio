'use client';
import { motion } from 'framer-motion';

export function ProcessSectionV2() {
  const steps = [
    { 
      num: "01", 
      title: "Site Assessment",
      desc: "We assess site coordinates, altitude and local wind conditions to determine the feasibility and configuration of a wind energy system.",
    },
    { 
      num: "02", 
      title: "System Design",
      desc: "Every system is configured around its energy requirement and wind conditions - from individual turbines to modular arrays.",
    },
    { 
      num: "03", 
      title: "Installation & Execution",
      desc: "Complete project execution, including turbine installation, wiring, distribution systems and commissioning.",
    },
    { 
      num: "04", 
      title: "Operations & Maintenance",
      desc: "Annual Maintenance Contracts designed to monitor systems, maintain performance and support long-term operation.",
    },
  ];

  return (
    <section id="process" className="relative w-full bg-brand-midnight text-brand-softwhite py-16 md:py-24 overflow-hidden">
      
      {/* Background glowing orb matching the reference image's bottom-left glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] bg-brand-energyblue/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="border-t border-brand-softwhite/10 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Column: Title */}
            <div className="lg:col-span-5">
              {/* Unified Section Header */}
              <div className="flex flex-col gap-3 mb-10 md:mb-14">
              {/* Standardized Badge */}
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
                <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
                  PROCESS
                </span>
              </div>
              {/* Standardized Title */}
              <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
                Our Process
              </h2>
            </div>
            
            {/* Floating Image */}
            <div className="hidden lg:flex items-center justify-center mt-24 xl:mt-32 relative h-[300px]">
              {/* Glow Effect */}
              <motion.div 
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-[20%] rounded-full bg-brand-energyblue/30 blur-[60px] z-0"
              />
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                src="/mini-wheel.png" 
                alt="Mini Wheel" 
                className="w-[280px] object-contain relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              />
            </div>
          </div>

          {/* Right Column: List */}
          <div className="lg:col-span-7 flex flex-col">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`${index === 0 ? 'pb-5 md:pb-6' : 'py-5 md:py-6'} flex items-start justify-between gap-6 group transition-colors duration-300 ${
                  index !== steps.length - 1 ? 'border-b border-brand-softwhite/10' : ''
                }`}
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[20px] md:text-[22px] font-medium text-brand-softwhite group-hover:text-brand-energyblue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] font-medium text-brand-titanium leading-relaxed max-w-[440px]">
                    {step.desc}
                  </p>
                </div>
                <div className="text-[13px] md:text-[14px] font-normal group-hover:font-semibold tracking-wider text-brand-energyblue mt-1 shrink-0 transition-all duration-300">
                  Step {step.num}
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
