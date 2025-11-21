import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { KaraokeFAQ } from "@/components/KaraokeFAQ";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Karaoke = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

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

            {/* Bouton Réservation */}
            <div className="text-center mt-12">
              <Button 
                variant="default" 
                size="lg" 
                className="group"
                onClick={() => setIsReservationOpen(true)}
              >
                Réserver ma session karaoké
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Réservation */}
      <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-2xl font-bold">
              Réservation Karaoké
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-[calc(95vh-80px)] overflow-auto">
            <iframe
              src="https://cart.guidap.net/v1/iframe.html?g-token=q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4&g-lang=fr&g-currency=EUR&g-hide-close&g-fn[0]=openActivityDetails&g-params[0]=[%22WiR3hBJHN4Ae86dCEal5ywXpjT7fvq91brSz%22]"
              className="w-full border-0"
              style={{ minHeight: '900px' }}
              loading="lazy"
              title="Réservation Karaoké"
            />
          </div>
        </DialogContent>
      </Dialog>

      <KaraokeFAQ />

      <Footer />
    </div>
  );
};

export default Karaoke;