import es from "./i18n/es.json";

export const SITE_URL = "https://www.alcaware.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

type FaqItem = { question: string; answer: string };

type RouteSeo = {
  title: string;
  description: string;
  faq?: FaqItem[];
  serviceName?: string;
};

export const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "Alcaware | Desarrollo de software a medida: web, móvil, blockchain e IA",
    description:
      "Desarrollamos software a medida para empresas: web apps, apps móviles iOS/Android, soluciones blockchain e inteligencia artificial. De MVP a escala, con seguridad desde el inicio.",
    faq: es.faq.items,
  },
  "/web-mobil": {
    title: "Desarrollo de apps web y móviles a medida | Alcaware",
    description:
      "Creamos web apps, plataformas SaaS y apps móviles iOS/Android a medida, con arquitectura sólida, APIs e integraciones y UI/UX orientado a conversión.",
    faq: es.webmobil.faq.items,
    serviceName: "Desarrollo web y móvil a medida",
  },
  "/blockchain": {
    title: "Desarrollo blockchain a medida: smart contracts y tokenización | Alcaware",
    description:
      "Smart contracts, tokenización, trazabilidad e integración Web2 ↔ Web3 con seguridad y buenas prácticas desde el inicio. Desarrollo blockchain a medida para empresas.",
    faq: es.blockchain.faq.items,
    serviceName: "Desarrollo blockchain a medida",
  },
  "/inteligencia-artificial": {
    title: "Soluciones de inteligencia artificial para empresas | Alcaware",
    description:
      "Chatbots, automatización de procesos y análisis inteligente de datos con IA. Integramos inteligencia artificial a la medida de tu empresa.",
    faq: es.ai.faq.items,
    serviceName: "Soluciones de inteligencia artificial a medida",
  },
  "/nosotros": {
    title: "Nosotros | Alcaware, software a medida desde Monterrey",
    description:
      "Conoce a Alcaware: equipo de desarrollo de software a medida en Monterrey, México. Nuestra misión, experiencia y forma de trabajar.",
  },
};

const notFoundSeo: RouteSeo = {
  title: "Página no encontrada | Alcaware",
  description: "La página que buscas no existe.",
};

export function getRouteSeo(path: string) {
  const seo = routeSeo[path];
  return { seo: seo ?? notFoundSeo, indexable: Boolean(seo) };
}

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
  areaServed: "MX",
  sameAs: ["https://www.instagram.com/alcaware_"],
};

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const jsonLd = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

// Tags del <head> para el HTML pre-renderizado de cada ruta.
export function renderHeadTags(path: string) {
  const { seo, indexable } = getRouteSeo(path);
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
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

  tags.push(
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Alcaware" />`,
    `<meta property="og:locale" content="es_MX" />`,
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
