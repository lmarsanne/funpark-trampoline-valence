import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Reservation = () => {
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
      const root = document.getElementById("guidap-root");
      if (!root) return;
      if (root.querySelector("guidap-booking-widget")) return;

      const el = document.createElement("guidap-booking-widget");
      el.setAttribute("activity-uuid", "XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V");
      root.appendChild(el);
    };

    mount();
    window.addEventListener("load", mount);

    return () => {
      window.removeEventListener("load", mount);
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

      <main className="guidap-page pt-20">
        <h1 className="guidap-title">Réservation</h1>
        <div id="guidap-root" className="guidap-scope"></div>
      </main>

      <Footer />

      <style>{`
        /* Layout page */
        .guidap-page {
          min-height: 100vh;
          background: #f4f6f8;
          padding: 48px 24px;
        }
        .guidap-title {
          max-width: 1100px;
          margin: 0 auto 24px;
          font-size: 28px;
          font-weight: 700;
        }
        .guidap-scope {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* MODE DUR : on annule les styles globaux de Lovable/Tailwind sur le widget */
        .guidap-scope guidap-booking-widget {
          display: block;
          font-family: inherit;
        }

        .guidap-scope guidap-booking-widget,
        .guidap-scope guidap-booking-widget * {
          all: revert;
        }

        /* on remet quelques fondamentaux qui évitent les surprises */
        .guidap-scope guidap-booking-widget,
        .guidap-scope guidap-booking-widget * {
          box-sizing: border-box;
          font-family: inherit;
        }
      `}</style>
    </>
  );
};

export default Reservation;
