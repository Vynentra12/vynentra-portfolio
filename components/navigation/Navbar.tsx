'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (window.innerHeight * 0.2));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Blogs", href: "#blog" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 border-b ${isScrolled ? 'bg-brand-midnight/80 backdrop-blur-md shadow-md border-brand-softwhite/10' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        
        <div className="h-16 flex items-center justify-between w-full">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center">
              <Logo color="#F5F5F2" className="text-[18px] md:text-[20px]" />
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {navLinks.map((item) => (
              <div key={item.name} className="relative flex-shrink-0">
                <a 
                  href={item.href}
                  className="group relative px-4 py-2 text-[14px] font-medium transition-colors z-10 flex items-center gap-1.5 whitespace-nowrap text-brand-softwhite hover:text-brand-energyblue"
                >
                  <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-brand-energyblue origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          
          {/* Right: CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
             <button className="hidden md:inline-flex group items-center justify-center gap-2.5 px-6 h-11 border border-brand-energyblue text-brand-energyblue bg-transparent hover:bg-brand-energyblue hover:text-brand-midnight font-semibold tracking-wide text-[14px] rounded-[8px] transition-all duration-300 hover:shadow-[0_4px_20px_rgb(77,163,255,0.2)]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45">
                  <rect x="0" y="0" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="8" y="0" width="6" height="6" rx="1" fill="currentColor"/>
                  <rect x="0" y="8" width="6" height="6" rx="1" fill="currentColor"/>
                </svg>
                Contact Us
             </button>
             
             <button className={`md:hidden p-2 rounded-[8px] backdrop-blur-md transition-colors duration-300 border border-brand-energyblue text-brand-energyblue bg-transparent hover:bg-brand-energyblue hover:text-brand-midnight`}>
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
