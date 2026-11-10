"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface RoadmapScrollControlsProps {
  /** id of the horizontally scrolling track element */
  trackId: string;
}

/** Prev/next buttons that scroll the execution roadmap track by one card. */
export function RoadmapScrollControls({ trackId }: RoadmapScrollControlsProps) {
  const scroll = (direction: 1 | -1) => {
    const el = document.getElementById(trackId);
    if (!el) return;
    const scrollDist = el.clientWidth / (window.innerWidth >= 1024 ? 3 : 2);
    el.scrollBy({ left: direction * scrollDist, behavior: "smooth" });
  };

  const buttonClass =
    "w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-[#0B2735] hover:border-[#0B2735] hover:text-white transition-all active:scale-95";

  return (
    <div className="hidden sm:flex items-center gap-2 shrink-0 pb-1">
      <button type="button" onClick={() => scroll(-1)} aria-label="Previous step" className={buttonClass}>
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button type="button" onClick={() => scroll(1)} aria-label="Next step" className={buttonClass}>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
