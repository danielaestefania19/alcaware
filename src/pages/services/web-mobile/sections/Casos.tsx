import { useTranslation } from "react-i18next";
import CasosBackground from "../../../../components/ui/backgrounds/CasosBackground";
import IBMImage from "../../../../assets/images/IBM.png";

export default function Casos() {
  const { t } = useTranslation();
  const paragraphs = t("webmobil.casos.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="relative flex items-center overflow-hidden py-28 text-white" style={{ minHeight: "100vh" }}>
      <CasosBackground />
      <div className="absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-10/12 px-6">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-melete mb-3 text-3xl tracking-widest md:text-4xl"
            style={{
              textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
            }}
          >
            {t("webmobil.casos.title")}
          </h2>
          <p className="font-montserrat max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
          {t("webmobil.casos.subtitle")}
          </p>
        </div>

        {/* Case card */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="flex shrink-0 items-center justify-center bg-black/30 p-8 md:w-72">
              <img
                src={IBMImage}
                alt="IBM & Microsoft"
                className="w-full max-w-45 object-contain md:max-w-full"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-montserrat text-base leading-relaxed text-white/80 md:text-lg"
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
