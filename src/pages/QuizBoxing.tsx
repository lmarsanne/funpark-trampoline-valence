import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Music, TrendingUp, Zap, Shield, Trophy, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-quiz-boxing.jpg";
import quiz1 from "@/assets/quiz-1.jpg";
import quiz2 from "@/assets/quiz-2.jpg";
import quiz3 from "@/assets/quiz-3.jpg";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { QuizBoxingFAQ } from "@/components/QuizBoxingFAQ";

const QuizBoxing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/80 to-primary/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              QUIZ BOXING à <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Fun Park Valence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Abusez des jokers et devenez le roi du <strong className="font-bold">QUIZ BOXING</strong> !
              Une expérience interactive unique avec des rounds délirants pour 4 à 12 joueurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="xl" className="group" asChild>
                <a
                  href="https://www.valence-bowling.com/trampoline/?g-path=%2Fcart%2Factivities%2FWiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver maintenant
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="font-semibold">⏱️ 60 minutes</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="font-semibold">👥 4 à 12 joueurs</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ArrowRight className="text-white rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les <span className="text-primary">4 Rounds</span> du Quiz Boxing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quatre types de jeux différents pour tester vos connaissances et vos réflexes !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "QUIZ",
                description:
                  "Une question, 4 propositions de réponses. Mais surtout un large choix de jokers pour tenter de gagner des points même si vous n'avez pas la bonne réponse !",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Music,
                title: "BLIND TEST",
                description:
                  "Chantez, dansez, criez… Mais surtout n'oubliez pas d'être le plus rapide à trouver le titre d'une musique, le nom d'un film ou encore d'un dessin animé !",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "JUSTE PRIX",
                description:
                  "Serez-vous le plus chanceux ? Prix, âge, temps… Tentez d'être le plus proche de la bonne valeur pour gagner un maximum de points !",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Zap,
                title: "VRAI OU FAUX",
                description:
                  "Répondez Vrai ou Faux à un maximum d'affirmations dans un temps limité… Un round ultra dynamique où vos émotions seront mises à rude épreuve !",
                color: "from-green-500 to-emerald-500",
              },
            ].map((gameType, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${gameType.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <gameType.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{gameType.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{gameType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jokers Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Des <span className="text-primary">Jokers</span> Délirants
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utilisez des jokers stratégiques pour maximiser vos points et perturber vos adversaires !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Assommer",
                description:
                  "Assommez votre adversaire pour que ses points ne soient pas comptabilisés ! Mais soyez prudent, si il répond faux cela pourrait bien l'aider…",
                gradient: "from-red-500 to-orange-500",
              },
              {
                icon: Trophy,
                title: "Parier",
                description:
                  "Pariez sur la personne qui a le plus de chance de trouver la bonne réponse pour doubler vos points ! Attention, le double de zéro reste zéro, mieux vaut avoir gagné des points…",
                gradient: "from-yellow-500 to-amber-500",
              },
              {
                icon: Sparkles,
                title: "Voler",
                description:
                  "À quoi bon gagner à la loyale ? Soyez fourbe et volez des points à vos adversaires, au risque toutefois d'attirer des vengeances mémorables…",
                gradient: "from-purple-500 to-indigo-500",
              },
            ].map((joker, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${joker.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <joker.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{joker.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{joker.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-primary">TARIFS</span>
            </h2>

            <div className="bg-background rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-4">
                  <span className="text-lg font-semibold text-primary">De 4 à 12 joueurs • 60 minutes</span>
                </div>
              </div>

              {/* Tarifs Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
                  <h4 className="text-xl font-bold mb-4 text-center">QUIZ adulte</h4>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary">20€</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border-2 border-accent/20">
                  <h4 className="text-xl font-bold mb-4 text-center">QUIZ étudiant</h4>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-accent">18€</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 border-2 border-secondary/20">
                  <h4 className="text-xl font-bold mb-4 text-center">QUIZ enfant</h4>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-secondary">15€</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-muted/50 rounded-xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les tarifs indiqués s'entendent par personne et par partie. Le tarif enfant s'applique aux
                  enfants âgés de 12 ans maximum. Le tarif étudiant est réservé aux joueurs de plus de 12 ans,
                  encore scolarisés ou en études supérieures. Un justificatif en cours de validité sera demandé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Découvrez notre <span className="text-primary">salle Quiz Boxing</span>
            </h2>
            <p className="text-xl text-muted-foreground">Une salle moderne et immersive pour des parties mémorables</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: quiz1, alt: "Amis jouant au Quiz Boxing" },
              { src: quiz2, alt: "Salle Quiz Boxing avec écrans interactifs" },
              { src: quiz3, alt: "Équipe célébrant au Quiz Boxing" },
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Prêt à devenir le roi du Quiz Boxing ? 🏆</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Réservez votre partie dès maintenant et vivez une expérience interactive unique !
          </p>

          <Button variant="hero" size="xl" className="group" asChild>
            <a
              href="https://www.valence-bowling.com/trampoline/?g-path=%2Fcart%2Factivities%2FWiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver ma partie
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-sm uppercase tracking-wider mb-2 opacity-80">Adresse</p>
              <p className="font-semibold">
                Face au Bowling: 30 Rue de la Roche – 26320 Saint-Marcel-lès-Valence (Drôme)
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2 opacity-80">Téléphone</p>
              <p className="font-semibold">07.69.48.27.14 (WhatsApp dispo ✅)</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2 opacity-80">Email</p>
              <p className="font-semibold">valencebowling@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <QuizBoxingFAQ />

      <Footer />
    </div>
  );
};

export default QuizBoxing;
