'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Disable default cursor on body in global css if you want, but this adds the follower */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white/90 mix-blend-difference rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        animate={{
          x: mousePosition.x - 6, // center the 12px cursor
          y: mousePosition.y - 6,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
}
