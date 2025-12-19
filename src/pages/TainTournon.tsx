import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, ParkingCircle, Users, Footprints, Zap, Cake, Gift, GraduationCap, Bus, CreditCard, Target, Wind, Trophy, PartyPopper } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TainTournon = () => {
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

  return <div className="min-h-screen pb-20">
      <Helmet>
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
        <title>Trampoline Park proche Tain-l'Hermitage & Tournon - Fun Park</title>
        <meta name="description" content="Le plus grand Trampoline Park à 20 min de Tain et Tournon. Zones Ninja, Airbag, Dunk. Anniversaires enfants et sorties scolaires. Parking gratuit." />
        <meta name="keywords" content="trampoline tain, trampoline tournon, parc trampoline ardèche, anniversaire enfant tain, sortie scolaire tournon, centre aéré hermitage" />
      </Helmet>

      <Navigation />

      {/* Hero Section - Impact Géographique */}
      <section className="pt-16">
        <div className="bg-gradient-to-r from-primary via-primary to-accent py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
              Votre Trampoline Park à moins de 20 min de{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Tain et Tournon
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Le plus grand complexe de loisirs de la région (2500m²). Dunk, Airbag, Main Court... Le sport fun accessible via la N7 ou l'A7.
            </p>
          </div>
        </div>
      </section>

      {/* Édito SEO Localisation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Le spot de sport & loisirs des{" "}
              <span className="text-primary">Tainois et Tournonais</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Envie de bouger ? Rejoignez Valence Trampoline en un temps record ! Situé à <strong>Saint-Marcel-lès-Valence</strong>, notre parc est accessible en <strong>15 à 20 minutes</strong> depuis Tain-l'Hermitage et Tournon-sur-Rhône (Via l'<strong>Autoroute A7 sortie Valence Nord</strong> ou la <strong>Nationale 7</strong>). Un grand parking gratuit vous attend sur place. C'est la sortie idéale pour les mercredis après-midi ou les week-ends pluvieux.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-card p-4 rounded-xl shadow-md text-center">
                <MapPin className="text-primary mx-auto mb-2" size={28} />
                <span className="font-semibold text-sm">20 min de Tain</span>
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

      {/* Section Nos Univers de Saut */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nos <span className="text-primary">Univers de Saut</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            400m² de zones connectées pour tous les niveaux et tous les âges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Un Anniversaire{" "}
                  <span className="text-primary">qui bouge !</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Offrez-lui une fête inoubliable avec ses copains. Nos formules <strong>tout compris</strong> (Saut + Goûter + Boissons) sont plébiscitées par les familles de Tain et Tournon. <strong>Zéro stress</strong>, on s'occupe de tout.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Gift size={16} /> Tout Inclus
                  </span>
                  <span className="bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Cake size={16} /> Gâteau Fourni
                  </span>
                  <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Footprints size={16} /> Chaussettes offertes
                  </span>
                </div>
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
                  Sorties Scolaires &{" "}
                  <span className="text-primary">Centres de Loisirs</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Collèges, Lycées et Centres aérés de <strong>l'Hermitage et du Tournonais</strong> : nous organisons vos sorties sportives ! Capacité d'accueil de <strong>80 sauteurs</strong>, sécurité pro, et parking autocar facile d'accès.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
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
                    <span className="text-sm font-medium">Tarifs dégressifs</span>
                  </div>
                </div>
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

      {/* FAQ Locale & Pratique */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Questions Fréquentes{" "}
            <span className="text-primary">Tain & Tournon</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant votre visite
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              
              {/* ACCÈS & TAIN-TOURNON */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin size={20} /> Accès depuis Tain-Tournon
                </h3>
                
                <AccordionItem value="q1" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Combien de temps de route depuis Tain/Tournon ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Comptez 15 à 20 minutes selon la circulation. L'accès est direct via l'A7 (Sortie Valence Nord) ou la N7.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Le parking est-il gratuit ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, immense parking privé gratuit devant l'entrée.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Peut-on venir en car (Groupe) ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, nous avons des emplacements pour les autocars des écoles et centres de loisirs.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* TRAMPOLINE & SÉCURITÉ */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Zap size={20} /> Trampoline & Sécurité
                </h3>

                <AccordionItem value="q4" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Faut-il une tenue spécifique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Tenue de sport (Short/Jogging). Jeans interdits. Chaussettes antidérapantes obligatoires (incluses dans le prix).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q5" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Quel âge minimum pour sauter ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    3 ans pour les sessions "Baby Jump" du matin. 6 ans pour l'accès complet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q6" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Est-ce surveillé ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, notre staff est présent en permanence sur les zones de saut.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* ANNIVERSAIRES */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Cake size={20} /> Anniversaires
                </h3>

                <AccordionItem value="q7" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Que comprend la formule anniversaire ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Session de saut (1h), espace goûter privatisé, gâteau, bonbons, boissons et chaussettes pour tous les enfants.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q8" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Combien d'enfants minimum ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    5 enfants minimum pour une formule anniversaire.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* PRATIQUE */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Users size={20} /> Pratique
                </h3>

                <AccordionItem value="q9" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Y a-t-il de quoi manger sur place ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oui, snack-bar avec boissons, gaufres, paninis... Pique-nique non autorisé.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q10" className="bg-card rounded-xl px-6 border-none shadow-md mt-3">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Quels moyens de paiement acceptez-vous ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Carte Bancaire et Espèces. Chèques vacances non acceptés.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />

      {/* CTA Sticky */}
      <a 
        href="/guidap-reservation.html"
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 font-bold text-lg rounded-t-2xl shadow-lg transition-all hover:opacity-90"
        style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
      >
        Réserver maintenant
      </a>
    </div>;
};

export default TainTournon;