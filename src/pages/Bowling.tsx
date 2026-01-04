import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, CircleDot, Rocket, Users, ChevronDown } from "lucide-react";

import bowlingHero from "@/assets/bowling-hero.png";
import bowlingChild from "@/assets/bowling-child.png";
import bowlingKids from "@/assets/bowling-kids.jpg";

const Bowling = () => {
  const scrollToTarifs = () => {
    document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Shield,
      title: "Bumpers automatiques",
      description: "Les barrières se lèvent pour les enfants",
      color: "#32CD32", // Vert
      bgColor: "bg-green-50",
    },
    {
      icon: CircleDot,
      title: "Boules adaptées",
      description: "Toutes tailles et poids disponibles",
      color: "#FF00CC", // Rose
      bgColor: "bg-pink-50",
    },
    {
      icon: Rocket,
      title: "Rampe de lancement",
      description: "Pour que les plus petits jouent comme des grands",
      color: "#00FFFF", // Cyan
      bgColor: "bg-cyan-50",
    },
    {
      icon: Users,
      title: "Espace convivial",
      description: "Salons confortables pour les groupes et familles",
      color: "#FFD700", // Jaune
      bgColor: "bg-yellow-50",
    },
  ];

  const faqItems = [
    {
      question: "Faut-il réserver pour jouer au bowling ?",
      answer: "Non, le bowling est accessible sans réservation. Premier arrivé, premier servi !",
    },
    {
      question: "À partir de quel âge peut-on jouer ?",
      answer: "Dès 4 ans grâce à nos boules légères et rampes de lancement.",
    },
    {
      question: "Où se garer ?",
      answer: "Un grand parking gratuit est disponible devant l'établissement.",
    },
    {
      question: "Quelles sont les autres activités ?",
      answer: "Découvrez notre Trampoline Park de 400m², nos Karaoké Box, notre Quiz Boxing et notre zone Arcade.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bowling Valence | 12 Pistes à Saint-Marcel-lès-Valence | Valence Fun Park</title>
        <meta
          name="description"
          content="Bowling à Valence : 12 pistes dernière génération dès 4 ans. Bumpers automatiques, boules adaptées et rampes de lancement. Bar, snacking et arcade sur place."
        />
        <meta name="keywords" content="bowling valence, bowling saint marcel les valence, bowling drôme, bowling enfant, bowling famille, piste bowling" />
        <link rel="canonical" href="https://www.valencefunpark.fr/bowling" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#FF00CC]/20 blur-xl" />
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#00FFFF]/20 blur-xl" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[#FFD700]/20 blur-xl" />

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#0A0F43' }}>
                  Valence Bowling : 12 pistes de fun à Saint-Marcel-lès-Valence 🎳
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Dès 4 ans, profitez d'une ambiance unique dans le plus grand complexe de loisirs de la région (2500m²). Bar, snacking et arcade sur place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <Button
                    onClick={scrollToTarifs}
                    size="xl"
                    className="rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#FF6D33', color: 'white' }}
                  >
                    Voir les tarifs
                  </Button>
                  <Button
                    asChild
                    size="xl"
                    variant="outline"
                    className="rounded-2xl font-bold text-lg border-2 hover:scale-105 transition-transform"
                    style={{ borderColor: '#0A0F43', color: '#0A0F43' }}
                  >
                    <Link to="/anniversaire-enfant">🧁 Fêter mon anniversaire</Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Accès libre sans réservation pour le bowling.
                </p>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #FF00CC20, #00FFFF20, #FFD70020)',
                    transform: 'rotate(3deg)',
                  }}
                />
                <img
                  src={bowlingHero}
                  alt="Pistes de bowling illuminées au Valence Fun Park"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  style={{ boxShadow: '0 25px 50px -12px rgba(10, 15, 67, 0.25)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Section - Un Bowling Pour Tous */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#0A0F43' }}>
                Un Bowling Pour Tous 🎯
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                À seulement 15 min de Tain et Tournon, notre bowling dispose de 12 pistes dernière génération. 
                Que vous soyez un pro du strike ou un débutant, nos équipements s'adaptent à tous.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
                  style={{ border: `3px solid ${feature.color}` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0A0F43' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <img
                src={bowlingChild}
                alt="Enfant jouant au bowling avec une boule jaune"
                className="rounded-3xl shadow-xl w-full h-64 object-cover"
                style={{ border: '4px solid #FFD700' }}
              />
              <img
                src={bowlingKids}
                alt="Groupe d'enfants s'amusant au bowling"
                className="rounded-3xl shadow-xl w-full h-64 object-cover"
                style={{ border: '4px solid #FF00CC' }}
              />
            </div>
          </div>
        </section>

        {/* Tarifs Section */}
        <section id="tarifs" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#0A0F43' }}>
                Tarifs du Bowling Valence 💰
              </h2>
              <p className="text-lg text-gray-600">
                Tarif par personne et par partie. Location de chaussures incluse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tarif Mercredi & Jeudi */}
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow" style={{ border: '4px solid #0A0F43' }}>
                <div className="p-6 text-white text-center" style={{ backgroundColor: '#0A0F43' }}>
                  <h3 className="text-2xl font-bold">Mercredi & Jeudi</h3>
                </div>
                <div className="bg-white p-6">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-4 text-lg font-semibold" style={{ color: '#0A0F43' }}>Adulte</td>
                        <td className="py-4 text-right text-2xl font-bold" style={{ color: '#0A0F43' }}>7€</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-4 text-lg font-semibold" style={{ color: '#0A0F43' }}>Étudiant</td>
                        <td className="py-4 text-right text-2xl font-bold" style={{ color: '#0A0F43' }}>6€</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="py-4 text-lg font-semibold" style={{ color: '#0A0F43' }}>Enfant -12 ans</td>
                        <td className="py-4 text-right text-2xl font-bold" style={{ color: '#0A0F43' }}>5€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tarif Vendredi, WE, Vacances */}
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow" style={{ border: '4px solid #FF6D33' }}>
                <div className="p-6 text-white text-center" style={{ backgroundColor: '#FF6D33' }}>
                  <h3 className="text-2xl font-bold">Vendredi, WE, Vacances & Jours Fériés</h3>
                </div>
                <div className="bg-white p-6">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="py-4 text-lg font-semibold" style={{ color: '#0A0F43' }}>Adulte</td>
                        <td className="py-4 text-right text-2xl font-bold" style={{ color: '#FF6D33' }}>8,50€</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="py-4 text-lg font-semibold" style={{ color: '#0A0F43' }}>Étudiant</td>
                        <td className="py-4 text-right text-2xl font-bold" style={{ color: '#FF6D33' }}>7,50€</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="py-4 text-lg font-semibold" style={{ color: '#0A0F43' }}>Enfant -12 ans</td>
                        <td className="py-4 text-right text-2xl font-bold" style={{ color: '#FF6D33' }}>6,50€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-6 italic">
              Un justificatif sera demandé pour les tarifs étudiants.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#0A0F43' }}>
                Tout savoir sur le Bowling à Saint-Marcel-lès-Valence ❓
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-2xl shadow-md border-2 overflow-hidden px-6"
                    style={{ borderColor: index % 2 === 0 ? '#FF6D33' : '#0A0F43' }}
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-5 hover:no-underline" style={{ color: '#0A0F43' }}>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: '#0A0F43' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Prêt pour un strike ? 🎳
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Venez quand vous voulez, sans réservation ! Notre équipe vous accueille dans la bonne humeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="xl"
                className="rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundColor: '#FF6D33', color: 'white' }}
              >
                <Link to="/anniversaire-enfant">🧁 Organiser un anniversaire</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-2xl font-bold text-lg border-2 hover:scale-105 transition-transform bg-white"
                style={{ borderColor: 'white', color: '#0A0F43' }}
              >
                <Link to="/">Découvrir le Trampoline Park</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bowling;
