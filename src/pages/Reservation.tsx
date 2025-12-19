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
          <div id="booking-root"></div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Reservation;
