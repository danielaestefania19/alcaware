import bgCard from "../assets/icons/BgCard.png";
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
    <section className="relative py-24 px-6 z-10">
      {/* Fondo negro que cubre todo y se desvanece al final revelando la imagen de WorkMethodology */}
      <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to bottom, black 70%, transparent 100%)"}} />
      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="font-melete text-3xl md:text-4xl tracking-widest text-white text-center mb-20">
          {t("why.title")}
        </h2>

        <div className="grid grid-cols-3 gap-5 items-start">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative rounded-4xl overflow-hidden border-3 border-primary/20 ${offsetFlags[i] ? "mt-12" : ""}`}
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${bgCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-black/75" />

              {/* Contenido */}
              <div className="relative z-10 p-8 flex flex-col items-center justify-center gap-5 min-h-70">
                <h4 className="font-melete text-xs text-white text-center truncate w-full px-1">
                  {card.title}
                </h4>
                <p className="font-montserrat text-[11px] tracking-widest text-white leading-loose text-center">
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
