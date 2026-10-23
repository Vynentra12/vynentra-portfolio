"use client";

import React, { useState, useEffect } from "react";
import { Check, Link as LinkIcon } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zm1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

interface SocialShareBarProps {
  title: string;
  slug: string;
  tags?: string[];
}

export function SocialShareBar({ title, slug, tags = ["energy", "renewable", "solar"] }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [slug]);

  const shareUrl = currentUrl || `https://vynentra.com/insights/${slug}`;

  const openShare = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer,width=600,height=550");
    }
  };

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="border-t border-b border-neutral-200 py-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      
      {/* Squareish Tags */}
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

      {/* Social Share One-Click Links */}
      <div className="flex items-center gap-2.5">
        <span className="text-[12px] font-medium uppercase text-neutral-500 tracking-wider mr-1">
          Share:
        </span>

        {/* LinkedIn Button */}
        <button
          onClick={() => openShare(linkedinShareUrl)}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200 cursor-pointer bg-white active:scale-95"
        >
          <LinkedinIcon />
        </button>

        {/* X (Twitter) Button */}
        <button
          onClick={() => openShare(twitterShareUrl)}
          aria-label="Share on X"
          title="Share on X"
          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200 cursor-pointer bg-white active:scale-95"
        >
          <TwitterIcon />
        </button>

        {/* Facebook Button */}
        <button
          onClick={() => openShare(facebookShareUrl)}
          aria-label="Share on Facebook"
          title="Share on Facebook"
          className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200 cursor-pointer bg-white active:scale-95"
        >
          <FacebookIcon />
        </button>

        {/* Copy Direct Link Button */}
        <button
          onClick={handleCopy}
          aria-label="Copy article link"
          title={copied ? "Link copied!" : "Copy link"}
          className={`h-8 px-3 rounded-full border text-[11.5px] font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 ${
            copied
              ? "bg-[#0A6B88] text-white border-[#0A6B88]"
              : "border-neutral-300 text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] bg-white"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-3.5 h-3.5 text-neutral-600" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
