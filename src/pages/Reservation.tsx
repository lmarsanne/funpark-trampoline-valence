import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

const Reservation = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cart.guidap.net/v1/";
    script.async = true;
    script.defer = true;
    script.setAttribute('data-token', 'q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4');
    script.setAttribute('data-lang', 'fr');
    script.setAttribute('data-currency', 'EUR');
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Choisissez votre créneau et réservez votre activité
          </p>
          <div className="flex flex-col gap-4 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Baby : 2 à 6 ans</h3>
              {/* @ts-ignore */}
              <guidap-activity-reserve-button activity-uuid="FpsK4WIXZdbufxO69hcqr2UTy8MPoRDv3V7A"></guidap-activity-reserve-button>
            </div>
            <div>
              {/* @ts-ignore */}
              <guidap-activity-reserve-button activity-uuid="ehCGz9QSMXlTRbYnKptcdoJ8fk10x6VLAUI5"></guidap-activity-reserve-button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reservation;
