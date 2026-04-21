import HeroBackground from "../../../components/ui/backgrounds/HeroBackground";
import TechBar from "./TechBar";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen overflow-hidden text-white">
            <HeroBackground />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex h-full items-start pt-[25vh] md:pt-[30vh]">
                <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 pb-36 md:pb-32 lg:pb-28">
                    <div>
                        <h1 className="font-melete text-[16px] md:text-[22px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] leading-[1.6] tracking-[0.2em] md:tracking-[0.28em] text-left">
                            {t("hero.title_line1")} {t("hero.title_line2")}
                        </h1>
                        <p className="mt-6 font-montserrat text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[14px] tracking-[0.15em] text-white/70">
                            {t("hero.subtitle")}
                        </p>
                        <div className="mt-8 xl:mt-10 flex flex-wrap gap-4 xl:gap-5">
                            <button className="rounded-full bg-primary px-8 xl:px-9 py-3 xl:py-3.5 text-sm font-montserrat text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95">
                                {t("hero.cta_start")}
                            </button>
                            <button className="rounded-full border border-primary px-8 xl:px-9 py-3 xl:py-3.5 text-sm font-montserrat font-light text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(58,224,179,0.35)] hover:-translate-y-0.5 active:scale-95">
                                {t("hero.cta_services")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-0 right-0 z-20 px-6 md:px-16 lg:px-28 xl:px-44 2xl:px-80">
                <TechBar />
            </div>
        </section>
    );
}
