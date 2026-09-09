'use client';

import React, { useState } from 'react';
import { HeroSectionV2 } from '@/components/sections/HeroSectionV2';
import { MissionSectionV2 } from '@/components/sections/MissionSectionV2';
import { ProcessSectionV2 } from '@/components/sections/ProcessSectionV2';
import { ImpactSectionV2 } from '@/components/sections/ImpactSectionV2';
import { SolutionsSectionV2 } from '@/components/sections/SolutionsSectionV2';
import { CaseStudySectionV2 } from '@/components/sections/CaseStudySectionV2';
import { FeaturedProjectsSectionV2 } from '@/components/sections/FeaturedProjectsSectionV2';
import { BlogSectionV2 } from '@/components/sections/BlogSectionV2';
import { FAQSectionV2 } from '@/components/sections/FAQSectionV2';
import { FooterV2 } from '@/components/sections/FooterV2';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} duration={4200} />
      <main className={`bg-brand-midnight text-brand-softwhite min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-95' : 'opacity-100'}`}>
        <HeroSectionV2 />
        <MissionSectionV2 />
        <ProcessSectionV2 />
        <ImpactSectionV2 />
        <SolutionsSectionV2 />
        <CaseStudySectionV2 />
        <FeaturedProjectsSectionV2 />
        <BlogSectionV2 />
        <FAQSectionV2 />
        <FooterV2 />
      </main>
    </>
  );
}
