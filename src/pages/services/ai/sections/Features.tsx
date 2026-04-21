import { useTranslation } from "react-i18next";

type Feature = { title: string; description: string };

export default function Features() {
  const { t } = useTranslation();
  const features = t("ai.features.items", { returnObjects: true }) as Feature[];

  return (
    <section id="features" className="bg-black py-24 px-6 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs tracking-[0.25em] text-primary uppercase mb-4">
            {t("ai.features.tag")}
          </p>
          <h2
            className="font-melete text-[26px] md:text-[32px] tracking-[0.15em]"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
          >
            {t("ai.features.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-8 flex flex-col gap-3 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.02]"
            >
              <span className="font-montserrat text-[10px] tracking-[0.3em] text-primary/60">
                0{i + 1}
              </span>
              <h3 className="font-melete text-[18px] tracking-[0.15em]">
                {feature.title}
              </h3>
              <p className="font-montserrat text-[13px] tracking-[0.08em] text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
