"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wind, Zap, Activity, TrendingUp, Sparkles } from "lucide-react";
import { GLOBE_3D_DOTS } from "./globe-3d-data";

interface StatItem {
  id: number;
  value: string;
  unit?: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  highlightHubs?: string[];
}

const STATS: StatItem[] = [
  {
    id: 1,
    value: "695",
    unit: "GW",
    label: "Estimated Onshore Wind Potential",
    sublabel: "At 120m hub height across India's windy states",
    icon: Wind,
    highlightHubs: ["gujarat", "rajasthan"],
  },
  {
    id: 2,
    value: "1,163",
    unit: "GW",
    label: "Advanced Hub Height Potential",
    sublabel: "Estimated onshore wind potential at 150m hub height",
    icon: Zap,
    highlightHubs: ["gujarat", "karnataka", "maharashtra"],
  },
  {
    id: 3,
    value: "58+",
    unit: "GW",
    label: "Installed Capacity",
    sublabel: "Wind capacity currently operational across India",
    icon: Activity,
    highlightHubs: ["tamilnadu", "gujarat"],
  },
  {
    id: 4,
    value: "8%",
    label: "Current Realized Share",
    sublabel: "Approx. share of 120m potential represented by installed capacity",
    icon: TrendingUp,
    highlightHubs: ["karnataka", "andhra"],
  },
  {
    id: 5,
    value: "80+",
    unit: "GW",
    label: "Repowering & Tech Upgrades",
    sublabel: "Potential opportunity from repowering and technology upgrades by 2030",
    icon: Sparkles,
    highlightHubs: ["tamilnadu", "gujarat", "rajasthan"],
  },
];

// Major Indian Wind Hubs anchored on the 3D rotating globe
const WIND_HUBS_3D = [
  { id: "gujarat", name: "Kutch & Saurashtra", x: -0.4029, y: -0.1420, z: 0.9042, capacity: "14.2 GW" },
  { id: "rajasthan", name: "Jaisalmer Wind Park", x: -0.2464, y: -0.3942, z: 0.8854, capacity: "8.5 GW" },
  { id: "maharashtra", name: "Western Ghats", x: -0.2290, y: 0.0841, z: 0.9698, capacity: "7.1 GW" },
  { id: "karnataka", name: "Chitradurga & Gadag", x: -0.1594, y: 0.3275, z: 0.9313, capacity: "6.8 GW" },
  { id: "andhra", name: "Rayalaseema Belt", x: -0.0464, y: 0.3101, z: 0.9496, capacity: "5.4 GW" },
  { id: "tamilnadu", name: "Muppandal & Kayathar", x: -0.1159, y: 0.5971, z: 0.7937, capacity: "12.8 GW" },
];

export function ImpactSectionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeHubs, setActiveHubs] = useState<string[]>([]);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const handleCardHover = (item: StatItem | null) => {
    if (item) {
      setHoveredCardId(item.id);
      setActiveHubs(item.highlightHubs || []);
    } else {
      setHoveredCardId(null);
      setActiveHubs([]);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#EBE7E0] text-neutral-900 min-h-[480px] sm:min-h-[540px] md:min-h-[600px] lg:min-h-[640px] py-16 md:py-24 flex items-center font-sans relative overflow-hidden select-text"
      style={{ userSelect: "text", WebkitUserSelect: "text" }}
    >
      {/* Soft teal atmospheric ambient glow for light mode */}
      <div 
        className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, rgba(10, 107, 136, 0.4) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Subtle neon-lime energy aura behind the globe */}
      <div 
        className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-[0.22]"
        style={{
          background: "radial-gradient(circle, rgba(174, 249, 119, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Outer Container matching ProcessSection / FAQSection rhythm ── */}
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-14 relative z-10">
        
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Text Content & CTA ── */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center">
            {/* Clean Badge Name matching Light Mode UI */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[11px] sm:text-[11.5px] font-semibold text-neutral-800 uppercase tracking-[0.06em] mb-2.5 select-text cursor-text block"
            >
              IMPACT METRICS
            </motion.span>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold text-neutral-900 tracking-tight leading-[1.18] mb-4 max-w-[500px] select-text cursor-text"
            >
              Powering India with clean, reliable wind energy
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-[13px] sm:text-[14.5px] text-neutral-600 leading-[1.62] max-w-[460px] font-normal mb-8 select-text cursor-text"
            >
              Strategic onshore wind corridors, technology upgrades, and multi-gigawatt repowering opportunities accelerating India&apos;s clean energy future.
            </motion.p>

            {/* CTA Button matching Light Mode Stroke-only style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-full border border-[#0B2735] text-[#0B2735] text-[11.5px] sm:text-[12px] font-bold tracking-[0.08em] uppercase select-none cursor-pointer w-fit whitespace-nowrap transition-all duration-300 hover:bg-[#0B2735] hover:text-white active:scale-[0.98]"
              >
                EXPLORE SOLUTIONS
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Symmetrical Stage (Globe + Symmetrically Aligned Light Cards) ── */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center pt-8 lg:pt-0">
            <div className="relative w-fit mx-auto flex flex-col items-center">
              
              {/* Primary Symmetrical Tri-Column Stage: Left Stack | Center Globe | Right Stack */}
              <div className="w-full flex items-center justify-between gap-3 sm:gap-4 xl:gap-5">
                
                {/* ── Left Column Stack (2 cards) ── */}
                <div className="hidden lg:flex flex-col gap-4 w-[165px] xl:w-[175px] shrink-0 z-20">
                  {/* Card 1: 695 GW */}
                  <motion.div
                    initial={{ opacity: 0, x: -25, scale: 0.94 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => handleCardHover(STATS[0])}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <AppleStatCard item={STATS[0]} isHovered={hoveredCardId === 1} />
                  </motion.div>

                  {/* Card 3: 58+ GW */}
                  <motion.div
                    initial={{ opacity: 0, x: -25, scale: 0.94 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: 0.70, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => handleCardHover(STATS[2])}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <AppleStatCard item={STATS[2]} isHovered={hoveredCardId === 3} />
                  </motion.div>
                </div>

                {/* ── Center: Authentic 3D Rotating India Globe with Light UI Styling ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="relative shrink-0 z-10 select-none mx-auto"
                >
                  {/* STATIC OUTER GLOBE CONTAINER: Light cream/white gradient matching UI */}
                  <div
                    className="relative w-[280px] h-[280px] sm:w-[310px] sm:h-[310px] lg:w-[335px] lg:h-[335px] xl:w-[355px] xl:h-[355px] rounded-full overflow-hidden shrink-0 select-none"
                    style={{
                      background: "radial-gradient(circle at 45% 40%, #FFFFFF 0%, #F5F3ED 55%, #EBE7E0 100%)",
                      boxShadow: `
                        0 24px 50px -12px rgba(11, 39, 53, 0.15),
                        0 0 38px rgba(174, 249, 119, 0.15),
                        inset 0 0 30px rgba(11, 39, 53, 0.05)
                      `,
                      border: "1px solid rgba(11, 39, 53, 0.08)",
                      WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                      transform: "translateZ(0)",
                    }}
                  >
                    {/* DYNAMIC INNER SURFACE: 360° Continuously Rotating 3D Dot Matrix & Beacons */}
                    <RotatingGlobeCanvas activeHubs={activeHubs} />

                    {/* STATIC LAYER 1: Deep Curvature Limb Vignette (Light mode shading) */}
                    <div 
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background: "radial-gradient(circle, transparent 62%, rgba(11, 39, 53, 0.05) 82%, rgba(11, 39, 53, 0.15) 100%)",
                      }}
                    />

                    {/* STATIC LAYER 2: Rim Lighting on bottom-right */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none opacity-40"
                      style={{
                        background: "radial-gradient(circle at 82% 78%, rgba(174, 249, 119, 0.25) 0%, transparent 45%)",
                      }}
                    />

                    {/* STATIC LAYER 3: Soft ambient glow on left rim */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none opacity-25"
                      style={{
                        background: "radial-gradient(circle at 18% 45%, rgba(10, 107, 136, 0.15) 0%, transparent 40%)",
                      }}
                    />

                    {/* STATIC LAYER 4: Static Specular Glass Dome Reflection */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none opacity-[0.65]"
                      style={{
                        background: "radial-gradient(ellipse 65% 42% at 30% 22%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* ── Right Column Stack (2 cards) ── */}
                <div className="hidden lg:flex flex-col gap-4 w-[165px] xl:w-[175px] shrink-0 z-20">
                  {/* Card 2: 1,163 GW */}
                  <motion.div
                    initial={{ opacity: 0, x: 25, scale: 0.94 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => handleCardHover(STATS[1])}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <AppleStatCard item={STATS[1]} isHovered={hoveredCardId === 2} />
                  </motion.div>

                  {/* Card 4: 8% */}
                  <motion.div
                    initial={{ opacity: 0, x: 25, scale: 0.94 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: 1.00, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => handleCardHover(STATS[3])}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <AppleStatCard item={STATS[3]} isHovered={hoveredCardId === 4} />
                  </motion.div>
                </div>

              </div>

              {/* ── Center Bottom Card 5: 80+ GW ── */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleCardHover(STATS[4])}
                onMouseLeave={() => handleCardHover(null)}
                className="hidden lg:block w-[185px] xl:w-[195px] mt-3 z-20 mx-auto"
              >
                <AppleStatCard item={STATS[4]} isHovered={hoveredCardId === 5} />
              </motion.div>

              {/* Responsive Mobile / Tablet Grid (< 1024px) */}
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 w-full max-w-lg mx-auto">
                {STATS.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={idx === 4 ? "sm:col-span-2 w-full max-w-[280px] mx-auto" : "w-full"}
                  >
                    <AppleStatCard item={item} isHovered={hoveredCardId === item.id} />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// ── Continuous 360° Rotating 3D Globe Canvas (Inner Surface for Light Mode) ──
function RotatingGlobeCanvas({ activeHubs }: { activeHubs: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const thetaRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const dragStartThetaRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    let width = 0;
    let height = 0;
    let dpr = 2;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      dpr = Math.max(window.devicePixelRatio || 1, 2);
      width = rect.width || parent.clientWidth || 320;
      height = rect.height || parent.clientHeight || 320;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    // Subtle 11.5° axial tilt matching authentic planetary projection
    const tilt = 0.20;
    const cosB = Math.cos(tilt);
    const sinB = Math.sin(tilt);

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isDraggingRef.current) {
        const speed = isHoveredRef.current ? 0.08 : 0.2;
        thetaRef.current = (thetaRef.current + speed * delta) % (Math.PI * 2);
      }

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const theta = thetaRef.current;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);
      const cx = width / 2;
      const cy = height / 2;
      const R = Math.min(width, height) * 0.49;
      const scale = width / 340;

      // Render frontside dots only (z2 > 0.02)
      for (let i = 0; i < GLOBE_3D_DOTS.length; i++) {
        const dot = GLOBE_3D_DOTS[i];
        const x0 = dot[0];
        const y0 = dot[1];
        const z0 = dot[2];
        const isIndia = dot[3];

        // 1. Rotation around Y axis
        const x1 = x0 * cosT - z0 * sinT;
        const z1 = x0 * sinT + z0 * cosT;
        const y1 = y0;

        // 2. Axial tilt
        const y2 = y1 * cosB - z1 * sinB;
        const z2 = y1 * sinB + z1 * cosB;

        if (z2 > 0.02) {
          const sx = cx + x1 * R;
          const sy = cy + y2 * R;

          if (isIndia === 1) {
            // Crisp, dark India dots for light mode
            const dotR = (1.1 + z2 * 0.4) * scale;
            const alpha = Math.min(1, 0.8 + z2 * 0.2);
            ctx.fillStyle = `rgba(11, 39, 53, ${alpha.toFixed(2)})`; // Navy Blue
            ctx.beginPath();
            ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Subtle world dots for light mode
            const dotR = (0.75 + z2 * 0.25) * scale;
            const alpha = Math.min(0.5, 0.12 + z2 * 0.18);
            ctx.fillStyle = `rgba(11, 39, 53, ${alpha.toFixed(2)})`; // Faint Navy Blue
            ctx.beginPath();
            ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Render 3D Wind Hub Beacons
      for (let idx = 0; idx < WIND_HUBS_3D.length; idx++) {
        const hub = WIND_HUBS_3D[idx];
        const x1 = hub.x * cosT - hub.z * sinT;
        const z1 = hub.x * sinT + hub.z * cosT;
        const y1 = hub.y;

        const y2 = y1 * cosB - z1 * sinB;
        const z2 = y1 * sinB + z1 * cosB;

        if (z2 > 0.14) {
          const hx = cx + x1 * R;
          const hy = cy + y2 * R;
          const visibility = Math.min(1, (z2 - 0.14) / 0.22);
          const isHighlighted = activeHubs.includes(hub.id);

          // Subtle pulsing radar ripple
          const pulseDuration = isHighlighted ? 1.4 : 2.4;
          const phase = ((time / 1000) / pulseDuration + idx * 0.25) % 1;
          const ringR = (4 + phase * 12) * scale;
          const ringAlpha = (1 - phase) * 0.65 * visibility;

          ctx.save();
          ctx.strokeStyle = isHighlighted 
            ? `rgba(174, 249, 119, ${ringAlpha.toFixed(2)})` 
            : `rgba(10, 107, 136, ${ringAlpha.toFixed(2)})`; // Teal
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(hx, hy, ringR, 0, Math.PI * 2);
          ctx.stroke();

          // Static thin circular frame
          ctx.strokeStyle = isHighlighted 
            ? `rgba(174, 249, 119, ${(0.6 * visibility).toFixed(2)})` 
            : `rgba(10, 107, 136, ${(0.45 * visibility).toFixed(2)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(hx, hy, 8.5 * scale, 0, Math.PI * 2);
          ctx.stroke();

          // Glowing center beacon dot
          ctx.shadowColor = isHighlighted ? "#AEF977" : "#0A6B88";
          ctx.shadowBlur = (isHighlighted ? 8 : 4) * scale;
          ctx.fillStyle = isHighlighted 
            ? `rgba(174, 249, 119, ${visibility.toFixed(2)})` 
            : `rgba(10, 107, 136, ${visibility.toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(hx, hy, (isHighlighted ? 3.8 : 3.2) * scale, 0, Math.PI * 2);
          ctx.fill();

          // Crisp white/navy center dot for contrast
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${visibility.toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(hx, hy, 1.2 * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
    };
  }, [activeHubs]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragStartThetaRef.current = thetaRef.current;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - startXRef.current;
      thetaRef.current = dragStartThetaRef.current - deltaX * 0.008;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      className="w-full h-full block cursor-grab active:cursor-grabbing touch-none select-none"
    />
  );
}

// ── Light UI Theme Stat Card Component ──
function AppleStatCard({ 
  item, 
  isHovered 
}: { 
  item: StatItem; 
  isHovered: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`relative w-full rounded-[16px] transition-all duration-300 cursor-default select-text border p-3.5 flex flex-col justify-between min-h-[96px] shadow-sm ${
        isHovered
          ? "bg-white border-[#AEF977] shadow-[0_8px_30px_rgba(11,39,53,0.06),0_0_20px_rgba(174,249,119,0.3)] -translate-y-0.5"
          : "bg-[#F9F7F3] border-neutral-200 hover:border-neutral-300"
      }`}
    >
      {/* Top Row: Big Value + Unit & Icon */}
      <div className="flex items-start justify-between gap-1.5 mb-1">
        <div className="flex items-baseline">
          <span className="text-[22px] sm:text-[24px] font-semibold text-neutral-900 tracking-tight leading-none">
            {item.value}
          </span>
          {item.unit && (
            <span className="text-[11px] font-bold text-[#0A6B88] ml-1.5">
              {item.unit}
            </span>
          )}
        </div>

        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          isHovered
            ? "bg-[#AEF977] text-[#0B2735]"
            : "bg-[#EBE7E0] text-neutral-600"
        }`}>
          <Icon className="w-2.5 h-2.5" />
        </div>
      </div>

      {/* Card Label */}
      <h3 className="text-[10.5px] sm:text-[11px] font-semibold text-neutral-800 tracking-normal leading-snug mb-0.5">
        {item.label}
      </h3>

      {/* Card Sublabel */}
      <p className="text-[9px] sm:text-[9.5px] text-neutral-500 leading-tight font-normal line-clamp-2">
        {item.sublabel}
      </p>
    </div>
  );
}
