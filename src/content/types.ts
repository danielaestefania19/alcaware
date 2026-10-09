import type { Lang, PageKey } from "../i18n/routes";

export type Localized<T> = Record<Lang, T>;

// Bloques de contenido de un artículo o caso de éxito.
export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { quote: string; author: string };

export type CaseStudy = {
  id: string;
  name: string;
  slug: Localized<string>;
  image: { avif: string; webp: string };
  services: PageKey[];
  sector: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  body: Localized<Block[]>;
};

export type Article = {
  id: string;
  slug: Localized<string>;
  date: string;
  services: PageKey[];
  title: Localized<string>;
  description: Localized<string>;
  body: Localized<Block[]>;
};
