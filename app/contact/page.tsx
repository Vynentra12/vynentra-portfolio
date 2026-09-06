"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FooterV2 } from "@/components/sections/FooterV2";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zm1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", website: "", comment: "" });
    }, 4000);
  };

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
      {/* Hero Section matching Blog Hero height & style */}
      <section className="relative w-full min-h-[390px] sm:min-h-[450px] md:min-h-[490px] lg:min-h-[530px] flex flex-col justify-end overflow-hidden bg-[#0e2736]">
        
        {/* Panoramic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Engineer with wind turbine background"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Subtle natural contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-8 sm:px-10 lg:px-12 xl:px-14 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-36">
          
          {/* Giant Title */}
          <h1 className="text-[52px] sm:text-[66px] md:text-[76px] lg:text-[86px] font-bold text-white tracking-[-0.035em] leading-[0.98] drop-shadow-sm mb-6 sm:mb-8 md:mb-10 select-none">
            Contacts
          </h1>

          {/* Breadcrumbs Navigation with sleek horizontal dividing line UNDERNEATH */}
          <div className="w-full border-b border-white/25 pb-3 sm:pb-3.5">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.06em]">
              <Link 
                href="/" 
                className="text-white/85 hover:text-white transition-colors"
              >
                HOME
              </Link>
              
              <span className="text-white/60 font-normal select-none">→</span>
              
              <span className="text-white select-none">
                CONTACTS
              </span>
            </nav>
          </div>

        </div>
      </section>

      {/* Main 2-Column Contact Info & Form Section */}
      <section className="w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-white overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column: Contact Info (Slides in from Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-start"
            >
              
              {/* Kicker */}
              <span className="text-[12px] font-bold text-neutral-900 uppercase tracking-[0.08em] mb-4 sm:mb-5 select-none">
                WHERE HERE TO HELP
              </span>

              {/* Headline */}
              <h2 className="text-[38px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-bold text-neutral-950 tracking-[-0.03em] leading-[1.06] mb-6 sm:mb-7">
                Reach out to us<br className="hidden sm:inline" /> anytime for support<br className="hidden sm:inline" /> and guidance
              </h2>

              {/* Subtitle */}
              <p className="text-[15.5px] sm:text-[16.5px] text-neutral-600 leading-[1.65] font-normal mb-12 sm:mb-14 max-w-xl">
                Get in touch to discuss your renewable energy requirements today.
                <br className="hidden sm:inline" />
                {" "}Please give us a call, drop us an email.
              </p>

              {/* 2x2 Details Grid - Pure clean spacing without border */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-10 sm:gap-y-12">
                
                {/* Location */}
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em] mb-2.5">
                    WE ARE HERE:
                  </h3>
                  <p className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                    Vynentra Clean Energy HQ,<br />
                    Gujarat &amp; Rajasthan Corridor, India
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em] mb-2.5">
                    CALL US:
                  </h3>
                  <p className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                    <a href="tel:+9118004324534" className="hover:text-black transition-colors block">
                      +91 1800 432 45 34
                    </a>
                    <a href="tel:+9118004324535" className="hover:text-black transition-colors block">
                      +91 1800 432 45 35
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em] mb-2.5">
                    MAIL US:
                  </h3>
                  <p className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                    <a href="mailto:contact@vynentra.in" className="hover:text-black transition-colors block">
                      contact@vynentra.in
                    </a>
                  </p>
                </div>

                {/* Socials - Clean raw icons without borders matching reference image */}
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em] mb-3">
                    WE ARE IN SOCIALS:
                  </h3>
                  <div className="flex items-center gap-5 pt-1">
                    <a 
                      href="https://x.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="X (Twitter)"
                      className="text-neutral-900 hover:opacity-60 transition-opacity"
                    >
                      <TwitterIcon className="w-[18px] h-[18px]" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Facebook"
                      className="text-neutral-900 hover:opacity-60 transition-opacity"
                    >
                      <FacebookIcon className="w-[18px] h-[18px]" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram"
                      className="text-neutral-900 hover:opacity-60 transition-opacity"
                    >
                      <InstagramIcon className="w-[18px] h-[18px]" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      className="text-neutral-900 hover:opacity-60 transition-opacity"
                    >
                      <LinkedinIcon className="w-[18px] h-[18px]" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Right Column: Warm Beige Form Card (Slides in from Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 bg-[#F8F7F4] rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 lg:p-14 border border-neutral-200/60"
            >
              <h3 className="text-[28px] sm:text-[32px] font-bold text-neutral-950 mb-2 tracking-tight">
                Drop us a line
              </h3>
              
              <p className="text-[13.5px] text-neutral-500 mb-8 sm:mb-10 font-normal">
                Your email address will not be published. Required fields are marked *
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
                
                {/* Name */}
                <div className="flex flex-col border-b border-neutral-300 pb-2.5 focus-within:border-black transition-colors">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent text-[15px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none w-full"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col border-b border-neutral-300 pb-2.5 focus-within:border-black transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent text-[15px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none w-full"
                  />
                </div>

                {/* Website */}
                <div className="flex flex-col border-b border-neutral-300 pb-2.5 focus-within:border-black transition-colors">
                  <input
                    type="text"
                    placeholder="Website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="bg-transparent text-[15px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none w-full"
                  />
                </div>

                {/* Comment / Message */}
                <div className="flex flex-col border-b border-neutral-300 pb-2.5 focus-within:border-black transition-colors">
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Comment *"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="bg-transparent text-[15px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none w-full resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="submit"
                    className="h-[50px] px-9 rounded-full border border-black text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.06em] text-neutral-900 hover:bg-black hover:text-white transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
                  >
                    {isSubmitted ? "MESSAGE SENT ✓" : "GET IN TOUCH"}
                  </button>

                  {isSubmitted && (
                    <span className="text-xs font-semibold text-emerald-700">
                      Thank you! We will reach out shortly.
                    </span>
                  )}
                </div>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Full-Width Interactive Grayscale Map Section (Matching reference Image 2) */}
      <section className="w-full relative h-[460px] sm:h-[520px] md:h-[580px] overflow-hidden bg-neutral-100 border-t border-neutral-200">
        
        {/* Embedded Clean Google Map */}
        <iframe
          title="Vynentra Clean Energy Location Map"
          src="https://maps.google.com/maps?q=Gujarat%2C%20India&t=&z=7&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(0.95)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

      </section>

      {/* Footer */}
      <FooterV2 />

    </div>
  );
}
