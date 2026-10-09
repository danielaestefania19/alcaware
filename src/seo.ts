import es from "./i18n/es.json";
import en from "./i18n/en.json";
import { ARTICLES } from "./content/articles";
import { CASES } from "./content/cases";
import { langFromPath, LANGS, pageFromPath, ROUTE_KEYS, ROUTE_PATHS, type Lang, type PageKey } from "./i18n/routes";

export const SITE_URL = "https://www.alcaware.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

type FaqItem = { question: string; answer: string };

type RouteSeo = {
  title: string;
  description: string;
  faq?: FaqItem[];
  serviceName?: string;
  article?: { headline: string; datePublished?: string };
};

const SEO: Partial<Record<PageKey, Record<Lang, RouteSeo>>> = {
  home: {
    es: {
      title: "Alcaware | Desarrollo de software a medida: web, móvil, blockchain e IA",
      description:
        "Desarrollamos software a medida para empresas: web apps, apps móviles iOS/Android, soluciones blockchain e inteligencia artificial. De MVP a escala, con seguridad desde el inicio.",
      faq: es.faq.items,
    },
    en: {
      title: "Alcaware | Custom software development: web, mobile, blockchain and AI",
      description:
        "We build custom software for businesses: web apps, iOS/Android mobile apps, blockchain solutions and artificial intelligence. From MVP to scale, secure from day one.",
      faq: en.faq.items,
    },
  },
  webmobil: {
    es: {
      title: "Desarrollo de apps web y móviles a medida | Alcaware",
      description:
        "Creamos web apps, plataformas SaaS y apps móviles iOS/Android a medida, con arquitectura sólida, APIs e integraciones y UI/UX orientado a conversión.",
      faq: es.webmobil.faq.items,
      serviceName: "Desarrollo web y móvil a medida",
    },
    en: {
      title: "Custom web and mobile app development | Alcaware",
      description:
        "We build custom web apps, SaaS platforms and iOS/Android mobile apps with solid architecture, APIs and integrations, and conversion-focused UI/UX.",
      faq: en.webmobil.faq.items,
      serviceName: "Custom web and mobile development",
    },
  },
  blockchain: {
    es: {
      title: "Desarrollo blockchain a medida: smart contracts y tokenización | Alcaware",
      description:
        "Smart contracts, tokenización, trazabilidad e integración Web2 ↔ Web3 con seguridad y buenas prácticas desde el inicio. Desarrollo blockchain a medida para empresas.",
      faq: es.blockchain.faq.items,
      serviceName: "Desarrollo blockchain a medida",
    },
    en: {
      title: "Custom blockchain development: smart contracts and tokenization | Alcaware",
      description:
        "Smart contracts, tokenization, traceability and Web2 ↔ Web3 integration with security and best practices from day one. Custom blockchain development for businesses.",
      faq: en.blockchain.faq.items,
      serviceName: "Custom blockchain development",
    },
  },
  ai: {
    es: {
      title: "Soluciones de inteligencia artificial para empresas | Alcaware",
      description:
        "Chatbots, automatización de procesos y análisis inteligente de datos con IA. Integramos inteligencia artificial a la medida de tu empresa.",
      faq: es.ai.faq.items,
      serviceName: "Soluciones de inteligencia artificial a medida",
    },
    en: {
      title: "Artificial intelligence solutions for businesses | Alcaware",
      description:
        "Chatbots, process automation and intelligent data analysis with AI. We integrate artificial intelligence tailored to your business.",
      faq: en.ai.faq.items,
      serviceName: "Custom artificial intelligence solutions",
    },
  },
  nosotros: {
    es: {
      title: "Nosotros | Alcaware, software a medida desde Monterrey",
      description:
        "Conoce a Alcaware: equipo de desarrollo de software a medida en Monterrey, México. Nuestra misión, experiencia y forma de trabajar.",
    },
    en: {
      title: "About us | Alcaware, custom software from Monterrey",
      description:
        "Meet Alcaware: a custom software development team in Monterrey, Mexico. Our mission, experience and way of working.",
    },
  },
};

SEO.blog = {
  es: {
    title: "Blog y casos de éxito | Alcaware",
    description:
      "Artículos sobre desarrollo de software a medida, inteligencia artificial y blockchain para empresas, y casos de éxito de proyectos reales.",
  },
  en: {
    title: "Blog and case studies | Alcaware",
    description:
      "Articles on custom software development, artificial intelligence and blockchain for businesses, plus case studies from real projects.",
  },
};

function contentSeo(key: string, lang: Lang): RouteSeo | undefined {
  const [kind, id] = key.split(":");
  if (kind === "case") {
    const c = CASES.find((item) => item.id === id);
    if (c) return { title: `${c.title[lang]} | Alcaware`, description: c.description[lang], article: { headline: c.title[lang] } };
  }
  if (kind === "article") {
    const a = ARTICLES.find((item) => item.id === id);
    if (a)
      return {
        title: `${a.title[lang]} | Alcaware`,
        description: a.description[lang],
        article: { headline: a.title[lang], datePublished: a.date },
      };
  }
  return undefined;
}

const notFoundSeo: Record<Lang, RouteSeo> = {
  es: { title: "Página no encontrada | Alcaware", description: "La página que buscas no existe." },
  en: { title: "Page not found | Alcaware", description: "The page you are looking for does not exist." },
};

export function getRouteSeo(path: string) {
  const lang = langFromPath(path);
  const page = pageFromPath(path);
  const seo = page ? (SEO[page as PageKey]?.[lang] ?? contentSeo(page, lang)) : undefined;
  return { seo: seo ?? notFoundSeo[lang], indexable: Boolean(seo), page, lang };
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

const organization = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Alcaware",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/og-image.png`,
  image: OG_IMAGE,
  email: "it@alcaware.com",
  telephone: "+528116359851",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Francisco Villa 650, Jardín Español",
    addressLocality: "Monterrey",
    addressRegion: "N.L.",
    postalCode: "64820",
    addressCountry: "MX",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.6647094, longitude: -100.277955 },
  hasMap: "https://maps.google.com/?cid=11676762792263704516",
  areaServed: "MX",
  sameAs: ["https://www.instagram.com/alcaware_", "https://maps.google.com/?cid=11676762792263704516"],
};

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const jsonLd = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

// Tags del <head> para el HTML pre-renderizado de cada ruta.
export function renderHeadTags(path: string) {
  const { seo, indexable, page, lang } = getRouteSeo(path);
  const url = absoluteUrl(path);
  const title = escapeAttr(seo.title);
  const description = escapeAttr(seo.description);

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
  ];

  if (!indexable) {
    tags.push(`<meta name="robots" content="noindex" />`);
    return tags.join("\n    ");
  }

  const alternates = LANGS.map(
    (alt) => `<link rel="alternate" hreflang="${alt}" href="${absoluteUrl(ROUTE_PATHS[page!][alt])}" />`,
  );
  alternates.push(`<link rel="alternate" hreflang="x-default" href="${absoluteUrl(ROUTE_PATHS[page!].es)}" />`);

  tags.push(
    `<link rel="canonical" href="${url}" />`,
    ...alternates,
    `<meta property="og:type" content="${seo.article ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="Alcaware" />`,
    `<meta property="og:locale" content="${lang === "en" ? "en_US" : "es_MX"}" />`,
    `<meta property="og:locale:alternate" content="${lang === "en" ? "es_MX" : "en_US"}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  );

  const graph: unknown[] = [organization];
  if (seo.serviceName) {
    graph.push({
      "@type": "Service",
      name: seo.serviceName,
      description: seo.description,
      url,
      provider: { "@id": organization["@id"] },
      areaServed: "MX",
      inLanguage: lang,
    });
  }
  if (seo.article) {
    graph.push({
      "@type": "Article",
      headline: seo.article.headline,
      description: seo.description,
      url,
      image: OG_IMAGE,
      inLanguage: lang,
      ...(seo.article.datePublished ? { datePublished: seo.article.datePublished } : {}),
      author: { "@id": organization["@id"] },
      publisher: { "@id": organization["@id"] },
    });
  }
  if (seo.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: seo.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }
  tags.push(jsonLd({ "@context": "https://schema.org", "@graph": graph }));

  return tags.join("\n    ");
}

// sitemap.xml con las dos versiones de cada página enlazadas por hreflang.
export function renderSitemap(lastmod = new Date().toISOString().slice(0, 10)) {
  const urls = ROUTE_KEYS.flatMap((page) =>
    LANGS.map((lang) => {
      const links = LANGS.map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt}" href="${absoluteUrl(ROUTE_PATHS[page][alt])}" />`,
      ).join("\n");
      return `  <url>\n    <loc>${absoluteUrl(ROUTE_PATHS[page][lang])}</loc>\n    <lastmod>${lastmod}</lastmod>\n${links}\n  </url>`;
    }),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
}
