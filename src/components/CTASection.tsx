import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
export const CTASection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section className="py-12 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Prêt à sauter ?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Réservez votre session dès maintenant et vivez une expérience <strong>inoubliable</strong> au Fun Park Valence !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group bg-white text-primary hover:bg-white/90 shadow-2xl"
              onClick={scrollToReservation}
            >
              Réserver maintenant
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 text-white border-white/50 hover:bg-white/20 backdrop-blur-sm"
              onClick={scrollToReservation}
            >
              Demander un devis groupe
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-12 grid md:grid-cols-3 gap-6 text-white">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-semibold">Adresse</p>
              <p className="text-sm text-white/80">Saint-Marcel-lès-Valence</p>
              <p className="text-sm text-white/80">Près de Valence (26)</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-semibold">Téléphone</p>
              <a href="tel:0769482714" className="text-sm text-white/80 hover:text-white transition-colors">
                07.69.48.27.14 (WhatsApp dispo ✅)
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold">Email</p>
              <a href="mailto:contact@valence-bowling.com" className="text-sm text-white/80 hover:text-white transition-colors">valencebowling@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};