"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0 bg-brand-midnight">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/ooguplih/video/upload/v1787717887/hero-v1.mp4.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Delicate Gradient Overlay fading into the next section's background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/50 to-transparent z-10 pointer-events-none" />

      {/* 3. Main Content Container */}
      <div className="relative z-20 w-full min-h-screen max-w-[1400px] mx-auto px-6 flex flex-col justify-between pt-32 md:pt-40 pb-12 md:pb-20">
        
        {/* TOP ROW: Title & Buttons (Left) & Stats (Right) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-24 mt-4 lg:mt-12">
          
          {/* LEFT SIDE: Title & Buttons */}
          <div className="max-w-2xl pt-5">
            {/* Trust/Review Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 bg-brand-graphite/40 backdrop-blur-md rounded-full px-4 py-2 mb-8 w-fit border border-brand-softwhite/10 shadow-sm"
            >
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Partner" className="w-7 h-7 rounded-full border-2 border-brand-midnight object-cover" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="Partner" className="w-7 h-7 rounded-full border-2 border-brand-midnight object-cover" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="Partner" className="w-7 h-7 rounded-full border-2 border-brand-midnight object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-medium text-brand-softwhite leading-tight mt-0.5">Trusted by 100+ Partners</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[44px] md:text-[56px] lg:text-[64px] font-medium text-brand-softwhite leading-[1.05] tracking-tight mb-8 max-w-3xl"
            >
              Delivering Sustainable<br />Energy Solutions.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Get Started Button */}
              <button className="group flex items-center justify-center gap-2 px-6 h-11 rounded-full bg-brand-energyblue text-brand-midnight text-[14px] font-medium border border-transparent transition-all hover:bg-brand-softwhite hover:scale-105 active:scale-95 shadow-lg shadow-brand-energyblue/20">
                <div className="grid grid-cols-2 gap-[2px] w-3 h-3 group-hover:rotate-45 transition-transform duration-300">
                  <span className="w-full h-full rounded-[1px] bg-current" />
                  <span className="w-full h-full rounded-[1px] bg-brand-midnight" />
                  <span className="w-full h-full rounded-[1px] bg-current" />
                  <span className="w-full h-full rounded-[1px] bg-current" />
                </div>
                Get Started
              </button>
              
              {/* View Project Button */}
              <button className="flex items-center justify-center px-6 h-11 rounded-full bg-transparent text-brand-softwhite text-[14px] font-medium border border-brand-softwhite/20 transition-all hover:bg-brand-softwhite hover:text-brand-midnight hover:border-brand-softwhite hover:scale-105 active:scale-95 shadow-sm">
                View Project
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Stats Column (Pushed to top right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-[320px] flex flex-col"
          >
            {/* Stat 1 */}
            <div className="border-t border-brand-softwhite/15 pt-3 pb-5 flex justify-between items-end group cursor-pointer hover:border-brand-softwhite/40 transition-colors">
              <div>
                <span className="block text-[13px] text-brand-titanium font-normal mb-1.5 uppercase">Location</span>
                <span className="block text-xl md:text-[22px] text-brand-softwhite font-light tracking-tight leading-snug">MAHARASHTRA · INDIA</span>
              </div>
              <span className="text-brand-softwhite/40 group-hover:text-brand-softwhite transition-colors mb-1 tracking-widest text-xs">•••</span>
            </div>

            {/* Stat 2 */}
            <div className="border-t border-brand-softwhite/15 pt-3 pb-5 flex justify-between items-end group cursor-pointer hover:border-brand-softwhite/40 transition-colors">
              <div>
                <span className="block text-[13px] text-brand-titanium font-normal mb-1.5 uppercase">Scale</span>
                <span className="block text-xl md:text-[22px] text-brand-softwhite font-light tracking-tight leading-snug">Pan-India Project Development</span>
              </div>
              <span className="text-brand-softwhite/40 group-hover:text-brand-softwhite transition-colors mb-1 tracking-widest text-xs">•••</span>
            </div>

            {/* Stat 3 */}
            <div className="border-t border-brand-softwhite/15 pt-3 pb-5 flex justify-between items-end group cursor-pointer hover:border-brand-softwhite/40 transition-colors">
              <div className="pr-4">
                <span className="block text-[13px] text-brand-titanium font-normal mb-1.5 uppercase">Expertise</span>
                <span className="block text-xl md:text-[22px] text-brand-softwhite font-light tracking-tight leading-snug">Integrated Renewable Energy Solutions</span>
              </div>
              <span className="text-brand-softwhite/40 group-hover:text-brand-softwhite transition-colors mb-1 tracking-widest text-xs">•••</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Scroll To Explore (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 right-6 md:right-12 z-20 flex items-center gap-2 cursor-pointer group"
      >
        <span className="text-[13px] font-medium text-brand-titanium group-hover:text-brand-softwhite transition-colors">Scroll To Explore</span>
        <ArrowDown className="w-4 h-4 text-brand-titanium group-hover:text-brand-softwhite animate-bounce transition-colors" />
      </motion.div>
    </section>
  );
}
