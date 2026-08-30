import React from 'react';
import { FooterV2 } from '@/components/sections/FooterV2';
import { ImpactSectionV2 } from '@/components/sections/ImpactSectionV2';
import { FAQSectionV2 } from '@/components/sections/FAQSectionV2';
import { BlogSectionV2 } from '@/components/sections/BlogSectionV2';
import { MissionSectionV2 } from '@/components/sections/MissionSectionV2';
import { ProcessSectionV2 } from '@/components/sections/ProcessSectionV2';
import { CaseStudySectionV2 } from '@/components/sections/CaseStudySectionV2';
import { FeaturedProjectsSectionV2 } from '@/components/sections/FeaturedProjectsSectionV2';
import { HeroSectionV2 } from '@/components/sections/HeroSectionV2';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ClosingCTA } from '@/components/sections/ClosingCTA';

export default function Home() {
  const sectionsBeforeImpact = [
    "Hero Section",
    "Mission Section",
    "Process Section"
  ];

  const sectionsAfterImpact = [
    "Why Choose Us Section",
    "Case Study Section",
    "Featured Projects Section",
    "Blog Section",
    "FAQ Section",
    "Closing CTA"
  ];

  return (
    <main className="bg-brand-midnight text-brand-softwhite min-h-screen">
      {sectionsBeforeImpact.map((section, idx) => {
        if (section === "Hero Section") {
          return <HeroSectionV2 key={idx} />;
        }
        if (section === "Mission Section") {
          return <MissionSectionV2 key={idx} />;
        }
        if (section === "Process Section") {
          return <ProcessSectionV2 key={idx} />;
        }
        return (
          <section 
            key={idx} 
            className="h-[50vh] md:h-screen flex items-center"
          >
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold">{section}</h2>
            </div>
          </section>
        );
      })}
      
      <ImpactSectionV2 />
      
      {sectionsAfterImpact.map((section, idx) => {
        if (section === "FAQ Section") {
          return <FAQSectionV2 key={idx} />;
        }
        if (section === "Blog Section") {
          return <BlogSectionV2 key={idx} />;
        }
        if (section === "Case Study Section") {
          return <CaseStudySectionV2 key={idx} />;
        }
        if (section === "Featured Projects Section") {
          return <FeaturedProjectsSectionV2 key={idx} />;
        }
        if (section === "Why Choose Us Section") {
          return <WhyChooseUsSection key={idx} />;
        }
        if (section === "Closing CTA") {
          return <ClosingCTA key={idx} />;
        }
        return (
          <section 
            key={idx} 
            className="h-[50vh] md:h-screen flex items-center"
          >
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold">{section}</h2>
            </div>
          </section>
        );
      })}
      <FooterV2 />
    </main>
  );
}
