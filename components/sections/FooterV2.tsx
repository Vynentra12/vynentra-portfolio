"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function FooterV2() {
  const [subscribeEmail, setSubscribeEmail] = React.useState("");
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [isWordmarkAnimating, setIsWordmarkAnimating] = React.useState(false);
  const wordmarkTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleWordmarkMouseEnter = () => {
    setIsWordmarkAnimating(true);
    if (wordmarkTimeoutRef.current) clearTimeout(wordmarkTimeoutRef.current);
    wordmarkTimeoutRef.current = setTimeout(() => {
      setIsWordmarkAnimating(false);
    }, 1500); // Automatically stops after 1.5 seconds
  };

  const handleWordmarkMouseLeave = () => {
    if (wordmarkTimeoutRef.current) clearTimeout(wordmarkTimeoutRef.current);
    setIsWordmarkAnimating(false); // Immediately stops when mouse leaves
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const letters = "vynentra".split("");

  return (
    <footer className="w-full bg-[#0E2F3E] text-white pt-20 md:pt-28 pb-16 md:pb-24 relative font-sans overflow-hidden">
      <div className="w-full max-w-[1380px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between relative">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Left Info & Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-[17px] md:text-[18px] text-white/90 leading-[1.4] max-w-[340px] font-normal">
              Driven by passion. Grounded in purpose. Focused on results.
            </p>

            <div className="flex flex-col gap-2 mt-8 mb-10">
              <a 
                href="mailto:hello@vynentra.in" 
                className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-white hover:text-brand-energyblue transition-colors tracking-tight leading-none"
              >
                hello@vynentra.in
              </a>
              <a 
                href="tel:+910000123456" 
                className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-white hover:text-brand-energyblue transition-colors tracking-tight leading-none mt-2"
              >
                +91 0000 123 456
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
                className="text-white hover:text-brand-energyblue transition-colors"
              >
                <TwitterIcon className="w-[18px] h-[18px]" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-white hover:text-brand-energyblue transition-colors"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-white hover:text-brand-energyblue transition-colors"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="text-white hover:text-brand-energyblue transition-colors"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links with Vertical Divider */}
          <div className="lg:col-span-3 flex flex-col border-l-0 lg:border-l border-white/15 pl-0 lg:pl-10 xl:pl-12">
            <h4 className="text-[20px] md:text-[22px] font-bold text-white mb-6 tracking-tight">Useful Links</h4>
            
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Company", href: "#about" },
                { name: "Services", href: "#process" },
                { name: "Features", href: "#why-choose-us" },
                { name: "FAQs", href: "#faq" },
                { name: "Getting Started", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[15px] text-white/80 hover:text-brand-energyblue transition-colors py-0.5 inline-block font-normal"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-[13px] text-white/60 mt-14 font-normal">
              © {new Date().getFullYear()} Vynentra. All Rights Reserved
            </p>
          </div>

          {/* Column 3: Subscribe */}
          <div className="lg:col-span-4 flex flex-col pl-0 lg:pl-4 xl:pl-6">
            <h4 className="text-[20px] md:text-[22px] font-bold text-white mb-6 tracking-tight">Subscribe</h4>
            
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm">
              <div className="relative border-b border-white/30 pb-2.5 pt-4 flex items-center justify-between group focus-within:border-white transition-colors">
                {/* Floating Animated Placeholder / Label that moves up smoothly when clicked/focused */}
                <label 
                  htmlFor="footer-subscribe-input"
                  className={`absolute left-0 pointer-events-none transition-all duration-200 select-none ${
                    isInputFocused || subscribeEmail
                      ? "-top-1 text-[11px] font-semibold text-[#AEF977] uppercase tracking-wider"
                      : "top-4 text-[14.5px] text-white/60 font-normal"
                  }`}
                >
                  Get news & updates
                </label>

                <input 
                  id="footer-subscribe-input"
                  type="email" 
                  name="vynentra_footer_subscribe"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  data-lpignore="true"
                  data-form-type="other"
                  required
                  className="bg-transparent text-white text-[14.5px] focus:outline-none w-full pr-8 font-normal z-10"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe" 
                  className="text-white hover:text-brand-energyblue transition-colors z-10 shrink-0"
                >
                  <Mail className="w-[18px] h-[18px]" />
                </button>
              </div>
              
              <p className="text-[13px] text-white/70 mt-4 leading-relaxed font-normal">
                Our expertise, as well as our passion for renewable energy, sets us apart from other agencies.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Giant Brand Wordmark Logo with Interactive Smooth Wave Animation */}
        <div className="mt-16 md:mt-24 pt-6 pb-4 flex items-center justify-center relative w-full">
          
          {/* Giant Animated Wordmark - Proportional & Centered */}
          <div 
            onMouseEnter={handleWordmarkMouseEnter}
            onMouseLeave={handleWordmarkMouseLeave}
            className="w-full flex justify-center items-center select-none cursor-pointer py-4 group px-8 sm:px-12 md:px-16"
          >
            <div className="flex items-center justify-center max-w-full overflow-visible py-2">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  animate={isWordmarkAnimating ? "animating" : "idle"}
                  className="inline-block text-[11.5vw] md:text-[10.5vw] lg:text-[130px] xl:text-[160px] font-bold tracking-tight leading-[1.08] pb-3 text-white transition-colors duration-300 group-hover:text-brand-energyblue drop-shadow-sm select-none"
                  variants={{
                    idle: { y: 0, scale: 1 },
                    animating: {
                      y: [-2, -12, 0],
                      scale: [1, 1.02, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 0.75,
                        delay: index * 0.04,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Floating Solid Green Scroll-to-Top Button (Fixed to bottom-right with balanced spacing) */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute right-0 bottom-0 md:bottom-2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#AEF977] text-black flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl shrink-0 z-30"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
