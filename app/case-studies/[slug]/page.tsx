import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CASE_STUDIES,
  getCaseStudyBySlug,
  type CaseStudyContentBlock,
} from "@/lib/case-studies-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const LEGACY_CASE_STUDY_SLUGS = [
  "commercial-solar-plants",
  "hybrid-wind-turbine-surat",
  "vawt-madhavpur-beach",
];

export async function generateStaticParams() {
  const slugs = CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
  for (const legacySlug of LEGACY_CASE_STUDY_SLUGS) {
    if (!slugs.some((s) => s.slug === legacySlug)) {
      slugs.push({ slug: legacySlug });
    }
  }
  return slugs;
}

function renderBoldSegments(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
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
      "text-[#0A6B88] font-medium underline underline-offset-4 decoration-[#0A6B88]/35 hover:text-[#08556d] hover:decoration-[#0A6B88] transition-colors";

    if (url.startsWith("/")) {
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

function renderArticleBlock(block: CaseStudyContentBlock, idx: number) {
  if (block.type === "paragraph") {
    return (
      <p key={idx} className="leading-[1.75] sm:leading-[1.8]">
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3
        key={idx}
        className="text-[16.5px] sm:text-[18.5px] font-medium text-[#111827] pt-2 tracking-tight"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={idx}
        className="my-2 pl-4 sm:pl-5 border-l-2 border-[#0A6B88] text-neutral-700 space-y-1"
      >
        {block.attribution && (
          <p className="text-[13.5px] sm:text-[14.5px] text-neutral-500 font-normal">
            {block.attribution}
          </p>
        )}
        <p className="font-medium text-[#0B2735]">{block.text}</p>
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={idx} className="space-y-2.5 pl-5 list-disc marker:text-[#0A6B88]">
        {block.items.map((item, itemIdx) => (
          <li key={itemIdx} className="leading-[1.7] pl-1">
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "specs") {
    return (
      <div
        key={idx}
        className="rounded-[14px] sm:rounded-[18px] bg-white border border-neutral-200 p-4 sm:p-6 divide-y divide-neutral-200/80"
      >
        {block.items.map((spec, specIdx) => (
          <div
            key={specIdx}
            className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
          >
            <span className="text-[13px] sm:text-[14px] font-medium text-neutral-500">
              {spec.label}
            </span>
            <span className="text-[14px] sm:text-[15px] font-medium text-[#0B2735]">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── MAIN CONTENT CONTAINER (Centered Editorial Layout Optimized for Mobile & Desktop) ── */}
      <main className="max-w-[880px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-28">
        
        {/* Back Link to All Case Studies */}
        <div className="mb-6 sm:mb-10">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 sm:gap-4 select-none cursor-pointer"
          >
            {/* Circular Border Arrow Button */}
            <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full bg-white border border-[#0B2735] flex items-center justify-center text-[#0B2735] transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:border-[#0A6B88] group-hover:text-white group-hover:scale-105 shrink-0 shadow-xs">
              <ArrowLeft strokeWidth={2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </div>

            {/* Stacked Labels */}
            <div className="flex flex-col text-left justify-center">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] text-[#0A6B88] uppercase leading-none mb-0.5 sm:mb-1">
                BACK TO
              </span>
              <span className="text-[15.5px] sm:text-[19px] font-normal text-[#0B2735] tracking-tight leading-none group-hover:text-[#0A6B88] transition-colors">
                All Case Studies
              </span>
            </div>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-[26px] sm:text-[38px] md:text-[44px] font-medium text-[#111827] tracking-tight leading-[1.18] mb-3 sm:mb-4 select-text">
          {study.title}
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[16.5px] text-neutral-600 font-normal leading-relaxed mb-4 sm:mb-6">
          {study.subtitle}
        </p>

        {/* Metadata Tags: Pure text in brand light blue with separator lines */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-5 sm:mb-8 text-[#0A6B88] text-[11px] sm:text-[12.5px] font-medium tracking-[0.07em] uppercase">
          <span>{study.projectLocation}</span>
          <span className="text-neutral-300 select-none font-light">|</span>
          <span>{study.technology}</span>
        </div>

        {/* Featured Hero Image: Unblurred & sharp */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-[16px] sm:rounded-[26px] overflow-hidden my-6 sm:my-10 bg-neutral-100 border border-neutral-200/60 shadow-xs">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Stats: Clean layout on mobile and desktop */}
        <div className="w-full py-5 sm:py-7 my-6 sm:my-10 border-t border-b border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          {study.stats[0] && (
            <div className="flex-1 flex items-center justify-start">
              <span className="text-[14.5px] sm:text-[17px] text-neutral-600 font-normal tracking-tight">
                {study.stats[0].label}
              </span>
            </div>
          )}

          {/* Clean Vertical Divider Line for desktop */}
          <div className="hidden sm:block w-[1px] h-12 md:h-14 bg-neutral-300 mx-6 md:mx-10 shrink-0" />

          {study.stats[1] && (
            <div className="flex-1 flex items-baseline gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-200 w-full sm:w-auto">
              <span className="text-[30px] sm:text-[42px] md:text-[46px] font-bold text-[#0B2735] leading-none tracking-tight">
                {study.stats[1].value}
              </span>
              <span className="text-[13px] sm:text-[14.5px] text-neutral-600 font-normal leading-snug">
                {study.stats[1].label}
              </span>
            </div>
          )}
        </div>

        {/* ── EDITORIAL STORY SECTIONS ── */}
        <article className="space-y-8 sm:space-y-12 text-[14.5px] sm:text-[16px] text-neutral-700 font-normal leading-[1.75] sm:leading-[1.8]">
          {study.articleSections && study.articleSections.length > 0 ? (
            study.articleSections.map((section, sectionIdx) => (
              <section key={sectionIdx} className="border-t border-neutral-200/80 pt-6 sm:pt-8">
                <h2 className="text-[20px] sm:text-[26px] font-medium text-[#111827] mb-3 sm:mb-4 tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-3.5 text-neutral-600">
                  {section.blocks.map((block, blockIdx) => renderArticleBlock(block, blockIdx))}
                </div>
              </section>
            ))
          ) : (
            <>
              {/* 1. Problem */}
              <section className="border-t border-neutral-200/80 pt-6 sm:pt-8">
                <h2 className="text-[20px] sm:text-[26px] font-medium text-[#111827] mb-3 sm:mb-4 tracking-tight">
                  Problem
                </h2>
                <div className="space-y-3.5 text-neutral-600">
                  {study.problem.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </section>

              {/* 2. Solution */}
              <section className="border-t border-neutral-200/80 pt-6 sm:pt-8">
                <h2 className="text-[20px] sm:text-[26px] font-medium text-[#111827] mb-3 sm:mb-4 tracking-tight">
                  Solution
                </h2>
                <div className="space-y-3.5 text-neutral-600">
                  {study.solution.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </section>

              {/* 3. Results & Key Findings */}
              <section className="border-t border-neutral-200/80 pt-6 sm:pt-8">
                <h2 className="text-[20px] sm:text-[26px] font-medium text-[#111827] mb-3 sm:mb-4 tracking-tight">
                  Results &amp; Key Findings
                </h2>
                <div className="space-y-4 text-neutral-600">
                  {study.resultsAndFindings.map((finding, idx) => {
                    const parts = finding.split(":");
                    const hasLabel = parts.length > 1;
                    return (
                      <p key={idx} className="leading-relaxed">
                        {hasLabel ? (
                          <>
                            <strong className="font-semibold text-neutral-900">{parts[0]}:</strong>
                            {parts.slice(1).join(":")}
                          </>
                        ) : (
                          finding
                        )}
                      </p>
                    );
                  })}
                </div>
              </section>

              {/* 4. Conclusion & Recommendation */}
              <section className="border-t border-neutral-200/80 pt-6 sm:pt-8">
                <h2 className="text-[20px] sm:text-[26px] font-medium text-[#111827] mb-3 sm:mb-4 tracking-tight">
                  Conclusion &amp; Recommendation
                </h2>
                <div className="space-y-3.5 text-neutral-600">
                  {study.conclusionAndRecommendation.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </section>
            </>
          )}
        </article>

        {/* Direct CTA */}
        <div className="mt-10 sm:mt-16 rounded-[20px] sm:rounded-[32px] bg-[#0E2F3E] text-white p-5 sm:p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8 shadow-xs">
          <div className="max-w-xl">
            <span className="text-[10.5px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-1.5 sm:mb-2.5">
              PROJECT INQUIRY
            </span>
            <h3 className="text-[20px] sm:text-[26px] md:text-[28px] font-medium tracking-tight leading-[1.25] mb-1.5 sm:mb-2.5 text-white">
              Need a site-specific renewable assessment?
            </h3>
            <p className="text-[13px] sm:text-[14.5px] text-white/80 leading-[1.6]">
              Contact our engineering team to review wind and solar viability for your site.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-7 sm:px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full sm:w-auto"
            >
              <span>GET IN TOUCH</span>
            </Link>
          </div>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
