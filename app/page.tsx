import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <CaseStudySection />
      <BlogSection />
      <FAQSection />
      <ClosingCTA />
      <Footer />
    </>
  );
}
