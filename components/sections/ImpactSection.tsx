'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ImpactSection() {
  const [activeWordIndex, setActiveWordIndex] = useState(1); // Default 'Energy.' or rotates

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const taglineWords = ["Precision.", "Energy.", "Sustainability."];

  const metrics = [
    {
      value: "695 GW",
      label: "Estimated onshore wind potential at 120m hub height",
      position: "top-4 left-4 sm:left-10 md:left-16 lg:left-24"
    },
    {
      value: "1,163 GW",
      label: "Estimated onshore wind potential at 150m hub height",
      position: "top-4 right-4 sm:right-10 md:right-16 lg:right-24"
    },
    {
      value: "58+ GW",
      label: "Wind capacity currently installed in India",
      position: "top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-8 lg:left-12"
    },
    {
      value: "8%",
      label: "Approx. share of 120m potential represented by installed capacity",
      position: "top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-8 lg:right-12"
    },
    {
      value: "80+ GW",
      label: "Potential opportunity from repowering & technology upgrades by 2030",
      position: "bottom-[-16px] md:bottom-[-20px] left-1/2 -translate-x-1/2 z-30"
    }
  ];

  return (
    <section id="impact" className="py-16 md:py-20 px-6 bg-brand-midnight overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top White Divider Line & Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-16 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-energyblue uppercase tracking-wider">IMPACT METRICS</span>
          </div>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-light text-brand-softwhite text-left max-w-md leading-[1.25] tracking-tight">
            We Aim To Drive Environmental Global Impact, Starting With India.
          </h2>
        </div>

        {/* Central Visual & Floating Cards Layout */}
        <div className="relative max-w-[1100px] mx-auto min-h-[580px] md:min-h-[640px] flex items-center justify-center my-6">
          
          {/* Larger Central Dark Dotted 3D Globe Graphic */}
          <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[660px] lg:h-[660px] rounded-full bg-gradient-to-b from-[#151D2A] via-[#0E1520] to-[#080E17] shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden z-10">
            
            {/* Globe Radial Glow Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Continuous Rotating 3D World Dotted Grid Layer */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 w-full h-full rounded-full"
            >
              {/* Dotted World Grid Pattern */}
              <div className="absolute inset-0 opacity-45 bg-[radial-gradient(#93c5fd_1.5px,transparent_1.5px)] [background-size:18px_18px] rounded-full" />
              
              {/* Ellipse Orbit Rings */}
              <div className="absolute inset-[5%] rounded-full border border-sky-400/20" />
              <div className="absolute inset-[15%] rounded-full border border-sky-300/15 rotate-45" />
              <div className="absolute w-[100%] h-[40%] top-[30%] rounded-full border border-sky-400/20" />
              <div className="absolute h-[100%] w-[40%] left-[30%] rounded-full border border-sky-400/20" />
            </motion.div>

            {/* Animated SVG Wind Streams Sweeping across the Globe */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-15" viewBox="0 0 600 600" fill="none">
              <motion.path 
                d="M 100 300 Q 250 180 500 320" 
                stroke="url(#windGrad1)" 
                strokeWidth="2.5" 
                strokeDasharray="12 12"
                animate={{ strokeDashoffset: [100, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <motion.path 
                d="M 80 240 Q 300 400 520 220" 
                stroke="url(#windGrad2)" 
                strokeWidth="2" 
                strokeDasharray="8 8"
                animate={{ strokeDashoffset: [0, 80] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />
              <defs>
                <linearGradient id="windGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="windGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#026DC2" stopOpacity="0" />
                  <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Moving Circle / Pulse Wave Expanding from India Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
              <motion.div 
                animate={{ scale: [0.8, 2.8], opacity: [0.8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                className="w-24 h-24 rounded-full border-2 border-sky-400/60"
              />
              <motion.div 
                animate={{ scale: [0.8, 3.8], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, delay: 0.8, ease: "easeOut" }}
                className="w-24 h-24 rounded-full border border-sky-300/40"
              />
            </div>
            
            {/* Anchored Center Label (India Wind Network) */}
            <div className="relative text-center z-20 p-6 pointer-events-none">
              <div className="relative w-5 h-5 mx-auto mb-2 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/60" />
                <div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-75" />
              </div>
              
              <span className="text-[12px] font-light tracking-widest text-sky-200 uppercase opacity-95 block drop-shadow-md">
                India Wind Network
              </span>
            </div>

          </div>

          {/* Floating Metric Cards (Overlapping Globe Edges) */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {metrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`absolute pointer-events-auto bg-brand-graphite/95 backdrop-blur-md rounded-[7px] border border-brand-softwhite/10 p-3.5 md:p-4 px-4 md:px-5 shadow-xl max-w-[180px] sm:max-w-[210px] md:max-w-[240px] ${item.position}`}
              >
                <div className="text-xl sm:text-[22px] md:text-[26px] font-light text-brand-energyblue mb-1">
                  {item.value}
                </div>
                <div className="text-[12px] md:text-[13px] font-normal text-brand-titanium leading-snug">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Tagline with Reduced Top Margin */}
        <div className="text-center mt-6 pt-2">
          <p className="text-xl md:text-2xl lg:text-[28px] font-light tracking-tight flex items-center justify-center gap-3">
            {taglineWords.map((word, idx) => {
              const isActive = activeWordIndex === idx;
              return (
                <span
                  key={word}
                  className={`transition-all duration-700 cursor-pointer ${
                    isActive 
                      ? 'text-brand-energyblue font-normal scale-105 drop-shadow-sm' 
                      : 'text-brand-titanium font-light opacity-80'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
}
