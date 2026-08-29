'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const SOLUTIONS_DATA = [
  {
    subtitle: "Site Assessment",
    title: "We start with the site.",
    description: "We study the location, altitude and local wind conditions before recommending a system. Because the right wind solution starts with understanding the wind.",
    imgSrc: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
  },
  {
    subtitle: "Custom Configuration",
    title: "No two projects need to look the same.",
    description: "From a single turbine to a combination of different capacities, we configure the system around your energy requirement, available space and site conditions.",
    imgSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  },
  {
    subtitle: "Scalable Capacity",
    title: "From a rooftop to a captive power project.",
    description: "Our solutions work across the kW scale and larger power requirements - helping more businesses, institutions and properties explore what wind can do for them.",
    imgSrc: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
  },
  {
    subtitle: "Ongoing Maintenance",
    title: "From installation to what comes after.",
    description: "Our work doesn't stop when the turbine is installed. We take care of the wiring, distribution, commissioning and ongoing maintenance needed to keep the system running.",
    imgSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
  },
];

function WhyChooseUsCard({ item }: { item: typeof SOLUTIONS_DATA[0] }) {
  return (
    <motion.div
      initial="inactive"
      whileInView="active"
      viewport={{ margin: "0px -60% 0px 0px", amount: 0.3 }}
      variants={{
        inactive: { backgroundColor: "#20252B", borderColor: "rgba(245, 245, 242, 0.1)" },
        active: { backgroundColor: "#071426", borderColor: "rgba(77, 163, 255, 0.3)" }
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-[85vw] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[600px] shrink-0 rounded-[7px] p-7 md:p-8 flex flex-col shadow-sm border-[0.9px] relative overflow-hidden group"
    >
      {/* Background Image / Thumbnail Container */}
      <motion.div
        className="absolute z-0 overflow-hidden shadow-sm pointer-events-none"
        variants={{
          inactive: { width: 85, height: 55, bottom: 24, right: 24, borderRadius: 5 },
          active: { width: "100%", height: "100%", bottom: 0, right: 0, borderRadius: 7 }
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={item.imgSrc}
          alt={item.subtitle}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text legibility when expanded */}
        <motion.div
          className="absolute inset-0 bg-black"
          variants={{ inactive: { opacity: 0 }, active: { opacity: 0.7 } }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Content Container (z-10 relative) */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        
        {/* Subtitle & Divider */}
        <motion.div 
          className="border-b pb-4 mb-6"
          variants={{
            inactive: { borderBottomColor: "rgba(245, 245, 242, 0.1)" },
            active: { borderBottomColor: "rgba(77, 163, 255, 0.3)" }
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="text-[14px] md:text-[15px] font-normal"
            variants={{
              inactive: { color: "rgba(167, 173, 179, 1)" },
              active: { color: "rgba(77, 163, 255, 1)" }
            }}
            transition={{ duration: 0.5 }}
          >
            {item.subtitle}
          </motion.span>
        </motion.div>

        {/* Main Title (Crossfade from gradient to solid white) */}
        <div className="relative mb-6 min-h-[70px]">
          <motion.h3 
            className="text-[24px] md:text-[28px] lg:text-[30px] font-normal leading-[1.25] text-brand-softwhite"
            variants={{ inactive: { opacity: 1 }, active: { opacity: 0 } }}
            transition={{ duration: 0.4 }}
          >
            {item.title}
          </motion.h3>
          <motion.h3 
            className="absolute top-0 left-0 text-[24px] md:text-[28px] lg:text-[30px] font-normal leading-[1.25] text-brand-energyblue"
            variants={{ inactive: { opacity: 0 }, active: { opacity: 1 } }}
            transition={{ duration: 0.4 }}
          >
            {item.title}
          </motion.h3>
        </div>

        {/* Description */}
        <motion.p 
          className="text-[14.5px] md:text-[16px] font-normal leading-[1.7] mb-14 max-w-[90%]"
          variants={{
            inactive: { color: "rgba(167, 173, 179, 1)" },
            active: { color: "rgba(245, 245, 242, 0.95)" }
          }}
          transition={{ duration: 0.5 }}
        >
          {item.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function WhyChooseUsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll logic:
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress into horizontal translation
  // Increased from -50% to -65% so the user can scroll further left to activate the 4th card
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={scrollContainerRef} id="why-choose-us" className="relative h-[250vh] bg-brand-midnight">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="w-full px-6 md:px-12 xl:px-[calc((100vw-1400px)/2+24px)] mx-auto pt-10 pb-8">
          
          {/* Unified Section Header */}
          <div className="flex flex-col gap-3 mb-10 md:mb-14 border-t border-brand-softwhite/10 pt-6">
            {/* Standardized Badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
              <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
                SOLUTIONS
              </span>
            </div>
            {/* Standardized Title */}
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
              Renewable Infrastructure Driven By Innovation.
            </h2>
          </div>

          {/* Horizontal Scrolling Track */}
          <motion.div style={{ x }} className="flex gap-6 w-max pb-8 pt-4 px-2">
            {SOLUTIONS_DATA.map((item, index) => (
              <WhyChooseUsCard key={index} item={item} />
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
