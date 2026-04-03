import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, ParkingCircle, Users, Footprints, Zap, Cake, Gift, GraduationCap, Bus, CreditCard, ShieldCheck, Target, Wind, Trophy, PartyPopper } from "lucide-react";
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

  return <div className="min-h-screen pb-20">
      <Helmet>
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
        <title>Trampoline Park Romans-sur-Isère & Bourg-de-Péage | Valence Trampoline</title>
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
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Sport, Anniversaires, Sorties Scolaires... Profitez de 400m² de zones connectées à moins de 15 min de chez vous.
            </p>
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
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
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
                    <span className="text-sm font-medium">Chorus Pro accepté</span>
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
              </div>

              {/* SPORT & SÉCURITÉ */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Zap size={20} /> Sport & Sécurité
                </h3>

                <AccordionItem value="q4" className="bg-card rounded-xl px-6 border-none shadow-md">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Quelle tenue dois-je porter ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Tenue de sport (jogging, legging). Jeans interdits. Chaussettes antidérapantes obligatoires (incluses dans le prix).
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
        className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center py-4 text-lg font-bold text-black rounded-full shadow-2xl hover:opacity-90 transition-opacity"
        style={{ backgroundColor: '#FFBD0B' }}
      >
        🎉 Réserver maintenant
      </a>
    </div>;
};

export default Romans;