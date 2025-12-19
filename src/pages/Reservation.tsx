import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const Reservation = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(1200);

  useEffect(() => {
    const htmlContent = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: #f4f6f8;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .guidap-page {
      min-height: 100vh;
      background: #f4f6f8;
      padding: 24px;
    }
    .guidap-scope {
      max-width: 1100px;
      margin: 0 auto;
    }
    .guidap-scope guidap-booking-widget {
      display: block;
    }
  </style>
</head>
<body>
  <main class="guidap-page">
    <div id="guidap-root" class="guidap-scope"></div>
  </main>

  <script src="https://cart.guidap.net/v1/" async defer
    data-token="q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4"
    data-lang="fr"
    data-currency="EUR"></script>

  <script>
    (function() {
      function mount() {
        var root = document.getElementById('guidap-root');
        if (!root) return;
        if (root.querySelector('guidap-booking-widget')) return;
        var el = document.createElement('guidap-booking-widget');
        el.setAttribute('activity-uuid', 'XSKzEFlt4kW7cTR5pYmDI0hnqxewPUAiua8V');
        root.appendChild(el);
      }

      function sendHeight() {
        var h = Math.max(
          document.body ? document.body.scrollHeight : 0,
          document.documentElement ? document.documentElement.scrollHeight : 0
        );
        window.parent.postMessage({ type: 'guidap-resize', height: h }, '*');
      }

      mount();
      window.addEventListener('load', function() {
        mount();
        sendHeight();
        setTimeout(sendHeight, 500);
        setTimeout(sendHeight, 1500);
        setTimeout(sendHeight, 3000);
      });

      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(sendHeight).observe(document.documentElement);
      }
      setInterval(sendHeight, 2000);
    })();
  </script>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const blobUrl = URL.createObjectURL(blob);

    if (iframeRef.current) {
      iframeRef.current.src = blobUrl;
    }

    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data && data.type === "guidap-resize" && typeof data.height === "number") {
        setIframeHeight(Math.max(800, data.height + 50));
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      URL.revokeObjectURL(blobUrl);
      window.removeEventListener("message", handleMessage);
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

      <main className="min-h-screen bg-[#f4f6f8] pt-20">
        <section className="mx-auto w-full max-w-[1150px] px-4 py-8">
          <iframe
            ref={iframeRef}
            title="Réservation en ligne"
            className="w-full border-0"
            style={{ height: iframeHeight, background: "#f4f6f8" }}
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-same-origin"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Reservation;
