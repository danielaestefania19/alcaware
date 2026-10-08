import { useTranslation } from "react-i18next";
import HeroNosotrosBackground from "../../../components/ui/backgrounds/HeroNosotrosBackground";
import AlcawareLogo from "../../../assets/images/ALCAWARE_6.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen overflow-hidden text-white flex items-center justify-center">
      <HeroNosotrosBackground />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1>
          <span className="sr-only">{t("nosotros.hero_title")}</span>
          <img
            src={AlcawareLogo}
            alt=""
            className="w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-md object-contain"
          />
        </h1>
      </div>
    </section>
  );
}
