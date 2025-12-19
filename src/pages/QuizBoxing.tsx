import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
import emotionPeur from "@/assets/quiz-emotion-peur.png";
import emotionSurprise from "@/assets/quiz-emotion-surprise.png";
import quizThemes from "@/assets/quiz-themes.png";
import quizRounds from "@/assets/quiz-rounds.png";
import quizJokers from "@/assets/quiz-jokers.png";
const QuizBoxing = () => {
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
  return <>
    <Helmet>
      <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
    </Helmet>
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${heroQuizBoxing})`
        }}>
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
              
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Découvrez le concept <span className="text-primary">en vidéo</span>
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
              paddingBottom: '56.25%'
            }}>
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/895781107?h=0&title=0&byline=0&portrait=0" title="Quiz Boxing - Concept en vidéo" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{
                border: 'none'
              }} />
            </div>
            
            <p className="text-center text-muted-foreground mt-6">
              Une expérience unique de jeu TV grandeur nature à vivre entre amis, en famille ou entre collègues !
            </p>
          </div>
        </div>
      </section>


      {/* Section Affrontez vos émotions */}
      <section className="py-12 bg-background">
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
              <div className="mb-6 flex justify-center">
                <img src={emotionPeur} alt="La peur - Quiz Boxing" className="w-48 h-48 object-cover rounded-xl" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">LA PEUR</h3>
              <p className="text-muted-foreground leading-relaxed">
                De se faire voler des points par des petits malins, de se laisser déborder par ses émotions, de devenir accro au Quiz Boxing !
              </p>
            </div>

            {/* La Surprise */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="mb-6 flex justify-center">
                <img src={emotionSurprise} alt="La surprise - Quiz Boxing" className="w-48 h-48 object-cover rounded-xl" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">LA SURPRISE</h3>
              <p className="text-muted-foreground leading-relaxed">
                De s'amuser sur des rounds fun et immersifs, de pouvoir attaquer ses adversaires avec de terribles jokers, de ne pas voir le temps passer…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Un jeu immersif sur mesure */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Un jeu immersif <span className="text-primary">sur mesure</span>
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-12">
              60 minutes - Jusqu'à 12 joueurs par Quiz Box
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Thèmes personnalisables */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img src={quizThemes} alt="Thèmes personnalisables Quiz Boxing" className="w-full max-w-sm" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Thèmes personnalisables
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cinéma, séries, dessins animés, musique, sport, nature… Chaque session est unique en fonction des goûts de chacun.
                </p>
              </div>

              {/* Rounds variés et intenses */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img src={quizRounds} alt="Rounds variés et intenses Quiz Boxing" className="w-full max-w-sm" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Des rounds<br />variés et intenses
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  QCM, Jeux de rapidité, Blind Test, Jeux de Hasard… Un enchainement de rounds tous plus fun les uns que les autres pendant 60 minutes.
                </p>
              </div>

              {/* Jokers délirants */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img src={quizJokers} alt="Jokers délirants Quiz Boxing" className="w-full max-w-sm" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Des jokers<br />délirants
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bloquez vos adversaires, pariez sur eux ou encore volez leurs points ! Ruse et stratégie sont au programme…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quelles occasions Section */}
      

      {/* Avantages Section */}
      

      {/* Tarifs Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
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

      {/* Informations pratiques */}
      <section id="info-pratiques" className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
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
      

      <QuizBoxingFAQ />

      <Footer />

      {/* Sticky CTA */}
      <a
        href="/guidap-reservation-boxing.html"
        className="fixed bottom-4 left-4 right-4 z-50 py-4 text-center font-bold text-lg shadow-lg hover:opacity-90 transition-opacity rounded-full md:left-1/2 md:-translate-x-1/2 md:max-w-md"
        style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
      >
        Réserver maintenant
      </a>
    </div>
  </>;
};
export default QuizBoxing;