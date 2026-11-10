import type { Metadata } from 'next';
import { HeroSectionV2 } from '@/components/sections/HeroSectionV2';
import { MissionSectionV2 } from '@/components/sections/MissionSectionV2';
import { ProcessSectionV2 } from '@/components/sections/ProcessSectionV2';
import { WhyChooseUsSectionV2 } from '@/components/sections/WhyChooseUsSectionV2';
import { SolutionsSectionV2 } from '@/components/sections/SolutionsSectionV2';
import { CaseStudySectionV2 } from '@/components/sections/CaseStudySectionV2';
import { FeaturedProjectsSectionV2 } from '@/components/sections/FeaturedProjectsSectionV2';
import { BlogSectionV2 } from '@/components/sections/BlogSectionV2';
import { FAQSectionV2 } from '@/components/sections/FAQSectionV2';
import { CTASectionV2 } from '@/components/sections/CTASectionV2';
import { FooterV2 } from '@/components/sections/FooterV2';
import { SITE_DESCRIPTION, SITE_NAME, pageMetadata } from '@/lib/seo';

const homeMetadata = pageMetadata({
  title: 'Renewable Energy Solutions & Project Development',
  description: SITE_DESCRIPTION,
  path: '/',
});

export const metadata: Metadata = {
  ...homeMetadata,
  // Home uses an absolute title so it reads "Vynentra | ..." rather than "... | Vynentra".
  title: { absolute: `${SITE_NAME} | Renewable Energy Solutions & Project Development` },
};

export default function Home() {
  return (
    <div className="bg-brand-midnight text-brand-softwhite min-h-screen">
      <HeroSectionV2 />
      <MissionSectionV2 />
      <ProcessSectionV2 />
      <WhyChooseUsSectionV2 />
      <SolutionsSectionV2 />
      <CaseStudySectionV2 />
      <FeaturedProjectsSectionV2 />
      <BlogSectionV2 />
      <FAQSectionV2 />
      <CTASectionV2
        badgeText="ENERGY, REIMAGINED"
        title="Power Your Next Move"
        buttonText="Get Started"
        buttonLink="/contact#contact-form"
      />
      <FooterV2 />
    </div>
  );
}
