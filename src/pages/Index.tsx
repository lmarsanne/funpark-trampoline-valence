import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FormulasSection } from "@/components/FormulasSection";
import { InfoSection } from "@/components/InfoSection";
import { BirthdaySection } from "@/components/BirthdaySection";
import { GallerySection } from "@/components/GallerySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FormulasSection />
      <InfoSection />
      <BirthdaySection />
      <GallerySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
