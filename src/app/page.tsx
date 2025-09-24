import { HeroSection } from "@/components/blocks/hero-section-1";
import { ServicesSection } from "@/components/blocks/services-section";
import { ProcessSection } from "@/components/blocks/process-section";
import { FeaturedProjectsSection } from "@/components/blocks/featured-projects-section";
import { TestimonialsSection } from "@/components/blocks/testimonials-section";
import { PricingSection } from "@/components/blocks/pricing-section";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <FeaturedProjectsSection />
    <TestimonialsSection />
    <PricingSection />
   </div>
  );
}
