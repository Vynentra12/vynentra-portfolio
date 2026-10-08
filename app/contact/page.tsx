"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";

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
    orgName: "",
    serviceInterest: "",
    additionalNotes: "",
    marketingConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceOptions = [
    { value: "wind-installation", label: "1. Wind Turbine Installation & Execution" },
    { value: "captive-hybrid", label: "2. Commercial & Industrial (C&I) Captive Hybrid Power" },
    { value: "maintenance-repowering", label: "3. Operations, Maintenance & Repowering" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        orgName: "",
        serviceInterest: "",
        additionalNotes: "",
        marketingConsent: false,
      });
    }, 4000);
  };

  return (
    <div className="w-full bg-white text-neutral-900 font-sans min-h-screen">
      
      {/* ── HERO SECTION (100vh Matching Services Page exactly) ── */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/10041227/pexels-photo-10041227.jpeg"
            alt="Customer support contact background"
            className="w-full h-full object-cover object-[center_35%] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-14 pb-8 sm:pb-10 md:pb-12 pt-32 sm:pt-40">
          <div className="w-full">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] sm:text-[12px] font-medium uppercase px-4 py-1.5 rounded-full backdrop-blur-sm">
                CONTACT US
              </span>
            </div>
            {/* Same font size as ServicesPage Hero Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-6 select-text">
              Let's develop the right energy solution for your requirement.
            </h1>

            {/* Subtitle matching ServicesPage Hero Paragraph */}
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm mb-10 sm:mb-12 font-medium">
              Tell us about your site, your energy needs and what you are looking to achieve. Our team will help you explore the renewable energy solution that makes sense for your project.
            </p>
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="w-full border-b border-white/20 pb-4">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.08em]">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <span className="text-white/40 font-normal select-none">/</span>
              <span className="text-[#AEF977] select-none">CONTACTS</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main 2-Column Contact Info & Form Section */}
      <section className="w-full py-14 sm:py-24 md:py-28 lg:py-32 bg-white overflow-x-hidden">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column: Contact Info (Slides in from Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-start"
            >
              
              <SectionBadge theme="dark" className="w-fit mb-5 sm:mb-6">
                GET IN TOUCH
              </SectionBadge>

              {/* Headline */}
              <h2 className="text-[32px] sm:text-[40px] font-medium text-neutral-950 tracking-tight leading-[1.1] mb-6 sm:mb-7">
                Reach out to us<br className="hidden sm:inline" /> anytime for support<br className="hidden sm:inline" /> and guidance
              </h2>

              {/* Subtitle */}
              <p className="text-[14px] sm:text-[15px] md:text-[17px] text-neutral-600 leading-[1.6] font-medium mb-8 sm:mb-14 max-w-xl">
                Get in touch to discuss your renewable energy requirements today.
                <br className="hidden sm:inline" />
                {" "}Please give us a call or drop us an email.
              </p>

              {/* 2x2 Details Grid - Pure clean spacing without border */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-7 sm:gap-y-12">
                
                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <MapPin className="w-[15px] h-[15px] text-neutral-950" strokeWidth={2.5} />
                    <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em]">
                      WE ARE HERE:
                    </h3>
                  </div>
                  <p className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                    Vynentra Clean Energy HQ,<br />
                    Gujarat &amp; Rajasthan Corridor, India
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Phone className="w-[15px] h-[15px] text-neutral-950" strokeWidth={2.5} />
                    <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em]">
                      CONTACT NUMBER:
                    </h3>
                  </div>
                  <p className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                    <a href="tel:+917777024826" className="hover:text-[#0A6B88] font-semibold transition-colors block">
                      +91 77770 24826
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Mail className="w-[15px] h-[15px] text-neutral-950" strokeWidth={2.5} />
                    <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em]">
                      EMAIL ID:
                    </h3>
                  </div>
                  <p className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6]">
                    <a href="mailto:hello@vynentra.in" className="hover:text-[#0A6B88] font-semibold transition-colors block">
                      hello@vynentra.in
                    </a>
                  </p>
                </div>

                {/* Socials */}
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em] mb-3">
                    WE ARE IN SOCIALS:
                  </h3>
                  <div className="flex items-center gap-5 pt-1">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram"
                      className="text-neutral-900 hover:text-[#0A6B88] transition-colors"
                    >
                      <InstagramIcon className="w-[22px] h-[22px]" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      className="text-neutral-900 hover:text-[#0A6B88] transition-colors"
                    >
                      <LinkedinIcon className="w-[22px] h-[22px]" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Right Column: Clean Light Gray Form Card (Slides in from Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-7 bg-[#F4F6F8] rounded-[14px] p-5 sm:p-8 lg:p-10 border border-neutral-200/60"
            >
              <h3 className="text-[22px] sm:text-[24px] font-normal text-neutral-950 mb-2 tracking-tight">
                Contact / Leads Form
              </h3>
              
              <p className="text-[13.5px] text-neutral-500 mb-8 sm:mb-10 font-normal">
                Please fill in the details below. Required fields are marked *
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                
                {/* 2-Column Grid for Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                    />
                  </div>
                </div>

                {/* Org Name */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                  />
                </div>

                {/* “I’d like to know about” dropdown: Custom UI */}
                <div className="flex flex-col relative" ref={dropdownRef}>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    What do you need help with?
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center justify-between w-full bg-white border ${isDropdownOpen ? 'border-[#0A6B88]' : 'border-neutral-300'} rounded-full px-4 py-2.5 text-[14.5px] focus:outline-none transition-colors text-left ${formData.serviceInterest ? 'text-neutral-900' : 'text-neutral-500'}`}
                    >
                      <span className="truncate pr-4">
                        {formData.serviceInterest 
                          ? serviceOptions.find(o => o.value === formData.serviceInterest)?.label 
                          : "Select a service option *"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : -5 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full left-0 w-full mt-1.5 bg-white border border-neutral-200 rounded-[12px] shadow-lg overflow-hidden z-50 ${isDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    >
                      <div className="py-1">
                        <div className="w-full text-left px-4 py-2 text-[14px] text-neutral-400 bg-neutral-50 cursor-not-allowed select-none border-b border-neutral-100">
                          Select a service option *
                        </div>
                        {serviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, serviceInterest: option.value });
                              setIsDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-[14.5px] text-neutral-800 hover:bg-[#EAF3F6] hover:text-[#0A6B88] transition-colors"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Tell us about your requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write your message here..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="bg-white border border-neutral-300 rounded-[16px] px-4 py-3 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full resize-none"
                  />
                </div>

                {/* Sign up for marketing emails checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="marketing-emails-checkbox"
                    checked={formData.marketingConsent}
                    onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-neutral-400 text-[#0A6B88] focus:ring-[#0A6B88] cursor-pointer accent-[#0A6B88]"
                  />
                  <label 
                    htmlFor="marketing-emails-checkbox"
                    className="text-[13px] sm:text-[13.5px] text-neutral-700 leading-snug cursor-pointer select-none font-normal"
                  >
                    Sign up for marketing emails
                  </label>
                </div>

                {/* Privacy disclaimer notice */}
                <p className="text-[12px] sm:text-[12.5px] text-neutral-500 leading-relaxed font-normal pt-1">
                  By clicking Submit, we will store and process your personal data that you have entered above. Our <Link href="/#about" className="underline hover:text-black font-medium">privacy policy is here</Link>. Please read them to understand how we handle and use your personal information and to understand your rights in relation to your personal information.
                </p>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="h-[50px] px-10 rounded-full border border-black text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.06em] text-neutral-900 hover:bg-[#0A6B88] hover:border-[#0A6B88] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    {isSubmitted ? "SUBMITTED ✓" : "SUBMIT"}
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

      {/* Footer */}
      <FooterV2 />

    </div>
  );
}
