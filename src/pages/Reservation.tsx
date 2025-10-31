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
          {/* @ts-ignore */}
          <guidap-activity-reserve-button activity-uuid="ehCGz9QSMXlTRbYnKptcdoJ8fk10x6VLAUI5"></guidap-activity-reserve-button>
        </div>
      </main>
    </div>
  );
};

export default Reservation;
