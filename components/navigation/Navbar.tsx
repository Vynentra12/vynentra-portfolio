'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Menu, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { searchItems, SEARCH_INDEX } from "@/lib/search-index";

export function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isBlog = pathname === "/blog" || pathname?.startsWith("/blog");
  const isContact = pathname === "/contact" || pathname?.startsWith("/contact");
  const [userSelectedLink, setUserSelectedLink] = useState<string | null>(null);
  const activeLink = userSelectedLink ?? (isContact ? "Contacts" : isBlog ? "Blogs" : null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Real-time dynamic search results
  const searchResults = useMemo(() => {
    return searchItems(searchQuery);
  }, [searchQuery]);

  // Quick suggestions for initial state
  const quickSuggestions = useMemo(() => {
    return SEARCH_INDEX.slice(0, 5);
  }, []);

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
      <div className="w-full px-5 md:px-8 lg:px-12 xl:px-14">
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
            


            {/* GET IN TOUCH CTA Button with Linear Stretching Circle-to-Pill Animation */}
            <Link 
              href="/contact"
              className={`group relative hidden sm:inline-flex items-center h-[44px] px-6 select-none cursor-pointer shrink-0 transition-colors ${
                isScrolled ? "text-[#0B2735]" : "text-white"
              }`}
            >
              {/* The Stretching Circle Outline */}
              <div 
                className={`absolute left-0 top-0 h-[44px] w-[44px] rounded-full border pointer-events-none transition-[width,background-color,border-color] duration-500 ease-out group-hover:w-full ${
                  isScrolled
                    ? "border-[#0B2735] group-hover:bg-[#0B2735]/5 group-hover:border-[#0B2735]"
                    : "border-white/50 group-hover:bg-white/20 group-hover:border-white"
                }`}
              />
              
              <span className="relative z-10 text-[12.5px] font-semibold tracking-[0.06em] uppercase pl-4 pr-2 whitespace-nowrap">
                GET IN TOUCH
              </span>
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
              {/* Mobile Search Bar */}
              <div className="relative mb-2">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 stroke-[2]" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, pages..." 
                  className="w-full bg-neutral-100/80 border border-neutral-200 text-black text-[14px] rounded-xl h-11 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-neutral-300 transition-shadow"
                />
                {searchQuery && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-100 max-h-[200px] overflow-y-auto z-50 p-2 flex flex-col gap-1">
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex flex-col p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5">{item.category}</span>
                        <span className="text-[13px] font-bold text-black">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-100 p-4 text-center z-50">
                    <span className="text-[13px] text-neutral-500">No results found</span>
                  </div>
                )}
              </div>

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl text-[14px] font-semibold uppercase tracking-wider text-black hover:bg-zinc-100 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-black/10 mt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full h-11 inline-flex items-center justify-center rounded-full bg-[#111111] text-white text-[13px] font-semibold uppercase tracking-wider shadow-sm hover:bg-black transition-colors"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
