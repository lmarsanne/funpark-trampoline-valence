import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";

const Reservation = () => {
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Guidap script dynamically
    const scriptId = "guidap-booking-script";
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

    // Mount widget when script is ready
    const mountWidget = () => {
      const root = bookingRef.current;
      if (!root) return;
      if (root.querySelector("guidap-booking-widget")) return;

      const el = document.createElement("guidap-booking-widget");
      el.setAttribute("activity-uuid", "XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V");
      root.appendChild(el);
    };

    // Try immediately and after a delay for script to load
    mountWidget();
    const timeout = setTimeout(mountWidget, 500);

    return () => {
      clearTimeout(timeout);
      const widget = bookingRef.current?.querySelector("guidap-booking-widget");
      if (widget) widget.remove();
    };
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
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "24px",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Réserver
          </h1>
          <div ref={bookingRef} id="booking-root"></div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Reservation;
