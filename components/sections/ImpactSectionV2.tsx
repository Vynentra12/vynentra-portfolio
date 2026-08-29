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
      position: "top-[15%] left-[-15%] md:left-[2%]",
      connectorWidth: "80px"
    },
    {
      id: 2,
      icon: Leaf,
      value: "1,163 GW",
      label: "Estimated onshore wind potential at 150m hub height",
      position: "top-[45%] left-[-20%] md:left-[-5%]",
      connectorWidth: "90px"
    },
    {
      id: 3,
      icon: Zap,
      value: "58+ GW",
      label: "Wind capacity currently installed in India",
      position: "top-[75%] left-[-15%] md:left-[2%]",
      connectorWidth: "110px"
    },
    {
      id: 4,
      icon: PieChart,
      value: "8%",
      label: "Approx. share of 120m potential represented by installed capacity",
      position: "top-[25%] right-[-15%] md:right-[2%]",
      connectorWidth: "60px"
    },
    {
      id: 5,
      icon: TrendingUp,
      value: "80+ GW",
      label: "Potential opportunity from repowering and technology upgrades by 2030",
      position: "top-[70%] right-[-15%] md:right-[2%]",
      connectorWidth: "90px"
    }
  ];

  return (
    <section className="relative w-full bg-brand-midnight text-brand-softwhite py-10 md:py-16 min-h-[700px] md:min-h-[800px] flex flex-col justify-between overflow-hidden">
      
      {/* Header Row */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 mb-12 z-20">
        <div className="border-t border-brand-softwhite/10 pt-6 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-softwhite uppercase tracking-wider">IMPACT METRICS</span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-brand-softwhite text-left max-w-md leading-[1.25] tracking-tight">
            We Aim To Drive Environmental Global Impact, Starting With India.
          </h2>
        </div>
      </div>

      {/* Central Area with Map and Cards */}
      <div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-12 h-[450px] md:h-[500px] flex items-center justify-center z-10 mt-6 md:mt-0">
        
        {/* Central Image */}
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center group z-10">
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-[100%] h-[100%] flex items-center justify-center"
          >
            {/* Background Glow */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-[20%] rounded-full bg-brand-energyblue/15 blur-3xl z-0"
            />
            <img 
              src="/golb-india.png" 
              alt="Global India Impact" 
              className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.2)] z-10"
            />
          </motion.div>
        </div>

        {/* Floating Cards */}
        {cards.map((card) => (
          <div key={card.id} className={`absolute ${card.position} z-20`}>
            
            {/* Connector Line */}
            {card.id <= 3 ? (
              <div 
                className="hidden md:block absolute top-1/2 -translate-y-1/2 bg-brand-softwhite/10 h-[1px]"
                style={{ width: card.connectorWidth, right: `-${card.connectorWidth}` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-energyblue" />
              </div>
            ) : (
              <div 
                className="hidden md:block absolute top-1/2 -translate-y-1/2 bg-brand-softwhite/10 h-[1px]"
                style={{ width: card.connectorWidth, left: `-${card.connectorWidth}` }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-energyblue" />
              </div>
            )}

            {/* Card Content */}
            <div 
              className="bg-brand-graphite rounded-[10px] p-2.5 md:p-3 shadow-[0_4px_20px_rgb(0,0,0,0.2)] border border-brand-softwhite/10 w-[220px] md:w-[240px] relative z-20 hover:-translate-y-1 transition-transform duration-300 flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-brand-midnight border border-brand-softwhite/10 flex items-center justify-center text-brand-energyblue">
                <card.icon className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[14px] md:text-[16px] font-bold text-brand-softwhite leading-tight mb-0.5">{card.value}</h4>
                <p className="text-[9px] md:text-[10px] leading-tight text-brand-titanium pr-1">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 text-center mt-12 md:mt-0 z-20">
        <p className="text-lg md:text-xl font-medium tracking-wide text-brand-softwhite flex items-center justify-center gap-[0.3em] flex-wrap">
          <span className="hover:text-brand-energyblue transition-colors duration-300 cursor-default">Precision.</span>
          <span className="hover:text-brand-energyblue transition-colors duration-300 cursor-default">Energy.</span>
          <span className="hover:text-brand-energyblue transition-colors duration-300 cursor-default">Sustainability.</span>
        </p>
      </div>

    </section>
  );
}
