import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, Sofa, Users } from "lucide-react";

import heroBillard from "@/assets/hero-billard.jpg";

const Billard = () => {
  const features = [
    {
      icon: Target,
      title: "Espace de jeu Premium",
      description: "Nos 11 tables de billard américain sont rigoureusement entretenues. Tapis impeccables et bandes réactives pour une expérience de jeu fluide, que vous soyez amateur ou expert.",
      color: "#00FFFF", // Cyan
      bgColor: "bg-cyan-50",
    },
    {
      icon: Sofa,
      title: "Atmosphère Lounge & Cosy",
      description: "Plongez dans un cadre lumineux et climatisé. Notre salle de billard a été pensée pour offrir un confort maximal, idéal pour se relaxer après une session de trampoline ou de bowling.",
      color: "#FF00CC", // Rose
      bgColor: "bg-pink-50",
    },
    {
      icon: Users,
      title: "Privatisation & Événements",
      description: "Besoin d'un espace original pour un séminaire ou une soirée privée ? Notre zone billard est modulable pour accueillir vos groupes dans une ambiance chaleureuse et stylisée.",
      color: "#FFD700", // Jaune
      bgColor: "bg-yellow-50",
    },
  ];

  const faqItems = [
    {
      question: "Où peut-on jouer au billard américain près de Valence ?",
      answer: "Le Fun Park de Saint-Marcel-lès-Valence propose 11 tables de billard américain professionnelles dans un espace moderne et climatisé, à seulement quelques minutes du centre de Valence.",
    },
    {
      question: "Faut-il réserver sa table de billard à l'avance ?",
      answer: "Bien que l'accès soit libre, nous vous conseillons de réserver en ligne, surtout le week-end, pour garantir la disponibilité de votre table dès votre arrivée.",
    },
    {
      question: "Le billard est-il adapté aux débutants ?",
      answer: "Absolument ! Le billard américain est une activité accessible dès le plus jeune âge. Notre équipe est présente pour vous fournir tout l'équipement nécessaire et vous expliquer les règles de base.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Billard Américain Valence | 11 Tables à Saint-Marcel-lès-Valence | Valence Fun Park</title>
        <meta
          name="description"
          content="Salle de billard américain à Valence : 11 tables de qualité supérieure. Tarif 10€/h au temps réel. Espace lounge climatisé à Saint-Marcel-lès-Valence."
        />
        <meta name="keywords" content="billard valence, billard américain valence, billard saint marcel les valence, salle de billard drôme, club billard" />
        <link rel="canonical" href="https://www.valencefunpark.fr/billard" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#8A2BE2]/20 blur-xl" />
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#00FFFF]/20 blur-xl" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[#8A2BE2]/20 blur-xl" />

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: '#0A0F43' }}>
                  Salle de Billard Américain à Valence : Précision et Détente 🎱
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Partagez un moment convivial dans notre espace contemporain. 11 tables de qualité supérieure vous attendent pour défier vos proches à Saint-Marcel-lès-Valence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="xl"
                    className="rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#FF6D33', color: 'white' }}
                  >
                    <a href="/guidap-reservation-billard.html">Réserver ma table</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #8A2BE220, #00FFFF20, #8A2BE220)',
                    transform: 'rotate(3deg)',
                  }}
                />
                <img
                  src={heroBillard}
                  alt="Salle de billard américain au Valence Fun Park"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  style={{ boxShadow: '0 25px 50px -12px rgba(10, 15, 67, 0.25)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tarification Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#0A0F43' }}>
                Un tarif simple, au temps réel 💰
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <div
                className="rounded-3xl overflow-hidden shadow-xl bg-white p-8 text-center"
                style={{ border: '4px solid #8A2BE2' }}
              >
                <div className="text-6xl font-black mb-4" style={{ color: '#0A0F43' }}>
                  10€<span className="text-2xl font-bold text-gray-500">/heure</span>
                </div>
                <p className="text-xl font-semibold mb-4" style={{ color: '#0A0F43' }}>
                  Tarif unique pour une table de billard américain.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Flexibilité totale :</strong> Le règlement s'effectue au prorata du temps passé en fin de partie. Vous ne payez que ce que vous jouez !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arguments Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#0A0F43' }}>
                Le rendez-vous incontournable des amateurs de billard en Drôme-Ardèche 🎯
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Vous cherchez une activité ludique pour ponctuer votre soirée à Valence ? L'espace billard du Fun Park est le lieu idéal pour allier concentration et plaisir. Situé au sein de notre complexe de loisirs de 2500m², notre club de billard accueille aussi bien les duos en quête de tranquillité que les groupes d'amis souhaitant relever des défis.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6">
                Profitez de notre salle de jeux à proximité immédiate de Tain-l'Hermitage et Romans-sur-Isère. Pour une expérience complète, n'hésitez pas à combiner votre partie avec une pause au bar ou une session sur nos bornes d'arcade. Ici, chaque bille empochée est une victoire pour votre détente !
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#0A0F43' }}>
                Questions fréquentes sur le Billard ❓
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-2xl shadow-md border-2 overflow-hidden px-6"
                    style={{ borderColor: index % 2 === 0 ? '#8A2BE2' : '#00FFFF' }}
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
              Prêt à empocher la noire ? 🎱
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Réservez votre table de billard et profitez d'un moment de détente entre amis ou en famille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="xl"
                className="rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundColor: '#FF6D33', color: 'white' }}
              >
                <a href="/guidap-reservation-billard.html">Réserver ma table</a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-2xl font-bold text-lg border-2 hover:scale-105 transition-transform bg-white"
                style={{ borderColor: 'white', color: '#0A0F43' }}
              >
                <Link to="/bowling">Découvrir le Bowling</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Billard;
