'use client';
import Link from "next/link";

interface LogoProps {
  color?: string;
  className?: string;
}

export function Logo({ color = "#071426", className = "" }: LogoProps) {
  return (
    <Link 
      href="/" 
      onClick={(e) => {
        if (typeof window !== "undefined" && window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={`relative text-[20px] md:text-[22px] font-extrabold uppercase tracking-[-0.02em] transition-colors hover:opacity-80 flex items-center justify-center font-sans leading-none cursor-pointer ${className}`}
      style={{ color }}
    >
      Vynentra
    </Link>
  );
}
