import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Contact from "../home/sections/Contact";
import { CASES } from "../../content/cases";
import { useLocalePath } from "../../i18n/routes";
import ArticleCard from "./ArticleCard";
import ContentBlocks from "./ContentBlocks";
import ContentHeader from "./ContentHeader";
import ServiceLinks from "./ServiceLinks";

export default function CaseStudyPage({ id }: { id: string }) {
  const { t } = useTranslation();
  const { lang, to } = useLocalePath();
  const study = CASES.find((c) => c.id === id)!;
  const others = CASES.filter((c) => c.id !== id);

  return (
    <>
      <main className="bg-black text-white pt-32 lg:pt-40 pb-12 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
        <article className="max-w-3xl mx-auto">
          <Link to={to("blog")} className="font-montserrat text-xs lg:text-sm text-white/60 hover:text-primary transition-colors">
            {t("content.back_blog")}
          </Link>
          <div className="mt-6">
            <ContentHeader
              label={`${t("content.case_label")} · ${study.sector[lang].toUpperCase()}`}
              title={study.title[lang]}
              subtitle={study.description[lang]}
            />
          </div>
          <picture>
            <source srcSet={study.image.avif} type="image/avif" />
            <img
              src={study.image.webp}
              alt={study.name}
              className="mt-10 w-full rounded-xl border border-primary/40 object-cover"
            />
          </picture>
          <div className="mt-6">
            <ServiceLinks services={study.services} />
          </div>
          <div className="mt-8">
            <ContentBlocks blocks={study.body[lang]} />
          </div>
        </article>

        <section className="mt-16 lg:mt-20">
          <h2 className="font-melete text-lg lg:text-2xl tracking-widest mb-6 lg:mb-8">{t("content.more_cases")}</h2>
          <div className="grid gap-5 lg:gap-6 md:grid-cols-2">
            {others.map((c) => (
              <ArticleCard
                key={c.id}
                to={to(`case:${c.id}`)}
                eyebrow={c.sector[lang].toUpperCase()}
                title={c.title[lang]}
                description={c.description[lang]}
                cta={t("content.see_case")}
                image={c.image}
              />
            ))}
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
