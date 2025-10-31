import { Navigation } from "@/components/Navigation";
import { createElement } from "react";

const Reservation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Choisissez votre créneau et réservez votre activité
          </p>
          {createElement('guidap-reserve-button')}
        </div>
      </main>
    </div>
  );
};

export default Reservation;
