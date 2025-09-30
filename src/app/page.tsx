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
    <section id="services"><ServicesSection /></section>
    <section id="process"><ProcessSection /></section>
    <section id="work"><FeaturedProjectsSection /></section>
    <section id="benefits">
     <div className="mx-auto max-w-7xl px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Why work with us</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">Fast launches, custom builds, performance and SEO baked in.</p>
     </div>
     <BentoGridDemo />
    </section>
    <section id="pricing"><PricingSection /></section>
    <section id="contact"><Featured_05 /></section>
   </div>
  );
}
