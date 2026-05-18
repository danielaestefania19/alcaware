import { useTranslation } from "react-i18next";
import BlockchainCasosBackground from "../../../../components/ui/backgrounds/BlockchainCasosBackground";
import IBMImage from "../../../../assets/images/IBM.png";

export default function Casos() {
  const { t } = useTranslation();
  const paragraphs = t("webmobil.casos.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="relative flex items-center overflow-hidden py-16 md:py-20 lg:py-28 text-white" style={{ minHeight: "100vh" }}>
      <BlockchainCasosBackground />
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
        <div className="mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="flex shrink-0 items-center justify-center p-8 md:w-64 lg:w-96 xl:w-md">
              <img
                src={IBMImage}
                alt="IBM & Microsoft"
                className="w-full max-w-52 rounded-lg object-contain md:max-w-full"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-montserrat text-sm md:text-base lg:text-lg leading-relaxed text-white/80"
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
