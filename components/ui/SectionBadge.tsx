import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'glass' | 'auto';
  size?: 'default' | 'sm' | 'xs';
}

function formatCamelCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => {
      const clean = word.replace(/[^a-zA-Z0-9']/g, '');
      if (clean === "faq's" || clean === "faqs") return "Faqs";
      if (clean === "epc") return "EPC";
      if (clean === "llp") return "LLP";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function SectionBadge({
  children,
  className = '',
  theme = 'auto',
  size = 'default',
}: SectionBadgeProps) {
  const colorClasses =
    theme === 'dark'
      ? 'text-[#0A6B88]'
      : theme === 'light' || theme === 'glass'
      ? 'text-white/85'
      : 'text-current opacity-85';

  const sizeClasses =
    size === 'xs'
      ? 'text-[11px] sm:text-[11.5px] tracking-wide'
      : size === 'sm'
      ? 'text-[12px] sm:text-[12.5px] tracking-wide'
      : 'text-[13px] sm:text-[13.5px] md:text-[14px] tracking-wide';

  // Extract text if children is a string or array of strings/numbers
  let textContent = '';
  if (typeof children === 'string') {
    textContent = children;
  } else if (Array.isArray(children)) {
    textContent = children.filter((c) => typeof c === 'string' || typeof c === 'number').join('');
  }

  const formattedChildren = textContent ? formatCamelCase(textContent) : children;

  // Clean any explicit uppercase classes from parent call sites
  const cleanClassName = className.replace(/\buppercase\b/g, '').trim();

  return (
    <div
      className={`inline-flex items-center gap-2 font-medium select-text cursor-text ${sizeClasses} ${colorClasses} ${cleanClassName}`}
      style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
    >
      {/* Squircle / Rounded Square bullet point matching reference */}
      <span className="w-[7px] h-[7px] rounded-[2.5px] bg-current shrink-0 opacity-90 select-none" />
      <span>{formattedChildren}</span>
    </div>
  );
}
