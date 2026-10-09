import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Contact from "../home/sections/Contact";
import { ARTICLES } from "../../content/articles";
import { useLocalePath } from "../../i18n/routes";
import ArticleCard from "./ArticleCard";
import ContentBlocks from "./ContentBlocks";
import ContentHeader from "./ContentHeader";
import ServiceLinks from "./ServiceLinks";

export default function ArticlePage({ id }: { id: string }) {
  const { t } = useTranslation();
  const { lang, to } = useLocalePath();
  const article = ARTICLES.find((a) => a.id === id)!;
  const others = ARTICLES.filter((a) => a.id !== id);

  return (
    <>
      <main className="bg-black text-white pt-32 lg:pt-40 pb-12 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
        <article className="max-w-3xl mx-auto">
          <Link to={to("blog")} className="font-montserrat text-xs lg:text-sm text-white/60 hover:text-primary transition-colors">
            {t("content.back_blog")}
          </Link>
          <div className="mt-6">
            <ContentHeader
              label={`${t("content.published")} ${article.date}`}
              title={article.title[lang]}
              subtitle={article.description[lang]}
            />
          </div>
          <div className="mt-10">
            <ContentBlocks blocks={article.body[lang]} />
          </div>
          <div className="mt-10">
            <ServiceLinks services={article.services} />
          </div>
        </article>

        {others.length > 0 && (
          <section className="mt-16 lg:mt-20">
            <h2 className="font-melete text-lg lg:text-2xl tracking-widest mb-6 lg:mb-8">{t("content.more_articles")}</h2>
            <div className="grid gap-5 lg:gap-6 md:grid-cols-2">
              {others.map((a) => (
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
        )}
      </main>
      <Contact />
      <Footer />
    </>
  );
}
