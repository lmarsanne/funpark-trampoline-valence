import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Baby, Users, Sparkles, Check } from "lucide-react";

const formulas = [
  {
    icon: Baby,
    title: "Baby Jumper",
    age: "2-6 ans",
    description: "Un espace adapté aux tout-petits pour découvrir le plaisir du trampoline en toute sécurité.",
    features: [
      "Zone sécurisée et adaptée",
      "Surveillance constante",
      "Activités ludiques et éducatives",
      "Environnement coloré et fun",
    ],
    color: "from-[hsl(var(--funpark-pink))] to-[hsl(var(--funpark-yellow))]",
  },
  {
    icon: Users,
    title: "Kid Jumper",
    age: "Session de 1h 12,00 €",
    description: "Toutes les zones du parc accessibles pour vivre des sensations fortes et repousser ses limites !",
    features: [
      "Accès à toutes les zones",
      "Parcours acrobatique",
      "Zone dunk et freestyle",
      "Défis entre amis",
    ],
    color: "from-primary to-accent",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Jumper",
    age: "+18 ans",
    description: "Pour les adultes qui veulent se défouler et retrouver leur âme d'enfant dans une ambiance festive.",
    features: [
      "Accès complet au parc",
      "Sessions entre amis",
      "EVJF / EVG bienvenues",
      "Ambiance musicale fun",
    ],
    color: "from-secondary to-[hsl(var(--funpark-yellow))]",
  },
];

export const FormulasSection = () => {
  return (
    <section id="formules" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Formules
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Réservation à l'heure - Trouvez la formule parfaite selon votre âge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formulas.map((formula, index) => {
            const Icon = formula.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-scale-in ${
                  formula.featured ? "border-primary shadow-[var(--shadow-card)] md:scale-105" : "border-border"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {formula.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAIRE
                    </div>
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${formula.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{formula.title}</h3>
                <p className="text-lg font-semibold text-primary mb-4">{formula.age}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{formula.description}</p>

                <ul className="space-y-3 mb-8">
                  {formula.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={formula.featured ? "hero" : "cta"} 
                  className="w-full"
                  asChild
                >
                  <a href="https://www.valence-bowling.com/trampoline/?g-path=%2Fcart%2Factivities%2FXSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V" target="_blank" rel="noopener noreferrer">
                    Réserver
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Chaussettes antidérapantes obligatoires (2 € en vente sur place)
          </p>
        </div>
      </div>
    </section>
  );
};
