import bgMethodology from "../../../assets/images/Rectangle 4.png";
import { useTranslation } from "react-i18next";

type Step = {
  title: string;
  description: string;
};

const stepSides = ["left", "right", "left", "right"] as const;

export default function WorkMethodology() {
  const { t } = useTranslation();
  const steps = (t("methodology.steps", { returnObjects: true }) as Step[]).map(
    (step, i) => ({ ...step, number: String(i + 1), side: stepSides[i] })
  );

  return (
    <section
      className="relative text-white pb-40 md:pb-24 lg:pb-32 xl:pb-40 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 pt-125 md:pt-175"
      style={{
        marginTop: "-550px",
        backgroundImage: `url(${bgMethodology})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-end mb-10 md:mb-16 lg:mb-20 xl:mb-24">
          <h2
            className="font-melete text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-widest text-white text-right leading-tight"
            style={{
              textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
            }}
          >
            {t("methodology.title_line1")}<br />
            {t("methodology.title_line2")}<br />
            {t("methodology.title_line3")}
          </h2>
        </div>

        {/* Mobile: single column in order */}
        <div className="flex flex-col gap-16 md:hidden">
          {steps.map((step) => (
            <StepBlock key={step.number} step={step} />
          ))}
        </div>

        {/* Desktop: two columns zigzag */}
        <div className="hidden md:grid grid-cols-2 gap-x-16 lg:gap-x-24 xl:gap-x-32">
          <div className="flex flex-col gap-32 lg:gap-40 xl:gap-52 pt-0">
            {steps
              .filter((s) => s.side === "left")
              .map((step) => (
                <StepBlock key={step.number} step={step} />
              ))}
          </div>
          <div className="flex flex-col gap-32 lg:gap-40 xl:gap-52 pt-42 lg:pt-52 xl:pt-64">
            {steps
              .filter((s) => s.side === "right")
              .map((step) => (
                <StepBlock key={step.number} step={step} />
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StepBlock({
  step,
}: {
  step: { number: string; title: string; description: string; side: string };
}) {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <span
          className="font-melete select-none shrink-0"
          style={{ fontSize: "clamp(3.5rem, 7.5vw, 10rem)", color: "#ffffff", lineHeight: 1, marginLeft: "-0.30em" }}
        >
          {step.number}
        </span>
        <span
          className="font-melete tracking-widest text-white leading-tight whitespace-pre-line"
          style={{ fontSize: "clamp(0.75rem, 1.3vw, 1.8rem)" }}
        >
          {step.title}
        </span>
      </div>
      <p
        className="font-montserrat tracking-wider text-white/70 leading-loose"
        style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.4rem)", marginTop: "0.80rem", textAlign: "justify" }}
      >
        {step.description}
      </p>
    </div>
  );
}
