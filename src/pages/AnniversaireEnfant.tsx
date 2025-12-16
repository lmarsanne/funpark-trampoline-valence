import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cake, Clock, Check, Star, PartyPopper, Mic, Gamepad2 } from "lucide-react";
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
      "🧦 Chaussettes antidérapantes offertes",
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
      "🧦 Chaussettes antidérapantes offertes",
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
      "🧦 Chaussettes antidérapantes offertes",
    ],
  },
  {
    title: "Trampoline + Bowling + Arcade",
    price: "22€",
    perChild: "/ enfant",
    duration: "2h15 Total",
    badge: null,
    badgeColor: "",
    features: [
      "1h de Trampoline",
      "30 min de Bowling",
      "+ 2 Jetons Arcade offerts par enfant",
      "Gâteau, bonbons & boissons inclus",
      "🧦 Chaussettes antidérapantes offertes",
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
        <section className="pt-24 pb-12">
          {/* Text content with padding */}
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-4 mb-6">
                <PartyPopper className="w-10 h-10 md:w-12 md:h-12 text-pink-500 animate-bounce" />
                <Cake className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 animate-bounce delay-100" />
                <PartyPopper className="w-10 h-10 md:w-12 md:h-12 text-blue-500 animate-bounce delay-200" />
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                L'Anniversaire 100% Fun & 0% Stress 🎉
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold mb-6">
                Gâteau, Boissons, Chaussettes & Activités... On s'occupe de <span className="text-primary">TOUT</span> !
              </p>
            </div>
          </div>

          {/* Hero Video - Full width on mobile */}
          <div className="w-full md:container md:mx-auto md:max-w-5xl md:px-4 mb-8">
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

          {/* Intro text */}
          <div className="container mx-auto max-w-5xl px-4 text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Ne cherchez plus, nous organisons l'anniversaire de rêve de votre enfant. 
              <strong> Vous n'avez rien à apporter, rien à préparer</strong>, juste à profiter du sourire de votre enfant.
            </p>
            
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base md:text-lg px-6 py-3 gap-2 shadow-lg">
              ✅ Chaussettes antidérapantes INCLUSES pour tous les invités !
            </Badge>
          </div>
        </section>

        {/* Formulas Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Nos Formules Tout Inclus
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-lg">
              Minimum 6 enfants • Gâteau & Boissons inclus • Zéro stress !
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {formulas.map((formula, index) => (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    formula.badge 
                      ? "border-4 border-pink-500 shadow-lg shadow-pink-200" 
                      : "border-2 border-border"
                  }`}
                >
                  {formula.badge && (
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${formula.badgeColor} text-white px-4 py-2 text-sm font-bold text-center`}>
                      {formula.badge}
                    </div>
                  )}
                  
                  <CardHeader className={`pb-2 ${formula.badge ? "pt-12" : ""}`}>
                    <CardTitle className="text-lg font-bold text-center">
                      {formula.title}
                    </CardTitle>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{formula.price}</span>
                      <span className="text-muted-foreground">{formula.perChild}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{formula.duration}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">Inclus :</p>
                      {formula.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 mb-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-12 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-foreground">
              <Cake className="w-8 h-8 inline mr-2 text-pink-500" />
              Réservez votre créneau en ligne
            </h2>
            
            <div className="-mx-4 md:mx-auto md:max-w-5xl md:rounded-2xl overflow-hidden shadow-lg border-y md:border border-border bg-white">
              <iframe 
                src="https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Fadd-to-cart%2FVRLIPhM4809pa5KgFjwuc1A7G3XrNQHokBsl%2Fundefined%2FDEPARTURE" 
                width="100%" 
                height="700" 
                frameBorder="0" 
                style={{ border: 0, overflow: 'hidden' }}
                title="Réservation anniversaire enfant"
                className="min-h-[500px] md:min-h-[700px]"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Questions fréquentes sur les Anniversaires
            </h2>
            
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-border px-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-pink-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AnniversaireEnfant;
