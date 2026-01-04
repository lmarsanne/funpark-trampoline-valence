import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onNewsletterClick?: () => void;
}

export const Footer = ({ onNewsletterClick }: FooterProps) => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#0A0F43' }}>
      <div className="container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Informations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Valence Fun Park</h3>
            <p className="text-white/70 mb-4">
              Valence Bowling et Valence Trampoline, Billards, Karaoké, Arcade et bien plus encore !
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>30 Rue de la Roche / Avenue de Provence</p>
                  <p>26320 Saint-Marcel-lès-Valence</p>
                </div>
              </div>
              
              <a 
                href="mailto:valencebowling@gmail.com" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>valencebowling@gmail.com</span>
              </a>
              
              <a 
                href="https://wa.me/33769482714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>07.69.48.27.14 WhatsApp ✅</span>
              </a>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.facebook.com/valencebowling" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/valence_bowling/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            {onNewsletterClick && (
              <Button
                onClick={onNewsletterClick}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                S'inscrire à la newsletter
              </Button>
          )}
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
            <div className="space-y-1 text-white/80">
              <p><span className="font-medium text-white">Lundi & Mardi :</span> Fermé</p>
              <p><span className="font-medium text-white">Mercredi :</span> 14:00 – 00:00</p>
              <p><span className="font-medium text-white">Jeudi :</span> 18:00 – 00:00</p>
              <p><span className="font-medium text-white">Vendredi :</span> 18:00 – 02:00</p>
              <p><span className="font-medium text-white">Samedi :</span> 14:00 – 02:00</p>
              <p><span className="font-medium text-white">Dimanche :</span> 14:00 – 20:00</p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Plan d'accès</h3>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.7!2d4.9283!3d44.9533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b514a57c8d7b1d%3A0x8d3b8b8b8b8b8b8b!2s30%20Rue%20de%20la%20Roche%2C%2026320%20Saint-Marcel-l%C3%A8s-Valence!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Valence Fun Park"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Valence Fun Park - Trampoline Park. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
