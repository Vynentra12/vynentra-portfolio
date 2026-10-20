import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies-data";
import { FooterV2 } from "@/components/sections/FooterV2";
import { MapPin, Zap, Building2, CheckCircle2, ArrowLeft, ArrowUpRight } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
  slugs.push({ slug: "commercial-solar-plants" });
  return slugs;
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── MAIN CONTENT CONTAINER (Centered Editorial Layout Matching Brand Standards) ── */}
      <main className="max-w-[880px] mx-auto px-6 sm:px-8 pt-24 sm:pt-28 pb-20 sm:pb-28">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-neutral-500 hover:text-[#0A6B88] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL CASE STUDIES</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[46px] font-medium text-[#111827] tracking-tight leading-[1.18] mb-4 select-text">
          {study.title}
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed mb-6">
          {study.subtitle}
        </p>

        {/* Metadata Badges: Mobile-optimized horizontal chips without multiline wrapping */}
        <div className="flex flex-row flex-nowrap sm:flex-wrap items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 overflow-x-auto no-scrollbar max-w-full pb-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6F8] text-neutral-700 text-[11px] sm:text-[12px] font-medium border border-neutral-200/70 whitespace-nowrap shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#0A6B88] shrink-0" />
            <span>{study.projectLocation}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6F8] text-neutral-700 text-[11px] sm:text-[12px] font-medium border border-neutral-200/70 whitespace-nowrap shrink-0">
            <Zap className="w-3.5 h-3.5 text-[#0A6B88] shrink-0" />
            <span>{study.technology}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F6F8] text-neutral-700 text-[11px] sm:text-[12px] font-medium border border-neutral-200/70 whitespace-nowrap shrink-0">
            <Building2 className="w-3.5 h-3.5 text-[#0A6B88] shrink-0" />
            <span>{study.company}</span>
          </span>
        </div>

        {/* Featured Hero Image */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-[22px] sm:rounded-[26px] overflow-hidden my-8 sm:my-10 bg-neutral-100 border border-neutral-200/60 shadow-xs">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 p-6 sm:p-8 bg-[#F7F9FA] rounded-[20px] border border-neutral-200/80 mb-12">
          {study.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-[32px] sm:text-[40px] font-medium text-[#111827] leading-none mb-1.5">
                {stat.value}
              </span>
              <span className="text-[12.5px] sm:text-[13px] text-neutral-500 font-normal leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── EDITORIAL STORY SECTIONS ── */}
        <article className="space-y-12 text-[15px] sm:text-[16px] text-neutral-700 font-normal leading-[1.8]">
          
          {/* 1. Problem */}
          <section className="border-t border-neutral-200/80 pt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold text-[#0A6B88] uppercase tracking-[0.08em]">
                PHASE 01
              </span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-medium text-[#111827] mb-4 tracking-tight">
              1. Problem
            </h2>
            <div className="space-y-3.5 text-neutral-600">
              {study.problem.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* 2. Solution */}
          <section className="border-t border-neutral-200/80 pt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold text-[#0A6B88] uppercase tracking-[0.08em]">
                PHASE 02
              </span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-medium text-[#111827] mb-4 tracking-tight">
              2. Solution
            </h2>
            <div className="space-y-3.5 text-neutral-600">
              {study.solution.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* 3. Results & Key Findings */}
          <section className="border-t border-neutral-200/80 pt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold text-[#0A6B88] uppercase tracking-[0.08em]">
                PHASE 03
              </span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-medium text-[#111827] mb-4 tracking-tight">
              3. Results &amp; Key Findings
            </h2>
            <ul className="space-y-3 pl-0 list-none text-neutral-600">
              {study.resultsAndFindings.map((finding, idx) => {
                const parts = finding.split(":");
                const hasLabel = parts.length > 1;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0A6B88] shrink-0 mt-0.5" />
                    <span>
                      {hasLabel ? (
                        <>
                          <strong className="font-semibold text-neutral-900">{parts[0]}:</strong>
                          {parts.slice(1).join(":")}
                        </>
                      ) : (
                        finding
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* 4. Conclusion & Recommendation */}
          <section className="border-t border-neutral-200/80 pt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold text-[#0A6B88] uppercase tracking-[0.08em]">
                PHASE 04
              </span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-medium text-[#111827] mb-4 tracking-tight">
              4. Conclusion &amp; Recommendation
            </h2>
            <div className="space-y-3.5 text-neutral-600 bg-[#F7F9FA] p-6 sm:p-7 rounded-[18px] border border-neutral-200/70">
              {study.conclusionAndRecommendation.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

        </article>

        {/* Direct CTA - Matching Partners Page JOIN OUR NETWORK Card UI */}
        <div className="mt-14 sm:mt-16 rounded-[24px] sm:rounded-[32px] bg-[#0E2F3E] text-white p-7 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xs">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-[11.5px] uppercase tracking-wider font-semibold text-[#AEF977] block mb-2 sm:mb-2.5">
              PROJECT INQUIRY
            </span>
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-medium tracking-tight leading-[1.25] mb-2 sm:mb-2.5 text-white">
              Need a site-specific renewable assessment?
            </h3>
            <p className="text-[13.5px] sm:text-[14.5px] text-white/80 leading-[1.6]">
              Contact our engineering team to review wind and solar viability for your site.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center h-[46px] sm:h-[48px] px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-white transition-colors duration-200 w-full sm:w-auto"
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
