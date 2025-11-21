import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BirthdaySection } from "@/components/BirthdaySection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Bowling = () => {
  const reservationUrl = "https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Factivities%2Fx3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV";

  const scrollToReservation = () => {
    const element = document.getElementById('reservation-bowling');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-3 px-4 py-2 text-sm font-semibold">
              12 PISTES • Saint-Marcel-lès-Valence
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Le meilleur{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                bowling de Valence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5 max-w-3xl mx-auto">
              Chez Valence Bowling, nous mettons à votre disposition 12 pistes équipées de bumpers pour s'adapter aux enfants et aux débutants, tout en garantissant des conditions de jeu idéales pour les joueurs confirmés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group text-lg px-8 py-6" onClick={scrollToReservation}>
                Réserver maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Réservation Section */}
      <section id="reservation-bowling" className="pt-8 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Réservez votre <span className="text-primary">partie</span>
            </h2>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="text-primary" size={24} />
                <p className="text-center text-foreground font-semibold">
                  Réservation sécurisée via notre partenaire GuiDap. Paiement en ligne et confirmation immédiate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="text-primary" size={20} />
                  <span>Réservation en moins de 2 minutes</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="text-primary" size={20} />
                  <span>Annulation possible selon conditions</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="text-primary" size={20} />
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-xl overflow-hidden" style={{ height: '800px' }}>
              <iframe 
                src={reservationUrl} 
                className="w-full h-full" 
                title="Réservation Bowling" 
                style={{ border: 'none' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Un bowling à Valence pour{" "}
              <span className="text-primary">tous les âges</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Que vous soyez un joueur occasionnel, un passionné de bowling ou à la recherche d'une activité familiale à Valence, nos pistes sont accessibles à tous. Nos pistes sont entretenues avec soin pour offrir une glisse parfaite et des sensations de jeu optimales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl mb-4">🎳</div>
                <h3 className="text-xl font-bold mb-2">Bumpers automatiques</h3>
                <p className="text-muted-foreground">Pour les enfants et débutants</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold mb-2">Boules adaptées</h3>
                <p className="text-muted-foreground">Différentes tailles et poids disponibles</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Rampe de lancement</h3>
                <p className="text-muted-foreground">Pour les plus petits joueurs</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="text-4xl mb-4">🛋️</div>
                <h3 className="text-xl font-bold mb-2">Espace convivial</h3>
                <p className="text-muted-foreground">Avec sièges confortables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Pourquoi choisir{" "}
            <span className="text-primary">Fun Park Valence Bowling ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-primary">
              <div className="text-5xl mb-4">🎳</div>
              <h3 className="text-xl font-bold mb-2">12 pistes modernes</h3>
              <p className="text-muted-foreground">Dernière génération avec système automatique</p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-secondary">
              <div className="text-5xl mb-4">🍕</div>
              <h3 className="text-xl font-bold mb-2">Snacking & bar</h3>
              <p className="text-muted-foreground">Espace restauration sur place</p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-accent">
              <div className="text-5xl mb-4">🎈</div>
              <h3 className="text-xl font-bold mb-2">Anniversaires</h3>
              <p className="text-muted-foreground">Formules clé en main pour vos événements</p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-primary">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-2">Karaoké</h3>
              <p className="text-muted-foreground">Prolongez la soirée dans notre salle privative</p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-secondary">
              <div className="text-5xl mb-4">🕹️</div>
              <h3 className="text-xl font-bold mb-2">Salle d'arcade</h3>
              <p className="text-muted-foreground">Flippers et jeux d'arcade</p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-t-4 border-accent">
              <div className="text-5xl mb-4">🅿️</div>
              <h3 className="text-xl font-bold mb-2">Parking gratuit</h3>
              <p className="text-muted-foreground">Stationnement facile et gratuit</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Suivez-nous sur{" "}
              <a 
                href="https://www.instagram.com/funparkvalence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Instagram
              </a>
              {" "}pour ne rien rater de l'actu et des offres spéciales !
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Nos <span className="text-primary">tarifs</span>
            </h2>

            <p className="text-center text-lg text-muted-foreground mb-12">
              Les tarifs indiqués s'entendent par personne et par partie. Le tarif enfant s'applique aux enfants âgés de 12 ans maximum. Le tarif étudiant est réservé aux joueurs de plus de 12 ans, encore scolarisés ou en études supérieures. Un justificatif en cours de validité sera demandé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Tarif Semaine */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Tarif Semaine</h3>
                <p className="text-muted-foreground mb-6">Du lundi au jeudi</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-lg text-muted-foreground">Adulte</span>
                    <span className="text-3xl font-bold text-primary">7€</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-lg text-muted-foreground">Étudiant</span>
                    <span className="text-3xl font-bold text-accent">6€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-muted-foreground">Enfant</span>
                    <span className="text-3xl font-bold text-secondary">5€</span>
                  </div>
                </div>
              </div>

              {/* Plein Tarif */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-secondary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Plein Tarif</h3>
                <p className="text-muted-foreground mb-6">Vendredi, samedi, dimanche, jours fériés et vacances scolaires</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-lg text-muted-foreground">Adulte</span>
                    <span className="text-3xl font-bold text-primary">8,50€</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-lg text-muted-foreground">Étudiant</span>
                    <span className="text-3xl font-bold text-accent">7,50€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-muted-foreground">Enfant</span>
                    <span className="text-3xl font-bold text-secondary">6,50€</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-8 italic">
              Aucune réservation possible pour le bowling. Premier arrivé, premier servi !
            </p>

            <div className="text-center">
              <Button size="lg" className="group text-lg px-8 py-6" onClick={scrollToReservation}>
                Réserver d'autres activités
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BirthdaySection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Bowling;
