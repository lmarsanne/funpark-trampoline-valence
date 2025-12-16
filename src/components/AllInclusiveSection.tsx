import { Gift, Award } from "lucide-react";

export const AllInclusiveSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ✨ TARIFS TOUT COMPRIS :{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              ZÉRO SUPPLÉMENT !
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bloc 1 - Pas équipé */}
          <div className="bg-card border-2 border-accent/30 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Vous n'êtes pas équipé ?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pas de chaussettes ? <strong className="text-foreground">Pas de panique !</strong> On vous{" "}
              <span className="text-accent font-bold">DONNE</span> une paire neuve à l'arrivée.{" "}
              <strong className="text-primary">C'est inclus dans le prix.</strong>
            </p>
          </div>

          {/* Bloc 2 - Déjà équipé */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Vous êtes déjà équipé ?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vous avez déjà vos chaussettes antidérapantes ? <strong className="text-foreground">Bravo !</strong> En cadeau, on vous{" "}
              <span className="text-primary font-bold">OFFRE 1 Jeton d'Arcade</span>.{" "}
              <span className="text-sm text-muted-foreground">(valeur 2€)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
