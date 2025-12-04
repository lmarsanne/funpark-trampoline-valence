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
import { Cake, CandlestickChart, Footprints, Clock, Check, Star, Gift, PartyPopper } from "lucide-react";
import { Helmet } from "react-helmet-async";

const formulas = [
  {
    title: "Formule Bowling",
    price: "15€",
    perChild: "/ enfant",
    features: [
      { icon: Check, text: "1h de Bowling" },
      { icon: Check, text: "Espace goûter réservé (30 min)" },
      { icon: Check, text: "Gâteau, bonbons et boissons (eau + sirop)" },
    ],
    duration: "1h30 à 2h",
    popular: false,
  },
  {
    title: "Formule Trampoline",
    price: "15€",
    perChild: "/ enfant",
    features: [
      { icon: Check, text: "1h de Trampoline" },
      { icon: Check, text: "Chaussettes antidérapantes offertes" },
      { icon: Check, text: "Espace goûter réservé (30 min)" },
      { icon: Check, text: "Gâteau, bonbons et boissons" },
    ],
    duration: "1h30 à 2h",
    popular: false,
  },
  {
    title: "Trampoline + Bowling",
    price: "19€",
    perChild: "/ enfant",
    features: [
      { icon: Check, text: "1h de Trampoline (+ Chaussettes)" },
      { icon: Check, text: "30 min de Bowling" },
      { icon: Check, text: "Espace goûter réservé (30 min)" },
      { icon: Check, text: "Gâteau, bonbons et boissons" },
    ],
    duration: "2h à 2h30",
    popular: true,
  },
  {
    title: "Premium (La Totale)",
    price: "25€",
    perChild: "/ enfant",
    features: [
      { icon: Check, text: "1h Trampoline + 30 min Bowling" },
      { icon: Check, text: "30 min Karaoké" },
      { icon: Check, text: "2 Jetons d'Arcade par enfant" },
      { icon: Check, text: "Goûter complet (30 min)" },
    ],
    duration: "3h",
    popular: false,
  },
];

const faqItems = [
  {
    question: "Quel est le minimum d'enfants ?",
    answer: "Le minimum est de 5 enfants pour valider une formule anniversaire.",
  },
  {
    question: "Les chaussettes sont-elles fournies ?",
    answer: "Oui ! Pour les formules incluant du trampoline, les chaussettes antidérapantes sont incluses pour tous les invités.",
  },
  {
    question: "Peut-on apporter notre propre gâteau ?",
    answer: "Le gâteau est déjà inclus dans la formule (avec bonbons et boissons), mais vous pouvez apporter un complément si vous le souhaitez (sauf contraintes allergies spécifiques, nous contacter).",
  },
  {
    question: "Les parents doivent-ils rester ?",
    answer: "La présence d'au moins un adulte responsable est obligatoire durant toute la durée de l'anniversaire.",
  },
  {
    question: "Comment réserver ?",
    answer: "La réservation se fait directement en ligne via le module ci-dessus. Un acompte peut être demandé pour bloquer le créneau.",
  },
];

const AnniversaireEnfant = () => {
  return (
    <>
      <Helmet>
        <title>Anniversaire Enfant Valence - Trampoline, Bowling & Fun (Tout Inclus)</title>
        <meta
          name="description"
          content="Organisez le meilleur anniversaire enfant de la Drôme au Fun Park ! Formules dès 15€. Trampoline, Bowling, Gâteau et Chaussettes incluses."
        />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center gap-4 mb-6">
              <PartyPopper className="w-12 h-12 text-pink-500 animate-bounce" />
              <Cake className="w-12 h-12 text-yellow-500 animate-bounce delay-100" />
              <Gift className="w-12 h-12 text-blue-500 animate-bounce delay-200" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Organisez un anniversaire enfant inoubliable à Valence !
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Bowling, Trampoline, Arcade... Tout est réuni au Fun Park pour un moment magique.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
              Vous cherchez une idée originale ? Ne cherchez plus. Nos formules tout inclus 
              <span className="inline-flex items-center gap-1 mx-1">
                (<Cake className="w-4 h-4 inline text-pink-500" /> Gâteau + Boissons + Activités)
              </span> 
              garantissent une fête réussie sans stress pour les parents.
            </p>
            
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm md:text-base px-4 py-2 gap-2">
              <Footprints className="w-4 h-4" />
              Minimum 5 enfants - Chaussettes antidérapantes INCLUSES pour le trampoline
            </Badge>
          </div>
        </section>

        {/* Formulas Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-foreground">
              <CandlestickChart className="w-8 h-8 inline mr-2 text-yellow-500" />
              Nos Formules Anniversaire
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formulas.map((formula, index) => (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    formula.popular 
                      ? "border-4 border-pink-500 shadow-lg shadow-pink-200" 
                      : "border-2 border-border"
                  }`}
                >
                  {formula.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-purple-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Best-Seller
                    </div>
                  )}
                  
                  <CardHeader className={`pb-2 ${formula.popular ? "bg-gradient-to-b from-pink-50 to-transparent" : ""}`}>
                    <CardTitle className="text-lg font-bold text-center">
                      {formula.title}
                    </CardTitle>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{formula.price}</span>
                      <span className="text-muted-foreground">{formula.perChild}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {formula.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <feature.icon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature.text}</span>
                      </div>
                    ))}
                    
                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-sm font-medium">Durée totale : {formula.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-12 px-4 bg-white/50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-foreground">
              <Cake className="w-8 h-8 inline mr-2 text-pink-500" />
              Réservez votre créneau en ligne
            </h2>
            
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
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
                    {item.answer}
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
