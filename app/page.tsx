import React from 'react';
import { HeroSectionV2 } from '@/components/sections/HeroSectionV2';
import { MissionSectionV2 } from '@/components/sections/MissionSectionV2';
import { ProcessSectionV2 } from '@/components/sections/ProcessSectionV2';
import { ImpactSectionV2 } from '@/components/sections/ImpactSectionV2';
import { SolutionsSectionV2 } from '@/components/sections/SolutionsSectionV2';
import { CaseStudySectionV2 } from '@/components/sections/CaseStudySectionV2';
import { FeaturedProjectsSectionV2 } from '@/components/sections/FeaturedProjectsSectionV2';
import { BlogSectionV2 } from '@/components/sections/BlogSectionV2';
import { FAQSectionV2 } from '@/components/sections/FAQSectionV2';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { FooterV2 } from '@/components/sections/FooterV2';

export default function Home() {
  return (
    <main className="bg-brand-midnight text-brand-softwhite min-h-screen">
      <HeroSectionV2 />
      <MissionSectionV2 />
      <ProcessSectionV2 />
      <ImpactSectionV2 />
      <SolutionsSectionV2 />
      <CaseStudySectionV2 />
      <FeaturedProjectsSectionV2 />
      <BlogSectionV2 />
      <FAQSectionV2 />
      {/* Temporarily hidden for UI review - easily unhide when ready */}
      {/* <ClosingCTA /> */}
      <FooterV2 />
    </main>
  );
}
