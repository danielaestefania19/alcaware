import { useTranslation } from "react-i18next";

export type Lang = "es" | "en";
export type PageKey = "home" | "webmobil" | "blockchain" | "ai" | "nosotros";

export const LANGS: Lang[] = ["es", "en"];

// Ruta de cada página en cada idioma. El español queda en la raíz y el inglés bajo /en.
export const PAGE_PATHS: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en" },
  webmobil: { es: "/web-mobil", en: "/en/web-mobile" },
  blockchain: { es: "/blockchain", en: "/en/blockchain" },
  ai: { es: "/inteligencia-artificial", en: "/en/artificial-intelligence" },
  nosotros: { es: "/nosotros", en: "/en/about-us" },
};

export const ALL_PATHS = LANGS.flatMap((lang) =>
  (Object.keys(PAGE_PATHS) as PageKey[]).map((page) => PAGE_PATHS[page][lang]),
);

const normalize = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export function langFromPath(path: string): Lang {
  const p = normalize(path);
  return p === "/en" || p.startsWith("/en/") ? "en" : "es";
}

export function pageFromPath(path: string): PageKey | undefined {
  const p = normalize(path);
  return (Object.keys(PAGE_PATHS) as PageKey[]).find((page) =>
    LANGS.some((lang) => PAGE_PATHS[page][lang] === p),
  );
}

export function pathFor(page: PageKey, lang: Lang, hash = "") {
  return `${PAGE_PATHS[page][lang]}${hash}`;
}

// La misma página en el otro idioma (o el inicio si la ruta no existe).
export function switchLangPath(path: string, lang: Lang) {
  return pathFor(pageFromPath(path) ?? "home", lang);
}

export function useLocalePath() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language === "en" ? "en" : "es";
  return { lang, to: (page: PageKey, hash = "") => pathFor(page, lang, hash) };
}
