import { useEffect } from "react";
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
  const { isOpen, setIsOpen, handleOpenChange } = useNewsletterModal();
  // Désactiver la restauration automatique du scroll et forcer le haut de page
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const forceTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    forceTop();
    const intervalId = setInterval(forceTop, 20);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return <>
    <Helmet>
      <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
    </Helmet>
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Réservation Section */}
      <section id="reservation" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Réservez <span className="text-primary">maintenant</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Réservez votre session en quelques clics et venez profiter de nos activités !
          </p>
          <a
            href="https://valence-trampoline.com/guidap-reservation.html"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Réserver
          </a>
        </div>
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