import React from "react";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies-data";
import { FooterV2 } from "@/components/sections/FooterV2";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* ── MAIN CONTENT CONTAINER (Centered Editorial Layout Matching Image Reference) ── */}
      <main className="max-w-[820px] mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        
        {/* Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[44px] font-medium text-[#111827] tracking-tight leading-[1.18] mb-4 select-text">
          {study.title}
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[16px] text-neutral-500 font-normal leading-relaxed mb-6">
          {study.subtitle}
        </p>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-[12.5px] font-medium border border-neutral-200/70">
            Client: {study.client}
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-[12.5px] font-medium border border-neutral-200/70">
            Plan Used: {study.planOrSolution}
          </span>
        </div>

        {/* Featured Hero Image (Rounded with subtle border matching reference) */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-[20px] sm:rounded-[24px] overflow-hidden my-8 sm:my-10 bg-neutral-100 border border-neutral-200/60 shadow-xs">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── EDITORIAL STORY SECTIONS ── */}
        <article className="space-y-8 text-[15px] sm:text-[15.5px] text-neutral-600 font-normal leading-[1.8]">
          
          {/* Overview */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Overview
            </h2>
            <p>
              {study.overview}
            </p>
          </section>

          {/* Company Background */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Company Background
            </h2>
            <p>
              {study.companyBackground}
            </p>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Challenges
            </h2>
            <ol className="list-none space-y-2.5 pl-0">
              {study.challenges.map((c, idx) => (
                <li key={idx}>
                  <span className="font-medium text-[#111827]">{idx + 1}. {c.title}:</span>{" "}
                  <span>{c.description}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Solution: Implementation of Qarin
            </h2>
            <p>
              {study.solution}
            </p>
          </section>

          {/* Features Utilized */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Features of Qarin Utilized
            </h2>
            <ol className="list-none space-y-2.5 pl-0">
              {study.features.map((f, idx) => (
                <li key={idx}>
                  <span className="font-medium text-[#111827]">{idx + 1}. {f.title}:</span>{" "}
                  <span>{f.description}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Results
            </h2>
            <ol className="list-none space-y-2.5 pl-0">
              {study.results.map((r, idx) => (
                <li key={idx}>
                  <span className="font-medium text-[#111827]">{idx + 1}. {r.title}:</span>{" "}
                  <span>{r.description}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-medium text-[#111827] mb-3 tracking-tight">
              Conclusion
            </h2>
            <p>
              {study.conclusion}
            </p>
          </section>

        </article>

      </main>

      {/* ── SITE FOOTER ── */}
      <FooterV2 />
    </div>
  );
}
