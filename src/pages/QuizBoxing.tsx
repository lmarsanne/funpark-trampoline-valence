import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { QuizBoxingFAQ } from "@/components/QuizBoxingFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroQuizBoxing from "@/assets/hero-quiz-boxing.jpg";
import quizFriends from "@/assets/quiz-boxing-friends.jpg";
import quizFamily from "@/assets/quiz-boxing-family.jpg";
import quizColleagues from "@/assets/quiz-boxing-colleagues.jpg";
import emotionJoie from "@/assets/quiz-emotion-joie.png";

const QuizBoxing = () => {
  const reservationUrl = "https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Fadd-to-cart%2F80FQWEsnGZ7BJSAqKXohcDCYlgRb2IyjM1Hu%2Fundefined%2FDEPARTURE";

  const scrollToReservation = () => {
    const element = document.getElementById('reservation-quiz-boxing');
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

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroQuizBoxing})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
              NOUVEAUTÉ • Saint-Marcel-lès-Valence
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Le combat le plus fun de votre vie –{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Jeu TV Grandeur Nature
              </span>
            </h1>

            {/* Intro Text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              La foule est en délire, la tension monte avant de rentrer dans l'arène ! Aux côtés de vos adversaires, venez vivre une incroyable expérience comme à la TV. Les portes s'ouvrent dans un grand show de lumières, les combattants se mettent en place pour plusieurs rounds, riches en tensions et en rires. Au programme : quiz game, blind test, jokers délirants, mini-jeux… Un jeu TV Grandeur nature à la fois fun et stratégique ! 🎯
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group text-lg px-8 py-6" onClick={scrollToReservation}>
                Réserver ma partie Quiz Boxing
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={scrollToInfo}>
                Privatiser pour un événement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Découvrez le concept <span className="text-primary">en vidéo</span>
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/895781107?h=0&title=0&byline=0&portrait=0"
                title="Quiz Boxing - Concept en vidéo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
            
            <p className="text-center text-muted-foreground mt-6">
              Une expérience unique de jeu TV grandeur nature à vivre entre amis, en famille ou entre collègues !
            </p>
          </div>
        </div>
      </section>

      {/* Section Affrontez vos émotions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Affrontez vos <span className="text-primary">émotions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* La Joie */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="mb-6 flex justify-center">
                <img src={emotionJoie} alt="La joie - Quiz Boxing" className="w-48 h-48 object-cover rounded-xl" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">LA JOIE</h3>
              <p className="text-muted-foreground leading-relaxed">
                De se retrouver en famille, entre amis ou collègues de travail pendant 60 minutes dans une incroyable arène immersive, digne d'un jeu TV Grandeur Nature.
              </p>
            </div>

            {/* La Peur */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="text-7xl mb-6">😨</div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">LA PEUR</h3>
              <p className="text-muted-foreground leading-relaxed">
                De se faire voler des points par des petits malins, de se laisser déborder par ses émotions, de devenir accro au Quiz Boxing !
              </p>
            </div>

            {/* La Surprise */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="text-7xl mb-6">😲</div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">LA SURPRISE</h3>
              <p className="text-muted-foreground leading-relaxed">
                De s'amuser sur des rounds fun et immersifs, de pouvoir attaquer ses adversaires avec de terribles jokers, de ne pas voir le temps passer…
              </p>
            </div>
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
                <img 
                  src={quizFriends} 
                  alt="Entre amis au Quiz Boxing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Entre amis</h3>
                <p className="text-muted-foreground">
                  Compétition acharnée, trahisons mémorables, victoires éclatantes.
                </p>
              </div>
            </div>

            {/* En famille */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img 
                  src={quizFamily} 
                  alt="En famille au Quiz Boxing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">En famille</h3>
                <p className="text-muted-foreground">
                  Générations réunies autour de questions pour tous, du plus petit au plus grand.
                </p>
              </div>
            </div>

            {/* Entre collègues */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img 
                  src={quizColleagues} 
                  alt="Entre collègues au Quiz Boxing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Entre collègues</h3>
                <p className="text-muted-foreground">
                  Team building ludique, afterwork décalé, séminaire qui sort de l'ordinaire.
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
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Salle privative</h3>
              <p className="text-sm text-primary font-semibold mb-3">Votre arène, vos règles.</p>
              <p className="text-muted-foreground">
                Affrontez-vous dans une salle dédiée, sans jugement extérieur.
              </p>
            </div>

            {/* 4 Rounds variés */}
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center border-t-4 border-secondary">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">4 Rounds variés</h3>
              <p className="text-sm text-secondary font-semibold mb-3">Quiz, Blind Test, Juste Prix, Vrai ou Faux.</p>
              <p className="text-muted-foreground">
                Des challenges ultra-différents pour ne jamais s'ennuyer.
              </p>
            </div>

            {/* Jokers délirants */}
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center border-t-4 border-accent">
              <div className="text-6xl mb-4">🃏</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Jokers délirants</h3>
              <p className="text-sm text-accent font-semibold mb-3">Assommer, parier, voler : tous les coups sont permis.</p>
              <p className="text-muted-foreground">
                Trichez, bluffez, sabotez... bienvenue dans l'arène !
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
              Nos tarifs <span className="text-primary">Quiz Boxing</span>
            </h2>

            <p className="text-center text-lg text-muted-foreground mb-12">
              Tarifs valables pour des groupes de 4 à 12 joueurs • 60 minutes de jeu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Tarif Adulte */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Adulte</h3>
                <p className="text-muted-foreground mb-6">À partir de 18 ans</p>
                
                <div className="mb-6">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-primary">20€</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Par personne et par partie. Le format idéal pour un afterwork ou une soirée entre amis.
                </p>
              </div>

              {/* Tarif Étudiant */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-accent/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Étudiant*</h3>
                <p className="text-muted-foreground mb-6">Avec carte étudiante</p>
                
                <div className="mb-6">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-accent">18€</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Tarif spécial pour les étudiants. Carte en cours de validité obligatoire.
                </p>
              </div>

              {/* Tarif Enfant */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-secondary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Enfant</h3>
                <p className="text-muted-foreground mb-6">Jusqu'à 12 ans</p>
                
                <div className="mb-6">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-secondary">15€</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Parfait pour un anniversaire ou une sortie famille inoubliable.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-8 italic">
              *Sur présentation d'une carte étudiante en cours de validité. Le tarif enfant s'applique aux enfants de 12 ans maximum.
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

      {/* Réservation Section */}
      <section id="reservation-quiz-boxing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Réservez votre <span className="text-primary">partie</span>
            </h2>

            {/* Bandeau rassurant */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="text-primary" size={24} />
                <p className="text-center text-foreground font-semibold">
                  Réservation sécurisée via notre partenaire GuiDap. Paiement en ligne et confirmation immédiate.
                </p>
              </div>

              {/* Points clés */}
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

            {/* Iframe */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden" style={{
            height: '800px'
          }}>
              <iframe src={reservationUrl} className="w-full h-full" title="Réservation Quiz Boxing" style={{
              border: 'none'
            }} />
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
                <h3 className="text-2xl font-bold mb-4">🎮 Déroulement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  À votre arrivée, notre équipe vous accueille et vous guide vers votre salle Quiz Boxing. Une fois installés à vos bornes de jeu, vous entrez dans l'arène ! Quatre rounds différents (Quiz, Blind Test, Juste Prix, Vrai ou Faux) s'enchaînent sur 60 minutes de compétition acharnée. Entre chaque manche, utilisez vos jokers pour prendre l'avantage... ou saboter vos adversaires. La salle est insonorisée : criez, chantez, trichez, personne ne vous jugera. À la fin, le grand vainqueur est couronné avec classe (ou moquerie, selon l'ambiance).
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">💡 Bon à savoir</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>La salle Quiz Boxing est privative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>De 4 à 12 joueurs maximum par partie</span>
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
                    <span>Des boissons et snacks sont disponibles sur place</span>
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
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Toujours hésitant ? Venez défier vos amis au Quiz Boxing et créez vos meilleurs souvenirs de compétition 🏆
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="group bg-white text-primary hover:bg-white/90"
              onClick={scrollToReservation}
            >
              Réserver en ligne
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="group border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="mailto:valencebowling@gmail.com">
                Nous contacter
                <Mail className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <QuizBoxingFAQ />

      <Footer />
    </div>
  );
};

export default QuizBoxing;
