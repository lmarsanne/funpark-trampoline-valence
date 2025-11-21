import { Facebook, Instagram, Mail } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Fun Park Valence - Trampoline Park. Tous droits réservés.</p>
        </div>
      </div>
    </footer>;
};