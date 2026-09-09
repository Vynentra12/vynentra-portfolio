'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FRAME_COUNT = 240;

export function HeroSectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(1);

  // 1. Setup Scroll Tracking mapping 400vh to progress 0 -> 1
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // 2. Preload frames into memory intelligently
  useEffect(() => {
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/assets/hero-frames/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        // As soon as first frame is ready, draw it to avoid blank screen
        if (i === 1) {
          renderFrame(1);
        }
      };

      imagesRef.current.push(img);
    }

    // Cleanup not strictly necessary for cached images, but good practice
    return () => {
      imagesRef.current = [];
    };
  }, []);

  // 3. Canvas rendering logic (mimics object-fit: cover)
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false }); // Optimize for opaque images
    const img = imagesRef.current[index - 1];

    if (canvas && context && img && img.complete) {
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  // 4. Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI canvas rendering support could be added here, 
        // but 1:1 pixel mapping is generally faster for 240 frames of 1080p video.
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(currentFrame.current);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 5. Update canvas frame on scroll
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map 0 -> 1 progress to 1 -> 240 frame index
    const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.ceil(latest * FRAME_COUNT)));
    
    if (frameIndex !== currentFrame.current) {
      currentFrame.current = frameIndex;
      // Use requestAnimationFrame for buttery smooth drawing to avoid main thread blocking
      requestAnimationFrame(() => renderFrame(frameIndex));
    }
  });

  // ============================================================================
  // UI Scroll Animation Mapping (Synchronized precisely to the visual sequence)
  // ============================================================================

  // Headline: Invisible at 0, fades in first when scrolling begins (2% - 12%)
  const headlineOpacity = useTransform(scrollYProgress, [0.02, 0.12], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.02, 0.15], [40, 0]);
  const headlineBlur = useTransform(scrollYProgress, [0.02, 0.12], ['blur(16px)', 'blur(0px)']);

  // Subtext: Invisible at 0, starts fading in after headline (15% - 25%)
  const subtextOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const subtextY = useTransform(scrollYProgress, [0.15, 0.3], [30, 0]);
  const subtextBlur = useTransform(scrollYProgress, [0.15, 0.25], ['blur(8px)', 'blur(0px)']);

  // Action Cards: Invisible at 0, start entering at 25% scroll
  const cardsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.25, 0.4], [30, 0]);
  const cardsScale = useTransform(scrollYProgress, [0.25, 0.4], [0.92, 1]);

  // Bottom Metadata: Enter last
  const bottomOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const bottomY = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

  // Subtle Parallax depth effect on the whole UI container as scroll nears end
  const containerY = useTransform(scrollYProgress, [0.7, 1], [0, -60]);

  return (
    <section
      id="home"
      ref={sectionRef}
      // Provide 400vh scroll distance to physically "move" through the cinematic scene
      className="relative w-full bg-black select-text"
      style={{ height: '400vh' }}
    >
      {/* Sticky container that holds the scene fixed while user scrolls down the 400vh track */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        
        {/* 1. LAYER 1: The Cinematic Frame Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0A]">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover select-none scale-[1.02]" // slight scale to prevent edge bleeding on sub-pixel rendering
            aria-label="Cinematic Wind Energy Sequence"
          />
          {/* Subtle cinematic gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        {/* 2. LAYER 2: Synchronized UI Content Container */}
        <motion.div 
          style={{ y: containerY }}
          // Adjusted mobile padding so text isn't pushed off-screen
          className="relative z-20 w-full h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-14 pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 pointer-events-auto"
        >
          {/* Upper: Massive Full-Span Headline */}
          <div className="w-full flex items-center justify-start select-none pt-2 sm:pt-4 md:pt-6">
            <motion.h1
              style={{
                opacity: headlineOpacity,
                y: headlineY,
                filter: headlineBlur,
              }}
              // Removed whitespace-nowrap on mobile, adjusted leading and sizing for mobile wrapping
              className="text-[14vw] sm:text-[9.4vw] lg:text-[8.9vw] font-bold text-white tracking-[-0.035em] leading-[1.05] sm:leading-[0.96] pb-2 select-none pointer-events-none drop-shadow-[0_4px_42px_rgba(0,0,0,0.35)] sm:whitespace-nowrap w-full text-left max-w-[90vw] sm:max-w-none"
            >
              Powering<br className="sm:hidden" /> Tomorrow
            </motion.h1>
          </div>

          {/* Lower Content: Mission Statement, Action Cards, and Bottom Metadata Line */}
          <div className="w-full flex flex-col gap-6 sm:gap-8 mt-auto">

            {/* Lower Row: Supporting Text (Left) & Two Action Cards (Right) */}
            <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">

              {/* Left: Supporting Text */}
              <motion.div
                style={{
                  opacity: subtextOpacity,
                  y: subtextY,
                  filter: subtextBlur,
                }}
                className="max-w-[100%] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[700px]"
              >
                <p className="text-[16px] sm:text-[21px] md:text-[23px] lg:text-[24px] font-medium text-white/95 leading-[1.4] sm:leading-[1.3] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                  From project development to integrated renewable energy solutions, we are building a more sustainable and energy-efficient future across India.
                </p>
              </motion.div>

              {/* Right: Two Action Cards (OUR SERVICES & ABOUT COMPANY) */}
              <motion.div 
                style={{
                  opacity: cardsOpacity,
                  y: cardsY,
                  scale: cardsScale,
                }}
                className="flex items-center gap-3 sm:gap-4 shrink-0 self-start lg:self-end origin-bottom"
              >
                {/* Card 1: White Card -> Turns Green on Hover */}
                <a
                  href="#process"
                  // Shrunk height and padding on mobile to fit screen
                  className="w-[110px] h-[110px] sm:w-[138px] sm:h-[138px] md:w-[146px] md:h-[146px] bg-white hover:bg-[#AEF977] text-black rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-[11px] sm:text-[13px] font-bold uppercase tracking-wider leading-tight text-black select-none">
                    OUR<br />SERVICES
                  </span>
                  <div className="self-end w-5 h-5 sm:w-6 sm:h-6 relative overflow-hidden flex items-center justify-center">
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-7"
                      strokeWidth={2}
                    />
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
                      strokeWidth={2}
                    />
                  </div>
                </a>

                {/* Card 2: Green Card -> Turns White on Hover */}
                <a
                  href="#about"
                  className="w-[110px] h-[110px] sm:w-[138px] sm:h-[138px] md:w-[146px] md:h-[146px] bg-[#AEF977] hover:bg-white text-black rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-[11px] sm:text-[13px] font-bold uppercase tracking-wider leading-tight text-black select-none">
                    ABOUT<br />COMPANY
                  </span>
                  <div className="self-end w-5 h-5 sm:w-6 sm:h-6 relative overflow-hidden flex items-center justify-center">
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-7"
                      strokeWidth={2}
                    />
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black absolute -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
                      strokeWidth={2}
                    />
                  </div>
                </a>
              </motion.div>

            </div>

            {/* Bottom Horizontal Metadata Strip */}
            <motion.div
              style={{
                opacity: bottomOpacity,
                y: bottomY,
              }}
              // Wrapping applied to mobile for safety
              className="w-full border-t border-white/20 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[12px] font-semibold tracking-wider text-white/80 uppercase gap-3 sm:gap-2 select-none"
            >
              <a href="mailto:hello@vynentra.in" className="hover:text-white transition-colors">
                HELLO@VYNENTRA.IN
              </a>
              <span className="hidden sm:inline">
                GUJARAT &amp; RAJASTHAN CORRIDOR, INDIA
              </span>
              <a href="tel:+917777024826" className="hover:text-white transition-colors">
                +91 77770 24826
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
