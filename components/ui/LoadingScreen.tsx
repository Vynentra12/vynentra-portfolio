'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number; // duration in milliseconds (default: 4200ms)
}

const PHASES = [
  {
    range: [0, 35],
    title: 'Harnessing the Wind',
  },
  {
    range: [36, 75],
    title: 'Generating Clean Power',
  },
  {
    range: [76, 100],
    title: 'Powering Tomorrow',
  },
];

export function LoadingScreen({
  onComplete,
  duration = 4200,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock background scroll during preloader
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawRatio = Math.min(elapsed / duration, 1);

      // Smooth custom cubic easing for a calm, natural start and gradual smooth landing
      const eased = Math.floor(
        (rawRatio < 0.5
          ? 4 * rawRatio * rawRatio * rawRatio
          : 1 - Math.pow(-2 * rawRatio + 2, 3) / 2) * 100
      );

      setProgress(Math.min(eased, 100));

      if (rawRatio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 450);
      }
    };

    const animId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = '';
    };
  }, [duration, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinished(true);
    document.body.style.overflow = '';
    if (onComplete) onComplete();
  };

  // Find active phase title
  const activePhase =
    PHASES.find((p) => progress >= p.range[0] && progress <= p.range[1]) ||
    PHASES[PHASES.length - 1];

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="vynentra-preloader-v2"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.95,
              ease: [0.77, 0, 0.175, 1], // cinematic smooth curtain swipe
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#060A0D] text-white select-none overflow-hidden"
        >
          {/* Ambient Glowing Atmosphere */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[160px] pointer-events-none transition-opacity duration-1000"
              style={{
                background:
                  'radial-gradient(circle, rgba(174, 249, 119, 0.22) 0%, rgba(0, 229, 255, 0.08) 45%, transparent 70%)',
              }}
            />
          </div>

          {/* Top Bar: Brand Logo & Minimalist Skip */}
          <header className="relative z-10 w-full px-8 sm:px-14 py-8 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-[20px] sm:text-[22px] font-extrabold tracking-tight uppercase text-white font-sans">
                Vynentra
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#AEF977] shadow-[0_0_8px_#AEF977]" />
            </div>

            <button
              onClick={handleSkip}
              className="text-[12px] tracking-widest uppercase text-white/40 hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 backdrop-blur-sm"
            >
              Skip
            </button>
          </header>

          {/* Centerpiece: Aligned Wind Stream Currents + Rotating Turbine */}
          <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
            
            {/* Unified Visual Scene: SVG Wind Streams + Perfectly Aligned Turbine */}
            <div className="relative w-full max-w-[500px] h-[280px] sm:h-[320px] flex items-center justify-center">
              
              {/* Layer 1: SVG Horizontal Wind Breeze Streams (Flowing through the center rotor) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 500 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="windStreak1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#AEF977" stopOpacity="0" />
                    <stop offset="35%" stopColor="#AEF977" stopOpacity="0.85" />
                    <stop offset="70%" stopColor="#00E5FF" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#AEF977" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="windStreak2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="40%" stopColor="#AEF977" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>

                  <filter id="windGlow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Wind Current 1: Upper Curve crossing rotor hub */}
                <motion.path
                  d="M -120 110 C 60 85, 180 135, 250 110 C 320 85, 420 120, 620 95"
                  stroke="url(#windStreak1)"
                  strokeWidth="2.5"
                  strokeDasharray="140 160"
                  filter="url(#windGlow)"
                  animate={{
                    strokeDashoffset: [0, -600],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.2,
                    ease: "linear",
                  }}
                />

                {/* Wind Current 2: Direct Center Breeze crossing turbine rotor */}
                <motion.path
                  d="M -150 145 C 50 160, 160 130, 250 145 C 340 160, 440 135, 650 140"
                  stroke="url(#windStreak2)"
                  strokeWidth="3"
                  strokeDasharray="180 180"
                  filter="url(#windGlow)"
                  animate={{
                    strokeDashoffset: [0, -720],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.6,
                    ease: "linear",
                  }}
                />

                {/* Wind Current 3: Lower Wave */}
                <motion.path
                  d="M -100 185 C 80 170, 170 205, 250 185 C 330 165, 430 195, 620 180"
                  stroke="url(#windStreak1)"
                  strokeWidth="2"
                  strokeDasharray="120 150"
                  filter="url(#windGlow)"
                  animate={{
                    strokeDashoffset: [0, -540],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.6,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Layer 2: Drifting Wind Particles (Silky smooth velocity) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#AEF977]"
                    style={{
                      top: `${35 + (i * 7) % 35}%`,
                      left: '-30px',
                      width: `${24 + (i % 3) * 12}px`,
                      height: '2px',
                      boxShadow: '0 0 8px #AEF977',
                    }}
                    animate={{
                      x: ['0px', '560px'],
                      opacity: [0, 0.85, 0.85, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2 + (i % 3) * 0.4,
                      delay: i * 0.25,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              {/* Layer 3: Perfectly Centered Wind Turbine Structure */}
              <div className="relative z-10 w-[240px] h-[240px] flex items-center justify-center">
                
                {/* Outer Subtle Pulse Halo */}
                <motion.div
                  className="absolute w-44 h-44 rounded-full border border-[#AEF977]/25 pointer-events-none"
                  animate={{
                    scale: [0.95, 1.08, 0.95],
                    opacity: [0.25, 0.6, 0.25],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                />

                {/* Turbine Mast / Tower (Crisp geometric SVG locked underneath hub) */}
                <svg
                  className="absolute top-[120px] left-1/2 -translate-x-1/2 w-6 h-28 pointer-events-none text-white/35"
                  viewBox="0 0 20 100"
                  fill="none"
                >
                  <polygon
                    points="8.5,0 11.5,0 14,100 6,100"
                    fill="currentColor"
                  />
                  <line
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="100"
                    stroke="#AEF977"
                    strokeOpacity="0.4"
                    strokeWidth="0.8"
                  />
                </svg>

                {/* Rotating 3-Blade Rotor Assembly (Locked perfectly on center 120, 120) */}
                <motion.div
                  className="absolute w-[240px] h-[240px] flex items-center justify-center origin-center"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4, // calm, majestic, smooth rotation
                    ease: 'linear',
                  }}
                >
                  {/* 3 Airfoil Turbine Blades */}
                  {[0, 120, 240].map((angle) => (
                    <div
                      key={angle}
                      className="absolute top-1/2 left-1/2 origin-[50%_0%] w-3 h-[92px] -translate-x-1/2"
                      style={{
                        transform: `rotate(${angle}deg)`,
                      }}
                    >
                      {/* Tapered Aerodynamic Blade Shape */}
                      <div
                        className="w-full h-full bg-gradient-to-b from-[#AEF977] via-white/90 to-white/30 rounded-b-full shadow-[0_0_10px_rgba(174,249,119,0.35)]"
                        style={{
                          clipPath:
                            'polygon(35% 0%, 65% 0%, 100% 75%, 50% 100%, 0% 75%)',
                        }}
                      />
                    </div>
                  ))}

                  {/* Central Nacelle / Hub Dot */}
                  <div className="relative w-5 h-5 rounded-full bg-[#AEF977] border-[3px] border-[#060A0D] shadow-[0_0_16px_#AEF977] z-20" />
                </motion.div>
              </div>

            </div>

            {/* Minimalist, Clean Phase Title (No cluttered paragraphs) */}
            <div className="h-14 flex items-center justify-center mt-2">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activePhase.title}
                  initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold tracking-tight text-white/90 text-center"
                >
                  {activePhase.title}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* 3 Minimal Stage Indicator Dots */}
            <div className="flex items-center gap-2 mt-3">
              {PHASES.map((p, idx) => {
                const isActive =
                  progress >= p.range[0] && progress <= p.range[1];
                const isPassed = progress >= p.range[1];

                return (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      isActive
                        ? 'w-8 bg-[#AEF977] shadow-[0_0_8px_#AEF977]'
                        : isPassed
                        ? 'w-2 bg-white/40'
                        : 'w-2 bg-white/15'
                    }`}
                  />
                );
              })}
            </div>

          </main>

          {/* Bottom Bar: Clean Percentage Counter & Sleek Hairline Progress Bar */}
          <footer className="relative z-10 w-full px-8 sm:px-14 pb-8 sm:pb-10 flex flex-col gap-3">
            <div className="flex items-end justify-between">
              <span className="text-[11px] sm:text-[12px] font-medium tracking-wider uppercase text-white/40">
                Renewable Energy Flow
              </span>

              <div className="font-mono text-[28px] sm:text-[34px] font-bold text-[#AEF977] tracking-tight leading-none">
                {progress}
                <span className="text-[16px] sm:text-[18px] ml-0.5 text-white/40 font-normal">
                  %
                </span>
              </div>
            </div>

            {/* Hairline Progress Track */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00E5FF] via-[#AEF977] to-white rounded-full transition-all duration-150 ease-out shadow-[0_0_8px_#AEF977]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
