import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { KaraokeFAQ } from "@/components/KaraokeFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroKaraoke from "@/assets/hero-karaoke-main.jpg";
import karaokeFriends from "@/assets/karaoke-friends.jpg";
import karaokeFamily from "@/assets/karaoke-family.jpg";
import karaokeColleagues from "@/assets/karaoke-colleagues.jpg";
import { useForceScrollTop } from "@/hooks/useForceScrollTop";

const Karaoke = () => {
  useForceScrollTop();
  const reservationUrl = "https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Fadd-to-cart%2FWiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%2Fundefined%2FDEPARTURE";
  const scrollToReservation = () => {
    const element = document.getElementById('reservation-karaoke');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToInfo = () => {
    const element = document.getElementById('info-pratiques');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      <Helmet>
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroKaraoke})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Badge */}
            <Badge variant="secondary" className="mb-3 px-4 py-2 text-sm font-semibold">
              NOUVEAUTÉ • Saint-Marcel-lès-Valence
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Karaoké privatif à Valence –{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                chantez, criez, rigolez !
              </span>
            </h1>

            {/* Intro Text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5 max-w-3xl mx-auto">
              Transformez votre soirée en show privé : entre amis, en famille ou entre collègues, notre salle de karaoké privative est le spot parfait pour lâcher prise. Hits français, internationaux, classiques, kitsch ou totalement décalés… ici, on ne juge pas, on chante fort 😄
            </p>

            {/* CTA Buttons */}
            
          </div>
        </div>
      </section>


      {/* Pour quelles occasions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Pour quelles <span className="text-primary">occasions ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Entre amis */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img src={karaokeFriends} alt="Entre amis au karaoké" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Entre amis</h3>
                <p className="text-muted-foreground">
                  Soirées délire, challenges de chant, battle de refrains inoubliables.
                </p>
              </div>
            </div>

            {/* En famille */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img src={karaokeFamily} alt="En famille au karaoké" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">En famille</h3>
                <p className="text-muted-foreground">
                  Petits et grands partagent le micro pour un moment vraiment ensemble.
                </p>
              </div>
            </div>

            {/* Entre collègues */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img src={karaokeColleagues} alt="Entre collègues au karaoké" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Entre collègues</h3>
                <p className="text-muted-foreground">
                  Afterwork, team building, pot de départ : brisez la glace autrement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Salle privative */}
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center border-t-4 border-primary">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Salle privative</h3>
              <p className="text-sm text-primary font-semibold mb-3">Votre bulle, vos règles.</p>
              <p className="text-muted-foreground">
                Chantez sans jugement, entre vous, dans une ambiance conviviale.
              </p>
            </div>

            {/* Catalogue XXL */}
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center border-t-4 border-secondary">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Catalogue XXL</h3>
              <p className="text-sm text-secondary font-semibold mb-3">Des centaines de titres à portée de voix.</p>
              <p className="text-muted-foreground">
                Hits français et internationaux, classiques ou décalés.
              </p>
            </div>

            {/* Boissons & snacks */}
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center border-t-4 border-accent">
              <div className="text-6xl mb-4">🍹</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Boissons & snacks</h3>
              <p className="text-sm text-accent font-semibold mb-3">Le combo parfait : micro + gourmandise.</p>
              <p className="text-muted-foreground">
                Profitez de nos boissons et gourmandises sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Nos formules <span className="text-primary">Karaoké</span>
            </h2>

            <p className="text-center text-lg text-muted-foreground mb-12">
              Tarifs valables pour des groupes de 4 à 12 personnes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Formule 1h */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Formule 1h</h3>
                <p className="text-muted-foreground mb-6">Idéale pour une première session</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg text-muted-foreground">Adulte</span>
                    <span className="text-4xl font-bold text-primary">9€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-muted-foreground">Étudiant*</span>
                    <span className="text-4xl font-bold text-accent">8€</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Parfait pour tester l'expérience ou enchaîner avec une autre activité du parc.
                </p>
              </div>

              {/* Formule 2h */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-secondary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Formule 2h</h3>
                <p className="text-muted-foreground mb-6">Pour chanter sans regarder l'heure</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg text-muted-foreground">Adulte</span>
                    <span className="text-4xl font-bold text-primary">15€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-muted-foreground">Étudiant*</span>
                    <span className="text-4xl font-bold text-accent">14€</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Le format idéal pour un anniversaire, un afterwork ou une soirée entre amis.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-8 italic">
              *Sur présentation d'une carte étudiante en cours de validité.
            </p>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" className="group text-lg px-8 py-6" onClick={scrollToReservation}>
                Choisir ma formule et réserver
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section id="info-pratiques" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Informations <span className="text-primary">pratiques</span>
            </h2>

            <div className="bg-card rounded-2xl p-8 shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">📝 Déroulement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  À votre arrivée, notre équipe vous guide jusqu'à la salle de karaoké. Après une rapide explication du fonctionnement de l'écran de sélection, vous avez la salle pour vous pendant toute la durée réservée. Chaque participant peut choisir ses chansons, créer une playlist, ou improviser en direct. La salle est insonorisée pour que vous puissiez chanter à fond sans gêner ni être gêné. Vous pouvez commander des boissons ou snacks directement pendant votre session grâce à notre service sur place.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">💡 Bon à savoir</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>La salle karaoké est privative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Vous pouvez venir en petit groupe ou jusqu'à 12 personnes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>La réservation est indispensable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pensez à arriver 5 à 10 minutes avant l'horaire prévu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Il est possible de consommer des boissons et snacks dans la salle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pour les événements spéciaux (anniversaires, EVJF/EVG, team building), n'hésitez pas à nous prévenir</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">📍 Contact & Réservation</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Face au Bowling: 30 Rue de la Roche – 26320 Saint-Marcel-lès-Valence (Drôme)</span>
                  </p>
                  <p className="flex items-start">
                    <Phone className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>07.69.48.27.14 (WhatsApp disponible ✅)</span>
                  </p>
                  <p className="flex items-start">
                    <Mail className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>valencebowling@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      

      <KaraokeFAQ />

      <Footer />

      {/* Sticky CTA */}
      <a
        href="/guidap-reservation-karaoke.html"
        className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center py-4 text-lg font-bold text-black rounded-full shadow-2xl hover:opacity-90 transition-opacity"
        style={{ backgroundColor: '#FFBD0B' }}
      >
        🎉 Réserver maintenant
      </a>
    </div>;
};
export default Karaoke;