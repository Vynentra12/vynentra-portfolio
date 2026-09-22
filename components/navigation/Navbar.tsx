'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const pathname = usePathname();
  const isBlog = pathname === "/blog" || pathname?.startsWith("/blog");
  const isContact = pathname === "/contact" || pathname?.startsWith("/contact");
  const [userSelectedLink, setUserSelectedLink] = useState<string | null>(null);
  const activeLink = userSelectedLink ?? (isContact ? "Contacts" : isBlog ? "Blogs" : null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position to switch between transparent hero header and solid white header
  useEffect(() => {
    const handleScroll = () => {
      // Switch to the solid background as soon as the user scrolls down 40px
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock background scrolling and interaction when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Clean 5 navigation items
  const navLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#process" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Blogs", href: "/blog" },
    { name: "Contacts", href: "/contact" },
  ];

  const currentPillTarget = hoveredLink || activeLink;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] py-0" 
          : "bg-transparent border-b border-transparent shadow-none py-1 md:py-2"
      }`}
    >
      <div className="relative z-50 w-full px-5 md:px-8 lg:px-12 xl:px-14">
        <div className="h-20 grid grid-cols-2 min-[1040px]:grid-cols-3 items-center gap-4 w-full">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center justify-self-start shrink-0">
            <Logo 
              color={isScrolled ? "#000000" : "#FFFFFF"} 
              className="text-[20px] md:text-[23px] font-extrabold tracking-tight transition-colors duration-300" 
            />
          </div>

          {/* Center: Navigation Links with Standard Hover */}
          <nav className="hidden min-[1040px]:flex items-center justify-center gap-1.5 lg:gap-3 xl:gap-5 relative shrink-0 justify-self-center">
            {navLinks.map((item) => {
              const isSelected = currentPillTarget === item.name;

              return (
                <div key={item.name} className="relative py-1">
                  <Link 
                    href={item.href}
                    onClick={() => setUserSelectedLink(item.name)}
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative h-[38px] px-4 sm:px-5 flex items-center justify-center text-[11.5px] font-semibold uppercase tracking-[0.06em] transition-all duration-200 z-10 whitespace-nowrap rounded-full select-none border border-transparent ${
                      isSelected 
                        ? (isScrolled 
                            ? "text-[#111111] bg-neutral-200 shadow-sm border-transparent" 
                            : "text-white bg-white/20 border-white shadow-sm")
                        : (isScrolled 
                            ? "text-[#111111] hover:bg-neutral-100 hover:text-[#111111]" 
                            : "text-white hover:bg-white/20 hover:border-white/50")
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
          
          {/* Right: GET IN TOUCH CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0 justify-self-end">
            


            {/* GET IN TOUCH CTA Button with clean stroke in default & matching hover */}
            <Link 
              href="/contact"
              className={`hidden sm:inline-flex items-center justify-center h-[44px] px-6 rounded-full border text-[12.5px] font-semibold tracking-[0.06em] uppercase select-none cursor-pointer shrink-0 whitespace-nowrap transition-all duration-300 active:scale-[0.98] ${
                isScrolled
                  ? "border-[#0B2735] text-[#0B2735] hover:bg-[#0B2735] hover:text-white"
                  : "border-white/70 text-white hover:bg-white hover:text-[#0B2735] hover:border-white"
              }`}
            >
              GET IN TOUCH
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`min-[1040px]:hidden w-10 h-10 rounded-full border transition-colors shrink-0 flex items-center justify-center ${
                isScrolled
                  ? "border-black/10 text-black hover:bg-black/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Drawer Menu & Background Blur Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Blur Overlay - Blurs remaining background sections & blocks touch/click */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="min-[1040px]:hidden fixed inset-0 bg-[#0B2735]/40 backdrop-blur-md z-40"
              style={{ touchAction: "none" }}
            />

            {/* Mobile Drawer Menu */}
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="min-[1040px]:hidden bg-white border-t border-black/5 px-6 py-6 shadow-2xl relative z-50 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-[14px] font-semibold uppercase tracking-wider text-[#0B2735] hover:bg-neutral-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-black/10 mt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full h-11 inline-flex items-center justify-center rounded-full border border-[#0B2735] text-[#0B2735] text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
