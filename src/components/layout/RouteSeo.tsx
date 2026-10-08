import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { absoluteUrl, getRouteSeo } from "../../seo";

// Mantiene idioma, título, descripción y canonical al navegar dentro de la SPA.
export default function RouteSeo() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const { seo, lang } = getRouteSeo(pathname);
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", absoluteUrl(pathname));
  }, [pathname, i18n]);

  return null;
}
