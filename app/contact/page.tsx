"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FooterV2 } from "@/components/sections/FooterV2";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronDown, MapPin, Phone, Mail, Share2, ArrowLeft } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zm1.39 9.74v-8.37H5.07v8.37h2.78z" />
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
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-14 pb-12 sm:pb-16 md:pb-20 pt-32 sm:pt-40">
          <div className="w-full">
            {/* Back to Home Link (Pure text with arrow, no background, no border) */}
            <div className="mb-4 sm:mb-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-[0.14em] text-white/80 hover:text-white uppercase transition-colors select-none"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Same font size as ServicesPage Hero Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-medium text-white tracking-tight leading-[1.1] drop-shadow-sm mb-4 sm:mb-6 select-text">
              Let&apos;s develop the right energy solution for your requirement.
            </h1>

            {/* Subtitle matching ServicesPage Hero Paragraph */}
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-white/80 leading-[1.6] max-w-3xl drop-shadow-sm font-medium">
              Tell us about your site, your energy needs and what you are looking to achieve. Our team will help you explore the renewable energy solution that makes sense for your project.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPLIT CONTACT SECTION (Direct, Technical, Authoritative) ── */}
      <section className="py-20 md:py-28 bg-[#F4F6F8] border-b border-neutral-200">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Inquiries & Physical Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <SectionBadge theme="dark" className="mb-4 w-fit">
                  CONTACT DETAILS
                </SectionBadge>
                
                <h2 className="text-[28px] sm:text-[34px] font-medium text-neutral-900 tracking-tight leading-snug mb-6">
                  Get in touch with our renewable project engineering team.
                </h2>
                
                <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed mb-10 font-normal">
                  Whether you are planning a utility wind site, a C&I captive solar-wind installation, or exploring commercial partnership models, we are ready to assist.
                </p>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#0A6B88] shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        Headquarters
                      </h4>
                      <p className="text-[15px] sm:text-[15.5px] text-neutral-900 font-medium leading-relaxed">
                        Surat, Gujarat, India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#0A6B88] shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        Direct Email
                      </h4>
                      <a 
                        href="mailto:contact@vynentra.com"
                        className="text-[15px] sm:text-[15.5px] text-neutral-900 font-medium hover:text-[#0A6B88] transition-colors"
                      >
                        contact@vynentra.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#0A6B88] shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        Corporate Phone
                      </h4>
                      <a 
                        href="tel:+918238888062"
                        className="text-[15px] sm:text-[15.5px] text-neutral-900 font-medium hover:text-[#0A6B88] transition-colors"
                      >
                        +91 82388 88062
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow & Social Channels */}
              <div className="pt-10 mt-10 border-t border-neutral-300">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5 text-[#0A6B88]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A6B88]">
                      Follow Us On Social Channels
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <a 
                      href="https://www.instagram.com/vynentra?srtk=bGdxa3V2am85d3lv&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200"
                    >
                      <InstagramIcon className="w-[18px] h-[18px]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/vynentra-energy-solutions/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:text-[#0A6B88] hover:border-[#0A6B88] transition-all duration-200"
                    >
                      <LinkedinIcon className="w-[16px] h-[16px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Structured Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-12 rounded-[24px] border border-neutral-200 shadow-sm" id="contact-form">
              <h3 className="text-[20px] sm:text-[22px] font-medium text-neutral-900 tracking-tight mb-2">
                Initiate Project Consultation
              </h3>
              <p className="text-[14px] text-neutral-600 mb-8 font-normal">
                Please complete the technical details below. Our development team will review your parameters and follow up within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. ramesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Torrent Textiles Ltd."
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-[14.5px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#0A6B88] transition-colors w-full"
                    />
                  </div>

                  {/* Service Interest Custom Dropdown */}
                  <div className="flex flex-col relative" ref={dropdownRef}>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Solution Interest *
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center justify-between w-full bg-white border ${isDropdownOpen ? 'border-[#0A6B88]' : 'border-neutral-300'} rounded-full px-4 py-2.5 text-[14.5px] focus:outline-none transition-colors text-left ${formData.serviceInterest ? 'text-neutral-900' : 'text-neutral-500'}`}
                    >
                      <span className="truncate pr-4">
                        {formData.serviceInterest 
                          ? serviceOptions.find(o => o.value === formData.serviceInterest)?.label 
                          : "Select renewable solution"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-neutral-600 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-neutral-300 rounded-[16px] shadow-lg z-20 overflow-hidden py-1">
                        <div className="max-h-[220px] overflow-y-auto">
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
