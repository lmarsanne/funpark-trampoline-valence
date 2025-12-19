import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export const CTASection = () => {
  return <section className="py-12 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          
          {/* CTA Button */}
          <div className="pt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à sauter ?
            </h2>
            <a 
              href="https://valence-trampoline.com/guidap-reservation.html" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-bold rounded-xl bg-[hsl(var(--funpark-cta-solid))] text-[hsl(var(--funpark-cta-solid-foreground))] hover:bg-[hsl(var(--funpark-cta-solid-hover))] hover:scale-105 transition-all duration-300 shadow-[var(--shadow-cta-solid)]"
            >
              🎉 Réserver maintenant
              <ArrowRight className="w-6 h-6" />
            </a>
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
              <a href="tel:0769482714" className="text-sm text-white/80 hover:text-white transition-colors" onClick={trackPhoneClick}>
                07.69.48.27.14 (WhatsApp dispo ✅)
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-semibold">Email</p>
              <a href="mailto:contact@valence-bowling.com" className="text-sm text-white/80 hover:text-white transition-colors" onClick={trackEmailClick}>valencebowling@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};