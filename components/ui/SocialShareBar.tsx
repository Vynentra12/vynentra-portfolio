"use client";

import React, { useState, useEffect } from "react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zm1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SocialShareBarProps {
  title: string;
  slug: string;
  tags?: string[];
}

export function SocialShareBar({ title, slug, tags = ["energy", "renewable", "solar"] }: SocialShareBarProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [slug]);

  const shareUrl = currentUrl || `https://vynentra.com/insights/${slug}`;

  const openShare = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer,width=620,height=580");
    }
  };

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;

  return (
    <div className="border-t border-b border-neutral-200 py-6 mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        
        {/* Category Tags on Left */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[12px] font-medium uppercase text-neutral-500 tracking-wider mr-1">
            Tags:
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-[6px] bg-[#F4F6F8] border border-neutral-200/70 text-[11px] font-medium text-neutral-700 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Share Controls on Right */}
        <div className="flex items-center gap-2.5">
          <span className="text-[12px] font-medium uppercase text-neutral-500 tracking-wider mr-1">
            Share:
          </span>

          {/* LinkedIn Button - Stroke/Color changes to light blue on hover */}
          <button
            onClick={() => openShare(linkedinShareUrl)}
            aria-label="Share on LinkedIn"
            title="Share on LinkedIn"
            className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200 cursor-pointer bg-white active:scale-95 shadow-xs"
          >
            <LinkedinIcon />
          </button>

          {/* X (Twitter) Button - Stroke/Color changes to light blue on hover */}
          <button
            onClick={() => openShare(twitterShareUrl)}
            aria-label="Share on X"
            title="Share on X"
            className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200 cursor-pointer bg-white active:scale-95 shadow-xs"
          >
            <TwitterIcon />
          </button>
        </div>

      </div>
    </div>
  );
}
