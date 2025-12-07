import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  PartyPopper, 
  Mic2, 
  Target, 
  CircleDot, 
  ParkingCircle, 
  Wine, 
  Car, 
  Shirt, 
  Users, 
  CalendarCheck, 
  UtensilsCrossed 
} from "lucide-react";
import { Link } from "react-router-dom";

const EvgEvjf = () => {
  const scrollToActivities = () => {
    const element = document.getElementById('activites-evg');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      question: "Peut-on venir déguisés ?",
      answer: "OUI ! C'est même encouragé. Lapin, super-héros ou tenue ridicule : faites plaisir au futur marié. On demande juste une tenue décente et respectueuse des familles présentes sur le site.",
      icon: Shirt,
    },
    {
      question: "Peut-on boire un coup sur place ?",
      answer: "Bien sûr. Notre Bar propose bières, softs et boissons chaudes. Pour rappel, l'abus d'alcool est dangereux pour la santé, et nous nous réservons le droit de refuser l'accès aux personnes trop alcoolisées pour la sécurité de tous.",
      icon: Wine,
    },
    {
      question: "Faut-il réserver pour un groupe ?",
      answer: "<strong>Pour le Karaoké et le Quiz Boxing :</strong> OUI, c'est obligatoire pour bloquer votre salle.<br/><strong>Pour le Bowling :</strong> Non, c'est sans réservation. Arrivez tôt pour être sûrs d'avoir des pistes côte à côte !",
      icon: CalendarCheck,
    },
    {
      question: "On est un groupe de 20, c'est possible ?",
      answer: "Oui ! Nos box Karaoké vont jusqu'à 12 pers mais vous pouvez faire 2 groupes. Le Quiz Boxing est parfait pour les défis. Au Bowling, on vous mettra sur plusieurs pistes voisines (6 par piste).",
      icon: Users,
    },
    {
      question: "Peut-on manger sur place ?",
      answer: "Oui, nous proposons une offre snacking (pizzas). Attention, pique-niques interdits.",
      icon: UtensilsCrossed,
    },
  ];

  return (
    <div className="min-h-screen dark bg-background text-foreground">
      <Helmet>
        <title>EVG EVJF Valence - Enterrement de vie de garçon & jeune fille | Fun Park</title>
        <meta 
          name="description" 
          content="Organisez un EVG ou EVJF légendaire à Valence ! Bowling, Karaoké privé, Quiz Boxing... Toutes les activités au même endroit. Parking gratuit, bar sur place." 
        />
      </Helmet>

      <Navigation />

      {/* Hero Section - Dark Neon Style */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-[hsl(220,20%,8%)]">
        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(180,70%,50%)] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(320,80%,50%)] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(24,100%,50%)] rounded-full blur-[200px] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-[hsl(180,70%,50%)]/20 text-[hsl(180,70%,60%)] border border-[hsl(180,70%,50%)]/30 hover:bg-[hsl(180,70%,50%)]/30">
              <PartyPopper className="w-4 h-4 mr-2" />
              ENTERREMENT DE VIE DE CÉLIBATAIRE
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Organisez un EVG / EVJF{" "}
              <span className="bg-gradient-to-r from-[hsl(180,70%,50%)] via-[hsl(320,80%,60%)] to-[hsl(24,100%,50%)] bg-clip-text text-transparent">
                légendaire
              </span>{" "}
              à Valence
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[hsl(220,10%,70%)] leading-relaxed mb-8 max-w-3xl mx-auto">
              Bowling, Karaoké, Quiz Boxing... Tout pour la future mariée ou le futur marié au même endroit.{" "}
              <span className="text-[hsl(48,100%,60%)] font-semibold">Fous rires garantis.</span>
            </p>

            {/* CTA */}
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-gradient-to-r from-[hsl(320,80%,50%)] to-[hsl(24,100%,50%)] hover:from-[hsl(320,80%,55%)] hover:to-[hsl(24,100%,55%)] text-white border-0 shadow-lg shadow-[hsl(320,80%,50%)]/30 hover:shadow-xl hover:shadow-[hsl(320,80%,50%)]/40 transition-all duration-300"
              onClick={scrollToActivities}
            >
              Réserver les activités
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Top 3 Activités - Dark Neon Cards */}
      <section id="activites-evg" className="py-20 bg-[hsl(220,20%,6%)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Les 3 incontournables{" "}
            <span className="bg-gradient-to-r from-[hsl(180,70%,50%)] to-[hsl(320,80%,60%)] bg-clip-text text-transparent">
              pour un groupe
            </span>
          </h2>
          <p className="text-center text-[hsl(220,10%,60%)] mb-12 text-lg">
            Les activités les plus délirantes pour marquer le coup
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quiz Boxing */}
            <div className="group relative bg-[hsl(220,20%,10%)] rounded-2xl p-8 border border-[hsl(220,15%,20%)] hover:border-[hsl(180,70%,50%)]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180,70%,50%)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(180,70%,50%)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-[hsl(180,70%,50%)]" />
                </div>
                <span className="text-2xl mb-2 block">❓</span>
                <h3 className="text-2xl font-bold text-white mb-4">QUIZ BOXING & BLIND TEST</h3>
                <p className="text-[hsl(220,10%,65%)] leading-relaxed mb-6">
                  Le plateau télé comme en vrai ! Affrontez le futur marié sur des questions délirantes ou un Blind Test. Buzzers, jokers et mauvaise foi autorisée.
                </p>
                <Link to="/quiz-boxing">
                  <Button className="w-full bg-[hsl(180,70%,50%)] hover:bg-[hsl(180,70%,45%)] text-[hsl(220,20%,10%)] font-bold">
                    Réserver le plateau
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Karaoké */}
            <div className="group relative bg-[hsl(220,20%,10%)] rounded-2xl p-8 border border-[hsl(220,15%,20%)] hover:border-[hsl(320,80%,50%)]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(320,80%,50%)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(320,80%,50%)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mic2 className="w-8 h-8 text-[hsl(320,80%,60%)]" />
                </div>
                <span className="text-2xl mb-2 block">🎤</span>
                <h3 className="text-2xl font-bold text-white mb-4">KARAOKÉ BOX PRIVÉE</h3>
                <p className="text-[hsl(220,10%,65%)] leading-relaxed mb-6">
                  Le moment dossier de la soirée. Une salle privée juste pour votre groupe. Chantez (faux) les tubes de votre jeunesse sans que personne ne vous juge.
                </p>
                <Link to="/karaoke">
                  <Button className="w-full bg-[hsl(320,80%,50%)] hover:bg-[hsl(320,80%,45%)] text-white font-bold">
                    Réserver le box
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Bowling */}
            <div className="group relative bg-[hsl(220,20%,10%)] rounded-2xl p-8 border border-[hsl(220,15%,20%)] hover:border-[hsl(24,100%,50%)]/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(24,100%,50%)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(24,100%,50%)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CircleDot className="w-8 h-8 text-[hsl(24,100%,50%)]" />
                </div>
                <span className="text-2xl mb-2 block">🎳</span>
                <h3 className="text-2xl font-bold text-white mb-4">BOWLING & APÉRO</h3>
                <p className="text-[hsl(220,10%,65%)] leading-relaxed mb-6">
                  Le grand classique pour commencer ou finir la soirée. Défiez-vous sur nos 12 pistes en profitant de notre carte de boissons et planches.
                </p>
                <Link to="/#tarifs">
                  <Button className="w-full bg-[hsl(24,100%,50%)] hover:bg-[hsl(24,100%,45%)] text-white font-bold">
                    Voir les tarifs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zéro Stress Section */}
      <section className="py-20 bg-[hsl(220,20%,8%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              Pourquoi choisir{" "}
              <span className="text-[hsl(48,100%,60%)]">Fun Park ?</span>
            </h2>
            <p className="text-center text-[hsl(180,70%,50%)] font-semibold text-xl mb-8">
              Zéro Stress pour l'organisateur
            </p>

            <div className="bg-gradient-to-br from-[hsl(220,20%,12%)] to-[hsl(220,20%,10%)] rounded-2xl p-8 md:p-12 border border-[hsl(220,15%,20%)] relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(48,100%,60%)] rounded-full blur-[150px] opacity-10"></div>
              
              <p className="text-lg md:text-xl text-[hsl(220,10%,75%)] leading-relaxed relative z-10 mb-8">
                <span className="text-white font-semibold">Témoins, soufflez !</span> On a tout prévu. Parking gratuit facile pour tout le convoi, bar sur place pour s'hydrater, et pas besoin de reprendre la voiture entre deux activités.{" "}
                <span className="text-[hsl(180,70%,50%)]">On est à 10 min du centre de Valence pour enchaîner sur la boîte de nuit.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="flex items-center gap-4 bg-[hsl(220,20%,15%)]/50 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(180,70%,50%)]/20 flex items-center justify-center flex-shrink-0">
                    <ParkingCircle className="w-6 h-6 text-[hsl(180,70%,50%)]" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Parking gratuit</p>
                    <p className="text-sm text-[hsl(220,10%,60%)]">Grand parking privé</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[hsl(220,20%,15%)]/50 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(320,80%,50%)]/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="w-6 h-6 text-[hsl(320,80%,60%)]" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Bar sur place</p>
                    <p className="text-sm text-[hsl(220,10%,60%)]">Boissons & snacks</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[hsl(220,20%,15%)]/50 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(24,100%,50%)]/20 flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-[hsl(24,100%,50%)]" />
                  </div>
                  <div>
                    <p className="font-bold text-white">10 min du centre</p>
                    <p className="text-sm text-[hsl(220,10%,60%)]">Facile d'accès</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[hsl(220,20%,6%)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Questions{" "}
            <span className="bg-gradient-to-r from-[hsl(180,70%,50%)] to-[hsl(320,80%,60%)] bg-clip-text text-transparent">
              Organisateur
            </span>
          </h2>
          <p className="text-center text-[hsl(220,10%,60%)] mb-12 text-lg">
            Tout ce qu'il faut savoir pour préparer l'EVG/EVJF parfait
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-[hsl(220,20%,10%)] rounded-xl px-6 border border-[hsl(220,15%,20%)] hover:border-[hsl(180,70%,50%)]/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline text-white">
                    <div className="flex items-center gap-3">
                      <item.icon className="text-[hsl(180,70%,50%)] flex-shrink-0" size={20} />
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(220,10%,65%)]">
                    <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[hsl(220,20%,8%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Prêt à organiser une fête{" "}
            <span className="text-[hsl(320,80%,60%)]">inoubliable</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/karaoke">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-[hsl(320,80%,50%)] hover:bg-[hsl(320,80%,45%)] text-white"
              >
                <Mic2 className="mr-2" />
                Réserver Karaoké
              </Button>
            </Link>
            <Link to="/quiz-boxing">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-[hsl(180,70%,50%)] hover:bg-[hsl(180,70%,45%)] text-[hsl(220,20%,10%)]"
              >
                <Target className="mr-2" />
                Réserver Quiz Boxing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EvgEvjf;
