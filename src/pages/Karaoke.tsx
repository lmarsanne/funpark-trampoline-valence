import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Mic2, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-karaoke.jpg";
import karaoke1 from "@/assets/karaoke-1.jpg";
import karaoke2 from "@/assets/karaoke-2.jpg";
import karaoke3 from "@/assets/karaoke-3.jpg";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
const Karaoke = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Karaoké à <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Fun Park Valence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chantez vos chansons préférées dans nos <strong className="font-bold">salles privées</strong> équipées du
              dernier système karaoké. Parfait pour les anniversaires, soirées entre amis ou événements d'entreprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group" asChild>
                <a
                  href="https://www.valence-bowling.com/trampoline/?g-path=%2Fcart%2Factivities%2Fx3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver maintenant
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ArrowRight className="text-white rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir notre <span className="text-primary">Karaoké</span> ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expérience karaoké moderne avec tout le confort et l'équipement professionnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic2,
                title: "Équipement Pro",
                description: "Micros sans fil, enceintes haute qualité et écrans géants",
              },
              {
                icon: Music,
                title: "Milliers de chansons",
                description: "Catalogue immense en français, anglais et plus encore",
              },
              {
                icon: Users,
                title: "Salles privées",
                description: "Espaces privatifs pour 6 à 20 personnes",
              },
              {
                icon: Star,
                title: "Ambiance festive",
                description: "Éclairages LED, effets lumineux et décoration moderne",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Découvrez nos <span className="text-primary">espaces karaoké</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Des salles modernes et conviviales pour des moments inoubliables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: karaoke1,
                alt: "Amis chantant au karaoké",
              },
              {
                src: karaoke2,
                alt: "Scène karaoké avec éclairages LED",
              },
              {
                src: karaoke3,
                alt: "Famille au karaoké",
              },
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
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Prêt à chanter ? 🎤</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Réservez votre salle karaoké dès maintenant et vivez une expérience musicale unique !
          </p>

          <Button variant="hero" size="xl" className="group" asChild>
            <a
              href="https://www.valence-bowling.com/trampoline/?g-path=%2Fcart%2Factivities%2Fx3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver ma session
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

      <Footer />
    </div>
  );
};
export default Karaoke;
