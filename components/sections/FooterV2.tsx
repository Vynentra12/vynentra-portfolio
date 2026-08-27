"use client";

import { Logo } from "@/components/brand/Logo";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export function FooterV2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <footer className="w-full bg-[#F5F5F7] text-[#1D1D1F] pt-20 pb-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Section (Wider) */}
          <motion.div variants={itemVariants} className="bg-[#FFFFFF] rounded-2xl p-8 lg:p-10 flex flex-col justify-between w-full lg:w-[65%] shadow-sm">
            
            {/* Top area of Left Box */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <Logo color="#1D1D1F" className="text-[20px] md:text-[24px]" />
              <p className="text-[14px] max-w-[320px] text-[#20252B] leading-relaxed md:text-right">
                Powering a sustainable future through innovative wind energy solutions and renewable infrastructure.
              </p>
            </div>
            
            {/* Bottom area of Left Box */}
            <div className="flex flex-col gap-6 mt-20">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                {/* Links */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2.5">
                    {['About', 'Projects', 'Blog', 'Contact', 'Privacy Policy'].map((link) => (
                      <a key={link} href="#" className="border border-[#1D1D1F]/10 rounded-full px-5 py-2 text-[13px] font-medium text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300">
                        {link}
                      </a>
                    ))}
                  </div>
                  <div className="flex">
                    <a href="#" className="border border-[#1D1D1F]/10 rounded-full px-5 py-2 text-[13px] font-medium text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300">
                      Terms and Conditions
                    </a>
                  </div>
                </div>

                {/* Credit */}
                <p className="text-[12px] text-[#20252B]">
                  © {new Date().getFullYear()} Vynentra. All rights reserved.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Section (Narrower) */}
          <motion.div variants={itemVariants} className="bg-[#FFFFFF] rounded-2xl p-8 lg:p-10 flex flex-col justify-between w-full lg:w-[35%] shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex-row justify-between items-start gap-6">
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D1D1F] mb-4">Social</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: FacebookIcon, label: 'Facebook', href: '#' },
                      { icon: InstagramIcon, label: 'Instagram', href: '#' },
                      { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
                      { icon: TwitterIcon, label: 'Twitter', href: '#' }
                    ].map((social, i) => (
                      <a key={i} href={social.href} aria-label={social.label} className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D1D1F]/10 text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white hover:border-[#1D1D1F] transition-all duration-300 group">
                        <social.icon className="w-[14px] h-[14px] group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 text-[13px] font-medium text-[#20252B] xl:text-right">
                  <a href="mailto:hello@vynentra.in" className="hover:text-[#1D1D1F] transition-colors">hello@vynentra.in</a>
                  <a href="tel:+910000000" className="hover:text-[#1D1D1F] transition-colors">+91 0000000</a>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <h4 className="text-[14px] font-semibold text-[#1D1D1F] mb-4">Subscribe to our newsletter</h4>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-[#1D1D1F]/10 rounded-full py-3.5 pl-5 pr-14 text-[13px] text-[#1D1D1F] placeholder:text-[#20252B]/60 focus:outline-none focus:border-[#1D1D1F] focus:ring-1 focus:ring-[#1D1D1F] transition-all duration-300"
                  required
                />
                <button type="submit" aria-label="Subscribe" className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#1D1D1F] text-white rounded-full overflow-hidden hover:bg-[#1D1D1F]/90 transition-colors duration-300 group/btn">
                  <div className="w-full h-full relative flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 absolute transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-8" />
                    <ArrowRight className="w-3.5 h-3.5 absolute -translate-x-8 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-0" />
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
