// Google Analytics event tracking utility

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Predefined events for convenience
export const trackReservationClick = (location: string) => {
  trackEvent('reservation_click', {
    event_category: 'engagement',
    event_label: location,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName,
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'phone_number',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'contact',
    event_label: 'email_address',
  });
};
