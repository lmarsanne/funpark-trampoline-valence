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
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-background">
        
      </main>
    </div>;
};
export default Reservation;