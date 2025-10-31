import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Reservation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Réservation</h1>
          <p className="text-lg text-muted-foreground">
            Choisissez votre créneau et réservez votre activité
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;
