import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroWebMobileBackground from "../../../../components/ui/backgrounds/HeroWebMobileBackground";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative h-screen overflow-hidden text-white flex flex-col">
      <HeroWebMobileBackground />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex-1 flex items-start pt-[25vh] md:pt-[30vh]">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
          <div>

            <h1 className="font-melete text-[16px] md:text-[22px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] leading-[1.6] tracking-[0.2em] md:tracking-[0.28em] text-left">
              {t("webmobil.hero_line1")} {t("webmobil.hero_line2")}
            </h1>
            <p className="mt-4 md:mt-6 font-montserrat text-[12px] md:text-[13px] xl:text-[14px] tracking-[0.15em] text-white/70">
              {t("webmobil.hero_subtitle")}
            </p>
            <div className="mt-8 xl:mt-10 flex flex-wrap gap-4 xl:gap-5">

              <button
                onClick={() => navigate("/")}
                className="rounded-full bg-primary px-8 xl:px-9 py-3 xl:py-3.5 text-sm font-montserrat text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95">
                {t("webmobil.cta_start")}
              </button>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border border-primary px-8 xl:px-9 py-3 xl:py-3.5 text-sm font-montserrat font-light text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(58,224,179,0.35)] hover:-translate-y-0.5 active:scale-95">

                {t("webmobil.cta_more")}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
