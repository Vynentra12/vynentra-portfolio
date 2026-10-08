"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zm1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export function FooterV2() {
  const companyLinks = [
    { name: "About Vynentra", href: "/#about" },
    { name: "Our Approach", href: "/#process" },
    { name: "Getting Started", href: "/contact" },
  ];

  const solutionsLinks = [
    { name: "Wind Energy", href: "/#solutions" },
    { name: "Solar Energy", href: "/#solutions" },
    { name: "Wind-Solar Hybrid", href: "/#solutions" },
    { name: "Energy Storage", href: "/#solutions" },
    { name: "Project Development", href: "/#solutions" },
  ];

  const resourcesLinks = [
    { name: "Energy Insights", href: "/blog" },
    { name: "FAQs", href: "/#faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#0E2F3E] text-white pt-16 md:pt-20 pb-10 md:pb-12 relative font-sans overflow-hidden select-text">
      <div className="w-full max-w-[1380px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between relative">
        
        {/* Top Content Grid: Left Contact Column & Right Structured Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Mission, Direct Contact & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-[17px] sm:text-[18px] text-white/90 leading-[1.5] max-w-[380px] font-normal">
              Building a more sustainable and energy-efficient future across India.
            </p>

            <div className="flex flex-col gap-2 mt-8 mb-8 sm:mb-10">
              <a 
                href="mailto:hello@vynentra.in" 
                className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white hover:text-[#AEF977] transition-colors tracking-tight leading-none"
              >
                hello@vynentra.in
              </a>
              <a 
                href="tel:+917777024826" 
                className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white hover:text-[#AEF977] transition-colors tracking-tight leading-none mt-2"
              >
                +91 77770 24826
              </a>
            </div>

            {/* Social Icons (LinkedIn & Instagram) */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#AEF977] hover:border-[#AEF977] transition-all duration-200"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#AEF977] hover:border-[#AEF977] transition-all duration-200"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Navigation Groups (Company, Solutions, Resources) */}
          <div className="lg:col-span-7 flex flex-col border-l-0 lg:border-l border-white/15 pl-0 lg:pl-10 xl:pl-12 pt-1 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
              
              {/* Company */}
              <div className="flex flex-col">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide uppercase mb-4 sm:mb-5">
                  Company
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-[14.5px] text-white/80 hover:text-[#AEF977] transition-colors py-0.5 inline-block font-normal"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="flex flex-col">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide uppercase mb-4 sm:mb-5">
                  Solutions
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {solutionsLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-[14.5px] text-white/80 hover:text-[#AEF977] transition-colors py-0.5 inline-block font-normal"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="flex flex-col">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide uppercase mb-4 sm:mb-5">
                  Resources
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {resourcesLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-[14.5px] text-white/80 hover:text-[#AEF977] transition-colors py-0.5 inline-block font-normal"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <p className="text-[13px] text-white/60 mt-10 md:mt-12 font-normal">
              © {new Date().getFullYear()} Vynentra Energy Solutions. All Rights Reserved
            </p>
          </div>

        </div>

        {/* Bottom Giant Brand Wordmark Logo */}
        <div className="mt-10 md:mt-14 pt-2 pb-0 flex items-center justify-center relative w-full">
          <motion.div 
            whileHover={{ scale: 1.025, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center select-none cursor-pointer group"
          >
            <span className="text-[11.5vw] md:text-[10.5vw] lg:text-[130px] xl:text-[160px] font-bold tracking-tight leading-none text-white transition-colors duration-300 ease-out group-hover:text-[#AEF977] select-none">
              vynentra
            </span>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
