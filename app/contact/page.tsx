"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M8 11v5" />
    <circle cx="8" cy="8" r="0.8" fill="currentColor" stroke="none" />
    <path d="M12 16v-2.8a1.8 1.8 0 0 1 3.6 0V16" />
    <path d="M12 11v5" />
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
  const [honeypot, setHoneypot] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const serviceOptions = [
    { value: "wind-installation", label: "1. Wind Turbine Installation & Execution" },
    { value: "captive-hybrid", label: "2. Commercial & Industrial (C&I) Captive Hybrid Power" },
    { value: "maintenance-repowering", label: "3. Operations, Maintenance & Repowering" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.serviceInterest) {
      setStatus({
        type: "error",
        message: "Please select a service.",
      });
      setIsDropdownOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.orgName,
          service: formData.serviceInterest,
          requirements: formData.additionalNotes,
          marketing: formData.marketingConsent,
          honeypot,
          elapsed: Date.now() - startedAt.current,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatus({
        type: "success",
        message: data.message || "Thank you! Your submission has been received.",
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        orgName: "",
        serviceInterest: "",
        additionalNotes: "",
        marketingConsent: false,
      });
      setHoneypot("");

      // Auto-dismiss success message after 6 seconds with cleanup support
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setStatus((prev) => (prev?.type === "success" ? null : prev));
      }, 6000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsLoading(false);
    }
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
      <section id="contact-form" className="w-full py-14 sm:py-24 md:py-28 lg:py-32 bg-white overflow-x-hidden scroll-mt-20">
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              
              <SectionBadge theme="dark" className="w-fit mb-5 sm:mb-6">
                GET IN TOUCH
              </SectionBadge>

              {/* Headline */}
              <h2 className="text-[32px] sm:text-[40px] font-medium text-neutral-950 tracking-tight leading-[1.15] mb-6 sm:mb-7">
                Reach out to us anytime for support and guidance
              </h2>

              {/* Subtitle */}
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-neutral-600 leading-[1.6] font-normal mb-8 sm:mb-14 max-w-xl">
                Get in touch to discuss your renewable energy requirements today. Please give us a call or drop us an email.
              </p>

              {/* 2x2 Details Grid - Pure clean spacing without border */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-7 sm:gap-y-12">
                
                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <MapPin className="w-[18px] h-[18px] text-neutral-950 shrink-0" strokeWidth={2} />
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
                    <Phone className="w-[17px] h-[17px] text-neutral-950 shrink-0" strokeWidth={2} />
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
                    <Mail className="w-[18px] h-[18px] text-neutral-950 shrink-0" strokeWidth={2} />
                    <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em]">
                      EMAIL ID:
                    </h3>
                  </div>
                  <div className="text-[15px] sm:text-[15.5px] text-neutral-800 leading-[1.6] space-y-1">
                    <a href="mailto:info@vynentra.com" className="hover:text-[#0A6B88] font-semibold transition-colors block">
                      info@vynentra.com
                    </a>
                    <a href="mailto:partner@vynentra.com" className="hover:text-[#0A6B88] font-semibold transition-colors block text-[14px]">
                      partner@vynentra.com
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h3 className="text-[13px] font-bold text-neutral-950 uppercase tracking-[0.06em] mb-3">
                    WE ARE ON SOCIALS:
                  </h3>
                  <div className="flex items-center gap-4 pt-0.5">
                    <a 
                      href="https://www.instagram.com/vynentraenergysolutions?srtk=bGdxa3V2am85d3lv&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram"
                      className="text-neutral-900 hover:text-[#0A6B88] transition-colors"
                    >
                      <InstagramIcon className="w-[22px] h-[22px]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/vynentra-energy-solutions-llp/" 
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

            </div>

            {/* Right Column: Clean Light Gray Form Card */}
            <div className="lg:col-span-7 bg-[#F4F6F8] rounded-[14px] p-5 sm:p-8 lg:p-10 border border-neutral-200/60">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                
                {/* Honeypot anti-spam hidden field */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="_vyn_form_verification"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* 2-Column Grid for Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      name="email"
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
                    name="company"
                    required
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
                  <input
                    type="hidden"
                    name="service"
                    value={formData.serviceInterest}
                  />
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center justify-between w-full bg-white border ${isDropdownOpen ? 'border-[#0A6B88]' : 'border-neutral-300'} rounded-full px-4 py-2.5 text-[14.5px] focus:outline-none transition-colors text-left ${formData.serviceInterest ? 'text-neutral-900' : 'text-neutral-500'}`}
                    >
                      <span className="truncate pr-4">
                        {formData.serviceInterest 
                          ? serviceOptions.find(o => o.value === formData.serviceInterest)?.label 
                          : "Select a service option"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-full mt-1.5 bg-white border border-neutral-200 rounded-[12px] shadow-lg overflow-hidden z-50">
                        <div className="py-1">
                          <div className="w-full text-left px-4 py-2 text-[14px] text-neutral-400 bg-neutral-50 cursor-not-allowed select-none border-b border-neutral-100">
                            Select a service option
                          </div>
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, serviceInterest: option.value });
                                setIsDropdownOpen(false);
                                setStatus((prev) => (prev?.message === "Please select a service." ? null : prev));
                              }}
                              className="w-full text-left px-4 py-2.5 text-[14.5px] text-neutral-800 hover:bg-[#EAF3F6] hover:text-[#0A6B88] transition-colors"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional notes */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Tell us about your requirements
                  </label>
                  <textarea
                    rows={3}
                    name="requirements"
                    required
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
                    name="marketing"
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
                  By clicking Submit, we will store and process your personal data that you have entered above. Our privacy policy is <Link href="/privacy" className="underline hover:text-black font-medium">here</Link>. Please read them to understand how we handle and use your personal information and to understand your rights in relation to your personal information.
                </p>

                {/* Status Messages */}
                {status?.type === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-[13.5px] font-medium flex items-center gap-2">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <span>{status.message}</span>
                  </div>
                )}

                {status?.type === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-[13.5px] font-medium flex items-center gap-2">
                    <span className="text-rose-600 font-bold text-base">⚠</span>
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2 flex items-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`h-[50px] px-10 rounded-full border border-black text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 ${
                      isLoading
                        ? "bg-neutral-800 text-white border-neutral-800"
                        : "text-neutral-900 hover:bg-[#0A6B88] hover:border-[#0A6B88] hover:text-white"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterV2 />

    </div>
  );
}
