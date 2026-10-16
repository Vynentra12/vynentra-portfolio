import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'glass' | 'auto';
  size?: 'default' | 'sm' | 'xs';
}

export function SectionBadge({
  children,
  className = '',
  theme = 'auto',
  size = 'default',
}: SectionBadgeProps) {
  // All section badges: Simple text, regular font, slightly increased size, NO dot, NO rounded corner border
  const colorClasses =
    theme === 'dark'
      ? 'text-[#0A6B88]'
      : theme === 'light' || theme === 'glass'
      ? 'text-white/85'
      : 'text-current opacity-85';

  const sizeClasses =
    size === 'xs'
      ? 'text-[10px] sm:text-[10.5px] tracking-[0.12em]'
      : size === 'sm'
      ? 'text-[11px] sm:text-[11.5px] tracking-[0.13em]'
      : 'text-[11.5px] sm:text-[12.5px] md:text-[13px] tracking-[0.14em]';

  return (
    <span
      className={`inline-block font-normal uppercase select-text cursor-text ${sizeClasses} ${colorClasses} ${className}`}
      style={{ userSelect: "text", WebkitUserSelect: "text" }}
    >
      {children}
    </span>
  );
}
