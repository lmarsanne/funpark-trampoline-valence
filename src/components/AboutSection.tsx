import { Zap, Heart, Shield, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import aboutGallery1 from "@/assets/about-gallery-1.png";
import aboutGallery2 from "@/assets/about-gallery-2.png";
import aboutGallery3 from "@/assets/about-gallery-3.png";
import aboutGallery4 from "@/assets/about-gallery-4.png";

const galleryImages = [
  { src: aboutGallery1, alt: "Familles sautant sur les trampolines" },
  { src: aboutGallery2, alt: "Enfants s'amusant dans le Fun Park" },
  { src: aboutGallery3, alt: "Groupe de jeunes au trampoline park" },
  { src: aboutGallery4, alt: "Enfants jouant au basket sur trampolines" },
];

const features = [{
  icon: Zap,
  title: "Zones Multiples",
  description: "Freestyle, dunk, parcours acrobatique... Il y en a pour tous les goûts !"
}, {
  icon: Heart,
  title: "Fun Garanti",
  description: "Des sensations uniques dans une ambiance festive et colorée."
}, {
  icon: Shield,
  title: "100% Sécurisé",
  description: "Équipement dernière génération et personnel qualifié."
}, {
  icon: Users,
  title: "Pour Tous",
  description: "Activités adaptées de 2 à 99 ans, en famille ou entre amis."
}];

export const AboutSection = () => {
  const autoplayPlugin = Autoplay({ 
    delay: 4000, 
    stopOnInteraction: true,
    stopOnMouseEnter: true 
  });

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Gallery */}
          <div className="relative animate-scale-in">
            <Carousel 
              className="w-full" 
              opts={{ loop: true }}
              plugins={[autoplayPlugin]}
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full aspect-[4/5] md:aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 h-10 w-10 bg-white/90 hover:bg-white shadow-lg" />
              <CarouselNext className="right-2 md:right-4 h-10 w-10 bg-white/90 hover:bg-white shadow-lg" />
            </Carousel>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-50" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Un parc pensé pour{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                tous les âges
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bienvenue au <strong className="text-foreground">Fun Park Valence</strong> ! Notre trampoline park de 400 m² 
              est l'endroit idéal pour vivre des moments inoubliables. Que ce soit pour un anniversaire, 
              une sortie en famille ou entre amis, vous trouverez votre bonheur dans nos différentes zones d'activités.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Des espaces de détente sont également prévus pour les parents qui souhaitent se relaxer 
              pendant que les enfants s'amusent en toute sécurité.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
