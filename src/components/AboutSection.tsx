import { Zap, Heart, Shield, Users } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const features = [
  {
    icon: Zap,
    title: "Zones Multiples",
    description: "Freestyle, dunk, parcours acrobatique... Il y en a pour tous les goûts !",
  },
  {
    icon: Heart,
    title: "Fun Garanti",
    description: "Des sensations uniques dans une ambiance festive et colorée.",
  },
  {
    icon: Shield,
    title: "100% Sécurisé",
    description: "Équipement dernière génération et personnel qualifié.",
  },
  {
    icon: Users,
    title: "Pour Tous",
    description: "Activités adaptées de 2 à 99 ans, en famille ou entre amis.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={gallery1} 
                alt="Familles s'amusant au trampoline park" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-50" />
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
