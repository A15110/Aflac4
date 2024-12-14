interface EventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
};

export const trackEvent = ({
  category,
  action,
  label,
  value,
}: EventData): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackFormSubmission = (formName: string): void => {
  trackEvent({
    category: 'Form',
    action: 'Submit',
    label: formName,
  });
};

export const trackOutboundLink = (url: string): void => {
  trackEvent({
    category: 'Outbound Link',
    action: 'Click',
    label: url,
  });
};