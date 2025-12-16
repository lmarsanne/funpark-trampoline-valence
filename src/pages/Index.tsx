import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FormulasSection } from "@/components/FormulasSection";
import { InfoSection } from "@/components/InfoSection";
import { BirthdaySection } from "@/components/BirthdaySection";
import { GallerySection } from "@/components/GallerySection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Calendar } from "lucide-react";
const Index = () => {
  const reservationUrl = "https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Fadd-to-cart%2FXSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V%2Fundefined%2FDEPARTURE";
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Réservation Section */}
      <section id="reservation" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Réservez <span className="text-primary">maintenant</span>
            </h2>

            {/* Bandeau rassurant */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 mb-4">
              

              {/* Points clés */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="text-primary" size={20} />
                  <span>Réservation en moins de 2 minutes</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="text-primary" size={20} />
                  <span>Annulation possible selon conditions</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="text-primary" size={20} />
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </div>

            {/* Iframe */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden" style={{
            height: '800px'
          }}>
              <iframe src={reservationUrl} className="w-full h-full" title="Réservation" style={{
              border: 'none'
            }} />
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <FormulasSection />
      <InfoSection />
      <BirthdaySection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>;
};
export default Index;