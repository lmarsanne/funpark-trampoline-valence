import { Button } from "@/components/ui/button";
import { Cake, PartyPopper, Gift, ArrowRight } from "lucide-react";
import birthdayImage from "@/assets/birthday-party.jpg";

export const BirthdaySection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full font-semibold text-sm">
              <PartyPopper className="w-4 h-4" />
              <span>Événements spéciaux</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Fêtez un{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                anniversaire
              </span>
              <br />
              inoubliable !
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Organisez la plus fun des fêtes d'anniversaire dans notre trampoline park ! 
              Un cadre original et festif pour un moment magique que vos enfants n'oublieront jamais.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Cake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Anniversaires enfants</h4>
                  <p className="text-sm text-muted-foreground">
                    Formules tout compris avec espace privatisé, gâteau et animations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <PartyPopper className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">EVJF / EVG</h4>
                  <p className="text-sm text-muted-foreground">
                    Enterrements de vie de célibataire dans une ambiance fun et décontractée
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Événements groupes</h4>
                  <p className="text-sm text-muted-foreground">
                    Team building, sorties scolaires, comités d'entreprise...
                  </p>
                </div>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={scrollToReservation}
            >
              Demander un devis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={birthdayImage}
                alt="Fête d'anniversaire au trampoline park"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};
