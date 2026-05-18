import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DiferenciadoresAIBackground from "../../../../components/ui/backgrounds/DiferenciadoresAIBackground";

interface DifItem {
  title: string;
  description: string;
}

function Card({ title, description }: DifItem) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-secondary/20 backdrop-blur-sm p-6 md:p-10 hover:border-primary/50 hover:bg-black/60 transition-all duration-300 min-h-36 md:min-h-52 flex flex-col justify-center">
      <h3 className="text-center font-montserrat font-light text-[16px] md:text-[20px] text-white mb-2 md:mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-center font-montserrat font-light text-[14px] md:text-[18px] text-white/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Diferenciadores() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = t("ai.diferenciadores.items", {
    returnObjects: true,
  }) as DifItem[];

  const leftCol = items.slice(0, 4);
  const rightCol = items.slice(4, 8);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 md:px-6 text-white">
      <div className="absolute top-32 left-0 right-0 bottom-0 overflow-hidden">
        <DiferenciadoresAIBackground />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="font-melete text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest mb-4"
            style={{
              textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
            }}
          >
            {t("ai.diferenciadores.title")}
          </h2>
          <p className="font-montserrat text-[11px] md:text-[12px] tracking-[0.15em] text-white/50">
            {t("ai.diferenciadores.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-5 md:items-start">
          <div className="flex flex-col gap-4 md:gap-5 md:flex-1">
            {leftCol.map((item, i) => (
              <Card key={i} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="flex flex-col gap-4 md:gap-5 md:flex-1 md:mt-14">
            {rightCol.map((item, i) => (
              <Card key={i} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center md:justify-start">
          <button
            onClick={() => navigate("/")}
            className="rounded-full border border-primary/60 px-7 py-3 font-montserrat text-[12px] tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_20px_rgba(58,224,179,0.35)]"
          >
            {t("ai.diferenciadores.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
