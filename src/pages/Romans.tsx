import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, ParkingCircle, Users, Footprints, Clock, Baby, Zap, Cake, Gift, GraduationCap, Bus, CreditCard, Utensils, Shirt, ShieldCheck, Calendar, Target, Wind, Trophy, PartyPopper } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Romans = () => {
  // Désactiver la restauration automatique du scroll et forcer le haut de page
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const forceTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    forceTop();
    const intervalId = setInterval(forceTop, 20);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
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
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
        <title>Trampoline Park Romans-sur-Isère & Bourg-de-Péage | Valence Trampoline</title>
        <meta name="description" content="Le Trampoline Park préféré des habitants de Romans et Bourg-de-Péage. Sport, Anniversaires, Sorties Scolaires... 400m² de zones connectées à 15 min de chez vous." />
        <meta name="keywords" content="trampoline romans, trampoline bourg de péage, parc trampoline drôme, anniversaire enfant romans, sortie scolaire romans, centre aéré romans" />
      </Helmet>

      <Navigation />

      {/* Hero Section - Impact Local */}
      <section className="pt-16">
        <div className="bg-gradient-to-r from-primary via-primary to-accent py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
              Le Trampoline Park préféré des habitants de{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Romans et Bourg-de-Péage
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto">
              Sport, Anniversaires, Sorties Scolaires... Profitez de 400m² de zones connectées à moins de 15 min de chez vous.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-secondary to-accent text-foreground border-0 hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl text-lg px-8 py-6" onClick={scrollToReservation}>
              <Calendar className="mr-2" size={22} />
              Voir les disponibilités
            </Button>
          </div>
        </div>
      </section>

      {/* Module de Réservation GUIDAP */}
      <section id="reservation-romans" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            📅 Réservez votre session ou votre{" "}
            <span className="text-primary">​</span>
          </h2>

          <div className="-mx-4 md:mx-auto md:max-w-5xl bg-card md:rounded-2xl shadow-xl overflow-hidden">
            <iframe src="https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Factivities%2Fx3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV" width="100%" height="700" style={{
            border: 0,
            overflow: 'hidden'
          }} title="Réservation Valence Trampoline" />
          </div>
        </div>
      </section>

      {/* Édito SEO Localisation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi les familles de{" "}
              <span className="text-primary">Romans et Bourg-de-Péage</span>{" "}
              nous adorent ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Situé à la sortie directe de la <strong>N532 (Sortie Saint-Marcel)</strong>, Valence Trampoline est la destination loisirs n°1 des Romanais. 
              Fini les longs trajets : en moins de <strong>15 minutes</strong>, vous accédez à un complexe sécurisé, climatisé et doté d'un <strong>immense parking gratuit</strong> (accessible aux bus). 
              Que ce soit pour un mercredi après-midi, une sortie scolaire ou une fête d'anniversaire, nous sommes votre voisin sportif le plus fun.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-card p-4 rounded-xl shadow-md text-center">
                <MapPin className="text-primary mx-auto mb-2" size={28} />
                <span className="font-semibold text-sm">15 min de Romans</span>
              </div>
              <div className="bg-card p-4 rounded-xl shadow-md text-center">
                <ParkingCircle className="text-primary mx-auto mb-2" size={28} />
                <span className="font-semibold text-sm">Parking gratuit</span>
              </div>
              <div className="bg-card p-4 rounded-xl shadow-md text-center">
                <Bus className="text-primary mx-auto mb-2" size={28} />
                <span className="font-semibold text-sm">Accès autocar</span>
              </div>
              <div className="bg-card p-4 rounded-xl shadow-md text-center">
                <Wind className="text-primary mx-auto mb-2" size={28} />
                <span className="font-semibold text-sm">Climatisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Univers de Saut - 4 Zones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nos <span className="text-primary">Univers de Saut</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            400m² de zones connectées pour tous les niveaux et tous les âges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main Court */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-r from-primary to-accent p-4 text-center">
                <Zap className="text-white mx-auto mb-2" size={36} />
                <h3 className="text-xl font-bold text-white">Main Court</h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm">
                  Le cœur du parc ! Trampolines interconnectés pour sauter, rebondir et enchaîner les figures.
                </p>
              </div>
            </div>

            {/* Airbag */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-r from-secondary to-accent p-4 text-center">
                <Target className="text-white mx-auto mb-2" size={36} />
                <h3 className="text-xl font-bold text-white">Airbag Géant</h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm">
                  Sautez et atterrissez en toute sécurité dans notre coussin d'air géant. Sensations garanties !
                </p>
              </div>
            </div>

            {/* Ninja */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-4 text-center">
                <ShieldCheck className="text-white mx-auto mb-2" size={36} />
                <h3 className="text-xl font-bold text-white">Parcours Ninja</h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm">
                  Testez votre agilité sur notre parcours d'obstacles inspiré de Ninja Warrior !
                </p>
              </div>
            </div>

            {/* Dunk */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-r from-funpark-turquoise to-primary p-4 text-center">
                <Trophy className="text-white mx-auto mb-2" size={36} />
                <h3 className="text-xl font-bold text-white">Slam Dunk</h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm">
                  Prenez de l'élan sur le trampoline et marquez comme une star du basket !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spécial Anniversaires */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 shadow-xl border border-secondary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <PartyPopper className="text-white" size={56} />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Un Anniversaire Inoubliable{" "}
                  <span className="text-primary">à deux pas de Romans</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ne cherchez plus où fêter ses bougies ! Nous organisons tout : <strong>Session de saut privatisée ou en groupe</strong>, Espace Goûter réservé, Gâteau, Bonbons et Boissons. 
                  La formule <strong>"Zéro Stress"</strong> pour les parents de Romans.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                  <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Gift size={16} /> Tout Inclus
                  </span>
                  <span className="bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Cake size={16} /> Cartons d'invitation offerts
                  </span>
                  <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Footprints size={16} /> Chaussettes offertes
                  </span>
                </div>

                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent text-foreground border-0 hover:scale-105 transition-all duration-300 font-bold rounded-full" onClick={scrollToReservation}>
                  Réserver un anniversaire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Groupes & Scolaires */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Centres de Loisirs & Écoles :{" "}
                  <span className="text-primary">La Sortie Idéale</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous accueillons régulièrement les écoles et centres aérés de <strong>Romans et Bourg-de-Péage</strong>. 
                  Capacité d'accueil adaptée aux grands groupes, sécurité maximale (encadrement pro) et <strong>tarifs dégressifs</strong>. 
                  Parking autocar disponible juste devant l'entrée.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-primary flex-shrink-0" size={24} />
                    <span className="text-sm font-medium">Jusqu'à 80 sauteurs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bus className="text-primary flex-shrink-0" size={24} />
                    <span className="text-sm font-medium">Parking autocar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-primary flex-shrink-0" size={24} />
                    <span className="text-sm font-medium">Encadrement pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-primary flex-shrink-0" size={24} />
                    <span className="text-sm font-medium">Chorus Pro accepté</span>
                  </div>
                </div>

                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold rounded-full" onClick={scrollToReservation}>
                  Demander un devis groupe
                </Button>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-28 h-28 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={56} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Locale & Pratique - 15 Questions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Questions Fréquentes{" "}
            <span className="text-primary">des habitants de Romans</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant votre visite
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              
              {/* ACCÈS & ROMANS */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin size={20} /> Accès depuis Romans
                </h3>
                
                <AccordionItem value="q1" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Combien de temps pour venir depuis le centre de Romans ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Comptez 15 minutes via la voie rapide (N532). C'est direct, sortie Saint-Marcel-lès-Valence.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Le parking est-il gratuit ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, grand parking privé et gratuit. Facile d'accès même pour les gros véhicules.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Peut-on venir en bus depuis Bourg-de-Péage ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, le réseau Citéa dessert la zone. Arrêt à proximité du complexe.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q4" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Y a-t-il un parking pour les autocars (Scolaires) ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, nous avons des emplacements dédiés pour les bus des écoles et centres aérés.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* TRAMPOLINE & SPORT */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Zap size={20} /> Trampoline & Sport
                </h3>

                <AccordionItem value="q5" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Faut-il une tenue spécifique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Tenue de sport recommandée (Jogging, Short). Jeans à rivets interdits. Chaussettes antidérapantes obligatoires (incluses dans nos tarifs !).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q6" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    À partir de quel âge ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Dès 3 ans (Créneaux Baby Jump le matin). Dès 6 ans pour l'Open Jump classique.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q7" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Les parents doivent-ils payer l'entrée ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Non, l'entrée est GRATUITE pour les accompagnateurs qui ne sautent pas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q8" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Y a-t-il des vestiaires et douches ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nous disposons de casiers sécurisés et de vestiaires pour vous changer.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* ANNIVERSAIRES */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Cake size={20} /> Anniversaires
                </h3>

                <AccordionItem value="q9" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Peut-on fêter un anniversaire ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    C'est notre spécialité ! Formules tout compris (Saut + Goûter + Boissons). Réservez via le module ci-dessus.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q10" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Le gâteau est-il fourni dans la formule anniversaire ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, nous fournissons le gâteau, les bonbons et les boissons.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q11" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Combien d'enfants minimum pour un anniversaire ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    La formule s'active à partir de 5 enfants.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* GROUPES & ÉCOLES */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <GraduationCap size={20} /> Groupes & Écoles
                </h3>

                <AccordionItem value="q12" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Accueillez-vous les centres aérés et écoles ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, nous recevons de nombreux groupes du Pays Romanais. Tarifs préférentiels et facturation administrative (Chorus Pro) possibles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q13" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Quelle est la capacité d'accueil pour un groupe ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nous pouvons accueillir jusqu'à 80 sauteurs en simultané sur nos 400m² de zones.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* DIVERS */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Utensils size={20} /> Divers
                </h3>

                <AccordionItem value="q14" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Peut-on manger sur place ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, espace Snacking & Bar (Paninis, Gaufres, Boissons fraîches). Pique-nique interdit (sauf accord spécifique scolaires).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q15" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Acceptez-vous les chèques vacances ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Non, uniquement Carte Bancaire et Espèces. Paiement en ligne recommandé.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Romans;