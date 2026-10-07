import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
}

export function SectionBadge({
  children,
  className = '',
  theme = 'auto',
}: SectionBadgeProps) {
  const themeClasses =
    theme === 'dark'
      ? 'border-neutral-900/15 text-neutral-900 bg-black/[0.02]'
      : theme === 'light'
      ? 'border-white/25 text-white bg-white/[0.05]'
      : 'border-current/15 bg-current/[0.03]';

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] select-none ${themeClasses} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
      <span>{children}</span>
    </div>
  );
}
