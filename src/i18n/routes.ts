import { useTranslation } from "react-i18next";
import { ARTICLES } from "../content/articles";
import { CASES } from "../content/cases";

export type Lang = "es" | "en";
export type PageKey = "home" | "webmobil" | "blockchain" | "ai" | "nosotros" | "blog";
export type RouteKey = PageKey | `case:${string}` | `article:${string}`;

export const LANGS: Lang[] = ["es", "en"];

// Ruta de cada página en cada idioma. El español queda en la raíz y el inglés bajo /en.
export const PAGE_PATHS: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en" },
  webmobil: { es: "/web-mobil", en: "/en/web-mobile" },
  blockchain: { es: "/blockchain", en: "/en/blockchain" },
  ai: { es: "/inteligencia-artificial", en: "/en/artificial-intelligence" },
  nosotros: { es: "/nosotros", en: "/en/about-us" },
  blog: { es: "/blog", en: "/en/blog" },
};

// Casos de éxito y artículos: una ruta por idioma con su propio slug.
export const ROUTE_PATHS: Record<RouteKey, Record<Lang, string>> = {
  ...PAGE_PATHS,
  ...Object.fromEntries(
    CASES.map((c) => [`case:${c.id}`, { es: `/casos-de-exito/${c.slug.es}`, en: `/en/case-studies/${c.slug.en}` }]),
  ),
  ...Object.fromEntries(
    ARTICLES.map((a) => [`article:${a.id}`, { es: `/blog/${a.slug.es}`, en: `/en/blog/${a.slug.en}` }]),
  ),
};

export const ROUTE_KEYS = Object.keys(ROUTE_PATHS) as RouteKey[];

export const ALL_PATHS = LANGS.flatMap((lang) => ROUTE_KEYS.map((key) => ROUTE_PATHS[key][lang]));

const normalize = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export function langFromPath(path: string): Lang {
  const p = normalize(path);
  return p === "/en" || p.startsWith("/en/") ? "en" : "es";
}

export function pageFromPath(path: string): RouteKey | undefined {
  const p = normalize(path);
  return ROUTE_KEYS.find((key) => LANGS.some((lang) => ROUTE_PATHS[key][lang] === p));
}

export function pathFor(key: RouteKey, lang: Lang, hash = "") {
  return `${ROUTE_PATHS[key][lang]}${hash}`;
}

// La misma página en el otro idioma (o el inicio si la ruta no existe).
export function switchLangPath(path: string, lang: Lang) {
  return pathFor(pageFromPath(path) ?? "home", lang);
}

export function useLocalePath() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language === "en" ? "en" : "es";
  return { lang, to: (key: RouteKey, hash = "") => pathFor(key, lang, hash) };
}
