import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { KaraokeFAQ } from "@/components/KaraokeFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Karaoke = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Karaoké privatif à{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Saint-Marcel-lès-Valence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Envie de chanter à tue-tête entre amis, en famille ou entre collègues ? Notre salle de karaoké privative vous attend pour une expérience fun et décomplexée ! Micro à la main, vous choisissez vos morceaux parmi des centaines de titres (français, internationaux, classiques ou décalés), et c'est parti pour une session où tout le monde peut briller. Que vous chantiez juste ou pas, ce qui compte, c'est de passer un moment inoubliable.
            </p>

            <p className="text-xl md:text-2xl font-bold text-foreground">
              De 4 à 12 personnes – Karaoké à Valence Trampoline
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Salle privative</h3>
              <p className="text-muted-foreground">
                Chantez sans jugement, entre vous, dans une ambiance conviviale.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Catalogue XXL</h3>
              <p className="text-muted-foreground">
                Des centaines de titres français et internationaux, classiques ou décalés.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
              <div className="text-6xl mb-4">🍹</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Boissons & snacks</h3>
              <p className="text-muted-foreground">
                Profitez de nos boissons et gourmandises sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Nos <span className="text-primary">tarifs</span>
            </h2>

            <p className="text-center text-lg text-muted-foreground mb-8">
              Tarifs valables pour des groupes de 4 à 12 personnes.
            </p>

            <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg font-bold">Durée</TableHead>
                    <TableHead className="text-lg font-bold text-center">Adulte</TableHead>
                    <TableHead className="text-lg font-bold text-center">Étudiant</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold text-base">Karaoké 1h</TableCell>
                    <TableCell className="text-center text-2xl font-bold text-primary">9€</TableCell>
                    <TableCell className="text-center text-2xl font-bold text-accent">8€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold text-base">Karaoké 2h</TableCell>
                    <TableCell className="text-center text-2xl font-bold text-primary">15€</TableCell>
                    <TableCell className="text-center text-2xl font-bold text-accent">14€</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              *Sur présentation d'une carte étudiante en cours de validité.
            </p>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Informations <span className="text-primary">pratiques</span>
            </h2>

            <div className="bg-card rounded-2xl p-8 shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">📝 Déroulement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  À votre arrivée, notre équipe vous guide jusqu'à la salle de karaoké. Après une rapide explication du fonctionnement de l'écran de sélection, vous avez la salle pour vous pendant toute la durée réservée. Chaque participant peut choisir ses chansons, créer une playlist, ou improviser en direct. La salle est insonorisée pour que vous puissiez chanter à fond sans gêner ni être gêné. Vous pouvez commander des boissons ou snacks directement pendant votre session grâce à notre service sur place.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">💡 Bon à savoir</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>La salle karaoké est privative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Vous pouvez venir en petit groupe ou jusqu'à 12 personnes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>La réservation est indispensable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pensez à arriver 5 à 10 minutes avant l'horaire prévu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Il est possible de consommer des boissons et snacks dans la salle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pour les événements spéciaux (anniversaires, EVJF/EVG, team building), n'hésitez pas à nous prévenir</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold mb-4">📍 Contact & Réservation</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">📍</span>
                    <span>Face au Bowling: 30 Rue de la Roche – 26320 Saint-Marcel-lès-Valence (Drôme)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">📞</span>
                    <span>07.69.48.27.14 (WhatsApp disponible ✅)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">✉️</span>
                    <span>valencebowling@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KaraokeFAQ />

      <Footer />
    </div>
  );
};

export default Karaoke;
