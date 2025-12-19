import { Card } from "@/components/ui/card";
import { Baby, Zap, Check } from "lucide-react";
const formulas = [{
  icon: Baby,
  title: "BABY JUMPER",
  age: "3 à 5 ans",
  prices: ["9€ / 1h", "15€ / 2h"],
  description: "Un espace sécurisé pour les tout-petits. Découverte du trampoline en douceur.",
  features: ["Zone sécurisée et adaptée", "Surveillance constante", "Activités ludiques"],
  color: "from-[hsl(var(--funpark-pink))] to-[hsl(var(--funpark-yellow))]"
}, {
  icon: Zap,
  title: "OPEN JUMP",
  age: "6 ans et +",
  prices: ["13€ / 1h", "21€ / 2h"],
  description: "Accès illimité à toutes les zones ! Sensations fortes pour enfants, ados et adultes.",
  features: ["Accès à toutes les zones", "Parcours acrobatique", "Zone dunk et freestyle", "Airbag géant"],
  color: "from-primary to-accent",
  featured: true
}];
export const FormulasSection = () => {
  const goToReservation = () => {
    window.location.href = 'https://valence-trampoline.com/guidap-reservation.html';
  };
  return <section id="formules" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Formules
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tarifs TOUT COMPRIS - Chaussettes incluses !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {formulas.map((formula, index) => {
          const Icon = formula.icon;
          return <Card key={index} className={`relative overflow-hidden p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-scale-in ${formula.featured ? "border-primary shadow-[var(--shadow-card)] md:scale-105" : "border-border"}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {formula.featured && <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      ⭐ POPULAIRE
                    </div>
                  </div>}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${formula.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1">{formula.title}</h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">({formula.age})</p>
                
                {/* Prix */}
                <div className="flex gap-4 mb-4">
                  {formula.prices.map((price, idx) => <div key={idx} className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-lg">
                      {price}
                    </div>)}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{formula.description}</p>

                {/* Badge Chaussettes Incluses */}
                <div className="bg-accent/20 border border-accent/30 rounded-lg p-3 mb-6">
                  <p className="font-semibold text-sm flex items-center gap-2 text-emerald-600">
                    🧦 Chaussettes antidérapantes INCLUSES !
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {formula.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>)}
                </ul>

                <button onClick={goToReservation} className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-[hsl(var(--funpark-cta-solid))] text-[hsl(var(--funpark-cta-solid-foreground))] hover:bg-[hsl(var(--funpark-cta-solid-hover))] hover:scale-105 transition-all duration-300 shadow-[var(--shadow-cta-solid)] h-12 px-6 py-2 w-full">
                  🎉 Je réserve
                </button>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};