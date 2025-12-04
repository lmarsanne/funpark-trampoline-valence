import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Rocket, ParkingCircle, Users, Footprints, Clock, Baby, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Romans = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation-romans');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      <Helmet>
        <title>Trampoline Park Romans-sur-Isère & Bourg-de-Péage - Valence Trampoline</title>
        <meta name="description" content="Vous cherchez une activité enfant à Romans ou Bourg-de-Péage ? Valence Trampoline est à 15 min ! Anniversaires, Baby Gym et Sauts. Chaussettes incluses." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-16">
        <div className="bg-gradient-to-r from-primary via-primary to-accent py-8 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up">
              Trampoline Park à 15 min de <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Romans-sur-Isère & Bourg-de-Péage
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Habitants du Pays Romanais, venez découvrir le parc le plus fun et convivial de la Drôme. 
              Basé à Saint-Marcel-lès-Valence (Zone Fun Park).
            </p>
            <Button size="lg" className="bg-gradient-to-r from-secondary to-accent text-foreground border-0 hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl" onClick={scrollToReservation}>
              <Footprints className="mr-2" size={20} />
              Réserver ma session (Chaussettes incluses)
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi venir chez nous */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            La sortie idéale <span className="text-primary">à deux pas de chez vous</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            Inutile de faire des kilomètres ! Situé à la sortie de la voie rapide N532 (Sortie Saint-Marcel), 
            Valence Trampoline vous accueille dans un espace à taille humaine, sécurisé et climatisé.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Accès Rapide</h3>
              <p className="text-muted-foreground">Moins de 20 min depuis le centre de Romans/Bourg-de-Péage.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ParkingCircle className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Parking Gratuit</h3>
              <p className="text-muted-foreground">Grand parking privé sur place.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Familial</h3>
              <p className="text-muted-foreground">Un parc où vous voyez vos enfants partout, pas une usine.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Footprints className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Tout Inclus</h3>
              <p className="text-muted-foreground">Pas de supplément chaussettes à payer à l'arrivée !</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activités & Tarifs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos <span className="text-primary">Activités & Tarifs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Baby Jumper */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-4 text-center">
                <Baby className="text-white mx-auto mb-2" size={40} />
                <h3 className="text-2xl font-bold text-white">Baby Jumper</h3>
                <p className="text-white/80">3-5 ans</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-extrabold text-primary">9€</span>
                  <span className="text-muted-foreground">/heure</span>
                </div>
                <p className="text-center text-muted-foreground mb-4">
                  Matinées calmes pour les tout-petits
                </p>
                <div className="bg-secondary/20 text-secondary-foreground text-sm font-medium py-2 px-4 rounded-full text-center">
                  🧦 Chaussettes antidérapantes INCLUSES
                </div>
              </div>
            </div>

            {/* Open Jump */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-primary to-accent p-4 text-center">
                <Zap className="text-white mx-auto mb-2" size={40} />
                <h3 className="text-2xl font-bold text-white">Open Jump</h3>
                <p className="text-white/80">Dès 6 ans</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-extrabold text-primary">13€</span>
                  <span className="text-muted-foreground">/heure</span>
                </div>
                <p className="text-center text-muted-foreground mb-4">
                  Accès total (Dunk, Parcours, Airbag)
                </p>
                <div className="bg-secondary/20 text-secondary-foreground text-sm font-medium py-2 px-4 rounded-full text-center">
                  🧦 Chaussettes antidérapantes INCLUSES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinéraire & Accès */}
      <section className="py-16 bg-background">
        
      </section>

      {/* Section Réservation */}
      <section id="reservation-romans" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Réservez <span className="text-primary">votre créneau</span>
          </h2>

          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden">
            <iframe src="https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Factivities%2Fx3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV" width="100%" height="700" style={{
            border: 0,
            overflow: 'hidden'
          }} title="Réservation" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Questions Fréquentes <span className="text-primary">de nos clients Romanais</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-xl px-6 border-none shadow-md">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary flex-shrink-0" size={20} />
                    Combien de temps de route depuis Romans/Bourg-de-Péage ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Comptez environ 15 à 20 minutes via la voie rapide (N532). C'est souvent plus rapide que de traverser le centre-ville aux heures de pointe !
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-xl px-6 border-none shadow-md">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <ParkingCircle className="text-primary flex-shrink-0" size={20} />
                    Faut-il payer pour le parking ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Non, notre parking est privé et totalement gratuit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-xl px-6 border-none shadow-md">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Clock className="text-primary flex-shrink-0" size={20} />
                    Dois-je réserver à l'avance ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui, la réservation en ligne est fortement recommandée, surtout les mercredis et weekends, pour garantir votre place à l'arrivée.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-xl px-6 border-none shadow-md">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Users className="text-primary flex-shrink-0" size={20} />
                    Les parents accompagnateurs paient-ils l'entrée ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Non ! L'entrée est GRATUITE pour les accompagnateurs qui ne sautent pas. Nous vous prêtons même des sur-chaussettes pour accéder aux zones de surveillance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-xl px-6 border-none shadow-md">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Zap className="text-primary flex-shrink-0" size={20} />
                    Peut-on manger sur place ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui, notre espace Snack propose boissons fraîches, cafés et collations. Notez que les nourritures extérieures ne sont pas autorisées (sauf gâteaux d'anniversaire sur réservation).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card rounded-xl px-6 border-none shadow-md">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Footprints className="text-primary flex-shrink-0" size={20} />
                    Quelle tenue prévoir ?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Une tenue de sport confortable (short, legging, t-shirt). Les jeans avec rivets ou fermetures éclairs sont déconseillés pour ne pas abîmer les toiles.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Romans;