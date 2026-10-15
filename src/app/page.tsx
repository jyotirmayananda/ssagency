import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { VehicleShowcaseSection } from '@/components/home/VehicleShowcaseSection';
import { AboutSplitSection } from '@/components/home/AboutSplitSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ContactCTASection } from '@/components/home/ContactCTASection';

export default function HomePage() {
  return (
    <>
      {/* 01. Cinematic Hero */}
      <HeroSection />

      {/* 02. Trust Introduction */}
      <TrustSection />

      {/* 03. Our Services */}
      <ServicesSection />

      {/* 04. Company Vehicle Showcase */}
      <VehicleShowcaseSection />

      {/* 05. About S.S. Agency */}
      <AboutSplitSection />

      {/* 06. Why Choose Us */}
      <WhyChooseSection />

      {/* 07. Our Working Process */}
      <ProcessSection />

      {/* 08. Industries & Clients */}
      <IndustriesSection />

      {/* 09. Contact CTA */}
      <ContactCTASection />
    </>
  );
}
