'use client';

import React from "react";
import { motion } from "framer-motion";

export function CaseStudySectionV2() {
  return (
    <section 
      id="case-studies" 
      className="relative w-full bg-white text-neutral-900 py-12 sm:py-20 md:py-28 lg:py-36 xl:py-40 overflow-hidden select-none font-sans flex items-center justify-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-10 lg:px-14 flex items-center justify-center"
      >
        {/* Left Side: Technology-Neutral + Bridging Line (Takes exactly 50% of available space) */}
        <div className="flex-1 flex items-center justify-end gap-1.5 min-[380px]:gap-2 sm:gap-4 md:gap-6 min-w-0">
          <span className="text-[10.5px] min-[360px]:text-[11.5px] min-[390px]:text-[12.5px] sm:text-[18px] md:text-[24px] lg:text-[34px] xl:text-[42px] 2xl:text-[46px] font-semibold tracking-tight text-[#005869] whitespace-nowrap shrink-0">
            Technology-Neutral
          </span>
          <div className="flex-1 h-[1.5px] sm:h-[2px] lg:h-[2.5px] xl:h-[3px] bg-[#005869]/40 min-w-[8px] sm:min-w-[16px]" />
        </div>

        {/* Center: Perfectly Centered Pill Capsule with Turbine */}
        <div className="relative shrink-0 mx-1.5 min-[380px]:mx-2 sm:mx-4 md:mx-6 w-[88px] min-[360px]:w-[94px] min-[390px]:w-[104px] sm:w-[170px] md:w-[240px] lg:w-[350px] xl:w-[420px] 2xl:w-[460px] h-[32px] min-[360px]:h-[35px] min-[390px]:h-[38px] sm:h-[58px] md:h-[78px] lg:h-[108px] xl:h-[126px] 2xl:h-[136px] rounded-full overflow-hidden flex items-center justify-center shadow-[0_6px_20px_rgba(0,88,105,0.18)] sm:shadow-[0_14px_42px_rgba(0,88,105,0.22)]">
          {/* Turbine Background Image - Center aligned turbine hub & blades */}
          <img
            src="/images/stock/pexels-12828526.jpg"
            alt="Future-Ready Wind Turbine"
            className="absolute inset-0 w-full h-full object-cover object-[center_38%]"
          />

          {/* Gentle Atmosphere Contrast */}
          <div className="absolute inset-0 bg-[#002b36]/20 pointer-events-none" />

          {/* Center Text inside Pill */}
          <span className="relative z-10 text-[10px] min-[360px]:text-[11px] min-[390px]:text-[12px] sm:text-[17px] md:text-[23px] lg:text-[33px] xl:text-[40px] 2xl:text-[44px] font-semibold tracking-tight text-white whitespace-nowrap select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Future-Ready
          </span>
        </div>

        {/* Right Side: Bridging Line + Site-Specific (Takes exactly 50% of available space) */}
        <div className="flex-1 flex items-center justify-start gap-1.5 min-[380px]:gap-2 sm:gap-4 md:gap-6 min-w-0">
          <div className="flex-1 h-[1.5px] sm:h-[2px] lg:h-[2.5px] xl:h-[3px] bg-[#005869]/40 min-w-[8px] sm:min-w-[16px]" />
          <span className="text-[10.5px] min-[360px]:text-[11.5px] min-[390px]:text-[12.5px] sm:text-[18px] md:text-[24px] lg:text-[34px] xl:text-[42px] 2xl:text-[46px] font-semibold tracking-tight text-[#005869] whitespace-nowrap shrink-0">
            Site-Specific
          </span>
        </div>
      </motion.div>
    </section>
  );
}
