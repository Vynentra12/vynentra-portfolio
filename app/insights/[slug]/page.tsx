import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowLeft } from 'lucide-react';
import { ALL_BLOG_POSTS, getBlogPostBySlug, type ArticleBlock } from '@/lib/blog-data';
import { FooterV2 } from '@/components/sections/FooterV2';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { SocialShareBar } from '@/components/ui/SocialShareBar';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Insight Not Found | Vynentra',
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: 'article',
      images: [
        {
          url: post.image,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

function renderBoldSegments(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={`${keyPrefix}-b-${idx}`} className="font-semibold text-neutral-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t-${idx}`}>{part}</React.Fragment>;
  });
}

function RichText({ text }: { text: string }) {
  const tokens: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let tokenIdx = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(
        ...renderBoldSegments(text.slice(lastIndex, match.index), `seg-${tokenIdx++}`)
      );
    }

    const label = match[1];
    const url = match[2];
    const linkClass =
      'text-[#0A6B88] font-medium underline underline-offset-4 decoration-[#0A6B88]/35 hover:text-[#08556d] hover:decoration-[#0A6B88] transition-colors';

    if (url.startsWith('/')) {
      tokens.push(
        <Link key={`link-${tokenIdx++}`} href={url} className={linkClass}>
          {renderBoldSegments(label, `lbl-${tokenIdx}`)}
        </Link>
      );
    } else {
      tokens.push(
        <a
          key={`ext-${tokenIdx++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {renderBoldSegments(label, `extlbl-${tokenIdx}`)}
        </a>
      );
    }

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(...renderBoldSegments(text.slice(lastIndex), `tail-${tokenIdx++}`));
  }

  return <>{tokens}</>;
}

function TurbinePowerCurveFigure() {
  // Smooth SVG coordinate mapping over plot area x: [68..604] (0..30 m/s), y: [180..28] (0..100 kW)
  // 0..3 m/s -> 0 kW | 9 m/s -> 41 kW | 12..25 m/s -> 100 kW | 25 m/s -> cut-out drop
  const x = (ws: number) => 68 + (ws / 30) * 536;
  const y = (kw: number) => 180 - (kw / 100) * 152;

  const curvePath = [
    `M ${x(0).toFixed(1)} ${y(0).toFixed(1)}`,
    `L ${x(3).toFixed(1)} ${y(0).toFixed(1)}`,
    `C ${x(5.2).toFixed(1)} ${y(1).toFixed(1)}, ${x(7).toFixed(1)} ${y(16).toFixed(1)}, ${x(9).toFixed(1)} ${y(41).toFixed(1)}`,
    `C ${x(10.3).toFixed(1)} ${y(64).toFixed(1)}, ${x(11).toFixed(1)} ${y(96).toFixed(1)}, ${x(12).toFixed(1)} ${y(100).toFixed(1)}`,
    `L ${x(25).toFixed(1)} ${y(100).toFixed(1)}`,
    `L ${x(25).toFixed(1)} ${y(0).toFixed(1)}`,
    `L ${x(30).toFixed(1)} ${y(0).toFixed(1)}`,
  ].join(' ');

  const areaPath = `${curvePath} L ${x(30).toFixed(1)} ${y(0).toFixed(1)} L ${x(0).toFixed(1)} ${y(0).toFixed(1)} Z`;

  return (
    <figure className="my-6 rounded-[16px] border border-neutral-200/90 bg-[#F4F6F8] p-5 sm:p-6">
      <div className="mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0A6B88] block mb-1">
          TECHNICAL VISUAL
        </span>
        <figcaption className="text-[16.5px] sm:text-[18.5px] font-medium text-[#0B2735] tracking-tight">
          How a wind turbine&apos;s output changes with wind speed (100 kW reference)
        </figcaption>
      </div>

      <div className="rounded-[12px] border border-neutral-200/80 bg-white p-3 sm:p-4 overflow-x-auto">
        <svg
          viewBox="0 0 640 230"
          className="w-full min-w-[480px] h-auto select-none"
          role="img"
          aria-label="Illustrative 100 kW wind turbine power curve showing 3 m/s cut-in speed, 41 kW output at 9 m/s, 100 kW rated plateau between 12 and 25 m/s, and cut-out shutdown above 25 m/s."
        >
          {/* Horizontal grid lines */}
          {[0, 25, 50, 75, 100].map((kw) => {
            const yy = y(kw);
            return (
              <g key={kw}>
                <line
                  x1={68}
                  y1={yy}
                  x2={604}
                  y2={yy}
                  stroke={kw === 0 ? '#94A3B8' : '#E5E7EB'}
                  strokeWidth={1}
                />
                <text
                  x={58}
                  y={yy + 4}
                  textAnchor="end"
                  className="fill-neutral-500 text-[11px] font-medium"
                >
                  {kw}
                </text>
              </g>
            );
          })}

          {/* Y-axis title */}
          <text
            x={18}
            y={104}
            transform="rotate(-90 18 104)"
            textAnchor="middle"
            className="fill-neutral-500 text-[11px] font-medium"
          >
            Power output (kW)
          </text>

          {/* Subtle shaded active band between cut-in and cut-out */}
          <path d={areaPath} fill="#0A6B88" fillOpacity={0.08} />

          {/* Vertical key threshold lines */}
          {[
            { ws: 3, label: 'Cut-in (3 m/s)' },
            { ws: 12, label: 'Rated (12 m/s)' },
            { ws: 25, label: 'Cut-out (25 m/s)' },
          ].map((m) => (
            <g key={m.ws}>
              <line
                x1={x(m.ws)}
                y1={22}
                x2={x(m.ws)}
                y2={180}
                stroke="#0B2735"
                strokeOpacity={0.28}
                strokeDasharray="4 4"
                strokeWidth={1}
              />
              <text
                x={x(m.ws)}
                y={16}
                textAnchor={m.ws === 25 ? 'end' : 'middle'}
                className="fill-[#0B2735] text-[10.5px] font-semibold"
              >
                {m.label}
              </text>
            </g>
          ))}

          {/* X-axis tick labels */}
          {[0, 3, 6, 9, 12, 15, 20, 25, 30].map((ws) => (
            <text
              key={ws}
              x={x(ws)}
              y={198}
              textAnchor="middle"
              className="fill-neutral-500 text-[11px] font-medium"
            >
              {ws}
            </text>
          ))}
          <text x={336} y={219} textAnchor="middle" className="fill-neutral-500 text-[11px] font-medium">
            Wind speed (m/s)
          </text>

          {/* Main Power Curve */}
          <path
            d={curvePath}
            fill="none"
            stroke="#0A6B88"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Reference points */}
          <circle cx={x(3)} cy={y(0)} r={4.5} fill="#0B2735" />
          <circle cx={x(9)} cy={y(41)} r={4.5} fill="#0A6B88" />
          <circle cx={x(12)} cy={y(100)} r={4.5} fill="#0B2735" />
          <circle cx={x(25)} cy={y(100)} r={4.5} fill="#0B2735" />

          {/* Callout label at 9 m/s */}
          <text x={x(9) - 10} y={y(41) - 10} textAnchor="end" className="fill-[#0A6B88] text-[11px] font-semibold">
            9 m/s: 41 kW (rising rapidly)
          </text>
          <text x={x(18.5)} y={y(100) + 18} textAnchor="middle" className="fill-[#0B2735] text-[11px] font-semibold">
            Rated plateau: 100 kW
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div className="rounded-[10px] border border-neutral-200/80 bg-white px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0A6B88]">
            Cut-in: 3 m/s
          </div>
          <p className="text-[12.5px] text-neutral-600 mt-0.5 leading-snug">
            Below 3 m/s, wind lacks energy to overcome rotor drag and begin generating.
          </p>
        </div>
        <div className="rounded-[10px] border border-neutral-200/80 bg-white px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0A6B88]">
            Rated: 12 m/s (100 kW)
          </div>
          <p className="text-[12.5px] text-neutral-600 mt-0.5 leading-snug">
            Output rises sharply through mid-speeds (41 kW at 9 m/s) to rated plateau.
          </p>
        </div>
        <div className="rounded-[10px] border border-neutral-200/80 bg-white px-4 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0A6B88]">
            Cut-out: 25 m/s
          </div>
          <p className="text-[12.5px] text-neutral-600 mt-0.5 leading-snug">
            Control systems shut down operation in high winds to protect equipment.
          </p>
        </div>
      </div>

      <p className="text-[12px] text-neutral-500 mt-3 leading-relaxed">
        Illustrative curve shape for general turbine mechanics. Actual power curves vary by turbine model, rotor swept area and site air density.
      </p>
    </figure>
  );
}

function RooftopSolarCalculatorFigure() {
  return (
    <figure className="my-6 rounded-[16px] border border-neutral-200/90 bg-[#F4F6F8] p-5 sm:p-6">
      <div className="mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0A6B88] block mb-1">
          ROOFTOP SCREENING EXAMPLE
        </span>
        <figcaption className="text-[16.5px] sm:text-[18.5px] font-medium text-[#0B2735] tracking-tight">
          Illustrative rooftop solar area-to-capacity calculation
        </figcaption>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-[12px] border border-neutral-200/80 bg-white p-4 sm:p-5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            Assumed Site Parameters
          </div>
          <dl className="space-y-2.5 text-[14px]">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-2">
              <dt className="text-neutral-600">Total rooftop area</dt>
              <dd className="font-semibold text-neutral-900">1,500 m²</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-2">
              <dt className="text-neutral-600">Usable rooftop share</dt>
              <dd className="font-semibold text-neutral-900">75%</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-neutral-600">Area allowance per kWp</dt>
              <dd className="font-semibold text-neutral-900">10 m²/kWp</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-[12px] border border-[#0A6B88]/30 bg-white p-4 sm:p-5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0A6B88] mb-3">
            Screening Outputs
          </div>
          <dl className="space-y-2.5 text-[14px]">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-2">
              <dt className="text-neutral-600">Usable roof area</dt>
              <dd className="font-semibold text-[#0B2735]">1,125 m²</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-2">
              <dt className="text-neutral-600">Estimated solar capacity</dt>
              <dd className="font-bold text-[#0A6B88]">112.5 kWp</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-neutral-600">Annual generation (1,400-1,600 kWh/kWp)</dt>
              <dd className="font-semibold text-[#0B2735] text-right">1,57,500-1,80,000 kWh</dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="text-[12px] text-neutral-500 mt-3 leading-relaxed">
        Screening estimates only. This example does not verify roof structural capacity, electrical capacity, site-specific solar resource or project feasibility.
      </p>
    </figure>
  );
}

function WindCapacityExamplesFigure() {
  const scenarios = [
    { cf: '10%', kwh: '4,380 kWh', highlight: false },
    { cf: '20%', kwh: '8,760 kWh', highlight: true },
    { cf: '35%', kwh: '15,330 kWh', highlight: false },
  ];

  return (
    <figure className="my-6 rounded-[16px] border border-neutral-200/90 bg-[#F4F6F8] p-5 sm:p-6">
      <div className="mb-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0A6B88] block mb-1">
          ILLUSTRATIVE ANNUAL GENERATION
        </span>
        <figcaption className="text-[16.5px] sm:text-[18.5px] font-medium text-[#0B2735] tracking-tight">
          5 kW wind turbine output across assumed capacity factors
        </figcaption>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {scenarios.map((item) => (
          <div
            key={item.cf}
            className={`rounded-[12px] bg-white px-4 py-4 border ${
              item.highlight ? 'border-[#0A6B88] shadow-xs' : 'border-neutral-200/80'
            }`}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
              {item.cf} Capacity Factor
            </div>
            <div className="text-[22px] sm:text-[24px] font-semibold text-[#0B2735] tracking-tight mt-1">
              {item.kwh}
            </div>
            <div className="text-[12px] text-neutral-500 mt-0.5">Estimated annual yield</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[10px] border border-neutral-200/80 bg-white px-4 py-2.5 text-[13.5px] text-neutral-800 font-medium">
        Reference formula (20% case): 5 kW x 8,760 hours x 20% = 8,760 kWh/year
      </div>

      <p className="text-[12px] text-neutral-500 mt-3 leading-relaxed">
        Hypothetical illustration, not a prediction for any particular site. Actual capacity factor depends on measured wind conditions, turbine performance, losses and availability.
      </p>
    </figure>
  );
}

function ArticleBlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.75] font-normal">
          <RichText text={block.text} />
        </p>
      );

    case 'subheading':
      return (
        <h3 className="text-[17px] sm:text-[19.5px] font-semibold text-[#0B2735] tracking-tight leading-[1.35] pt-2">
          {block.text}
        </h3>
      );

    case 'list':
      if (block.ordered) {
        return (
          <ol className="space-y-2.5 pl-1 my-2">
            {block.items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[15.5px] sm:text-[16px] text-neutral-700 leading-[1.7]"
              >
                <span className="text-[13px] font-semibold text-[#0A6B88] min-w-[20px] mt-[3px] shrink-0">
                  {idx + 1}.
                </span>
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="space-y-2.5 pl-1 my-2">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-[15.5px] sm:text-[16px] text-neutral-700 leading-[1.7]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6B88] mt-[11px] shrink-0" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <div className="my-5 pl-4 sm:pl-5 py-3 pr-4 border-l-2 border-[#0A6B88] bg-[#F4F6F8] rounded-r-[12px]">
          {block.title && (
            <p className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#0B2735] mb-1">
              {block.title}
            </p>
          )}
          <p className="text-[14.5px] sm:text-[15.5px] font-medium text-neutral-800 leading-[1.65]">
            <RichText text={block.text} />
          </p>
        </div>
      );

    case 'table':
      return (
        <div className="my-6 rounded-[14px] border border-neutral-200/90 overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead className="bg-[#F4F6F8] border-b border-neutral-200">
                <tr>
                  {block.headers.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className="px-4 py-3 text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.04em] text-[#0B2735]"
                    >
                      <RichText text={header} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/70">
                {block.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="odd:bg-white even:bg-[#F4F6F8]/40">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`px-4 py-3 text-[13.5px] sm:text-[14.5px] leading-[1.6] align-top ${
                          cIdx === 0 ? 'font-medium text-neutral-900' : 'text-neutral-700'
                        }`}
                      >
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'checklist':
      return (
        <div className="my-6 rounded-[16px] border border-neutral-200/90 bg-[#F4F6F8] p-5 sm:p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0A6B88] block mb-1">
            SITE SUITABILITY CHECK
          </span>
          <h4 className="text-[17px] sm:text-[18px] font-medium text-[#0B2735] mb-4">
            {block.title}
          </h4>
          <ul className="space-y-2.5">
            {block.items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[14.5px] sm:text-[15.5px] text-neutral-800 leading-[1.6]"
              >
                <Check className="w-4 h-4 text-[#0A6B88] shrink-0 stroke-[2.5] mt-1" />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
          {block.note && (
            <p className="text-[12px] text-neutral-500 mt-4 pt-3 border-t border-neutral-200/80">
              {block.note}
            </p>
          )}
        </div>
      );

    case 'figure':
      if (block.variant === 'turbine-power-curve') {
        return <TurbinePowerCurveFigure />;
      }
      if (block.variant === 'rooftop-solar-calculator') {
        return <RooftopSolarCalculatorFigure />;
      }
      return <WindCapacityExamplesFigure />;
  }
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Prefer related posts from same category first, then remaining posts
  const sameCategory = ALL_BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const otherPosts = ALL_BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  const relatedPosts = [...sameCategory, ...otherPosts].slice(0, 2);

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950 flex flex-col">
      {/* Main Editorial Content Container */}
      <div className="max-w-[940px] mx-auto px-5 sm:px-10 pt-24 sm:pt-36 pb-16 sm:pb-24 w-full flex-1">
        {/* Back Link to All Insights */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-3.5 sm:gap-4 select-none cursor-pointer"
          >
            <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-white border border-[#0B2735] flex items-center justify-center text-[#0B2735] transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:border-[#0A6B88] group-hover:text-white group-hover:scale-105 shrink-0 shadow-xs">
              <ArrowLeft strokeWidth={2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </div>

            <div className="flex flex-col text-left justify-center">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#0A6B88] uppercase leading-none mb-1">
                BACK TO
              </span>
              <span className="text-[17px] sm:text-[19px] font-normal text-[#0B2735] tracking-tight leading-none group-hover:text-[#0A6B88] transition-colors">
                All Insights
              </span>
            </div>
          </Link>
        </div>

        <article>
          {/* Category Badge */}
          <div className="mb-3 sm:mb-4">
            <SectionBadge theme="dark" size="default">
              {post.category}
            </SectionBadge>
          </div>

          {/* Title */}
          <h1 className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[46px] font-medium text-neutral-900 tracking-tight leading-[1.16] mb-4 select-text">
            {post.title}
          </h1>

          {/* Meta Bar: Date & Read Time */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] text-neutral-600 font-normal mb-8">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-400" />
            <span>{post.readTime}</span>
          </div>

          {/* Featured Hero Image */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-neutral-100 my-8 shadow-xs border border-neutral-200/70">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 mb-10 sm:mb-12">
            {post.content.intro.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'text-[17px] sm:text-[19px] md:text-[20px] text-neutral-800 leading-[1.7] font-normal'
                    : 'text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.75] font-normal'
                }
              >
                <RichText text={para} />
              </p>
            ))}
          </div>

          {/* Dynamic Sections */}
          <div className="space-y-8 sm:space-y-10">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 border-t border-neutral-200/80 pt-7 sm:pt-9">
                <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-medium text-neutral-900 tracking-tight leading-[1.22]">
                  {section.heading}
                </h2>

                {section.blocks.map((block, bIdx) => (
                  <ArticleBlockRenderer key={bIdx} block={block} />
                ))}

                {section.keyHighlight && (
                  <div className="my-6 pl-4 sm:pl-5 py-2 border-l-2 border-[#0A6B88] flex items-start gap-3">
                    <p className="text-[14.5px] sm:text-[15.5px] font-medium text-neutral-800 leading-[1.6]">
                      {section.keyHighlight}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Quote Block (if provided) */}
          {post.content.quote && (
            <div className="my-12 sm:my-14 pl-6 sm:pl-8 border-l-2 border-[#0A6B88]">
              <blockquote className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-neutral-900 leading-[1.4] mb-3 italic">
                &ldquo;{post.content.quote.text}&rdquo;
              </blockquote>
              <cite className="text-[14px] font-semibold text-neutral-500 not-italic uppercase tracking-wider">
                - {post.content.quote.author}
              </cite>
            </div>
          )}

          {/* Concluding Section */}
          {post.content.conclusion && (
            <section className="space-y-4 border-t border-neutral-200/80 pt-7 sm:pt-9 mt-10 sm:mt-12 mb-12 sm:mb-14">
              <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-medium text-neutral-900 tracking-tight leading-[1.22]">
                {post.content.conclusion.heading}
              </h2>
              {post.content.conclusion.paragraphs.map((p, idx) => (
                <p key={idx} className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.78] font-normal">
                  <RichText text={p} />
                </p>
              ))}
            </section>
          )}
        </article>

        {/* Interactive Tags & Social Share Bar */}
        <SocialShareBar
          title={post.title}
          slug={post.slug}
          tags={post.tags}
        />

        {/* Key Takeaways Section */}
        {post.content.takeaways && post.content.takeaways.length > 0 && (
          <div className="my-10 sm:my-12">
            <div className="mb-4">
              <SectionBadge theme="dark" className="w-fit">
                KEY TAKEAWAYS &amp; STRATEGIC SUMMARY
              </SectionBadge>
            </div>
            <ul className="space-y-3">
              {post.content.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-[14.5px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                  <Check className="w-4 h-4 text-[#0A6B88] shrink-0 stroke-[2.5] mt-1" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Research References */}
        {post.content.references && post.content.references.length > 0 && (
          <div className="my-10 sm:my-12 pt-8 border-t border-neutral-200/80">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0A6B88] block mb-3">
              SOURCES &amp; REFERENCES
            </span>
            <ol className="space-y-2">
              {post.content.references.map((ref, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-neutral-600 leading-[1.6]">
                  <span className="text-neutral-400 font-medium shrink-0">[{rIdx + 1}]</span>
                  <span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A6B88] font-medium hover:underline underline-offset-4"
                    >
                      {ref.title}
                    </a>
                    {ref.note ? ` - ${ref.note}` : ''}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Clean Energy Advisory CTA Box */}
        <div className="p-8 sm:p-10 bg-[#0E2F3E] text-white rounded-[22px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#AEF977] block mb-2">
              PROJECT INQUIRY
            </span>
            <h3 className="text-[22px] sm:text-[26px] font-medium text-white tracking-tight leading-[1.25] mb-2">
              Need a site-specific renewable assessment?
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-white/80 leading-[1.6] font-normal">
              Contact our engineering team to review wind and solar viability for your site.
            </p>
          </div>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-neutral-950 shrink-0 select-none cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
          </Link>
        </div>
      </div>

      {/* Related Posts Section */}
      <section className="w-full bg-white pb-20 sm:pb-24 md:pb-28 max-w-[940px] mx-auto px-5 sm:px-10">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-neutral-900 tracking-tight mb-8 sm:mb-10">
          Related posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9">
          {relatedPosts.map((relPost) => (
            <Link
              key={relPost.id}
              href={`/insights/${relPost.slug}`}
              className="flex flex-col justify-between h-full group/blog cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 mb-4 select-none">
                  <img
                    src={relPost.image}
                    alt={relPost.imageAlt || relPost.title}
                    className="w-full h-full object-cover group-hover/blog:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center bg-[#AEF977] text-neutral-950 font-bold tracking-wider uppercase text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-[6px] shadow-sm">
                      {relPost.category}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-600 uppercase tracking-[0.04em]">
                    {relPost.date} · {relPost.readTime}
                  </p>
                </div>

                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-neutral-900 leading-[1.3] tracking-tight group-hover/blog:text-[#087589] transition-colors min-h-[46px] sm:min-h-[50px]">
                  {relPost.title}
                </h3>
              </div>

              <div className="mt-4 sm:mt-5">
                <span className="inline-flex items-center justify-center h-[38px] px-5 sm:px-6 rounded-full border border-[#0B2735] text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0B2735] transition-all duration-200 group-hover/blog:bg-[#0B2735] group-hover/blog:text-white">
                  READ INSIGHT
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
