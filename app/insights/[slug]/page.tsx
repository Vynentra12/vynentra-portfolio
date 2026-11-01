import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowLeft, ArrowDown } from 'lucide-react';
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
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* 1. Full-Bleed Panoramic Hero Section */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        
        {/* Panoramic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Area - Width increased back to max-w-[1380px] with Right-aligned Scroll Element */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Back Link / Badge - Plain text matching other inner pages, no background, no border */}
              <div className="mb-4 sm:mb-5">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-[0.14em] text-white/80 hover:text-white uppercase transition-colors select-none"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Insights</span>
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-sm mb-4 sm:mb-6 select-text">
                {post.title}
              </h1>

              {/* Subtitle / Meta Bar */}
              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm font-medium flex items-center gap-3 flex-wrap">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/40"></span>
                <span>{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-white/40"></span>
                <span className="text-[#AEF977]">{post.category}</span>
              </p>
            </div>

            {/* Right Scroll Down Element */}
            <a 
              href="#article-content"
              className="shrink-0 flex flex-col items-center gap-2.5 cursor-pointer select-none self-start lg:self-end group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:scale-105">
                <ArrowDown strokeWidth={1.75} className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
              <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/70 group-hover:text-white transition-colors">
                SCROLL TO EXPLORE
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* 2. Main Article Content Body */}
      <main id="article-content" className="max-w-[940px] mx-auto px-6 sm:px-10 py-14 sm:py-20 scroll-mt-20">
        
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

        {/* 3. Quote Block */}
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

        {/* 4. Concluding Paragraph with Regular Font */}
        <p className="text-[16px] sm:text-[17px] text-neutral-700 leading-[1.8] font-normal mb-12 sm:mb-14">
          The engineering behind wind turbines represents the perfect balance of science and sustainability transforming invisible air currents into tangible progress. As materials improve and digital systems evolve, wind energy will only become more efficient, accessible, and vital to the world’s clean energy transition.
        </p>

        {/* Interactive Tags & Social Share Bar */}
        <SocialShareBar
          title={post.title}
          slug={post.slug}
          tags={["energy", "renewable", "solar"]}
        />

        {/* Key Takeaways Section - Clean White Background */}
        {post.content.takeaways && post.content.takeaways.length > 0 && (
          <div className="mb-10 p-7 sm:p-8 bg-white rounded-[20px] border border-neutral-200">
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

      {/* 5. Related Posts Section - Matching Standard Blog Card Design */}
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

                {/* Date & Read Time */}
                <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-600 uppercase tracking-[0.04em] mb-2">
                  {relPost.date} · {relPost.readTime}
                </p>

                {/* Title */}
                <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-neutral-900 tracking-tight leading-[1.3] group-hover/blog:text-[#087589] transition-colors mb-4">
                  {relPost.title}
                </h3>
              </div>

              {/* Read Insight Button */}
              <div className="mt-1">
                <span className="inline-flex items-center justify-center h-[38px] px-5 sm:px-6 rounded-full border border-[#0B2735] text-[11.5px] sm:text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0B2735] transition-all duration-200 group-hover/blog:bg-[#0B2735] group-hover/blog:text-white">
                  READ INSIGHT
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* 6. Footer */}
      <FooterV2 />

    </div>
  );
}
