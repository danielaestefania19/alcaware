import bgCard from "../../../assets/images/BgCard.png";
import { useTranslation } from "react-i18next";

type Card = {
  title: string;
  description: string;
};

const offsetFlags = [false, true, false, false, true, false];

export default function WhyAlcaware() {
  const { t } = useTranslation();
  const cards = t("why.cards", { returnObjects: true }) as Card[];

  return (
    <section className="relative py-24 lg:py-32 xl:py-40 2xl:py-52 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 z-10">
      <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to bottom, black 70%, transparent 100%)"}} />
      <div className="relative z-10">

        <h2 className="font-melete text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-widest text-white text-center mb-16 lg:mb-20 xl:mb-24"
        style={{
              textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
            }}
          >
          {t("why.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 xl:gap-10 items-start">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative rounded-4xl overflow-hidden border-3 border-primary/20 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 ${offsetFlags[i] ? "md:mt-12 lg:mt-16 xl:mt-20" : ""}`}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${bgCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/75" />

              <div className="relative z-10 p-8 lg:p-10 xl:p-12 2xl:p-14 flex flex-col items-center justify-center gap-5 lg:gap-6 xl:gap-8 aspect-square md:aspect-auto md:min-h-72 lg:min-h-80 xl:min-h-96 2xl:min-h-112">
                <h4 className="font-melete text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-white text-center w-full px-1">
                  {card.title}
                </h4>
                <p className="font-montserrat text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-widest text-white leading-loose text-center">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
