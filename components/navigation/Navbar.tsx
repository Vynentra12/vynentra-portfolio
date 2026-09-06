'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isBlog = pathname === "/blog" || pathname?.startsWith("/blog");
  const isContact = pathname === "/contact" || pathname?.startsWith("/contact");
  const [userSelectedLink, setUserSelectedLink] = useState<string | null>(null);
  const activeLink = userSelectedLink ?? (isContact ? "Contacts" : isBlog ? "Blogs" : "About Us");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Detect scroll position to switch between transparent hero header and solid white header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when open
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] py-0" 
          : "bg-transparent border-b border-transparent shadow-none py-1 md:py-2"
      }`}
    >
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14">
        <div className="h-20 flex items-center justify-between gap-4 w-full">
          
          {/* Left: Brand Logo (White on Hero, Black on Scrolled) */}
          <div className="flex items-center shrink-0">
            <Logo 
              color={isScrolled ? "#000000" : "#FFFFFF"} 
              className="text-[20px] md:text-[23px] font-extrabold tracking-tight transition-colors duration-300" 
            />
          </div>

          {/* Center: Navigation Links with Silky Smooth Sliding Pill Hover Animation */}
          <nav 
            className="hidden min-[1040px]:flex items-center gap-1.5 lg:gap-3 xl:gap-5 relative shrink-0"
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
          >
            {navLinks.map((item) => {
              const isSelected = currentPillTarget === item.name;

              return (
                <div 
                  key={item.name} 
                  className="relative py-1"
                  onMouseEnter={() => {
                    setHoveredLink(item.name);
                  }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => {
                      setUserSelectedLink(item.name);
                    }}
                    className={`relative h-[42px] px-5 sm:px-6 flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0.05em] transition-colors duration-200 z-10 whitespace-nowrap rounded-full select-none ${
                      isSelected 
                        ? (isScrolled ? "text-white" : "text-black") 
                        : (isScrolled ? "text-[#111111] hover:text-black/70" : "text-white hover:text-white/80")
                    }`}
                  >
                    {isSelected && (
                      <motion.span 
                        layoutId="navbar-pill" 
                        className={`absolute inset-0 rounded-full -z-10 ${
                          isScrolled 
                            ? "bg-[#111111] shadow-[0_2px_10px_rgba(0,0,0,0.12)]" 
                            : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
                        }`}
                        transition={{ 
                          type: "spring", 
                          stiffness: 180, 
                          damping: 24, 
                          mass: 0.8 
                        }}
                      />
                    )}
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
          
          {/* Right: Search Button & GET IN TOUCH CTA */}
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
            
            {/* Search Toggle Button & Modal */}
            <div className="relative" ref={searchRef}>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-sm shrink-0 cursor-pointer ${
                  isScrolled 
                    ? "bg-[#111111] text-white hover:bg-black" 
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                {isSearchOpen ? (
                  <X className="w-4 h-4 stroke-[2]" />
                ) : (
                  <Search className="w-4 h-4 stroke-[1.8]" />
                )}
              </button>

              {/* Floating Search Popup Card */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-3 bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-black/8 w-72 sm:w-84 z-50"
                  >
                    <form onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }}>
                      <div className="flex items-center gap-3 border-b border-black pb-2.5">
                        <Search className="w-4 h-4 text-black/70 shrink-0 stroke-[1.8]" />
                        <input 
                          ref={searchInputRef}
                          type="text" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search ..." 
                          className="w-full bg-transparent text-[14px] text-black placeholder:text-black/50 focus:outline-none focus:placeholder-transparent font-normal transition-all"
                        />
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* GET IN TOUCH CTA Button */}
            <a 
              href="#contact"
              className={`h-11 px-6 sm:px-7 rounded-full text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-all whitespace-nowrap shadow-sm active:scale-95 shrink-0 flex items-center justify-center ${
                isScrolled
                  ? "border border-black/85 text-black hover:bg-[#111111] hover:text-white"
                  : "border border-white/90 text-white hover:bg-white hover:text-black"
              }`}
            >
              GET IN TOUCH
            </a>

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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="min-[1040px]:hidden bg-white border-t border-black/5 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-[14px] font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/10 mt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full h-11 inline-flex items-center justify-center rounded-full bg-[#111111] text-white text-[13px] font-semibold uppercase tracking-wider shadow-sm hover:bg-black transition-colors"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
