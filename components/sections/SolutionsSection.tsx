'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROCESS_DATA = [
  {
    number: "01",
    title: "Site\nAssessment",
    subtitle: "Know the wind before you build.",
    description:
      "We assess site coordinates, altitude and local wind conditions to determine the feasibility and configuration of a wind energy system.",
  },
  {
    number: "02",
    title: "System\nDesign",
    subtitle: "Designed for the site.",
    description:
      "Every system is configured around its energy requirement and wind conditions - from individual turbines to modular arrays and larger captive installations.",
  },
  {
    number: "03",
    title: "Installation\n& Execution",
    subtitle: "From specification to generation.",
    description:
      "Complete project execution, including turbine installation, wiring, distribution systems and commissioning.",
  },
  {
    number: "04",
    title: "Operations\n& Maintenance",
    subtitle: "Performance that lasts.",
    description:
      "Annual Maintenance Contracts designed to monitor systems, maintain performance and support long-term operation.",
  },
];

function ProcessCard({
  item,
  scrollYProgress,
  index,
}: {
  item: (typeof PROCESS_DATA)[0];
  scrollYProgress: import('framer-motion').MotionValue<number>;
  index: number;
}) {
  // Staggered appear window for each of the 4 cards
  const stepSize = 0.20;
  const appearStart = 0.04 + index * stepSize;
  const appearEnd = appearStart + 0.15;

  const input = [0, appearStart, appearEnd, 1];
  const opacity = useTransform(scrollYProgress, input, [0, 0, 1, 1]);
  const y = useTransform(scrollYProgress, input, [90, 90, 0, 0]);
  const scale = useTransform(scrollYProgress, input, [0.96, 0.96, 1, 1]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        background: 'linear-gradient(180deg, #20252B 0%, #071426 100%)',
      }}
      className="rounded-[07px] border border-brand-softwhite/10 p-6 md:p-7 flex flex-col justify-between shadow-xl min-h-[260px] md:min-h-[280px]"
    >
      {/* Top Row: Title + Number */}
      <div className="flex items-start justify-between gap-3 mb-6">
        <h3 className="text-[22px] md:text-[25px] font-normal leading-[1.18] tracking-tight whitespace-pre-line text-brand-softwhite">
          {item.title}
        </h3>
        <span className="text-[30px] md:text-[34px] font-light text-brand-energyblue/40 select-none shrink-0 leading-none">
          {item.number}
        </span>
      </div>

      {/* Bottom Row: Subtitle + Description */}
      <div className="mt-auto">
        <p className="text-[13px] md:text-[13.5px] font-normal text-brand-titanium leading-[1.6]">
          <span className="font-medium text-brand-softwhite block mb-1">
            {item.subtitle}
          </span>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function SolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} id="process" className="relative" style={{ height: '400vh' }}>
      {/* Sticky panel that stays pinned while user scrolls through all 4 cards */}
      <div className="sticky top-0 h-screen flex flex-col justify-center bg-brand-midnight overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-8 py-10">

          {/* Top Divider & Header Row */}
          <div className="border-t border-brand-softwhite/10 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-2.5 pt-1 text-brand-energyblue">
              <div className="w-2.5 h-2.5 bg-brand-energyblue rounded-[2px]" />
              <span className="text-xs font-normal uppercase tracking-wider">
                PROCESS
              </span>
            </div>
            <h2 className="text-2xl md:text-[28px] font-light text-brand-softwhite text-left max-w-xl leading-[1.25] tracking-tight">
              Comprehensive Renewable Tech Energy Solutions.
            </h2>
          </div>

          {/* 4 Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {PROCESS_DATA.map((item, index) => (
              <ProcessCard
                key={item.number}
                item={item}
                scrollYProgress={scrollYProgress}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// Export alias in case it's referenced as ProcessSection
export const ProcessSection = SolutionsSection;
