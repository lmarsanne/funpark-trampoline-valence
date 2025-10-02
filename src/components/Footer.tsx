import { Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--funpark-orange))] to-[hsl(var(--funpark-yellow))] bg-clip-text text-transparent">
              Fun Park Valence
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Le trampoline park nouvelle génération à Valence. 400 m² de fun et de sensations pour toute la famille !
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#formules" className="hover:text-white transition-colors">
                  Nos formules
                </a>
              </li>
              <li>
                <a href="https://www.valence-bowling.com/trampoline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Réserver en ligne
                </a>
              </li>
              <li>
                <a href="https://www.valence-bowling.com/groupe/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Groupes & Anniversaires
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@valence-bowling.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/70 pt-2">
              Saint-Marcel-lès-Valence<br />
              Près de Valence (Drôme 26)
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Fun Park Valence - Trampoline Park. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
