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

  return null;
};

export default GuidapOverlay;
