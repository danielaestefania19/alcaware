import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import frame21 from "../../../../assets/images/Frame 21.png";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const tech = t("ai.tech", { returnObjects: true }) as string[];

  return (
    <section className="relative h-screen overflow-hidden text-white">
      <img
        src={frame21}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-start pt-[25vh] md:pt-[30vh]">
        <div className="w-full max-w-300 mx-auto px-6">
          <div className="max-w-162.5">

            <button
              onClick={() => navigate("/")}
              className="mb-6 flex items-center gap-2 font-montserrat text-xs tracking-[0.2em] text-primary/70 hover:text-primary transition-colors"
            >
              ← {t("navbar.home")}
            </button>

            <p className="mb-4 font-montserrat text-xs tracking-[0.25em] text-primary uppercase">
              {t("ai.label")}
            </p>

            <div className="md:max-w-225 md:w-fit">
              <h1 className="font-melete text-[26px] md:text-[36px] leading-normal tracking-[0.2em] md:tracking-[0.28em] text-left">
                {t("ai.hero_line1")}
                <br />
                {t("ai.hero_line2")}
              </h1>
              <p className="mt-6 font-montserrat text-[13px] tracking-[0.15em] text-white/70 max-w-xl">
                {t("ai.hero_subtitle")}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/")}
                className="rounded-full bg-primary px-8 py-3 text-sm font-montserrat text-black font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95"
              >
                {t("ai.cta_start")}
              </button>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border border-primary px-8 py-3 text-sm font-montserrat font-light text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(58,224,179,0.35)] hover:-translate-y-0.5 active:scale-95"
              >
                {t("ai.cta_more")}
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 px-6">
        <div className="w-full max-w-300 mx-auto flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 px-4 py-1.5 font-montserrat text-[10px] tracking-[0.15em] text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
