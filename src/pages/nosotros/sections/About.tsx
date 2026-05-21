import { useTranslation } from "react-i18next";

type AboutCardProps = {
  title: string;
  paragraphs: string[];
  cta: string;
  align: "left" | "center";
};

function AboutCard({ title, paragraphs, cta, align }: AboutCardProps) {
  const isCenter = align === "center";

  return (
    <div className="relative rounded-2xl border border-primary/60 bg-[#060d0a]/80 p-7 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-5 md:gap-6">
      <h3
        className={`font-melete text-sm md:text-base lg:text-lg xl:text-xl tracking-widest text-primary leading-snug ${isCenter ? "text-center" : "text-left"}`}
        style={{ textShadow: "0 0 6px #3AE0B3, 0 0 20px #3AE0B380" }}
      >
        {title}
      </h3>
      <div className={`flex flex-col gap-3 md:gap-4 ${isCenter ? "items-center" : "items-start"}`}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`font-montserrat text-[11px] md:text-xs lg:text-[13px] xl:text-sm tracking-widest text-white/80 leading-loose ${isCenter ? "text-center" : "text-left"}`}
          >
            {p}
          </p>
        ))}
      </div>
      <p
        className={`font-montserrat text-xs md:text-sm tracking-widest text-primary cursor-pointer hover:brightness-125 transition-all ${isCenter ? "text-right" : "text-left"}`}
      >
        {cta}
      </p>
    </div>
  );
}

type CardItem = {
  title: string;
  paragraphs: string[];
  cta: string;
  align: "left" | "center";
};

export default function About() {
  const { t } = useTranslation();
  const cards = t("nosotros.about.cards", { returnObjects: true }) as CardItem[];

  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-2xl xl:max-w-3xl mx-auto">
        {cards.map((card, i) => (
          <AboutCard
            key={i}
            title={card.title}
            paragraphs={card.paragraphs}
            cta={card.cta}
            align={card.align}
          />
        ))}
      </div>
    </section>
  );
}
