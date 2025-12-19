import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";

const Reservation = () => {
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = bookingRef.current;
    if (!root) return;

    // Prevent multiple mounts
    if (root.querySelector("guidap-booking-widget")) return;

    const el = document.createElement("guidap-booking-widget");
    el.setAttribute("activity-uuid", "XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V");
    root.appendChild(el);

    return () => {
      // Cleanup on unmount
      const widget = root.querySelector("guidap-booking-widget");
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
