// Guidap custom elements declarations
declare namespace JSX {
  interface IntrinsicElements {
    'guidap-reserve-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'guidap-activity-reserve-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'guidap-activity-details-button': any;
    'guidap-use-giftcard-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'guidap-cart-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'guidap-booking-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'activity-uuid'?: string }, HTMLElement>;
    [elemName: string]: any;
  }
}
