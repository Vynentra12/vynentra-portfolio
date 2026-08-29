'use client';
import { Wind } from 'lucide-react';

export function MissionSectionV2() {
  return (
    <section id="about" className="w-full bg-brand-midnight py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        
        {/* Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-softwhite uppercase tracking-wider">
              MISSION
            </span>
          </div>
        </div>

        {/* The Main Card */}
        <div className="bg-brand-graphite rounded-[24px] p-4 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-brand-softwhite/10 flex flex-col lg:flex-row gap-8 lg:gap-14">
          
          {/* Left: Image Area */}
          <div className="w-full lg:w-1/2 rounded-[16px] overflow-hidden relative min-h-[320px] lg:min-h-[520px]">
             <img 
               src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover" 
               alt="Wind Turbines" 
             />
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-8 lg:pr-8">
            
            <h3 className="text-[32px] md:text-[42px] lg:text-[46px] leading-[1.15] tracking-tight text-brand-softwhite/80 font-light mb-6 md:mb-8">
              Unlock the power of wind energy and <span className="font-semibold text-brand-energyblue">build a sustainable future.</span>
            </h3>
            
            <p className="text-[15px] md:text-[16px] text-brand-titanium leading-relaxed font-medium mb-10 max-w-[500px]">
              By bringing wind to rooftops, institutions, businesses and captive power projects, Vynentra is expanding where wind can work and what it can power. India holds more than 695 GW of estimated onshore wind potential yet only a fraction has been developed.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-brand-softwhite/10 mb-8 md:mb-10"></div>

            {/* Stats */}
            <div className="flex gap-16 md:gap-24">
              <div className="flex flex-col">
                <h4 className="text-[44px] md:text-[54px] font-normal text-brand-energyblue leading-none tracking-tight mb-3">92%</h4>
                <p className="text-[13px] text-brand-titanium font-medium tracking-wide uppercase">Performance uplift</p>
              </div>
              
              <div className="flex flex-col">
                <h4 className="text-[44px] md:text-[54px] font-normal text-brand-energyblue leading-none tracking-tight mb-3">50+</h4>
                <p className="text-[13px] text-brand-titanium font-medium tracking-wide uppercase">Projects delivered</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
