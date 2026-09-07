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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find index for Prev/Next navigation
  const currentIndex = ALL_BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? ALL_BLOG_POSTS[currentIndex - 1] : ALL_BLOG_POSTS[ALL_BLOG_POSTS.length - 1];
  const nextPost = currentIndex < ALL_BLOG_POSTS.length - 1 ? ALL_BLOG_POSTS[currentIndex + 1] : ALL_BLOG_POSTS[0];

  // Related posts (2 items matching Screenshot 4)
  const relatedPosts = ALL_BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#AEF977] selection:text-neutral-950">
      
      {/* 1. Full-Bleed Panoramic Hero Section (Matching Screenshot 1) */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[720px] flex flex-col justify-end overflow-hidden bg-[#0A1926]">
        
        {/* Panoramic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Cinematic dark gradient overlay to ensure text contrast while keeping sky vibrant */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="max-w-[1380px] mx-auto">
            
            {/* Category Lime Badge */}
            <div className="mb-5 sm:mb-6">
              <span className="inline-block bg-[#AEF977] text-neutral-950 text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm">
                {post.category}
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[58px] lg:text-[68px] font-bold text-white tracking-[-0.03em] leading-[1.08] max-w-5xl mb-8 sm:mb-10 drop-shadow-sm">
              {post.title}
            </h1>

            {/* Meta Bar on a Divider Line (Matching Screenshot 1) */}
            <div className="w-full border-t border-white/20 pt-4 flex items-center justify-between gap-4 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.05em] text-white/90">
              <div className="flex items-center gap-2 truncate">
                <span>{post.date}</span>
                <span>_</span>
                <span>BY {post.author.toUpperCase()}</span>
                <span>_</span>
                <span>2 COMMENTS</span>
              </div>

              {/* Heart Likes Counter */}
              <div className="flex items-center gap-1.5 text-white shrink-0 cursor-pointer hover:text-[#AEF977] transition-colors">
                <Heart className="w-3.5 h-3.5 fill-white/20" />
                <span>1</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Article Content Body (Matching Screenshot 2) */}
      <main className="max-w-[940px] mx-auto px-6 sm:px-10 py-14 sm:py-20">
        
        {/* Intro Paragraph */}
        <p className="text-[17px] sm:text-[19px] md:text-[20px] text-neutral-800 leading-[1.7] font-normal mb-10 sm:mb-12">
          {post.content.intro}
        </p>

        {/* Checkmark Bullet Points List */}
        <div className="space-y-3 mb-12 sm:mb-14">
          <div className="flex items-center gap-3 text-[15px] sm:text-[16px] text-neutral-800">
            <Check className="w-4 h-4 text-neutral-900 shrink-0 stroke-[2.5]" />
            <span>The rotor drives the main shaft, which transfers motion to the generator.</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] sm:text-[16px] text-neutral-800">
            <Check className="w-4 h-4 text-neutral-900 shrink-0 stroke-[2.5]" />
            <span>The generator converts mechanical rotation into electrical power.</span>
          </div>
        </div>

        {/* Dynamic Section Headings & Paragraphs */}
        <div className="space-y-10 sm:space-y-12">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-neutral-950 tracking-tight leading-[1.2]">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.75] font-normal">
                  {p}
                </p>
              ))}

              {section.keyHighlight && (
                <div className="my-6 p-5 sm:p-6 bg-neutral-50 rounded-[16px] border border-neutral-200/80 flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#AEF977] mt-2 shrink-0" />
                  <p className="text-[14.5px] sm:text-[15.5px] font-semibold text-neutral-900 leading-[1.6]">
                    {section.keyHighlight}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-[1.75] font-normal mt-10">
          The engineering behind wind turbines represents the perfect balance of science and sustainability — transforming invisible air currents into tangible progress. <strong className="text-neutral-950 font-bold">As materials improve and digital systems evolve, wind energy will only become more efficient, accessible, and vital to the world’s clean energy transition.</strong>
        </p>

        {/* Tags & Social Share Row (Matching Screenshot 2) */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          
          {/* Tags Pills on Left */}
          <div className="flex flex-wrap items-center gap-2">
            {["energy", "renewable", "solar"].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full border border-neutral-900 text-[12px] font-medium text-neutral-900 cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Real Social Share Icons on Right (X, Facebook, Instagram) */}
          <div className="flex items-center gap-4 text-neutral-900">
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Share on X"
              className="hover:opacity-60 transition-opacity"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Share on Facebook"
              className="hover:opacity-60 transition-opacity"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Share on Instagram"
              className="hover:opacity-60 transition-opacity"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* 3. About Author Card (Matching Screenshot 2 & 3) */}
        <div className="mt-12 sm:mt-14 pt-10 border-t border-neutral-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0 grayscale"
          />
          <div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-neutral-950 mb-2.5">
              About {post.author}
            </h3>
            <p className="text-[14px] sm:text-[14.5px] text-neutral-600 leading-[1.65] font-normal mb-4">
              {post.authorBio || "A deep understanding of digital marketing concepts, trends, and strategies is crucial. This includes knowledge of SEO, content marketing, social media marketing."}
            </p>
            {/* Social Text Links */}
            <div className="flex items-center gap-5 text-[11.5px] font-bold uppercase tracking-wider text-neutral-950">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">X</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">FACEBOOK</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">INSTAGRAM</a>
            </div>
          </div>
        </div>

        {/* 4. Prev / Next Post Navigation (Matching Screenshot 3) */}
        <div className="mt-14 pt-8 pb-8 border-t border-b border-neutral-300 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* PREV Link */}
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex flex-col items-start text-left cursor-pointer"
          >
            <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 group-hover:text-neutral-900 transition-colors">
              ← PREV
            </span>
            <span className="text-[16px] sm:text-[18px] font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors line-clamp-1">
              {prevPost.title}
            </span>
          </Link>

          {/* NEXT Link */}
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col items-start sm:items-end text-left sm:text-right cursor-pointer"
          >
            <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5 group-hover:text-neutral-900 transition-colors">
              NEXT →
            </span>
            <span className="text-[16px] sm:text-[18px] font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors line-clamp-1">
              {nextPost.title}
            </span>
          </Link>
        </div>

      </main>

      {/* 5. Related Posts Section (Matching exact article width max-w-[940px] and px-6 sm:px-10) */}
      <section className="w-full bg-white pb-20 sm:pb-24 md:pb-28 max-w-[940px] mx-auto px-6 sm:px-10">
        
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-neutral-950 tracking-tight mb-8 sm:mb-10">
          Related posts
        </h2>

        {/* 2-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9">
          {relatedPosts.map((relPost) => (
            <Link
              key={relPost.id}
              href={`/blog/${relPost.slug}`}
              className="group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container */}
                <div className="w-full aspect-[16/9.5] rounded-[20px] sm:rounded-[22px] overflow-hidden relative bg-neutral-200 mb-5 select-none">
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Category Lime Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-[#AEF977] text-black text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                      {relPost.category}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <p className="text-[11.5px] font-bold text-neutral-800 uppercase tracking-[0.04em] mb-2">
                  {relPost.date}
                </p>

                {/* Title */}
                <h3 className="text-[22px] sm:text-[25px] font-bold text-neutral-950 tracking-tight leading-[1.2] group-hover:text-neutral-700 transition-colors mb-4">
                  {relPost.title}
                </h3>
              </div>

              {/* READ MORE with Linear Continuous Arrow Pass-Through Animation */}
              <div className="mt-1 inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-neutral-900 uppercase tracking-wider group/readmore w-fit py-1 select-none">
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span>READ MORE</span>
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
