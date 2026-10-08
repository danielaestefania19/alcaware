import { useTranslation } from "react-i18next";
import { useLocalePath } from "../../../i18n/routes";

type AboutCardProps = {
  title: string;
  paragraphs: string[];
  cta: string;
  align: "left" | "center";
  index: number;
};

function AboutCard({ title, paragraphs, cta, align, index }: AboutCardProps) {
  const { to } = useLocalePath();
  const isCenter = align === "center";
  const isSecond = index === 1;

  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[22px] 2xl:rounded-[28px]
        border border-primary/80
        bg-[radial-gradient(circle_at_80%_45%,rgba(28,180,135,0.24),rgba(6,13,10,0.9)_45%,rgba(2,8,7,0.98)_100%)]
        shadow-[0_0_30px_rgba(58,224,179,0.14)]

        w-full
        md:w-[92%]
        lg:w-[90%]
        xl:w-[88%]
        2xl:w-[86%]

        min-h-77.5
        md:min-h-85
        lg:min-h-91.25
        xl:min-h-102.5
        2xl:min-h-115

        px-7 py-7
        md:px-10 md:py-9
        lg:px-12 lg:py-11
        xl:px-16 xl:py-14
        2xl:px-20 2xl:py-16

        flex flex-col
        ${isSecond ? "ml-auto" : "mr-auto"}
      `}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(58,224,179,0.13),transparent_38%,rgba(58,224,179,0.09)_100%)]" />

      <div
        className={`
          relative z-10 flex h-full flex-col
          ${isCenter ? "items-center text-center" : "items-start text-left"}
          ${isSecond ? "md:items-end md:text-right" : ""}
        `}
      >
        <h3
          className={`
            font-melete uppercase
            text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
            2xl:text-2xl
            tracking-[0.28em]
            text-primary
            leading-tight
            max-w-117.5
            xl:max-w-150
            2xl:max-w-175
            mb-7
            xl:mb-10
            2xl:mb-12
            ${isCenter ? "text-center" : "text-left"}
            ${isSecond ? "md:text-right" : ""}
          `}
          style={{
            textShadow: "0 0 6px #3AE0B3, 0 0 18px rgba(58,224,179,0.75)",
          }}
        >
          {title}
        </h3>

        <div
          className={`
            flex flex-col
            gap-5
            xl:gap-7
            2xl:gap-8
            max-w-130
            xl:max-w-162.5
            2xl:max-w-190
            ${isCenter ? "items-center" : "items-start"}
            ${isSecond ? "md:items-end" : ""}
          `}
        >
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`
                font-montserrat uppercase
                text-xs
                md:text-sm
                lg:text-[15px]
                xl:text-base
                2xl:text-lg
                tracking-[0.08em]
                text-white/90
                leading-snug
                xl:leading-normal
                ${isCenter ? "text-center" : "text-left"}
                ${isSecond ? "md:text-right" : ""}
              `}
            >
              {p}
            </p>
          ))}
        </div>

        <a
          href={to("home", "#servicios")}
          className={`
            mt-auto pt-6
            xl:pt-10
            font-montserrat font-bold uppercase
            text-xs
            md:text-sm
            xl:text-base
            2xl:text-lg
            tracking-wide
            text-primary
            underline underline-offset-2
            hover:brightness-125 transition-all
            ${isSecond ? "self-end" : "self-start"}
          `}
        >
          {cta}
        </a>
      </div>
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

  const cards = t("nosotros.about.cards", {
    returnObjects: true,
  }) as CardItem[];

  return (
    <section className="bg-black py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24 px-0 overflow-hidden">
      <div
        className="
          w-full
          max-w-280
          xl:max-w-330
          2xl:max-w-385
          mx-auto
          flex flex-col
          gap-7
          md:gap-8
          lg:gap-10
          xl:gap-12
          2xl:gap-14
        "
      >
        {cards.map((card, i) => (
          <AboutCard
            key={i}
            index={i}
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