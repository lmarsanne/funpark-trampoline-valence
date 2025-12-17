import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Clock, Car, Users, Cake, Gift, Medal, Target, Rocket, Trophy } from "lucide-react";
import heroTrampoline from "@/assets/hero-trampoline.jpg";
import birthdayParty from "@/assets/birthday-party.jpg";

const GuilherandStPeray = () => {
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

  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const zones = [
    {
      icon: Rocket,
      title: "Zone de Saut Libre (Main Court)",
      description: "Enchaînez les rebonds, travaillez votre cardio et rebondissez sur les murs dans cet espace interconnecté."
    },
    {
      icon: Target,
      title: "Airbag Réception",
      description: "Envie de tenter un salto ? Lancez-vous sans peur et atterrissez en toute sécurité dans notre coussin géant."
    },
    {
      icon: Medal,
      title: "Parcours Ninja",
      description: "Testez votre force et votre agilité. Un défi chronométré pour voir qui de vos amis est le vrai guerrier."
    },
    {
      icon: Trophy,
      title: "Basket Dunk",
      description: "Prenez votre élan sur le trampoline et marquez des paniers spectaculaires, quelle que soit votre taille."
    }
  ];

  const faqItems = [
    {
      category: "ACCÈS ARDÈCHE",
      questions: [
        {
          q: "Est-ce loin de Guilherand-Granges ?",
          a: "C'est la porte à côté ! Comptez 10 à 12 minutes de voiture. Passez par le pont des Lônes pour éviter les bouchons de Valence."
        },
        {
          q: "Le parking est-il payant ?",
          a: "Non, le stationnement est 100% gratuit et privé, juste devant la porte."
        },
        {
          q: "Peut-on venir en bus Citéa ?",
          a: "Oui, le réseau de bus dessert la zone de Saint-Marcel. Vérifiez les horaires Citéa."
        }
      ]
    },
    {
      category: "SPORT & SÉCURITÉ",
      questions: [
        {
          q: "Quelle est la tenue obligatoire ?",
          a: "Vêtements souples (short, legging) sans fermetures éclair ni boutons métalliques. Chaussettes antidérapantes impératives (fournies dans le prix d'entrée)."
        },
        {
          q: "Quel est l'âge minimum pour sauter ?",
          a: "3 ans révolus pour les sessions \"Baby\" du matin. 6 ans pour l'accès complet au parc."
        },
        {
          q: "Est-ce risqué ?",
          a: "Comme tout sport dynamique, le risque existe. Mais nos zones sont sécurisées et surveillées par notre staff. L'échauffement est clé !"
        },
        {
          q: "Les accompagnateurs paient-ils ?",
          a: "C'est gratuit pour ceux qui regardent (parents, grands-parents)."
        },
        {
          q: "Avez-vous des casiers ?",
          a: "Oui, pour ranger vos chaussures et affaires personnelles en sécurité."
        }
      ]
    },
    {
      category: "ANNIVERSAIRES",
      questions: [
        {
          q: "Comment réserver un anniversaire ?",
          a: "Tout se fait en ligne via le module ci-dessus. Choisissez la date, le nombre d'enfants et la formule."
        },
        {
          q: "Fournissez-vous le gâteau ?",
          a: "Absolument. Gâteau, bonbons, sirops... Tout est inclus dans le package."
        },
        {
          q: "Combien d'invités minimum ?",
          a: "La fête est validée à partir de 5 enfants participants."
        }
      ]
    },
    {
      category: "GROUPES",
      questions: [
        {
          q: "Recevez-vous les associations sportives ?",
          a: "Oui, de nombreux clubs de l'Ardèche viennent chez nous pour des sorties de fin d'année ou de cohésion."
        },
        {
          q: "Quelle capacité max ?",
          a: "Nous pouvons gérer jusqu'à 80 personnes en rotation sur les activités."
        }
      ]
    },
    {
      category: "PRATIQUE",
      questions: [
        {
          q: "Y a-t-il de quoi manger ?",
          a: "Notre Snack-Bar propose du salé (paninis...) et du sucré (gaufres...) pour reprendre des forces. Pique-nique non autorisé."
        },
        {
          q: "Peut-on payer en chèques vacances ?",
          a: "Non, nous acceptons uniquement la Carte Bancaire et les espèces."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
        <title>Trampoline Park proche Guilherand-Granges & St-Péray - Fun Park</title>
        <meta name="description" content="Le complexe de trampoline de référence à 10 min de Guilherand-Granges et Saint-Péray (07). Ninja, Dunk, Airbag. Anniversaires tout inclus. Parking gratuit." />
        <link rel="canonical" href="https://www.valence-trampoline.com/trampoline-guilherand-st-peray" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTrampoline})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Le Trampoline Park n°1 à 10 min de<br />
            <span className="text-primary">Guilherand-Granges</span> et <span className="text-primary">Saint-Péray</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Traversez le Rhône et venez jumper ! 400m² de sport et de fun vous attendent à Saint-Marcel-lès-Valence.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToReservation}
            className="text-lg px-8 py-6"
          >
            Voir les créneaux dispos
          </Button>
        </div>
      </section>

      {/* Module de Réservation */}
      <section id="reservation" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            📅 Réservez votre session JUMP ou ANNIVERSAIRE
          </h2>
          <div className="-mx-4 md:mx-auto md:max-w-4xl bg-white md:rounded-2xl shadow-xl md:p-4 min-h-[500px]">
            <iframe
              src="https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close=&g-fn%5B0%5D=openActivityDetails&g-params%5B0%5D=%5B%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22%5D&g-path=%2Fcart%2Factivities%2Fx3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV"
              width="100%"
              height="600"
              frameBorder="0"
              title="Réservation Fun Park Valence"
              className="md:rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Édito SEO Localisation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Le sport fun à deux pas de l'Ardèche
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Habitants de <strong>Guilherand</strong>, <strong>Saint-Péray</strong> ou <strong>Cornas</strong>, inutile d'aller loin pour vous dépenser ! Situé à Saint-Marcel-lès-Valence, notre complexe est accessible en un clin d'œil via le <strong>Pont des Lônes</strong> ou le périphérique. En moins de <strong>10 minutes</strong>, vous passez de l'Ardèche à nos toiles de saut. Profitez d'un accès fluide sans traverser le centre-ville de Valence et garez-vous sur notre <strong>parking gratuit XXL</strong>.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>10 min depuis Guilherand</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Car className="w-5 h-5 text-primary" />
                <span>Parking gratuit XXL</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Accès Pont des Lônes</span>
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
            {zones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <zone.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">{zone.title}</h3>
                  <p className="text-muted-foreground">{zone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Anniversaires */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Un Anniversaire qui change du quotidien
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Offrez à votre enfant une fête originale et sportive. Nos formules <strong>'Clef en main'</strong> ravissent les parents de l'Ardèche : on s'occupe de l'animation, du goûter, des boissons et même du gâteau. Ils repartent fatigués et avec le sourire !
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  <Gift className="w-4 h-4" /> Tout Compris
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  <Users className="w-4 h-4" /> Zéro Stress
                </span>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                  <Cake className="w-4 h-4" /> Chaussettes Incluses
                </span>
              </div>
              <Button size="lg" onClick={scrollToReservation}>
                Réserver un Anniversaire
              </Button>
            </div>
            <div className="relative">
              <img 
                src={birthdayParty} 
                alt="Anniversaire enfant au trampoline park près de Guilherand-Granges" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Groupes & Scolaires */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Clubs de Sport & Centres Sociaux
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vous cherchez une activité pour votre <strong>club de foot</strong>, de <strong>hand</strong> ou votre <strong>centre social</strong> ? Le trampoline est excellent pour la cohésion et le cardio. Nous accueillons vos groupes avec des <strong>tarifs adaptés</strong> et une sécurité renforcée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-muted px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl text-primary">80</span>
                <span className="text-muted-foreground ml-2">sauteurs max</span>
              </div>
              <div className="bg-muted px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl text-primary">400m²</span>
                <span className="text-muted-foreground ml-2">de zones</span>
              </div>
              <div className="bg-muted px-6 py-3 rounded-lg">
                <span className="font-bold text-primary">Tarifs</span>
                <span className="text-muted-foreground ml-2">dégressifs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Questions Fréquentes - Ardèche
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem 
                      key={qIndex} 
                      value={`${catIndex}-${qIndex}`}
                      className="bg-white rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GuilherandStPeray;
