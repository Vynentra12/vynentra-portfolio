'use client';

import React from 'react';
import { HeroSectionV2 } from '@/components/sections/HeroSectionV2';
import { MissionSectionV2 } from '@/components/sections/MissionSectionV2';
import { ImpactSectionV2 } from '@/components/sections/ImpactSectionV2';
import { SolutionsSectionV2 } from '@/components/sections/SolutionsSectionV2';
import { ProcessSectionV2 } from '@/components/sections/ProcessSectionV2';
import { CaseStudySectionV2 } from '@/components/sections/CaseStudySectionV2';
import { FeaturedProjectsSectionV2 } from '@/components/sections/FeaturedProjectsSectionV2';
import { WhyChooseUsSectionV2 } from '@/components/sections/WhyChooseUsSectionV2';
import { BlogSectionV2 } from '@/components/sections/BlogSectionV2';
import { FAQSectionV2 } from '@/components/sections/FAQSectionV2';
import { CTASectionV2 } from '@/components/sections/CTASectionV2';
import { FooterV2 } from '@/components/sections/FooterV2';

export default function Home() {
  return (
    <div className="bg-brand-midnight text-brand-softwhite min-h-screen">
      <HeroSectionV2 />
      <MissionSectionV2 />
      <ImpactSectionV2 />
      <WhyChooseUsSectionV2 />
      <SolutionsSectionV2 />
      {/* <ProcessSectionV2 /> */}
      <CaseStudySectionV2 />
      <FeaturedProjectsSectionV2 />
      <BlogSectionV2 />
      <FAQSectionV2 />
      <CTASectionV2 />
      <FooterV2 />
    </div>
  );
}
