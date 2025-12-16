import { Cake, PartyPopper, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import birthdayImage from "@/assets/birthday-party.jpg";

export const BirthdaySection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-5 md:space-y-6 animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm">
              <PartyPopper className="w-3 h-3 md:w-4 md:h-4" />
              <span>Événements spéciaux</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Fêtez un{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                anniversaire
              </span>
              <br className="hidden sm:block" />
              {" "}inoubliable !
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Organisez la plus fun des fêtes d'anniversaire dans notre trampoline park ! 
              Un cadre original et festif pour un moment magique.
            </p>

            <div className="space-y-3 md:space-y-4">
              <Link to="/anniversaire-enfant" className="flex items-start gap-3 group hover:bg-white/50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Cake className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-0.5 md:mb-1 group-hover:text-primary transition-colors">Anniversaires enfants</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Formules tout compris avec espace privatisé et animations
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2 flex-shrink-0" />
              </Link>

              <Link to="/evg-evjf" className="flex items-start gap-3 group hover:bg-white/50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <PartyPopper className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-0.5 md:mb-1 group-hover:text-primary transition-colors">EVJF / EVG</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Enterrements de vie de célibataire fun et décontractés
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2 flex-shrink-0" />
              </Link>

              <Link to="/entreprises" className="flex items-start gap-3 group hover:bg-white/50 dark:hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Gift className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-0.5 md:mb-1 group-hover:text-primary transition-colors">Événements groupes</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Team building, sorties scolaires, comités d'entreprise...
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2 flex-shrink-0" />
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
              <img 
                src={birthdayImage} 
                alt="Fête d'anniversaire au trampoline park" 
                className="w-full h-48 sm:h-64 md:h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full animate-float" />
            <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};