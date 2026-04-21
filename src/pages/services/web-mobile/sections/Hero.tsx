import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroWebMobileBackground from "../../../../components/ui/backgrounds/HeroWebMobileBackground";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
 
  return (
    <section className="relative h-screen overflow-hidden text-white">
      <HeroWebMobileBackground />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-start pt-[25vh] md:pt-[30vh]">
        <div className="w-full max-w-300 mx-auto px-6">
          <div className="max-w-162.5">
            <div className="md:max-w-225 md:w-fit">
              <h1 className="font-melete text-[26px] md:text-[36px] leading-normal tracking-[0.2em] md:tracking-[0.28em] text-left">
                {t("webmobil.hero_line1")}
                <br />
                {t("webmobil.hero_line2")}
              </h1>
              <p className="mt-6 font-montserrat text-[13px] tracking-[0.15em] text-white/70 max-w-xl">
                {t("webmobil.hero_subtitle")}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/")}
                className="rounded-full bg-primary px-8 py-3 text-sm font-montserrat text-black font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95"
              >
                {t("webmobil.cta_start")}
              </button>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border border-primary px-8 py-3 text-sm font-montserrat font-light text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(58,224,179,0.35)] hover:-translate-y-0.5 active:scale-95"
              >
                {t("webmobil.cta_more")}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
