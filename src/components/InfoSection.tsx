import { Clock, Calendar, Coffee, Shield } from "lucide-react";
const infos = [{
  icon: Clock,
  title: "Réservation à l'heure",
  description: "Sessions d'une heure pour profiter pleinement des installations."
}, {
  icon: Shield,
  title: "Sécurité maximale",
  description: "Chaussettes antidérapantes obligatoires (2 € sur place) pour votre protection."
}, {
  icon: Calendar,
  title: "Ouvert toute l'année",
  description: "Horaires adaptés en semaine et week-end pour plus de flexibilité."
}, {
  icon: Coffee,
  title: "Espace détente",
  description: "Zone de restauration et détente pour les accompagnateurs."
}];
export const InfoSection = () => {
  return <section className="py-12 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Infos{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Pratiques
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant votre visite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {infos.map((info, index) => {
          const Icon = info.icon;
          return <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.description}</p>
              </div>;
        })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Horaires d'ouverture</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Horaires classiques</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-medium">Fermé lundi et mardi</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Mercredi</span>
                  <span className="text-muted-foreground">14h00 – 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Jeudi</span>
                  <span className="text-muted-foreground">18h00 – 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Vendredi</span>
                  <span className="text-muted-foreground">18h00 – 02h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Samedi</span>
                  <span className="text-muted-foreground">14h00 – 02h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Dimanche</span>
                  <span className="text-muted-foreground">14h00 – 20h00</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Vacances scolaires</h4>
              </div>
              <p className="text-sm text-accent font-medium mb-4">Ouvert tous les jours</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Lundi</span>
                  <span className="text-muted-foreground">10h00 – 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Mardi</span>
                  <span className="text-muted-foreground">10h00 – 22h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Mercredi</span>
                  <span className="text-muted-foreground">10h00 – 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Jeudi</span>
                  <span className="text-muted-foreground">10h00 – 00h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Vendredi</span>
                  <span className="text-muted-foreground">10h00 – 02h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-foreground font-medium">Samedi</span>
                  <span className="text-muted-foreground">10h00 – 02h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">Dimanche</span>
                  <span className="text-muted-foreground">10h00 – 22h00</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8">
            * Réservation en ligne recommandée
          </p>
        </div>
      </div>
    </section>;
};