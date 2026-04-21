import { useTranslation } from "react-i18next";
import frame21 from "../../../../assets/images/Frame 21.png";

export default function Overview() {
  const { t } = useTranslation();

  return (
    <section className="bg-black py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
          <img
            src={frame21}
            alt={t("ai.overview.image_alt")}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="font-montserrat text-xs tracking-[0.25em] text-primary uppercase">
            {t("ai.overview.tag")}
          </p>
          <h2
            className="font-melete text-[26px] md:text-[32px] leading-snug tracking-[0.15em]"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
          >
            {t("ai.overview.title")}
          </h2>
          <p className="font-montserrat text-[14px] tracking-widest text-white/70 leading-relaxed">
            {t("ai.overview.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
