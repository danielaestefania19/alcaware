// Google Analytics 4. La etiqueta se carga en index.html; aquí solo enviamos eventos.
type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  window.gtag?.("event", name, params);
}

// Cuenta como contacto cada clic en WhatsApp o en el correo, en cualquier parte del sitio.
export function trackContactClicks() {
  document.addEventListener("click", (e) => {
    const link = (e.target as Element | null)?.closest?.("a[href]");
    const href = link?.getAttribute("href") ?? "";
    if (href.startsWith("https://wa.me")) {
      trackEvent("contact_whatsapp", { page_path: window.location.pathname });
    } else if (href.startsWith("mailto:")) {
      trackEvent("contact_email", { page_path: window.location.pathname });
    }
  });
}
