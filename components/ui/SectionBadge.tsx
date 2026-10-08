import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  size?: 'default' | 'sm' | 'xs';
}

export function SectionBadge({
  children,
  className = '',
  theme = 'auto',
  size = 'default',
}: SectionBadgeProps) {
  const themeClasses =
    theme === 'dark'
      ? 'border-neutral-900/15 text-neutral-900 bg-black/[0.02]'
      : theme === 'light'
      ? 'border-white/25 text-white bg-white/[0.05]'
      : 'border-current/15 bg-current/[0.03]';

  const sizeClasses =
    size === 'xs'
      ? 'gap-1.5 px-2 py-[2px] sm:px-2.5 sm:py-[3px] text-[7.5px] xs:text-[8px] sm:text-[9px] font-medium tracking-[0.12em]'
      : size === 'sm'
      ? 'gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.14em]'
      : 'gap-2 px-3.5 py-1.5 text-[11px] sm:text-[11.5px] font-bold tracking-[0.16em]';

  const dotSize =
    size === 'xs'
      ? 'w-1 h-1'
      : size === 'sm'
      ? 'w-1.2 h-1.2 sm:w-1.5 sm:h-1.5'
      : 'w-1.5 h-1.5';

  return (
    <div
      className={`inline-flex items-center rounded-full border uppercase select-text cursor-text ${sizeClasses} ${themeClasses} ${className}`}
      style={{ userSelect: "text", WebkitUserSelect: "text" }}
    >
      <span className={`${dotSize} rounded-full bg-current shrink-0`} />
      <span className="select-text">{children}</span>
    </div>
  );
}
