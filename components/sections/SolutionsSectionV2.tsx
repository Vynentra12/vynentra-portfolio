"use client";

import React, { useState } from "react";

interface SolutionCard {
  id: number;
  title: string;
  description: string;
  icon: () => React.ReactNode;
}

// Custom crisp SVG icons
const SiteAssessmentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Compass / Location radar pin with energy pulse */}
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

const SystemDesignIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Lightbulb with sprout */}
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 5.5v1.5h8V14.5c1.5-1 3-3 3-5.5a7 7 0 0 0-7-7z" />
    <path d="M12 6a3 3 0 0 1 3 3c0 1.5-1.5 3-3 3s-3-1.5-3-3a3 3 0 0 1 3-3z" fill="currentColor" fillOpacity="0.2" />
    <line x1="12" y1="0.5" x2="12" y2="2" />
    <line x1="4.5" y1="4.5" x2="5.5" y2="5.5" />
    <line x1="19.5" y1="4.5" x2="18.5" y2="5.5" />
  </svg>
);

const InstallationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Wind turbine */}
    <line x1="12" y1="12" x2="12" y2="22" />
    <path d="M12 12L12 3c1.5 0 2.5 1 2.5 3L12 12z" />
    <path d="M12 12L4.5 16.5c-0.8-1.2-0.5-2.6 1.2-3.6L12 12z" />
    <path d="M12 12L19.5 16.5c0.8-1.2 0.5-2.6-1.2-3.6L12 12z" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Globe with eco loop */}
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a14 14 0 0 0 0 18" />
    <path d="M12.5 3a14 14 0 0 1 0 18" />
  </svg>
);

const SOLUTIONS: SolutionCard[] = [
  {
    id: 0,
    title: "Site Assessment",
    description:
      "We assess site coordinates, altitude and local wind conditions to determine the feasibility and configuration of a wind energy system.",
    icon: () => <SiteAssessmentIcon />,
  },
  {
    id: 1,
    title: "System Design",
    description:
      "Every system is configured around its energy requirement and wind conditions — from individual turbines to modular arrays and captive installations.",
    icon: () => <SystemDesignIcon />,
  },
  {
    id: 2,
    title: "Installation & Execution",
    description:
      "Complete project execution, including turbine installation, wiring, distribution systems and commissioning.",
    icon: () => <InstallationIcon />,
  },
  {
    id: 3,
    title: "Operations & Maintenance",
    description:
      "Annual Maintenance Contracts designed to monitor systems, maintain performance and support long-term operation.",
    icon: () => <MaintenanceIcon />,
  },
];

export function SolutionsSectionV2() {
  // First card highlighted by default matching reference style
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);

  return (
    <section id="solutions" className="w-full bg-white text-neutral-900 py-16 md:py-24 lg:py-28 font-sans relative">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14">

        {/* Main 2-Column Layout: Sticky Left, Scrolling Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left Column: Pinned Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 xl:top-32 self-start flex flex-col items-start pr-0 lg:pr-2">

            {/* Tagline / Kicker matching user request */}
            <span className="text-[12px] sm:text-[12.5px] font-bold text-black uppercase tracking-[0.08em] mb-4 select-none">
              SOLUTIONS
            </span>

            {/* Main Headline styled and sized precisely like the FAQ section */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[46px] lg:text-[50px] font-semibold text-neutral-900 tracking-tight leading-[1.14] mb-8 lg:mb-10 max-w-[500px]">
              Engineering the wind into the world’s strongest force for change
            </h2>

            {/* Morphing Linear Stretch "MORE ABOUT US" CTA Button */}
            <a
              href="#about"
              className="group relative inline-flex items-center h-[46px] px-6 select-none cursor-pointer"
            >
              {/* Morphing Circle/Pill Outline */}
              <div
                className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full border border-black pointer-events-none transition-[width,background-color] duration-500 ease-out group-hover:w-full group-hover:bg-black/5"
              />

              {/* Button Text */}
              <span className="relative z-10 text-[12px] sm:text-[12.5px] font-bold tracking-[0.06em] text-black uppercase pl-3.5 pr-2 whitespace-nowrap">
                MORE ABOUT US
              </span>
            </a>

          </div>

          {/* Right Column: Cards Grid (no drop shadow, pure stroke and color hover, less rounded corners) */}
          <div
            onMouseLeave={() => setHoveredCard(0)}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {SOLUTIONS.map((item) => {
              const isHighlighted = hoveredCard === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  className={`rounded-[16px] p-6 sm:p-7 flex flex-col justify-start transition-colors duration-200 cursor-pointer ${isHighlighted
                      ? "bg-[#AEF977] border border-black"
                      : "bg-white border border-black"
                    }`}
                >
                  {/* Top Row: Icon Badge directly beside Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0 transition-colors duration-200 ${isHighlighted
                          ? "bg-white text-black"
                          : "bg-[#AEF977] text-black"
                        }`}
                    >
                      {item.icon()}
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-bold text-black tracking-tight leading-[1.2]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed font-normal text-black/80">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

