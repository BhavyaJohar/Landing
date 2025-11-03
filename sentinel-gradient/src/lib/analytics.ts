"use client";

declare global {
  interface Window {
    gtag?: (...args: Array<unknown>) => void;
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, eventParams ?? {});
}

