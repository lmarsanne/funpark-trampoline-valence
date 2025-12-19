import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useMemo, useState } from "react";

const Reservation = () => {
  const [iframeHeight, setIframeHeight] = useState<number>(1400);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      // srcDoc + sandbox can yield origin = "null" depending on browser; accept same-origin and null.
      const allowedOrigins = new Set([window.location.origin, "null"]);
      if (!allowedOrigins.has(event.origin)) return;

      const data = event.data as { type?: string; height?: number } | null;
      if (!data || data.type !== "guidap:height") return;
      if (typeof data.height !== "number") return;

      setIframeHeight(Math.max(800, Math.min(6000, data.height + 24)));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Render Guidap inside an iframe to fully isolate it from global CSS of the website.
  const srcDoc = useMemo(
    () => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <script
      src="https://cart.guidap.net/v1/"
      async
      defer
      data-token="q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4"
      data-lang="fr"
      data-currency="EUR"></script>

    <style>
      /* Layout page (optionnel, garde si tu veux le fond gris Guidap) */
      .guidap-page{ min-height:100vh; background:hsl(210 14% 96%); padding:48px 24px; }
      .guidap-title{ max-width:1100px; margin:0 auto 24px; font-size:28px; font-weight:700; }
      .guidap-scope{ max-width:1100px; margin:0 auto; }

      /* MODE DUR : on annule les styles globaux sur le widget */
      .guidap-scope guidap-booking-widget{
        display:block;
        font-family: inherit;
      }

      .guidap-scope guidap-booking-widget,
      .guidap-scope guidap-booking-widget *{
        all: revert;
      }

      /* on remet quelques fondamentaux qui évitent les surprises */
      .guidap-scope guidap-booking-widget,
      .guidap-scope guidap-booking-widget *{
        box-sizing: border-box;
        font-family: inherit;
      }
    </style>
  </head>

  <body>
    <main class="guidap-page">
      <h1 class="guidap-title">Réservation</h1>
      <div id="guidap-root" class="guidap-scope"></div>
    </main>

    <script>
      (function () {
        const mount = () => {
          const root = document.getElementById("guidap-root");
          if (!root) return;
          if (root.querySelector("guidap-booking-widget")) return;

          const el = document.createElement("guidap-booking-widget");
          el.setAttribute("activity-uuid", "XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V");
          root.appendChild(el);
        };

        const sendHeight = () => {
          const h = Math.max(
            document.body ? document.body.scrollHeight : 0,
            document.documentElement ? document.documentElement.scrollHeight : 0
          );
          parent.postMessage({ type: "guidap:height", height: h }, "*");
        };

        const tick = () => {
          try { sendHeight(); } catch (e) {}
        };

        mount();
        window.addEventListener("load", function () {
          mount();
          tick();
          setTimeout(tick, 250);
          setTimeout(tick, 750);
        });

        const ro = new ResizeObserver(function () {
          tick();
        });
        ro.observe(document.documentElement);
        tick();
      })();
    </script>
  </body>
</html>` ,
    []
  );

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

      <main className="min-h-screen bg-background pt-20">
        <section className="mx-auto w-full max-w-[1150px] px-4 py-8">
          <iframe
            title="Réservation en ligne"
            className="w-full rounded-lg border border-border bg-background"
            style={{ height: iframeHeight }}
            srcDoc={srcDoc}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Reservation;
