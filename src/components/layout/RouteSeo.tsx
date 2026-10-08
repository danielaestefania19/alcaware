import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteSeo, SITE_URL } from "../../seo";

// Mantiene título, descripción y canonical al navegar dentro de la SPA.
export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { seo } = getRouteSeo(pathname);
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${SITE_URL}${pathname === "/" ? "/" : pathname}`);
  }, [pathname]);

  return null;
}
