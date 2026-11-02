import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowLeft } from 'lucide-react';
import { ALL_BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog-data';
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

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts (2 items)
  const relatedPosts = ALL_BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950 flex flex-col">
      
      {/* ── MAIN CONTENT CONTAINER (Clean Editorial Layout Matching Case Studies) ── */}
      <main className="max-w-[940px] mx-auto px-6 sm:px-10 pt-28 sm:pt-36 pb-20 sm:pb-28 w-full flex-1">
        
        {/* Back Link to All Insights (Matching Reference Image with regular font) */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-3.5 sm:gap-4 select-none cursor-pointer"
          >
            {/* Circular Border Arrow Button with smaller arrow */}
            <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-white border border-[#0B2735] flex items-center justify-center text-[#0B2735] transition-all duration-300 group-hover:bg-[#0A6B88] group-hover:border-[#0A6B88] group-hover:text-white group-hover:scale-105 shrink-0 shadow-xs">
              <ArrowLeft strokeWidth={2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </div>

            {/* Stacked Labels with regular font */}
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

        {/* Scope / Category Eyebrow Badge */}
        <div className="mb-3 sm:mb-4">
          <SectionBadge theme="dark" size="default">
            {post.category}
          </SectionBadge>
        </div>

        {/* Title */}
        <h1 className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium text-neutral-900 tracking-tight leading-[1.16] mb-4 select-text">
          {post.title}
        </h1>

        {/* Meta Bar: Date & Read Time */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] text-neutral-600 font-normal mb-8">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
          <span>{post.readTime}</span>
        </div>

        {/* Featured Hero Image: Positioned at Bottom of Title & Meta Info */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-[20px] overflow-hidden bg-neutral-100 my-8 shadow-xs border border-neutral-200/70">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Intro Paragraph */}
        <p className="text-[17px] sm:text-[19px] md:text-[20px] text-neutral-800 leading-[1.7] font-normal mb-10 sm:mb-12">
          {post.content.intro}
        </p>

        {/* Checkmark Bullet Points List */}
        <div className="space-y-3 mb-12 sm:mb-14">
          <div className="flex items-center gap-3 text-[15px] sm:text-[16px] text-neutral-800">
            <Check className="w-4 h-4 text-[#0A6B88] shrink-0 stroke-[2.5]" />
            <span>The rotor drives the main shaft, which transfers motion to the generator.</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] sm:text-[16px] text-neutral-800">
            <Check className="w-4 h-4 text-[#0A6B88] shrink-0 stroke-[2.5]" />
            <span>The generator converts mechanical rotation into electrical power.</span>
          </div>
        </div>

        {/* Dynamic Section Headings & Paragraphs */}
        <div className="space-y-10 sm:space-y-12">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium text-neutral-900 tracking-tight leading-[1.2]">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.75] font-normal">
                  {p}
                </p>
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

        {/* Quote Block */}
        {post.content.quote && (
          <div className="my-14 sm:my-16 pl-6 sm:pl-8 border-l-2 border-[#0A6B88]">
            <blockquote className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-neutral-900 leading-[1.4] mb-3 italic">
              &ldquo;{post.content.quote.text}&rdquo;
            </blockquote>
            <cite className="text-[14px] font-semibold text-neutral-500 not-italic uppercase tracking-wider">
              — {post.content.quote.author}
            </cite>
          </div>
        )}

        {/* Concluding Paragraph with Regular Font */}
        <p className="text-[16px] sm:text-[17px] text-neutral-700 leading-[1.8] font-normal mb-12 sm:mb-14">
          The engineering behind wind turbines represents the perfect balance of science and sustainability transforming invisible air currents into tangible progress. As materials improve and digital systems evolve, wind energy will only become more efficient, accessible, and vital to the world’s clean energy transition.
        </p>

        {/* Interactive Tags & Social Share Bar */}
        <SocialShareBar
          title={post.title}
          slug={post.slug}
          tags={["energy", "renewable", "solar"]}
        />

        {/* Key Takeaways Section - Pure text with tick icons (No box, no background) */}
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

        {/* Clean Energy Advisory CTA Box with Green Button */}
        <div className="p-8 sm:p-10 bg-[#0E2F3E] text-white rounded-[22px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#AEF977] block mb-2">
              VYNENTRA PROJECT ADVISORY
            </span>
            <h3 className="text-[20px] sm:text-[23px] font-medium text-white tracking-tight mb-2">
              Evaluating renewable energy solutions for your facility?
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-white/80 leading-[1.6] font-normal">
              From site feasibility audits to hybrid wind-solar sizing, battery storage, and EPC coordination, connect with our engineering team to explore the right configuration for your site.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#AEF977] text-neutral-950 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-neutral-950 shrink-0 select-none cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
          </Link>
        </div>

      </main>

      {/* Related Posts Section - Matching Standard Blog Card Design */}
      <section className="w-full bg-white pb-20 sm:pb-24 md:pb-28 max-w-[940px] mx-auto px-6 sm:px-10">
        
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-neutral-900 tracking-tight mb-8 sm:mb-10">
          Related posts
        </h2>

        {/* 2-Column Responsive Cards Grid matching standard blog card UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9">
          {relatedPosts.map((relPost) => (
            <Link
              key={relPost.id}
              href={`/insights/${relPost.slug}`}
              className="flex flex-col justify-between h-full group/blog cursor-pointer"
            >
              <div className="flex flex-col">
                {/* Image Container with Light Blue Category Badge */}
                <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 mb-4 select-none">
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    className="w-full h-full object-cover group-hover/blog:scale-105 transition-transform duration-500"
                  />

                  {/* Light Blue Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center bg-[#0A6B88] text-white font-semibold tracking-wider uppercase text-[9.5px] sm:text-[10px] px-2.5 py-1 rounded-[6px] shadow-sm">
                      {relPost.category}
                    </span>
                  </div>
                </div>

                {/* Card Meta Date & Read Time */}
                <div className="mb-2">
                  <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-600 uppercase tracking-[0.04em]">
                    {relPost.date} · {relPost.readTime}
                  </p>
                </div>

                {/* Card Title */}
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-neutral-900 leading-[1.3] tracking-tight group-hover/blog:text-[#087589] transition-colors min-h-[46px] sm:min-h-[50px]">
                  {relPost.title}
                </h3>
              </div>

              {/* Read Insight Button */}
              <div className="mt-4 sm:mt-5">
                <span className="inline-flex items-center justify-center h-[38px] px-5 sm:px-6 rounded-full border border-[#0B2735] text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0B2735] transition-all duration-200 group-hover/blog:bg-[#0B2735] group-hover/blog:text-white">
                  READ INSIGHT
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}
