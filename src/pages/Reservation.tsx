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

      <main className="min-h-screen bg-muted pt-20 md:pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-foreground">
            Réservez votre session
          </h1>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choisissez votre activité et réservez en quelques clics
          </p>
          
          <div className="w-full max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="Réservation en ligne Fun Park Valence"
              src="/guidap-reservation.html"
              className="w-full border-0 block"
              style={{ minHeight: "calc(100vh - 280px)", height: "1400px" }}
              loading="lazy"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Reservation;
