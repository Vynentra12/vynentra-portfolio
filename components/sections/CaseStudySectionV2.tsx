'use client';

import React from "react";
import { motion } from "framer-motion";

export function CaseStudySectionV2() {
  return (
    <section 
      id="case-studies" 
      className="relative w-full bg-white text-neutral-900 py-16 sm:py-24 md:py-28 lg:py-36 overflow-hidden select-none font-sans flex items-center justify-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between gap-3 sm:gap-6 md:gap-8"
      >
        {/* Left Word: Technology-Neutral (Semi-bold, exact alignment within container bounds) */}
        <span className="text-[15px] xs:text-[18px] sm:text-[23px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-semibold tracking-tight text-[#005869] whitespace-nowrap shrink-0">
          Technology-Neutral
        </span>

        {/* Left Bridging Divider Line */}
        <div className="flex-1 h-[2px] bg-[#005869]/40 min-w-[12px] sm:min-w-[20px]" />

        {/* Center: Prominent Pill Capsule with centered wind turbine */}
        <div className="relative shrink-0 w-[140px] xs:w-[170px] sm:w-[230px] md:w-[285px] lg:w-[335px] xl:w-[370px] h-[48px] xs:h-[58px] sm:h-[74px] md:h-[90px] lg:h-[104px] xl:h-[114px] rounded-full overflow-hidden flex items-center justify-center shadow-[0_12px_44px_rgba(0,88,105,0.2)]">
          {/* Turbine Background Image - Center aligned turbine hub & blades */}
          <img
            src="https://images.pexels.com/photos/12828526/pexels-photo-12828526.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Future-Ready Wind Turbine"
            className="absolute inset-0 w-full h-full object-cover object-[center_38%]"
          />

          {/* Gentle Atmosphere Contrast */}
          <div className="absolute inset-0 bg-[#002b36]/20 pointer-events-none" />

          {/* Center Text inside Pill (Semi-bold) */}
          <span className="relative z-10 text-[15px] xs:text-[18px] sm:text-[23px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-semibold tracking-tight text-white whitespace-nowrap select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Future-Ready
          </span>
        </div>

        {/* Right Bridging Divider Line */}
        <div className="flex-1 h-[2px] bg-[#005869]/40 min-w-[12px] sm:min-w-[20px]" />

        {/* Right Word: Site-Specific (Semi-bold, exact alignment within container bounds) */}
        <span className="text-[15px] xs:text-[18px] sm:text-[23px] md:text-[28px] lg:text-[34px] xl:text-[38px] font-semibold tracking-tight text-[#005869] whitespace-nowrap shrink-0">
          Site-Specific
        </span>
      </motion.div>
    </section>
  );
}
