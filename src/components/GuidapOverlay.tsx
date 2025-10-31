import React, { useEffect, useState } from "react";

const GuidapOverlay: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasGuidap = () =>
      !!document.querySelector(
        'iframe[src*="guidap"], iframe[src*="guidap.app"], div[id*="guidap"][class*="overlay"], div[class*="guidap"][class*="overlay"]'
      );

    setOpen(hasGuidap());

    const observer = new MutationObserver(() => {
      setOpen(hasGuidap());
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 transition-opacity pointer-events-none`}
      style={{
        opacity: open ? 1 : 0,
        background: "hsl(220 15% 15% / 0.55)",
        backdropFilter: "blur(2px)",
        zIndex: 9998,
      }}
    />
  );
};

export default GuidapOverlay;
