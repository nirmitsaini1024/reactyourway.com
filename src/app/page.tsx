import { HeroSection } from "@/components/blocks/hero-section-1";
import { ServicesSection } from "@/components/blocks/services-section";
import { ProcessSection } from "@/components/blocks/process-section";
import { FeaturedProjectsSection } from "@/components/blocks/featured-projects-section";
import { PricingSection } from "@/components/blocks/pricing-section";
import { BentoGridDemo } from "@/components/ui/demo";
import Featured_05 from "@/components/ui/globe-feature-section";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <FeaturedProjectsSection />
    <BentoGridDemo />
    <PricingSection />
    <Featured_05 />
   </div>
  );
}
