import { useTranslation } from "react-i18next";
import Footer from "../../components/layout/Footer";
import { ARTICLES } from "../../content/articles";
import { CASES } from "../../content/cases";
import { useLocalePath } from "../../i18n/routes";
import ArticleCard from "./ArticleCard";
import ContentHeader from "./ContentHeader";

export default function BlogPage() {
  const { t } = useTranslation();
  const { lang, to } = useLocalePath();

  return (
    <>
      <main className="bg-black text-white pt-32 lg:pt-40 pb-16 lg:pb-24 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
        <ContentHeader display label={t("content.blog_label")} title={t("content.blog_title")} subtitle={t("content.blog_subtitle")} />

        <section className="mt-12 lg:mt-16">
          <h2 className="font-melete text-lg lg:text-2xl tracking-widest mb-6 lg:mb-8">{t("content.articles_title")}</h2>
          <div className="grid gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ARTICLES.map((a) => (
              <ArticleCard
                key={a.id}
                to={to(`article:${a.id}`)}
                eyebrow={a.date}
                title={a.title[lang]}
                description={a.description[lang]}
                cta={t("content.read_more")}
              />
            ))}
          </div>
        </section>

        <section className="mt-14 lg:mt-20">
          <h2 className="font-melete text-lg lg:text-2xl tracking-widest mb-6 lg:mb-8">{t("content.cases_title")}</h2>
          <div className="grid gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CASES.map((c) => (
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
      <Footer />
    </>
  );
}
