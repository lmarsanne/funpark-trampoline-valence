import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-trampoline.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Découvrez notre <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Trampoline Park
            </span>
            <br />
            à Valence
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong className="font-bold">400 m²</strong> d'activités pour petits et grands dans un espace sécurisé, fun et <strong className="font-bold">100 % sensations.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* @ts-ignore */}
            <guidap-activity-reserve-button activity-uuid="x3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV"></guidap-activity-reserve-button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="#formules">
                Voir les tarifs
              </a>
            </Button>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ArrowRight className="text-white rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};
