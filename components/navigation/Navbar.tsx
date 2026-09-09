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
  const activeLink = userSelectedLink ?? (isContact ? "Contacts" : isBlog ? "Blogs" : "About Us");
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
      <div className="w-full px-5 md:px-8 lg:px-12 xl:px-14">
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
            <div className="relative hidden min-[850px]:block" ref={searchRef}>
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

              {/* Floating Live Search Dropdown Palette */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-3 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] border border-neutral-200/90 w-[330px] sm:w-[420px] max-w-[90vw] z-50 overflow-hidden"
                  >
                    {/* Search Input Box */}
                    <div className="flex items-center gap-3 border-b border-neutral-200 pb-3 px-1">
                      <Search className="w-4 h-4 text-neutral-500 shrink-0 stroke-[2]" />
                      <input 
                        ref={searchInputRef}
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") {
                            setIsSearchOpen(false);
                          }
                        }}
                        placeholder="Search sections, pages, articles..." 
                        className="w-full bg-transparent text-[13.5px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          aria-label="Clear search"
                          className="text-neutral-400 hover:text-neutral-700 p-0.5 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Results Container */}
                    <div className="mt-3 max-h-[320px] overflow-y-auto no-scrollbar space-y-1 pr-0.5">
                      {searchResults.length > 0 ? (
                        <>
                          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-2.5 py-1">
                            Matching Results ({searchResults.length})
                          </div>
                          {searchResults.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="group/item flex items-start justify-between gap-3 p-2.5 rounded-xl hover:bg-neutral-100/90 transition-colors cursor-pointer"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 group-hover/item:bg-[#AEF977] group-hover/item:text-neutral-950 transition-colors">
                                    {item.category}
                                  </span>
                                  <h4 className="text-[13px] font-bold text-neutral-900 truncate group-hover/item:text-black">
                                    {item.title}
                                  </h4>
                                </div>
                                <p className="text-[11.5px] text-neutral-500 line-clamp-1">
                                  {item.description}
                                </p>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/item:text-neutral-900 group-hover/item:translate-x-0.5 transition-all mt-1.5 shrink-0" />
                            </Link>
                          ))}
                        </>
                      ) : searchQuery.trim() ? (
                        <div className="py-8 text-center text-neutral-500">
                          <p className="text-[13px] font-semibold text-neutral-800">No results found</p>
                          <p className="text-[11.5px] mt-1">Try searching for &quot;Services&quot;, &quot;Wind&quot;, or &quot;Mission&quot;</p>
                        </div>
                      ) : (
                        <>
                          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-2.5 py-1">
                            Quick Destinations
                          </div>
                          {quickSuggestions.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 group-hover/item:bg-[#AEF977] group-hover/item:text-neutral-950 transition-colors">
                                  {item.category}
                                </span>
                                <span className="text-[13px] font-medium text-neutral-800 group-hover/item:text-black truncate">
                                  {item.title}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/item:text-neutral-900 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* GET IN TOUCH CTA Button */}
            <Link 
              href="/contact"
              className={`hidden sm:flex h-11 px-6 sm:px-7 rounded-full text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-all whitespace-nowrap shadow-sm active:scale-95 shrink-0 items-center justify-center ${
                isScrolled
                  ? "border border-black/85 text-black hover:bg-[#111111] hover:text-white"
                  : "border border-white/90 text-white hover:bg-white hover:text-black"
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
    </header>
  );
}
