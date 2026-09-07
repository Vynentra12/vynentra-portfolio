'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/heroimage.png",
  "/mini-wheel.png",
  "/wind-2.png",
  "/golb-india.png",
  "/wind_farm_sunset.jpg",
  "/solar_panels.jpg",
  "/wind_turbine_close.jpg",
  "/heroimage.png",
];

export function ClosingCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Dynamic responsive radius based on viewport to guarantee it fits cleanly in frame
    const getRadii = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;
      
      const initial = isMobile ? 90 : 160;
      // Calculate final radius so it stays outside the text box while remaining fully inside viewport
      const final = isMobile 
        ? Math.min(w * 0.44, h * 0.38, 220) 
        : Math.min(w * 0.36, h * 0.42, 460);

      return { initial, final, isMobile };
    };

    const { initial: initialRadius, final: finalRadius, isMobile } = getRadii();
    const images = gsap.utils.toArray('.gallery-item') as HTMLElement[];
    
    // Initial layout: horizontally distributed
    images.forEach((img, i) => {
      const xOffset = (i - (images.length - 1) / 2) * (isMobile ? 50 : 90);
      gsap.set(img, {
        x: xOffset,
        y: isMobile ? 30 : 60,
        rotation: 0,
        scale: 0.85,
        opacity: 1,
      });
    });

    // Shortened, snappy pin trigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=120%", // Crisp, short scroll distance
      pin: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "+=160%",
        scrub: 0.7,
      }
    });

    // Phase 1: Morph into small circle
    images.forEach((img, i) => {
      const angle = (i / images.length) * Math.PI * 2 - Math.PI / 2;
      const targetX = Math.cos(angle) * initialRadius;
      const targetY = Math.sin(angle) * initialRadius;
      
      tl.to(img, {
        x: targetX,
        y: targetY,
        rotation: angle * (180 / Math.PI) + 90,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.inOut"
      }, 0);
    });

    // Phase 2: Circle expands to frame boundary & rotates smoothly
    tl.to(bgRef.current, {
      opacity: 1,
      duration: 1.2,
    }, 1);

    images.forEach((img, i) => {
      const angle = (i / images.length) * Math.PI * 2 - Math.PI / 2 + (Math.PI / 3);
      const targetX = Math.cos(angle) * finalRadius;
      const targetY = Math.sin(angle) * finalRadius;
      
      tl.to(img, {
        x: targetX,
        y: targetY,
        rotation: angle * (180 / Math.PI) + 90,
        scale: isMobile ? 0.95 : 1,
        duration: 1.5,
        ease: "power1.inOut"
      }, 1);
    });

    // Phase 3: Text reveals cleanly in the center
    tl.fromTo(textRef.current, {
      opacity: 0,
      scale: 0.92,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, 1.4);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#0a1922] font-sans">
      {/* Background layer */}
      <div ref={bgRef} className="absolute inset-0 bg-[#0a1922] w-full h-full z-0"></div>
      
      {/* Gallery Layer */}
      <div ref={galleryRef} className="absolute inset-0 flex items-center justify-center z-10 perspective-1000 pointer-events-none">
        {IMAGES.map((src, i) => (
          <div 
            key={i} 
            className="gallery-item absolute w-[85px] h-[85px] sm:w-[120px] sm:h-[120px] md:w-[145px] md:h-[145px] lg:w-[155px] lg:h-[155px] rounded-[16px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.35)] border border-white/15"
          >
            <img 
              src={src} 
              alt={`Gallery Image ${i}`} 
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Text Layer */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none opacity-0 px-6">
        <div className="flex items-center gap-2.5 mb-3 pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-[#AEF977]"></div>
          <span className="text-[11px] md:text-xs font-semibold text-white/80 uppercase tracking-widest">
            CONTACT US
          </span>
        </div>
        
        <h2 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-bold text-white tracking-tight leading-[1.1] text-center max-w-2xl pointer-events-auto">
          Ready to power your future?
        </h2>
        
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/75 max-w-md leading-relaxed mt-4 text-center pointer-events-auto font-normal">
          Get in touch with our team to discuss your renewable energy requirements and explore how Vynentra can help.
        </p>
        
        {/* Navbar Header Matching GET IN TOUCH Button */}
        <div className="mt-7 pointer-events-auto">
          <a 
            href="#contact"
            className="h-11 sm:h-12 px-7 sm:px-8 rounded-full text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-all whitespace-nowrap shadow-sm active:scale-95 flex items-center justify-center border border-white/90 text-white hover:bg-white hover:text-black duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
