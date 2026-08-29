'use client';
import { Wind, BarChart2, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export function MissionSectionV2() {
  return (
    <section id="about" className="w-full bg-brand-midnight py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        {/* Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-softwhite uppercase tracking-wider">
              MISSION
            </span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-brand-softwhite text-left max-w-md leading-[1.25] tracking-tight">
            Building A Sustainable Energy Future Technology.
          </h2>
        </div>

        <div className="bg-brand-graphite rounded-[24px] p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-brand-softwhite/10 flex flex-col gap-8 lg:gap-10">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col justify-center">
              
              <p className="text-brand-titanium text-sm md:text-[14px] leading-relaxed mb-8 max-w-[460px] font-medium">
                By bringing wind to rooftops, institutions, businesses and captive power projects, Vynentra is expanding where wind can work and what it can power.
              </p>

              {/* Bento Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Tall Card (Left) */}
                <div className="bg-brand-graphite rounded-2xl p-5 sm:p-6 border border-brand-softwhite/10 shadow-[0_2px_15px_rgb(0,0,0,0.2)] sm:row-span-2 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-brand-midnight flex items-center justify-center mb-6 shrink-0">
                    <Wind className="w-4 h-4 text-brand-energyblue" strokeWidth={1.5} />
                  </div>
                  <div className="mt-auto">
                    <h4 className="text-[17px] font-medium text-brand-softwhite mb-2 leading-snug tracking-tight">
                      Unlocking India's<br/>wind potential
                    </h4>
                    <p className="text-[12px] text-brand-titanium leading-relaxed font-medium">
                      India holds more than 695 GW of estimated onshore wind potential yet only a fraction has been developed.
                    </p>
                  </div>
                </div>
                
                {/* Small Card 1 (Top Right) */}
                <div className="bg-brand-graphite rounded-2xl p-4 sm:p-5 border border-brand-softwhite/10 shadow-[0_2px_15px_rgb(0,0,0,0.2)] flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-brand-midnight flex items-center justify-center shrink-0">
                     <BarChart2 className="w-4 h-4 text-brand-energyblue" strokeWidth={1.5} />
                   </div>
                   <div className="flex flex-col justify-center">
                     <h4 className="text-[22px] font-semibold text-brand-softwhite leading-none mb-1">92%</h4>
                     <p className="text-[11px] text-brand-titanium font-medium">Performance uplift</p>
                   </div>
                </div>

                {/* Small Card 2 (Bottom Right) */}
                <div className="bg-brand-graphite rounded-2xl p-4 sm:p-5 border border-brand-softwhite/10 shadow-[0_2px_15px_rgb(0,0,0,0.2)] flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-brand-midnight flex items-center justify-center shrink-0">
                     <Zap className="w-4 h-4 text-brand-energyblue" strokeWidth={1.5} />
                   </div>
                   <div className="flex flex-col justify-center">
                     <h4 className="text-[22px] font-semibold text-brand-softwhite leading-none mb-1">50+</h4>
                     <p className="text-[11px] text-brand-titanium font-medium leading-tight">Projects delivered<br/>worldwide</p>
                   </div>
                </div>

              </div>
            </div>

            {/* Right Image Area */}
            <div className="flex-1 rounded-[16px] overflow-hidden relative min-h-[360px] lg:min-h-0">
               <img 
                 src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
                 className="absolute inset-0 w-full h-full object-cover" 
                 alt="Wind Turbines" 
               />
            </div>
            
          </div>

          {/* Bottom Footer Bar */}
          <div className="border border-brand-softwhite/10 rounded-[16px] bg-brand-graphite p-5 lg:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.2)]">
             
             <div className="flex-1">
               <h4 className="text-[15px] font-medium text-brand-softwhite mb-1 tracking-tight">The technology exists. The wind is everywhere.</h4>
               <p className="text-[13px] text-brand-titanium font-medium">Our job is to put it to work the best.</p>
             </div>
             
             <div className="hidden lg:block w-[1px] h-10 bg-brand-softwhite/10 shrink-0"></div>
             
             <div className="flex-1 flex gap-3 items-start max-w-md">
               <CheckCircle2 className="w-4 h-4 text-brand-energyblue shrink-0 mt-0.5" strokeWidth={1.5} />
               <p className="text-[12px] text-brand-titanium font-medium leading-relaxed">
                 By simplifying workflows and decision-making, we help teams focus on what matters most delivering outcomes instead of managing overhead.
               </p>
             </div>
             
             <div className="w-full lg:w-auto shrink-0 mt-2 lg:mt-0">
               <button className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-energyblue text-brand-midnight px-6 h-11 rounded-[4px] font-medium text-[13px] transition-all duration-300 hover:scale-[1.02] hover:bg-brand-softwhite border border-transparent shadow-sm group">
                 <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45">
                   <rect x="0" y="0" width="6" height="6" rx="1" fill="currentColor"/>
                   <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor"/>
                   <rect x="8" y="0" width="6" height="6" rx="1" fill="currentColor"/>
                   <rect x="0" y="8" width="6" height="6" rx="1" fill="currentColor"/>
                 </svg>
                 More About Us 
               </button>
             </div>
             
          </div>

        </div>
      </div>
    </section>
  );
}
