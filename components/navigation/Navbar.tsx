'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Blogs", href: "#blog" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center w-full">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pointer-events-auto transition-all duration-500">
        
        <div className="bg-brand-graphite rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-brand-softwhite/10 px-3 md:px-4 h-16 flex items-center justify-between w-full">
          
          {/* Left: Logo & Divider */}
          <div className="flex items-center gap-4 lg:gap-6 pl-2 md:pl-4">
            <div className="flex items-center">
              <Logo color="#F5F5F2" className="text-[18px] md:text-[20px]" />
            </div>
            
            {/* Very faint vertical divider */}
            <div className="hidden lg:block w-[1px] h-5 bg-brand-softwhite/10"></div>

            <span className="hidden lg:block text-brand-titanium text-[11px] font-medium tracking-[0.2em] uppercase mt-0.5">
              RENEWABLE ENERGY
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav 
            className="hidden lg:flex items-center gap-1 xl:gap-2 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((item) => (
              <div 
                key={item.name}
                onMouseEnter={() => setHoveredLink(item.name)}
                className="relative flex-shrink-0"
              >
                <a 
                  href={item.href}
                  className="relative px-4 py-2 text-[14px] font-medium transition-colors z-10 flex items-center gap-1.5 whitespace-nowrap text-brand-softwhite"
                >
                  {hoveredLink === item.name && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-midnight rounded-[8px] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                  {item.hasDropdown && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${hoveredLink === item.name ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && hoveredLink === item.name && (
                  <div className="absolute top-full left-0 mt-3 w-[200px] bg-brand-graphite border border-brand-softwhite/10 rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.2)] py-2 z-50">
                    <a href="#wind-power" className="block px-4 py-2 text-[14px] text-brand-softwhite/80 hover:bg-brand-midnight hover:text-brand-energyblue transition-colors whitespace-nowrap">Wind Power</a>
                    <a href="#solar" className="block px-4 py-2 text-[14px] text-brand-softwhite/80 hover:bg-brand-midnight hover:text-brand-energyblue transition-colors whitespace-nowrap">Solar Energy</a>
                    <a href="#consulting" className="block px-4 py-2 text-[14px] text-brand-softwhite/80 hover:bg-brand-midnight hover:text-brand-energyblue transition-colors whitespace-nowrap">Consulting Services</a>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Right: CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
             <button className="hidden md:inline-flex group items-center justify-center gap-2.5 px-6 h-11 bg-brand-energyblue text-brand-midnight font-medium text-[14px] rounded-[8px] transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgb(77,163,255,0.2)]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45">
                  <rect x="0" y="0" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="8" y="0" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="0" y="8" width="6" height="6" rx="1" fill="currentColor"/>
                </svg>
                Contact Us
             </button>
             
             <button className={`md:hidden p-2 rounded-[8px] backdrop-blur-md transition-colors duration-300 bg-brand-energyblue text-brand-midnight`}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="4" x2="20" y1="12" y2="12"/>
                 <line x1="4" x2="20" y1="6" y2="6"/>
                 <line x1="4" x2="20" y1="18" y2="18"/>
               </svg>
             </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
