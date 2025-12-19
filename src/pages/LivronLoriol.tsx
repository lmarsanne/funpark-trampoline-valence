import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Car, Users, Cake, Gift, Rocket, Target, Zap, Trophy } from "lucide-react";
import heroTrampoline from "@/assets/hero-trampoline.jpg";
import birthdayParty from "@/assets/birthday-party.jpg";

const LivronLoriol = () => {
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

  const zones = [{
    icon: Rocket,
    title: "Main Court (Zone Libre)",
    description: "Un plateau de trampolines interconnectés pour enchaîner les rebonds et courir sur les murs."
  }, {
    icon: Target,
    title: "Airbag Géant",
    description: "L'atelier préféré des acrobates ! Tentez vos meilleurs saltos avec une réception 100% sécurisée."
  }, {
    icon: Zap,
    title: "Pistes d'Enchaînement",
    description: "Travaillez votre technique et vos lignes de saut sur nos toiles longues dynamiques."
  }, {
    icon: Trophy,
    title: "Basket Dunk",
    description: "Sentez-vous comme un géant. Le trampoline vous propulse pour claquer des dunks dans le panier."
  }];

  const faqItems = [{
    category: "ACCÈS SUD",
    questions: [{
      q: "Combien de temps depuis Livron/Loriol ?",
      a: "Environ 20 à 25 minutes. L'accès est très simple par la N7 ou l'autoroute (Sortie Valence Nord, nous sommes juste à côté)."
    }, {
      q: "Le parking est-il facile ?",
      a: "Oui, grand parking privé et gratuit devant l'entrée."
    }, {
      q: "Est-ce une grosse structure ?",
      a: "C'est une structure à taille humaine (400m²), idéale pour surveiller les enfants et sauter sans être les uns sur les autres."
    }]
  }, {
    category: "SPORT & SÉCURITÉ",
    questions: [{
      q: "Quelle tenue porter ?",
      a: "Tenue de sport souple (jogging). Jeans et vêtements à rivets interdits. Chaussettes antidérapantes obligatoires (incluses)."
    }, {
      q: "À partir de quel âge ?",
      a: "3 ans (créneaux Baby Jump le matin). 6 ans pour l'accès général."
    }, {
      q: "Quelle est la capacité maximale ?",
      a: "Pour votre confort et la sécurité, nous limitons l'accès à 30 sauteurs en simultané. C'est pourquoi la réservation est conseillée !"
    }, {
      q: "Y a-t-il un parcours Ninja ?",
      a: "Non, nous nous concentrons sur le saut pur : Trampolines connectés, Airbag et Dunk."
    }, {
      q: "Est-ce surveillé ?",
      a: "Oui, notre staff est présent en permanence sur la zone."
    }]
  }, {
    category: "ANNIVERSAIRES",
    questions: [{
      q: "Faut-il réserver l'anniversaire ?",
      a: "Oui, obligatoirement en ligne via notre site."
    }, {
      q: "Le gâteau est-il compris ?",
      a: "Oui : Gâteau, bonbons et boissons sont fournis."
    }, {
      q: "Minimum d'enfants ?",
      a: "5 enfants minimum pour la formule anniversaire."
    }]
  }, {
    category: "GROUPES",
    questions: [{
      q: "Recevez-vous les centres de loisirs ?",
      a: "Oui, nous sommes une destination fréquente pour les ALSH de la vallée de la Drôme."
    }, {
      q: "Peut-on venir en bus ?",
      a: "Oui, parking accessible aux autocars."
    }]
  }, {
    category: "PRATIQUE",
    questions: [{
      q: "Peut-on manger sur place ?",
      a: "Snack et bar disponibles (Gaufres, boissons...). Pique-nique interdit."
    }, {
      q: "Moyens de paiement ?",
      a: "Espèces et Carte Bancaire uniquement. (Pas de chèques vacances)."
    }]
  }];

  return <>
      <Helmet>
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
        <title>Trampoline Park proche Livron & Loriol - Fun Park</title>
        <meta name="description" content="Le Trampoline Park à taille humaine à 20 min de Livron et Loriol. Jauge limitée à 30 pers pour plus de confort. Airbag, Dunk. Anniversaires tout compris." />
        <link rel="canonical" href="https://funparkvalence.fr/trampoline-livron-loriol" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroTrampoline})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Votre Trampoline Park à 20 min de<br />
            <span className="text-primary">Livron</span> et <span className="text-primary">Loriol</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Le sport fun à taille humaine. Profitez de nos zones de saut connectées, Airbag et Dunk. Idéal pour se défouler sans la foule.
          </p>
        </div>
      </section>

      {/* Édito SEO Localisation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              L'espace de saut privilégié des Livronnais et Loriolais
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Envie d'une sortie qui change ? Rejoignez <strong>Valence Trampoline</strong> en une vingtaine de minutes depuis <strong>Livron</strong> ou <strong>Loriol</strong> (via la Nationale 7 ou l'A7 sortie Valence Nord). Contrairement aux usines à gaz, nous vous accueillons dans un espace sécurisé et maîtrisé (<strong>limité à 30 sauteurs</strong>) pour que chacun puisse profiter pleinement des toiles sans se bousculer. <strong>Parking gratuit</strong> sur place.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>20 min depuis Livron</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Car className="w-5 h-5 text-primary" />
                <span>Parking gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>Jauge 30 pers. max</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Zones de Saut */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Univers de Saut
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <zone.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{zone.title}</h3>
                  <p className="text-muted-foreground">{zone.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Section Anniversaires */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Un Anniversaire VIP pour votre enfant
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Pour les familles de <strong>Livron</strong> et <strong>Loriol</strong>, c'est le bon plan. Grâce à notre jauge limitée, les enfants profitent vraiment des installations pendant leur fête. Formule Tout Inclus : Saut + Espace Goûter + Gâteau + Boissons. On gère tout !
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  <Gift className="w-4 h-4" />
                  Tout Inclus
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  <Cake className="w-4 h-4" />
                  Gâteau Fourni
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  Chaussettes offertes
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src={birthdayParty} alt="Anniversaire enfant au trampoline park" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Groupes & Scolaires */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sorties Scolaires & Centres Aérés
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous accueillons les groupes de <strong>Livron</strong> et <strong>Loriol</strong> dans des conditions optimales. Avec une capacité de <strong>30 sauteurs</strong>, vous pouvez privatiser l'espace ou tourner par petits groupes pour une sécurité maximale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-background px-6 py-3 rounded-full">
                <Users className="w-5 h-5 text-primary" />
                <span>Jauge maîtrisée</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-6 py-3 rounded-full">
                <Car className="w-5 h-5 text-primary" />
                <span>Parking autocar</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Accès N7/A7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Questions Fréquentes - Livron & Loriol
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((category, categoryIndex) => <div key={categoryIndex} className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, itemIndex) => <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`} className="bg-muted rounded-lg px-4">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </div>)}
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
    </>;
};

export default LivronLoriol;