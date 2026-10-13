import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Heart, Check } from 'lucide-react';
import { ALL_BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog-data';
import { FooterV2 } from '@/components/sections/FooterV2';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
      
      {/* 1. Full-Bleed Panoramic Hero Section (Full Viewport Height) */}
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

        {/* Hero Content Area */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            
            {/* Category Badge */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-sm mb-4 sm:mb-6 select-text">
              {post.title}
            </h1>

            {/* Subtitle / Meta Bar */}
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm mb-10 sm:mb-12 font-medium flex items-center gap-3 flex-wrap">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span>{post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span className="text-[#AEF977]">{post.category}</span>
            </p>

            {/* Breadcrumbs Navigation with top border */}
            <div className="w-full border-t border-white/20 pt-4 flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <Link
                href="/insights"
                className="text-white/70 hover:text-white transition-colors"
              >
                INSIGHTS
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none truncate">
                {post.title.toUpperCase()}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Article Content Body */}
      <main className="max-w-[940px] mx-auto px-6 sm:px-10 py-14 sm:py-20">
        
        {/* Intro Paragraph */}
        <p className="text-[17px] sm:text-[19px] md:text-[20px] text-neutral-800 leading-[1.7] font-normal mb-10 sm:mb-12">
          {post.content.intro}
        </p>

        {/* Checkmark Bullet Points List */}
        <div className="space-y-3 mb-12 sm:mb-14">
          <div className="flex items-center gap-3 text-[15px] sm:text-[16px] text-neutral-800">
            <Check className="w-4 h-4 text-[#7FA6B9] shrink-0 stroke-[2.5]" />
            <span>The rotor drives the main shaft, which transfers motion to the generator.</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] sm:text-[16px] text-neutral-800">
            <Check className="w-4 h-4 text-[#7FA6B9] shrink-0 stroke-[2.5]" />
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
                <div className="my-6 p-5 sm:p-6 bg-neutral-100 rounded-[16px] flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7FA6B9] mt-2 shrink-0" />
                  <p className="text-[14.5px] sm:text-[15.5px] font-semibold text-neutral-900 leading-[1.6]">
                    {section.keyHighlight}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 3. Quote Block */}
        {post.content.quote && (
          <div className="my-14 sm:my-16 pl-6 sm:pl-8 border-l-2 border-[#7FA6B9]">
            <blockquote className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-neutral-900 leading-[1.4] mb-3 italic">
              &ldquo;{post.content.quote.text}&rdquo;
            </blockquote>
            <cite className="text-[14px] font-semibold text-neutral-500 not-italic uppercase tracking-wider">
              — {post.content.quote.author}
            </cite>
          </div>
        )}

        {/* 4. Concluding Paragraph */}
        <p className="text-[16px] sm:text-[17px] text-neutral-700 leading-[1.8] font-normal mb-12 sm:mb-14">
          The engineering behind wind turbines represents the perfect balance of science and sustainability transforming invisible air currents into tangible progress. <strong className="text-[#7FA6B9] font-bold">As materials improve and digital systems evolve, wind energy will only become more efficient, accessible, and vital to the world’s clean energy transition.</strong>
        </p>

        {/* Tags & Social Share Bar */}
        <div className="border-t border-b border-neutral-200 py-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[12px] font-semibold uppercase text-neutral-400 tracking-wider mr-2">Tags:</span>
            {["energy", "renewable", "solar"].map((tag) => (
              <span 
                key={tag}
                className="px-3.5 py-1 rounded-full bg-neutral-100 text-[11px] font-bold text-neutral-700 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Social Share Icons */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold uppercase text-neutral-400 tracking-wider mr-1">Share:</span>
            <button aria-label="Share on X" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-[#7FA6B9] hover:text-white hover:border-[#7FA6B9] transition-all cursor-pointer">
              <TwitterIcon />
            </button>
            <button aria-label="Share on Facebook" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-[#7FA6B9] hover:text-white hover:border-[#7FA6B9] transition-all cursor-pointer">
              <FacebookIcon />
            </button>
            <button aria-label="Share on Instagram" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-[#7FA6B9] hover:text-white hover:border-[#7FA6B9] transition-all cursor-pointer">
              <InstagramIcon />
            </button>
          </div>
        </div>

        {/* Key Takeaways Section */}
        {post.content.takeaways && post.content.takeaways.length > 0 && (
          <div className="mb-10 p-7 sm:p-8 bg-[#F4F6F8] rounded-[20px] border border-neutral-200/70">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7FA6B9]" />
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#7FA6B9]">
                KEY TAKEAWAYS &amp; STRATEGIC SUMMARY
              </h3>
            </div>
            <ul className="space-y-3">
              {post.content.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-[14.5px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                  <Check className="w-4 h-4 text-[#7FA6B9] shrink-0 stroke-[2.5] mt-1" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Clean Energy Advisory CTA Box */}
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
            className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-white text-[#0E2F3E] text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#AEF977] hover:text-[#0E2F3E] shrink-0 select-none cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
          </Link>
        </div>

      </main>

      {/* 5. Related Posts Section */}
      <section className="w-full bg-white pb-20 sm:pb-24 md:pb-28 max-w-[940px] mx-auto px-6 sm:px-10">
        
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-neutral-900 tracking-tight mb-8 sm:mb-10">
          Related posts
        </h2>

        {/* 2-Column Responsive Cards Grid matching sleek UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9">
          {relatedPosts.map((relPost) => (
            <Link
              key={relPost.id}
              href={`/insights/${relPost.slug}`}
              className="flex flex-col justify-between h-full group/blog cursor-pointer"
            >
              <div className="flex flex-col">
                {/* Image Container with Sleek Glassmorphic Pill Badge */}
                <div className="w-full aspect-[16/10.5] rounded-[18px] sm:rounded-[20px] overflow-hidden relative bg-neutral-200 mb-4 select-none">
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/blog:scale-105"
                  />

                  {/* Small Glassmorphism Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center bg-black/45 backdrop-blur-md border border-white/25 text-white text-[9px] sm:text-[9.5px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-sm">
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

              {/* Read Insight CTA */}
              <div className="mt-1 inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-normal text-neutral-900 uppercase tracking-wider group/readmore cursor-pointer w-fit py-1 select-none">
                <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                  <ArrowRight
                    className="w-4 h-4 text-neutral-900 group-hover/blog:text-[#087589] absolute transition-transform duration-300 ease-out group-hover/blog:translate-x-5"
                    strokeWidth={1.8}
                  />
                  <ArrowRight
                    className="w-4 h-4 text-neutral-900 group-hover/blog:text-[#087589] absolute -translate-x-5 transition-transform duration-300 ease-out group-hover/blog:translate-x-0"
                    strokeWidth={1.8}
                  />
                </div>
                <span className="group-hover/blog:text-[#087589] transition-colors">READ INSIGHT</span>
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
