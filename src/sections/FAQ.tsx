import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda desarrollar un proyecto?",
    answer:
      "El tiempo depende del alcance del proyecto. Un desarrollo puede tomar desde algunas semanas hasta varios meses, dependiendo de la complejidad y las funcionalidades requeridas.",
  },
  {
    question: "¿Trabajan con proyectos personalizados?",
    answer:
      "Sí, todos nuestros proyectos son a medida. Analizamos las necesidades específicas de cada cliente para diseñar y desarrollar una solución que se adapte exactamente a sus objetivos.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí, brindamos soporte continuo post-lanzamiento. Ofrecemos planes de mantenimiento que incluyen corrección de errores, actualizaciones de seguridad y mejoras evolutivas del producto.",
  },
  {
    question: "¿Cuáles son sus tarifas?",
    answer:
      "Las tarifas varían según el tipo de proyecto, su complejidad y el tiempo de desarrollo estimado. Contáctanos para recibir una cotización personalizada sin compromiso.",
  },
  {
    question: "¿Cómo puedo iniciar un proyecto con ustedes?",
    answer:
      "Puedes contactarnos a través del formulario de contacto o por nuestros canales directos. Agendamos una reunión inicial para entender tu idea y te presentamos una propuesta detallada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-black py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="font-melete text-3xl md:text-4xl tracking-widest text-center mb-14"
          style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
        >
          PREGUNTAS FRECUENTES
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-black/60 hover:bg-white/5 transition-colors"
              >
                <span className="font-montserrat text-lg tracking-wide text-white">
                  {faq.question}
                </span>
                <span className="ml-4 shrink-0 text-white/60 text-lg leading-none">
                  {openIndex === i ? "∧" : "∨"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 bg-black/60">
                  <p className="font-montserrat text-medium text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
