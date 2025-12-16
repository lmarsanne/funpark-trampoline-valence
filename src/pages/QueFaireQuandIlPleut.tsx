import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CloudRain, Car, Thermometer, Lock, UtensilsCrossed, Dumbbell, Target, Mic, Gamepad2, MapPin, Phone, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
const QueFaireQuandIlPleut = () => {
  const scrollToActivites = () => {
    document.getElementById('activites')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const activities = [{
    icon: "🤸",
    title: "Trampoline Park",
    description: "Brûlez de l'énergie, pas de l'essence. Un parc géant pour se défouler au sec.",
    color: "from-orange-500 to-amber-500",
    link: "/"
  }, {
    icon: "🎳",
    title: "Bowling 12 Pistes",
    description: "L'activité conviviale par excellence. Chaussures sèches et ambiance garantie.",
    color: "from-cyan-500 to-blue-500",
    link: "/"
  }, {
    icon: "🥊",
    title: "Quiz Boxing",
    badge: "Nouveau !",
    description: "Comme à la télé ! Enfermez-vous dans l'arène pour un combat de culture générale hilarant.",
    color: "from-red-500 to-orange-500",
    link: "/quiz-boxing"
  }, {
    icon: "🎤",
    title: "Karaoké Box",
    description: "Il pleut ? Chantez ! (De toute façon, on est insonorisés). Box privés pour votre groupe.",
    color: "from-purple-500 to-pink-500",
    link: "/karaoke"
  }, {
    icon: "🎱",
    title: "Arcade & Billard",
    description: "Défiez vos amis sur nos bornes d'arcade, flippers et tables de billard.",
    color: "from-emerald-500 to-teal-500",
    link: "/"
  }];
  const benefits = [{
    icon: Car,
    title: "Parking Gratuit & Proche",
    description: "Garez-vous juste devant l'entrée. Pas besoin de traverser la ville sous l'averse."
  }, {
    icon: Thermometer,
    title: "Température Idéale",
    description: "Chauffé en hiver, climatisé en été. Il fait toujours 20°C chez nous."
  }, {
    icon: Lock,
    title: "Confort Total",
    description: "Casiers sécurisés pour laisser vos manteaux mouillés et parapluies."
  }, {
    icon: UtensilsCrossed,
    title: "Restauration sur Place",
    description: "Une petite faim ? Pizzas, gaufres et boissons chaudes sans remettre le nez dehors."
  }];
  const faqItems = [{
    question: "Faut-il réserver quand il pleut ?",
    answer: "OUI ! Les jours de pluie sont nos journées les plus chargées. La réservation en ligne est fortement recommandée pour garantir votre place, surtout pour le Trampoline et le Bowling."
  }, {
    question: "Peut-on faire plusieurs activités le même jour ?",
    answer: "Absolument ! C'est l'avantage du Fun Park. Vous pouvez enchaîner une session de Trampoline, une partie de Bowling et finir par un Karaoké. Tout est au même endroit."
  }, {
    question: "Y a-t-il des casiers pour nos affaires mouillées ?",
    answer: "Oui, nous disposons de casiers sécurisés (à code ou pièce) pour déposer vos manteaux, parapluies et chaussures afin d'être à l'aise pour jouer."
  }, {
    question: "Quelle est la température à l'intérieur ?",
    answer: "Le complexe est entièrement chauffé et ventilé. Une tenue légère ou sportive (T-shirt) est idéale pour les activités, même s'il fait froid dehors."
  }, {
    question: "Peut-on manger sur place ?",
    answer: "Oui, notre espace Bar/Snacking propose des pizzas, planches à partager, paninis, gaufres, crêpes et boissons chaudes/froides. Le pique-nique extérieur est interdit."
  }, {
    question: "À partir de quel âge est-ce accessible ?",
    answer: "Le Trampoline est accessible dès 5 ans (les parents peuvent accompagner). Le Bowling est accessible dès que l'enfant peut porter une boule (dispositifs \"toboggans\" disponibles pour les petits)."
  }, {
    question: "Le parking est-il couvert ?",
    answer: "Notre parking est extérieur mais situé à proximité immédiate de l'entrée. Il est gratuit et accessible aux voitures comme aux bus."
  }, {
    question: "Y a-t-il beaucoup de monde quand il pleut ?",
    answer: "L'ambiance est très festive les jours de pluie ! Pour éviter l'attente à l'accueil, réservez votre créneau en ligne. Une fois dans l'activité (piste ou toile), votre espace est garanti."
  }, {
    question: "Je ne veux pas sauter, dois-je payer l'entrée ?",
    answer: "Non ! L'entrée au complexe est gratuite pour les accompagnateurs. Vous pouvez vous installer confortablement dans nos canapés ou à l'espace bar pendant que les enfants s'amusent."
  }, {
    question: "Combien de temps dure une session ?",
    answer: "Les sessions de Trampoline durent 1h (renouvelable). Une partie de Bowling dure environ 45min à 1h selon le nombre de joueurs. Le Karaoké et le Quiz Boxing se réservent à l'heure."
  }, {
    question: "Où êtes-vous situés exactement ?",
    answer: "Nous sommes à Saint-Marcel-lès-Valence, à 10 min du centre de Valence et 15 min de Romans. Accès direct via la rocade."
  }];
  return <>
      <Helmet>
        <title>Que faire quand il pleut à Valence ? | Fun Park - Activités Indoor</title>
        <meta name="description" content="Il pleut sur Valence ? Découvrez 2500m² de loisirs indoor : trampoline, bowling, karaoké, quiz boxing. L'activité idéale quand il pleut en Drôme !" />
        <meta name="keywords" content="activité intérieur Valence, sortie quand il pleut Drôme, que faire Valence pluie, loisir indoor Valence, trampoline Valence, bowling Valence" />
        <link rel="canonical" href="https://www.fun-park.fr/que-faire-quand-il-pleut-valence" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a]">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Animated rain effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => <div key={i} className="absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400/30 to-transparent rounded-full animate-pulse" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random()}s`
          }} />)}
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-6 border border-cyan-500/30">
                <CloudRain className="w-5 h-5" />
                <span className="text-sm font-medium">Météo maussade ? On a la solution !</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Il pleut sur Valence ?{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Mettez-vous à l'abri
                </span>{" "}
                (et éclatez-vous) au Fun Park !
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Ne laissez pas la météo gâcher votre journée. Découvrez{" "}
                <span className="text-cyan-400 font-semibold">2500m² de loisirs 100% intérieur</span>,
                chauffés et ultra-fun.
              </p>

              <Button onClick={scrollToActivites} size="xl" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
                Voir les disponibilités aujourd'hui
              </Button>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activites" className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-orange-500/30">
                🌧️ LE REMÈDE ANTI-GRISAILLE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5 univers pour s'éclater au sec
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Pendant que la pluie tombe dehors, profitez d'activités variées pour toute la famille
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {activities.map((activity, index) => <Link key={index} to={activity.link}>
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/10 overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${activity.color} bg-opacity-20`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {activity.title}
                            </h3>
                            {activity.badge && <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                {activity.badge}
                              </span>}
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-cyan-500/30">
                ☔ POURQUOI VENIR QUAND IL PLEUT ?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Le confort, même par temps de pluie
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => <div key={index} className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <benefit.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </div>)}
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-cyan-500/30">
                ❓ FAQ SPÉCIALE "JOUR DE PLUIE"
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vos questions fréquentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 data-[state=open]:border-cyan-500/50">
                    <AccordionTrigger className="text-white hover:text-cyan-400 text-left py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-cyan-500/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à transformer une journée pluvieuse en{" "}
                <span className="text-orange-400">moment inoubliable</span> ?
              </h2>
              <p className="text-slate-300 mb-8">
                Rejoignez-nous au chaud et découvrez pourquoi la pluie est notre meilleure amie !
              </p>
              <a href="tel:0475558974">
                <Button size="xl" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  <Phone className="w-5 h-5 mr-2" />
                  04 75 55 89 74
                </Button>
              </a>

              <div className="mt-10 flex items-center justify-center gap-2 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>360 Av. de la Gare, 26320 Saint-Marcel-lès-Valence</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default QueFaireQuandIlPleut;