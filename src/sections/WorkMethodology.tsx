import bgMethodology from "../assets/icons/Rectangle 4.png";

const steps = [
  {
    number: "1",
    title: "ANALISIS DEL PROYECTO",
    description:
      "Evaluamos las necesidades del cliente, los objetivos del negocio y los requerimientos técnicos para definir el alcance y la estrategia del desarrollo.",
    side: "left",
  },
  {
    number: "2",
    title: "DESARROLLO PERSONALIZADO",
    description:
      "Diseñamos y desarrollamos la solución tecnológica a medida, utilizando metodologías ágiles que permiten iteraciones rápidas y entregas constantes.",
    side: "right",
  },
  {
    number: "3",
    title: "DESPLIEGUE\nA\n PRODUCCION",
    description:
      "Implementamos la solución en el entorno final, asegurando estabilidad, seguridad y correcto funcionamiento antes de su lanzamiento.",
    side: "left",
  },
  {
    number: "4",
    title: "SOPORTE CONTINUO",
    description:
      "Brindamos mantenimiento, mejoras y acompañamiento técnico para garantizar el crecimiento y la evolución del producto a largo plazo.",
    side: "right",
  },
];

export default function WorkMethodology() {
  return (
    <section
      className="relative text-white pb-16 md:pb-24 px-4 md:px-6"
      style={{
        marginTop: "-550px",
        paddingTop: "700px",
        backgroundImage: `url(${bgMethodology})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col">
        <div className="flex justify-end mb-10 md:mb-16">
          <h2
            className="font-melete text-3xl md:text-4xl tracking-widest text-white text-right leading-tight"
            style={{
              textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
            }}
          >
            NUESTRA<br />
            METODOLOGIA<br />
            DE TRABAJO
          </h2>
        </div>

        {/* Mobile: single column in order */}
        <div className="flex flex-col gap-16 md:hidden">
          {steps.map((step) => (
            <StepBlock key={step.number} step={step} />
          ))}
        </div>

        {/* Desktop: two columns zigzag */}
        <div className="hidden md:grid grid-cols-2 gap-x-20">
          <div className="flex flex-col gap-40 pt-0">
            {steps
              .filter((s) => s.side === "left")
              .map((step) => (
                <StepBlock key={step.number} step={step} />
              ))}
          </div>
          <div className="flex flex-col gap-40 pt-42">
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
  step: (typeof steps)[number];
}) {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <span
          className="font-melete select-none shrink-0"
          style={{ fontSize: "clamp(3.5rem, 7.5vw, 7.5rem)", color: "#ffffff", lineHeight: 1, marginLeft: "-0.30em" }}
        >
          {step.number}
        </span>
        <span
          className="font-melete tracking-widest text-white leading-tight whitespace-pre-line"
          style={{ fontSize: "clamp(0.75rem, 1.3vw, 1.3rem)" }}
        >
          {step.title}
        </span>
      </div>
      <p
        className="font-montserrat tracking-wider text-white/70 leading-loose"
        style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.2rem)", marginTop: "0.80rem", textAlign: "justify" }}
      >
        {step.description}
      </p>
    </div>
  );
}
