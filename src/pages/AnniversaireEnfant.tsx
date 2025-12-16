import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cake, Clock, Check, PartyPopper, ArrowDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const formulas = [
  {
    title: "Formule Trampoline",
    price: "15€",
    perChild: "/ enfant",
    duration: "1h30 Total",
    badge: null,
    badgeColor: "",
    features: [
      "1h d'Activité Trampoline",
      "30 min de Goûter (Espace réservé)",
      "Gâteau, bonbons & boissons inclus",
      "🧦 Chaussettes offertes",
    ],
  },
  {
    title: "Trampoline + Bowling",
    price: "19€",
    perChild: "/ enfant",
    duration: "2h00 Total",
    badge: "⭐ Le plus populaire",
    badgeColor: "from-pink-500 to-purple-500",
    features: [
      "1h de Trampoline",
      "30 min de Bowling",
      "30 min de Goûter (Espace réservé)",
      "Gâteau, bonbons & boissons inclus",
      "🧦 Chaussettes offertes",
    ],
  },
  {
    title: "Trampoline + Karaoké",
    price: "20€",
    perChild: "/ enfant",
    duration: "2h30 Total",
    badge: "🎤 Les filles adorent !",
    badgeColor: "from-pink-400 to-fuchsia-500",
    features: [
      "1h de Trampoline",
      "1h de Karaoké (Box Privée)",
      "30 min de Goûter (Espace réservé)",
      "Gâteau, bonbons & boissons inclus",
      "🧦 Chaussettes offertes",
    ],
  },
  {
    title: "Trampo + Bowling + Arcade",
    price: "22€",
    perChild: "/ enfant",
    duration: "2h15 Total",
    badge: null,
    badgeColor: "",
    features: [
      "1h de Trampoline",
      "30 min de Bowling",
      "+ 2 Jetons Arcade offerts",
      "Gâteau, bonbons & boissons inclus",
      "🧦 Chaussettes offertes",
    ],
  },
];

const faqItems = [
  {
    question: "Quel est le nombre minimum d'enfants requis ?",
    answer: "Pour valider une formule anniversaire, un minimum de <strong>6 enfants</strong> est requis (l'enfant fêté inclus).",
  },
  {
    question: "Le gâteau et les boissons sont-ils fournis ?",
    answer: "OUI, c'est du 100% clé en main ! Nous fournissons le gâteau (Chocolat ou Fruits), les bonbons, les boissons (sirops à volonté) et toute la vaisselle. Aucune nourriture extérieure n'est acceptée (sauf allergie médicale justifiée).",
  },
  {
    question: "Les chaussettes sont-elles vraiment incluses ?",
    answer: "Absolument ! Fini les suppléments à l'accueil. Nous fournissons une paire de chaussettes antidérapantes à chaque enfant invité.",
  },
  {
    question: "À partir de quel âge conseillez-vous l'anniversaire ?",
    answer: "Nos formules sont idéales à partir de <strong>5 ans</strong>. Les enfants restent sous la surveillance des parents ou accompagnateurs présents (qui ne paient pas l'entrée s'ils ne sautent pas !).",
  },
  {
    question: "Combien de temps faut-il réserver à l'avance ?",
    answer: "Les créneaux du week-end partent très vite ! Nous vous conseillons de réserver <strong>3 à 4 semaines à l'avance</strong> pour avoir l'horaire de votre choix.",
  },
  {
    question: "Que se passe-t-il si un invité est absent le jour J ?",
    answer: "La réservation est ferme et définitive. <strong>Nous ne procédons à aucun remboursement</strong> en cas d'invité manquant. Le forfait est dû pour le nombre d'enfants réservé initialement.",
  },
  {
    question: "Comment se fait le paiement ?",
    answer: "Le paiement s'effectue <strong>en totalité en ligne</strong> au moment de la réservation. Cela valide définitivement votre créneau et vous permet de profiter de la fête sans passer par la caisse à l'arrivée.",
  },
  {
    question: "Faut-il des chaussures ou équipements spéciaux ?",
    answer: "Bowling = Vos propres baskets propres (pas de location). Trampoline = Chaussettes antidérapantes (incluses dans les formules !).",
  },
];

const scrollToReservation = () => {
  const element = document.getElementById('reservation');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const AnniversaireEnfant = () => {
  return (
    <>
      <Helmet>
        <title>Anniversaire Enfant Valence - 100% Fun & 0% Stress | Tout Inclus</title>
        <meta
          name="description"
          content="L'anniversaire enfant tout inclus à Valence ! Gâteau, boissons, chaussettes & activités. Formules dès 15€. Trampoline, Bowling, Karaoké. On s'occupe de tout !"
        />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 pb-6 md:pb-12">
          {/* Text content with padding */}
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-4 md:mb-8">
              <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6">
                <PartyPopper className="w-8 h-8 md:w-12 md:h-12 text-pink-500 animate-bounce" />
                <Cake className="w-8 h-8 md:w-12 md:h-12 text-yellow-500 animate-bounce delay-100" />
                <PartyPopper className="w-8 h-8 md:w-12 md:h-12 text-blue-500 animate-bounce delay-200" />
              </div>
              
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                L'Anniversaire 100% Fun & 0% Stress 🎉
              </h1>
              
              <p className="text-base md:text-2xl lg:text-3xl text-foreground font-semibold mb-3 md:mb-6">
                On s'occupe de <span className="text-primary">TOUT</span> !
              </p>
            </div>
          </div>

          {/* Hero Video - Full width on mobile */}
          <div className="w-full md:container md:mx-auto md:max-w-5xl md:px-4 mb-4 md:mb-8">
            <div className="relative md:rounded-3xl overflow-hidden shadow-2xl md:aspect-video">
              <video
                className="w-full h-auto md:h-full md:object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/anniv.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* CTA Button mobile */}
          <div className="container mx-auto max-w-5xl px-4">
            <Button 
              onClick={scrollToReservation}
              size="lg"
              className="w-full md:hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg py-6 shadow-lg mb-4"
            >
              <Cake className="w-5 h-5 mr-2" />
              Je réserve maintenant
              <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
            </Button>
          </div>

          {/* Intro text */}
          <div className="container mx-auto max-w-5xl px-4 text-center space-y-3 md:space-y-6">
            <p className="text-sm md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Gâteau, boissons, chaussettes & activités inclus.
              <strong className="block md:inline"> Vous n'avez rien à préparer !</strong>
            </p>
            
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs md:text-lg px-4 md:px-6 py-2 md:py-3 gap-1 md:gap-2 shadow-lg">
              ✅ Chaussettes INCLUSES pour tous !
            </Badge>
          </div>
        </section>

        {/* Formulas Section */}
        <section className="py-6 md:py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-foreground">
              Nos Formules Tout Inclus
            </h2>
            <p className="text-center text-muted-foreground mb-6 md:mb-10 text-sm md:text-lg">
              Minimum 6 enfants • Zéro stress !
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {formulas.map((formula, index) => (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    formula.badge 
                      ? "border-2 md:border-4 border-pink-500 shadow-lg shadow-pink-200" 
                      : "border border-border"
                  }`}
                >
                  {formula.badge && (
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${formula.badgeColor} text-white px-2 md:px-4 py-1 md:py-2 text-[10px] md:text-sm font-bold text-center`}>
                      {formula.badge}
                    </div>
                  )}
                  
                  <CardHeader className={`p-3 md:p-6 pb-1 md:pb-2 ${formula.badge ? "pt-8 md:pt-12" : ""}`}>
                    <CardTitle className="text-xs md:text-lg font-bold text-center leading-tight">
                      {formula.title}
                    </CardTitle>
                    <div className="text-center">
                      <span className="text-2xl md:text-4xl font-bold text-primary">{formula.price}</span>
                      <span className="text-[10px] md:text-base text-muted-foreground">{formula.perChild}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-[10px] md:text-sm font-medium">{formula.duration}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-3 md:p-6 pt-0 md:pt-0 space-y-1 md:space-y-3">
                    <div className="border-t border-border pt-2 md:pt-4">
                      <p className="text-[8px] md:text-xs font-semibold text-muted-foreground uppercase mb-1 md:mb-3">Inclus :</p>
                      {formula.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-1 md:gap-2 mb-1 md:mb-2">
                          <Check className="w-3 h-3 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[10px] md:text-sm text-foreground/80 leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA after formulas - mobile */}
            <Button 
              onClick={scrollToReservation}
              size="lg"
              className="w-full md:hidden mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-base py-5 shadow-lg"
            >
              <Cake className="w-5 h-5 mr-2" />
              Réserver cette formule
            </Button>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-6 md:py-12 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-foreground">
              <Cake className="w-6 h-6 md:w-8 md:h-8 inline mr-2 text-pink-500" />
              Réservez en ligne
            </h2>
            
            <div className="-mx-4 md:mx-auto md:max-w-5xl md:rounded-2xl overflow-hidden shadow-lg border-y md:border border-border bg-white">
              <iframe 
                src="https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Fadd-to-cart%2FVRLIPhM4809pa5KgFjwuc1A7G3XrNQHokBsl%2Fundefined%2FDEPARTURE" 
                width="100%" 
                height="700" 
                frameBorder="0" 
                style={{ border: 0, overflow: 'hidden' }}
                title="Réservation anniversaire enfant"
                className="min-h-[600px] md:min-h-[700px]"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 md:py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-foreground">
              Questions fréquentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg md:rounded-xl border border-border px-3 md:px-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-pink-600 text-sm md:text-base py-3 md:py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-3 md:pb-4">
                    <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating CTA Button - Mobile only */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <Button 
          onClick={scrollToReservation}
          size="lg"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-base py-4 shadow-2xl rounded-full"
        >
          <Cake className="w-5 h-5 mr-2" />
          Réserver l'anniversaire
        </Button>
      </div>
    </>
  );
};

export default AnniversaireEnfant;
