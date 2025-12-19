import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";

const Reservation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Guidap script
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

    // Mount the widget
    const mount = () => {
      const root = containerRef.current;
      if (!root) return;
      if (root.querySelector("guidap-booking-widget")) return;

      const el = document.createElement("guidap-booking-widget");
      el.setAttribute("activity-uuid", "XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V");
      root.appendChild(el);
    };

    mount();
    window.addEventListener("load", mount);

    // Retry mounting after script loads
    const interval = setInterval(() => {
      if (containerRef.current && !containerRef.current.querySelector("guidap-booking-widget")) {
        mount();
      }
    }, 500);

    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      window.removeEventListener("load", mount);
      clearInterval(interval);
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

      <main className="reservation-page">
        <div ref={containerRef} className="reservation-widget"></div>
      </main>

      <Footer />

      <style>{`
        /* Isolation complète de la page de réservation */
        .reservation-page {
          min-height: 100vh;
          background: #f4f6f8 !important;
          padding-top: 80px;
        }

        .reservation-widget {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px;
        }

        /* RESET TOTAL pour le widget Guidap - annule TOUS les styles Tailwind */
        .reservation-widget guidap-booking-widget {
          display: block !important;
          all: revert !important;
        }

        .reservation-widget guidap-booking-widget *,
        .reservation-widget guidap-booking-widget *::before,
        .reservation-widget guidap-booking-widget *::after {
          all: revert !important;
        }

        /* Remet les fondamentaux après le revert */
        .reservation-widget guidap-booking-widget,
        .reservation-widget guidap-booking-widget * {
          box-sizing: border-box !important;
        }

        /* Fix spécifique pour les éléments de formulaire */
        .reservation-widget guidap-booking-widget input,
        .reservation-widget guidap-booking-widget select,
        .reservation-widget guidap-booking-widget textarea,
        .reservation-widget guidap-booking-widget button {
          all: revert !important;
          box-sizing: border-box !important;
        }

        /* Fix pour les liens */
        .reservation-widget guidap-booking-widget a {
          all: revert !important;
        }

        /* Fix pour les images */
        .reservation-widget guidap-booking-widget img {
          all: revert !important;
          max-width: 100%;
          height: auto;
        }

        /* Fix pour les listes */
        .reservation-widget guidap-booking-widget ul,
        .reservation-widget guidap-booking-widget ol,
        .reservation-widget guidap-booking-widget li {
          all: revert !important;
        }

        /* Fix pour les tableaux */
        .reservation-widget guidap-booking-widget table,
        .reservation-widget guidap-booking-widget tr,
        .reservation-widget guidap-booking-widget td,
        .reservation-widget guidap-booking-widget th {
          all: revert !important;
        }
      `}</style>
    </>
  );
};

export default Reservation;
