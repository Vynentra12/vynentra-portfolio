'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

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
    // Media Query Check for Responsive Radius
    const isMobile = window.innerWidth < 768;
    const initialRadius = isMobile ? 120 : 250;
    const finalRadius = isMobile ? 220 : 420; // Decreased radius to bring images closer to text
    const images = gsap.utils.toArray('.gallery-item') as HTMLElement[];
    
    // Set initial layout: spread horizontally at the bottom
    images.forEach((img, i) => {
      const xOffset = (i - (images.length - 1) / 2) * (isMobile ? 60 : 120);
      gsap.set(img, {
        x: xOffset,
        y: isMobile ? 50 : 100, // Starts near the center
        rotation: 0,
        scale: 0.9,
        opacity: 1, // Visible immediately
      });
    });

    // Separate pin trigger so animation can start earlier while scrolling into view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=300%",
      pin: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%", // Starts animating when section is 40% visible (images enter viewport)
        end: "+=360%", // 60% scroll distance + 300% pinned distance
        scrub: 1,
      }
    });

    // Phase 1: Morph from horizontal line into a small circle
    images.forEach((img, i) => {
      // Angle starting from top (Math.PI / 2 offset)
      const angle = (i / images.length) * Math.PI * 2 - Math.PI / 2;
      const targetX = Math.cos(angle) * initialRadius;
      const targetY = Math.sin(angle) * initialRadius;
      
      tl.to(img, {
        x: targetX,
        y: targetY,
        rotation: angle * (180 / Math.PI) + 90, // Point outward
        scale: 1,
        duration: 2,
        ease: "power2.inOut"
      }, 0); // Start immediately
    });

    // Phase 2: Circle expands and spins, background darkens
    tl.to(bgRef.current, {
      opacity: 1,
      duration: 2,
    }, 3);

    images.forEach((img, i) => {
      // Add extra rotation to spin the entire circle
      const angle = (i / images.length) * Math.PI * 2 - Math.PI / 2 + (Math.PI / 2); // 90 degree spin
      const targetX = Math.cos(angle) * finalRadius;
      const targetY = Math.sin(angle) * finalRadius;
      
      tl.to(img, {
        x: targetX,
        y: targetY,
        rotation: angle * (180 / Math.PI) + 90,
        scale: 1.1,
        duration: 2,
        ease: "power1.inOut"
      }, 2); // Start at 2s in timeline
    });

    // Phase 3: Text fades and scales in
    tl.fromTo(textRef.current, {
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power2.out"
    }, 3); // Start at 3s in timeline

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-brand-midnight">
      {/* Background layer */}
      <div className="absolute inset-0 bg-brand-midnight w-full h-full z-0"></div>
      
      {/* Gallery Layer */}
      <div ref={galleryRef} className="absolute inset-0 flex items-center justify-center z-10 perspective-1000">
        {IMAGES.map((src, i) => (
          <div 
            key={i} 
            className="gallery-item absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10"
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
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none opacity-0">
        <div className="flex items-center gap-2.5 mb-4 pointer-events-auto">
          <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
          <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
            CONTACT US
          </span>
        </div>
        <h2 className="text-[36px] md:text-[56px] lg:text-[72px] font-semibold text-brand-softwhite tracking-tight leading-[1.1] text-center max-w-4xl px-4 pointer-events-auto">
          Ready to power your future?
        </h2>
        <p className="text-[15px] md:text-[18px] text-brand-softwhite/70 max-w-2xl leading-relaxed mt-6 text-center px-4 pointer-events-auto">
          Get in touch with our team to discuss your renewable energy requirements and explore how Vynentra can help.
        </p>
        <button className="group mt-8 px-6 h-12 inline-flex items-center justify-center gap-2.5 bg-brand-energyblue text-brand-midnight font-semibold text-[15px] rounded-[8px] hover:bg-brand-softwhite transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.2)] pointer-events-auto">
          Get in touch
          <div className="relative w-4 h-4 flex overflow-hidden">
            <ArrowRight className="w-4 h-4 text-brand-midnight absolute transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-6" strokeWidth={2} />
            <ArrowRight className="w-4 h-4 text-brand-midnight absolute -translate-x-6 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-0" strokeWidth={2} />
          </div>
        </button>
      </div>
    </section>
  );
}
