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
  // Light blue / brand teal on light/gray backgrounds, matching white on dark backgrounds
  const colorClasses =
    theme === 'dark'
      ? 'text-[#0A6B88]'
      : theme === 'light' || theme === 'glass'
      ? 'text-white/90'
      : 'text-[#0A6B88]';

  // Semi-bold font weight, legible size, uppercase letter-spaced without circle dot
  const sizeClasses =
    size === 'xs'
      ? 'text-[10.5px] sm:text-[11px]'
      : size === 'sm'
      ? 'text-[11px] sm:text-[11.5px]'
      : 'text-[12px] sm:text-[12.5px]';

  return (
    <div
      className={`inline-flex items-center font-semibold tracking-[0.08em] uppercase select-text cursor-text ${sizeClasses} ${colorClasses} ${className}`}
      style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
    >
      <span>{children}</span>
    </div>
  );
}
