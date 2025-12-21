import { Calendar } from "lucide-react";

export const HorairesSection = () => {
  const horaires = [
    { jour: "Lundi", heures: "14h - 00h" },
    { jour: "Mardi", heures: "14h - 00h" },
    { jour: "Mercredi", heures: "14h - 00h" },
    { jour: "Jeudi", heures: "14h - 00h" },
    { jour: "Vendredi", heures: "14h - 00h" },
    { jour: "Samedi", heures: "14h - 00h" },
    { jour: "Dimanche", heures: "14h - 20h" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Horaires{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              d'ouverture
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">🏖️ Vacances scolaires</h3>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6 text-center">
              <p className="text-destructive font-semibold">
                Fermé les 24 & 25 décembre<br />
                Ouvert le 31 décembre · Fermé le 1er janvier
              </p>
            </div>

            <div className="space-y-2">
              {horaires.map((h, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0"
                >
                  <span className="text-foreground font-medium">{h.jour}</span>
                  <span className="text-muted-foreground font-medium">{h.heures}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
