'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center px-6">
      <div 
        className="w-full max-w-[1400px] pointer-events-auto flex items-center justify-between py-2 transition-all duration-500"
      >
        
        {/* Left: Navigation Pill */}
        <div className="flex-1 flex justify-start">
          <nav 
            className="hidden md:flex items-center rounded-full p-1.5 bg-white border border-gray-100 shadow-sm relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onMouseEnter={() => setHoveredLink(item.name)}
                className={`relative px-5 py-1.5 text-[14px] font-medium transition-colors z-10 ${hoveredLink === item.name ? 'text-white' : 'text-gray-600 hover:text-black'}`}
              >
                {hoveredLink === item.name && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-black rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <div className={`transition-all duration-500 rounded-full h-11 px-5 flex items-center justify-center ${isScrolled ? 'bg-white/80 backdrop-blur-md border border-white/40 shadow-sm' : 'bg-transparent border border-transparent'}`}>
            <Logo color="#071426" />
          </div>
        </div>
        
        {/* Right: CTA & Mobile Menu */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <button className="hidden md:inline-flex group items-center justify-center gap-2.5 px-6 h-11 bg-black text-white font-medium text-[14px] rounded-full transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black border border-white hover:border-black shadow-lg shadow-black/10">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45">
              <rect x="0" y="0" width="6" height="6" rx="1" fill="currentColor"/>
              <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor"/>
              <rect x="8" y="0" width="6" height="6" rx="1" fill="currentColor"/>
              <rect x="0" y="8" width="6" height="6" rx="1" fill="currentColor"/>
            </svg>
            Contact Us
          </button>
          
          <button className={`md:hidden p-2 rounded-full backdrop-blur-md transition-colors duration-300 ${isScrolled ? 'text-[#071426] bg-white shadow-sm border border-gray-100' : 'text-[#071426] bg-white/60 border border-transparent'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
        
      </div>
    </header>
  );
}
