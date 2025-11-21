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
    <section className="pt-16">
      {/* Title Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            Découvrez notre <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Trampoline Park
            </span>
            <br />
            à Valence
          </h1>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full bg-gradient-to-r from-primary via-primary to-accent">
        <div className="container mx-auto px-4 py-8">
          <div className="aspect-video max-w-6xl mx-auto">
            <iframe
              src="https://player.vimeo.com/video/1139328631?autoplay=1&loop=1&byline=0&title=0&muted=1"
              className="w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              title="Vidéo Trampoline Park"
            />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-primary to-accent">
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          
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

        </div>
      </div>
    </section>
  );
};
