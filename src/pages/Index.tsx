import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroMain from "@/assets/hero-karaoke-main.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Index = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation-section');
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
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMain})` }}
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
              Vivez des expériences{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                inoubliables
              </span>
            </h1>

            {/* Intro Text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Découvrez un lieu unique où plaisir et émotion se rencontrent ! Que ce soit pour un afterwork, un anniversaire, un team building ou simplement passer un bon moment entre amis ou en famille, nous avons l'activité parfaite pour vous. Karaoke, Quiz Boxing, Trampoline... Préparez-vous à vivre des moments exceptionnels ! 🎉
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group text-lg px-8 py-6" onClick={scrollToReservation}>
                Réserver maintenant
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Découvrez nos activités <span className="text-primary">en vidéo</span>
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/895781107?h=0&title=0&byline=0&portrait=0"
                title="Nos activités en vidéo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
            
            <p className="text-center text-muted-foreground mt-6">
              Des expériences uniques à vivre entre amis, en famille ou entre collègues !
            </p>
          </div>
        </div>
      </section>

      {/* Section Nos activités */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Nos <span className="text-primary">activités</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Karaoke */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="mb-6 flex justify-center">
                <img 
                  src={gallery1} 
                  alt="Karaoke" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">KARAOKE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chantez vos titres préférés dans des salles privatives équipées des dernières technologies. Ambiance garantie pour des soirées mémorables !
              </p>
            </div>

            {/* Quiz Boxing */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="mb-6 flex justify-center">
                <img 
                  src={gallery2} 
                  alt="Quiz Boxing" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">QUIZ BOXING</h3>
              <p className="text-muted-foreground leading-relaxed">
                Affrontez vos amis dans un jeu TV grandeur nature ! Quiz, blind test, jokers délirants... Une expérience unique et compétitive.
              </p>
            </div>

            {/* Trampoline */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center p-8">
              <div className="mb-6 flex justify-center">
                <img 
                  src={gallery3} 
                  alt="Trampoline" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">TRAMPOLINE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sautez, volez et amusez-vous dans notre espace trampoline ! Parfait pour se défouler et partager des moments de pure joie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Pourquoi nous <span className="text-primary">choisir ?</span>
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-12">
              Une expérience unique pour tous vos événements
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Des espaces privatifs */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Des espaces privatifs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Profitez de salles entièrement privées pour vivre vos moments en toute intimité, sans être dérangé.
                </p>
              </div>

              {/* Équipements dernière génération */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Équipements<br />dernière génération
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Du matériel de qualité professionnelle pour une expérience immersive et inoubliable.
                </p>
              </div>

              {/* Ambiance conviviale */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ambiance<br />conviviale
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Une équipe accueillante et des espaces chaleureux pour passer des moments exceptionnels ensemble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Nos <span className="text-primary">tarifs</span>
            </h2>

            <p className="text-center text-lg text-muted-foreground mb-12">
              Des formules adaptées à tous les budgets et toutes les envies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Tarif Adulte */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-primary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Adulte</h3>
                <p className="text-muted-foreground mb-6">À partir de 18 ans</p>
                
                <div className="mb-6">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-primary">À partir de 15€</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Par personne selon l'activité choisie. Le format idéal pour un afterwork ou une soirée entre amis.
                </p>
              </div>

              {/* Tarif Étudiant */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-accent/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Étudiant*</h3>
                <p className="text-muted-foreground mb-6">Avec carte étudiante</p>
                
                <div className="mb-6">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-accent">Tarifs réduits</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Profitez de tarifs avantageux sur présentation de votre carte étudiante en cours de validité.
                </p>
              </div>

              {/* Tarif Enfant */}
              <div className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-secondary/20">
                <h3 className="text-3xl font-bold mb-2 text-foreground">Enfant</h3>
                <p className="text-muted-foreground mb-6">Jusqu'à 12 ans</p>
                
                <div className="mb-6">
                  <div className="flex justify-center items-baseline">
                    <span className="text-5xl font-bold text-secondary">Tarifs spéciaux</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Parfait pour un anniversaire ou une sortie famille inoubliable avec des tarifs adaptés.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-8 italic">
              *Sur présentation d'une carte étudiante en cours de validité. Les tarifs varient selon l'activité choisie.
            </p>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" className="group text-lg px-8 py-6" onClick={scrollToReservation}>
                Découvrir toutes nos formules
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Réservation Section */}
      <section id="reservation-section" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Réservez votre <span className="text-primary">activité</span>
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

            {/* Liste des activités */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="/karaoke" className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Karaoke</h3>
                <p className="text-muted-foreground mb-4">Chantez à volonté</p>
                <Button variant="outline" className="w-full">
                  Réserver
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </a>

              <a href="/quiz-boxing" className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Quiz Boxing</h3>
                <p className="text-muted-foreground mb-4">Jeu TV grandeur nature</p>
                <Button variant="outline" className="w-full">
                  Réserver
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </a>

              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center opacity-75">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Trampoline</h3>
                <p className="text-muted-foreground mb-4">Bientôt disponible</p>
                <Button variant="outline" className="w-full" disabled>
                  Prochainement
                </Button>
              </div>
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
                <h3 className="text-2xl font-bold mb-4">🎯 Notre concept</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bienvenue dans un lieu où le divertissement prend une nouvelle dimension ! Nous proposons plusieurs activités immersives dans des espaces privatifs et entièrement équipés. À votre arrivée, notre équipe vous accueille chaleureusement et vous guide vers votre espace dédié. Que vous veniez pour chanter, jouer ou sauter, vous vivrez une expérience unique dans un cadre convivial et sécurisé. Nos salles sont insonorisées : amusez-vous sans retenue !
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">💡 Bon à savoir</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Toutes nos salles sont privatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Capacité variable selon l'activité choisie</span>
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

      <FAQSection />

      <Footer />
    </div>
  );
};

export default Index;
