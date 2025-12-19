import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Reservation = () => {
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
        <div className="reservation-widget">
          <iframe
            title="Réservation en ligne Fun Park Valence"
            src="/guidap-reservation.html"
            className="reservation-iframe"
            loading="lazy"
          />
        </div>
      </main>

      <Footer />

      <style>{`
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

        .reservation-iframe {
          width: 100%;
          border: 0;
          display: block;
          min-height: calc(100vh - 160px);
          height: 1600px;
          background: transparent;
        }
      `}</style>
    </>
  );
};

export default Reservation;
