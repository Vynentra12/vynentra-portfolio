'use client';
import { ArrowRight, Leaf, BarChart2, ShieldCheck, Target } from "lucide-react";

export function HeroSectionV2() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B101A]">
        <img
          src="/heroimage.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Extra dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-brand-midnight/40" />
      </div>

      {/* 2. Gradient Overlay fading into the next section's background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/50 to-transparent z-10 pointer-events-none" />
      
      {/* 3. Hero Content */}
      <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 z-20 h-full flex flex-col justify-center pt-24 md:pt-16 pb-8">
        <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-6">
          
          {/* Left Side Container */}
          <div className="w-full lg:w-[65%] flex flex-col items-start">
            
            {/* Top Left Card (Impact) */}
            <div className="mb-4 flex flex-col bg-gradient-to-b from-[#0F172A]/70 to-[#0B101A]/70 backdrop-blur-[12px] border border-white/[0.04] rounded-[16px] p-4 w-[220px] shadow-[0_0_30px_rgba(59,130,246,0.06)] relative overflow-hidden">
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"></div>
              {/* Icon + Label */}
              <div className="flex items-center gap-2.5 mb-3">
                 <div className="w-6 h-6 rounded-full bg-[#1C2333]/80 flex items-center justify-center shadow-inner border border-white/5 relative z-10">
                    <Target className="w-3 h-3 text-[#8A95A5]" />
                 </div>
                 <span className="text-brand-softwhite text-[12px] font-medium tracking-wide relative z-10">Impact</span>
              </div>
              <h3 className="text-brand-softwhite text-[36px] font-semibold mb-2 leading-none tracking-tight relative z-10">45%</h3>
              <p className="text-brand-softwhite/80 text-[11px] leading-[1.6] font-normal relative z-10">
                Harness solar energy and cut costs after installing our solar panels for 30 days
              </p>
            </div>

            {/* Main Typography */}
            <h1 className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-semibold text-brand-softwhite mb-3 tracking-tight">
              Power Your World With <br className="hidden md:block" /> Clean, Renewable <span className="text-brand-energyblue">Energy</span>
            </h1>
            <p className="text-[13px] md:text-[14px] text-brand-softwhite/70 mb-6 max-w-[85%] leading-relaxed font-normal">
              Switch to smarter energy solutions with Vynentra. Save money, reduce your carbon footprint, and create a sustainable future.
            </p>

            {/* Metrics Row */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              {/* Metric 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-brand-softwhite/20 flex items-center justify-center shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-brand-softwhite" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-softwhite/60 text-[10px] mb-0.5 uppercase tracking-wide">Clean Energy</span>
                  <span className="text-brand-softwhite font-bold text-[14px] leading-tight">100%</span>
                  <span className="text-brand-softwhite/60 text-[10px] mt-0.5">Sustainable</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-8 bg-brand-softwhite/10"></div>

              {/* Metric 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-brand-softwhite/20 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-3.5 h-3.5 text-brand-softwhite" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-softwhite/60 text-[10px] mb-0.5 uppercase tracking-wide">Cost Saving</span>
                  <span className="text-brand-softwhite font-bold text-[14px] leading-tight">30%+</span>
                  <span className="text-brand-softwhite/60 text-[10px] mt-0.5">On Energy Bills</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-8 bg-brand-softwhite/10"></div>

              {/* Metric 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-brand-softwhite/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-softwhite" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-softwhite/60 text-[10px] mb-0.5 uppercase tracking-wide">Reliable Power</span>
                  <span className="text-brand-softwhite font-bold text-[14px] leading-tight">24/7</span>
                  <span className="text-brand-softwhite/60 text-[10px] mt-0.5">Uninterrupted</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="group px-6 py-2.5 bg-brand-energyblue text-brand-midnight hover:opacity-90 rounded-[6px] font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgb(77,163,255,0.2)] text-[13px] border border-brand-energyblue overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <div className="relative w-4 h-4 flex overflow-hidden">
                    <ArrowRight className="w-4 h-4 absolute transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-6" strokeWidth={2} />
                    <ArrowRight className="w-4 h-4 absolute -translate-x-6 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-0" strokeWidth={2} />
                  </div>
                </span>
              </button>
              
              <button className="group px-6 py-2.5 border border-brand-softwhite/30 hover:border-brand-energyblue hover:text-brand-energyblue text-brand-softwhite rounded-[6px] font-semibold tracking-wide transition-all flex items-center justify-center gap-2 text-[13px] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <div className="relative w-4 h-4 flex overflow-hidden">
                    <ArrowRight className="w-4 h-4 absolute transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-6" strokeWidth={2} />
                    <ArrowRight className="w-4 h-4 absolute -translate-x-6 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-0" strokeWidth={2} />
                  </div>
                </span>
              </button>
            </div>
          </div>

          {/* Right Side Card (Bottom Right - WindEdge Optimizer) */}
          <div className="hidden lg:flex flex-col bg-gradient-to-b from-[#1E2B4D]/40 to-[#0B101A]/60 backdrop-blur-2xl border border-white/[0.06] rounded-[24px] p-5 w-[260px] shadow-[0_0_40px_rgba(30,58,138,0.2)] shrink-0 mb-4 z-30 relative overflow-hidden">
            {/* Subtle top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"></div>
            {/* Soft inner glow */}
            <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] pointer-events-none"></div>
            
            <div className="w-full h-[150px] mb-4 relative flex items-center justify-center pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
               <img src="/mini-wheel.png" alt="WindEdge Optimizer" className="object-contain h-full w-full drop-shadow-2xl relative z-10" />
            </div>
            <h4 className="text-brand-softwhite text-[15px] font-semibold mb-2 relative z-10">WindEdge Optimizer</h4>
            <p className="text-brand-softwhite/80 text-[11.5px] leading-[1.6] mb-5 font-normal relative z-10">
              AI-driven technology that maximizes wind efficiency and ensures long-term reliability.
            </p>
            <div className="flex items-center justify-between w-full text-[13px] font-medium group cursor-pointer mt-auto relative z-10">
               <span className="text-brand-softwhite group-hover:text-brand-energyblue transition-colors">
                 Learn More
               </span>
               <div className="relative w-4 h-4 flex overflow-hidden">
                  <ArrowRight className="w-4 h-4 text-brand-softwhite group-hover:text-brand-energyblue absolute transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-6" strokeWidth={1.5} />
                  <ArrowRight className="w-4 h-4 text-brand-softwhite group-hover:text-brand-energyblue absolute -translate-x-6 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-0" strokeWidth={1.5} />
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
