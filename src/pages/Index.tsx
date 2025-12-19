import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FormulasSection } from "@/components/FormulasSection";
import { AllInclusiveSection } from "@/components/AllInclusiveSection";
import { InfoSection } from "@/components/InfoSection";
import { BirthdaySection } from "@/components/BirthdaySection";
import { GallerySection } from "@/components/GallerySection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { NewsletterModal, useNewsletterModal } from "@/components/NewsletterModal";
const Index = () => {
  const {
    isOpen,
    setIsOpen,
    handleOpenChange
  } = useNewsletterModal();
  return <>
    <Helmet>
      <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
    </Helmet>
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Réservation Section */}
      <section id="reservation" className="bg-background py-0">
        
      </section>
      
      <AboutSection />
      <FormulasSection />
      <AllInclusiveSection />
      <InfoSection />
      <BirthdaySection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer onNewsletterClick={() => setIsOpen(true)} />
      <NewsletterModal open={isOpen} onOpenChange={handleOpenChange} />
    </div>
  </>;
};
export default Index;
  return <>
    <Helmet>
      <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
    </Helmet>
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Réservation Section */}
      <section id="reservation" className="bg-background py-0">
        
      </section>
      
      <AboutSection />
      <FormulasSection />
      <AllInclusiveSection />
      <InfoSection />
      <BirthdaySection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer onNewsletterClick={() => setIsOpen(true)} />
      <NewsletterModal open={isOpen} onOpenChange={handleOpenChange} />
    </div>
  </>;
};
export default Index;