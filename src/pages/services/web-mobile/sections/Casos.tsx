import { useTranslation } from "react-i18next";
import CasosBackground from "../../../../components/ui/backgrounds/CasosBackground";
import sji from "../../../../assets/images/web-mobile/sji.png";

export default function Casos() {
  const { t } = useTranslation();
  const paragraphs = t("webmobil.casos.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="relative flex items-center overflow-hidden py-16 md:py-20 lg:py-28 text-white min-h-screen">
      <CasosBackground />
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-10/12 px-4 sm:px-6">
        <div className="mb-8 md:mb-12">
          <h2
            className="font-melete mb-3 text-3xl sm:text-4xl tracking-widest md:text-5xl"
            style={{
              textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
            }}
          >
            {t("webmobil.casos.title")}
          </h2>
          <p className="font-montserrat max-w-7xl text-sm leading-relaxed text-white/60 md:text-2xl">
            {t("webmobil.casos.subtitle")}
          </p>
        </div>
        <div className="mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row">
            <div className="flex shrink-0 items-center justify-center p-6 md:p-8 md:w-64 lg:w-96 xl:w-96">
              <img
                src={sji}
                alt="IBM & Microsoft"
                className="w-40 sm:w-52 md:w-full rounded-lg object-contain"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 md:gap-5 p-6 md:p-8 lg:p-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/80"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
