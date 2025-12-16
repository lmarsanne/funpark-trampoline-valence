import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="pt-16">
      {/* Title Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent py-6 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1.5 mb-4 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Nouveau</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-3 md:mb-4 leading-tight animate-fade-in-up font-title">
            <span className="text-gradient-title drop-shadow-lg">Trampoline Park</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-white/90">
              à Saint-Marcel-lès-Valence
            </span>
          </h1>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full bg-gradient-to-r from-primary via-primary to-accent">
        <div className="w-full md:container md:mx-auto px-0 md:px-4 py-2 md:py-4">
          <div className="w-full md:max-w-6xl md:mx-auto">
            <div className="aspect-[9/16] md:aspect-video overflow-hidden rounded-none md:rounded-2xl">
              <video src="https://qxnnyyksfohothijwlas.supabase.co/storage/v1/object/public/video/Video%20Project%201%20(1).mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline title="Vidéo Trampoline Park" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-[20vh] md:min-h-[25vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-primary to-accent">
        <div className="relative z-10 container mx-auto px-4 py-4 md:py-5 text-center">
          <div className="animate-fade-in-up">
            <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed">
              <strong className="font-bold">400 m²</strong> d'activités pour petits et grands dans un espace sécurisé, fun et <strong className="font-bold">100 % sensations.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white border-0 hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl" onClick={scrollToReservation}>
                Je réserve
              </Button>
              
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-full" asChild>
                <a href="#formules">
                  Voir les tarifs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};