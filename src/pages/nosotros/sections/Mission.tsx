import NosotrosMissionBackground from "../../../components/ui/backgrounds/NosotrosMissionBackground";
import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();

  type MissionData = {
    title_line1: string;
    title_line2: string;
    paragraphs: string[];
  };

  const data = t("nosotros.mission", { returnObjects: true }) as MissionData;

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-start">
      <NosotrosMissionBackground />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 pt-16 md:pt-20 lg:pt-24 xl:pt-28">
        {/* Title */}
        <h2
          className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest leading-tight text-left mb-10 md:mb-12 lg:mb-14 xl:mb-16 max-w-4xl"
          style={{
            textShadow:
              "0 0 1px #fff, 1px 1px 0 #0d3326, 2px 2px 0 #0d3326, 3px 3px 0 #0d3326, 0 0 20px #3AE0B3, 0 0 50px #3AE0B360",
          }}
        >
          {data.title_line1}
          <br />
          {data.title_line2}
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 max-w-3xl">
          {data.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-montserrat text-xs md:text-sm lg:text-base xl:text-lg tracking-widest text-white/80 leading-loose"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
