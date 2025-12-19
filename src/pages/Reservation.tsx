import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Reservation = () => {
  useEffect(() => {
    const scriptId = "guidap-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cart.guidap.net/v1/";
      script.async = true;
      script.defer = true;
      script.dataset.token = "q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4";
      script.dataset.lang = "fr";
      script.dataset.currency = "EUR";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Réserver | Fun Park Valence - Trampoline Park</title>
        <meta
          name="description"
          content="Réservez votre session au Fun Park Valence. Trampoline, karaoké, quiz boxing - réservation en ligne simple et rapide."
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white pt-20">
        <div className="flex justify-center py-12">
          <guidap-activity-reserve-button activity-uuid="XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V"></guidap-activity-reserve-button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Reservation;
