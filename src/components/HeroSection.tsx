import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1139328631?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            border: 'none',
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none'
          }}
          allow="autoplay; fullscreen"
          title="Hero Video"
        />
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
            <Button 
              size="xl"
              className="bg-gradient-to-r from-primary to-accent text-white border-0 hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl"
              onClick={scrollToReservation}
            >
              Je réserve
            </Button>
            
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-full"
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
