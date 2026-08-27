"use client";

import { motion } from "framer-motion";
import { Zap, PieChart, TrendingUp, Wind, Leaf } from "lucide-react";

const TurbineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 12c-1.5 0-2.8-1.4-3.5-3.5-.7-2 .5-3.5 2-3.5h3c1.5 0 2.7 1.5 2 3.5C14.8 10.6 13.5 12 12 12z"/>
    <path d="M12 12c1.3 1.3 2.1 3.2 1.3 5.3-.8 2-2.8 2.5-4.2 1.5l-2.6-1.7c-1.2-.8-.7-2.6.8-3.4 1.5-.7 3.4-.4 4.7 1.7"/>
    <path d="M12 12c-.2-1.8-1.5-3.5-3.5-4.2-2-.7-3.8.2-4.5 1.5l-1.5 2.6c-.7 1.2 0 2.7 1.5 2.9 1.6.2 3.2-.8 4-2.5"/>
    <path d="M12 12v10"/>
  </svg>
);

export function ImpactSectionV2() {
  const cards = [
    {
      id: 1,
      icon: Wind,
      value: "695 GW",
      label: "Estimated onshore wind potential at 120m hub height",
      position: "top-[15%] left-[-15%] md:left-[5%]",
      connectorWidth: "115px"
    },
    {
      id: 2,
      icon: Leaf,
      value: "1,163 GW",
      label: "Estimated onshore wind potential at 150m hub height",
      position: "top-[45%] left-[-20%] md:left-[0%]",
      connectorWidth: "125px"
    },
    {
      id: 3,
      icon: Zap,
      value: "58+ GW",
      label: "Wind capacity currently installed in India",
      position: "top-[75%] left-[-15%] md:left-[5%]",
      connectorWidth: "145px"
    },
    {
      id: 4,
      icon: PieChart,
      value: "8%",
      label: "Approx. share of 120m potential represented by installed capacity",
      position: "top-[25%] right-[-15%] md:right-[5%]",
      connectorWidth: "85px"
    },
    {
      id: 5,
      icon: TrendingUp,
      value: "80+ GW",
      label: "Potential opportunity from repowering and technology upgrades by 2030",
      position: "top-[70%] right-[-15%] md:right-[5%]",
      connectorWidth: "120px"
    }
  ];

  return (
    <section className="relative w-full bg-[#F5F5F7] text-[#1D1D1F] py-10 md:py-16 min-h-[700px] md:min-h-[800px] flex flex-col justify-between overflow-hidden">
      
      {/* Header Row */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 mb-12 z-20">
        <div className="border-t border-[#1D1D1F]/10 pt-6 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1D1D1F]"></div>
            <span className="text-xs font-normal text-[#1D1D1F] uppercase tracking-wider">IMPACT METRICS</span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-[#1D1D1F] text-left max-w-md leading-[1.25] tracking-tight">
            We Aim To Drive Environmental Global Impact, Starting With India.
          </h2>
        </div>
      </div>

      {/* Central Area with Map and Cards */}
      <div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-12 h-[450px] md:h-[500px] flex items-center justify-center z-10 mt-6 md:mt-0">
        
        {/* Neuromorphic Plate */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full bg-[#F5F5F7] shadow-[20px_20px_60px_#d0d0d2,-20px_-20px_60px_#ffffff] flex items-center justify-center group z-10">
          
          {/* Inner inset circle for depth */}
          <div className="absolute inset-[5%] rounded-full shadow-[inset_10px_10px_20px_#d0d0d2,inset_-10px_-10px_20px_#ffffff] pointer-events-none" />

          {/* India SVG */}
          <div className="relative w-[65%] h-[65%] flex items-center justify-center transition-transform duration-700 hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
            <img 
              src="/india.svg" 
              alt="India Map" 
              className="w-full h-full object-contain"
              style={{ filter: 'drop-shadow(1px 1px 0px #cbd5e1) drop-shadow(2px 2px 0px #94a3b8) drop-shadow(3px 3px 0px #64748b) drop-shadow(5px 5px 15px rgba(0,0,0,0.15))' }}
            />
          </div>

        </div>

        {/* Floating Cards */}
        {cards.map((card) => (
          <div key={card.id} className={`absolute ${card.position} z-20`}>
            
            {/* Connector Line */}
            {card.id <= 3 ? (
              <div 
                className="hidden md:block absolute top-1/2 -translate-y-1/2 bg-[#1D1D1F]/15 h-[1px]"
                style={{ width: card.connectorWidth, right: `-${card.connectorWidth}` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1D1D1F]/40" />
              </div>
            ) : (
              <div 
                className="hidden md:block absolute top-1/2 -translate-y-1/2 bg-[#1D1D1F]/15 h-[1px]"
                style={{ width: card.connectorWidth, left: `-${card.connectorWidth}` }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1D1D1F]/40" />
              </div>
            )}

            {/* Card Content */}
            <div 
              className="bg-[#ffffff] rounded-[12px] p-3 md:p-4 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-[#1D1D1F]/5 w-[260px] md:w-[280px] relative z-20 group-hover:-translate-y-1 transition-transform duration-300 flex items-center gap-3.5"
            >
              <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#F5F5F7] shadow-[inset_2px_2px_5px_#d0d0d2,inset_-2px_-2px_5px_#ffffff] flex items-center justify-center text-[#1D1D1F]">
                <card.icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[16px] md:text-[18px] font-bold text-[#1D1D1F] leading-tight mb-0.5">{card.value}</h4>
                <p className="text-[10px] md:text-[11px] leading-tight text-[#1D1D1F]/70 pr-2">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 text-center mt-12 md:mt-0 z-20">
        <p className="text-lg md:text-xl font-medium tracking-wide text-[#1D1D1F]">
          Precision. Energy. Sustainability.
        </p>
      </div>

    </section>
  );
}
