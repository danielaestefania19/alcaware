import customers1 from "../assets/icons/customers1.png";
import customers2 from "../assets/icons/customers2.png";
import customers3 from "../assets/icons/customers3.png";
import SuccessStoriesUnicornBg from "../components/ui/SuccessStoriesUnicornBg";

const stories = [
  {
    name: "STRIPE",
    image: customers1,
    imageAlt: "Stripe dashboard",
    reverse: false,
    textRight: true,
    paragraphs: [
      "Desarrollamos una plataforma web empresarial que permite a las compañías centralizar la gestión de sus operaciones en un solo sistema digital.",
      "El proyecto consistió en diseñar e implementar un dashboard intuitivo donde los usuarios pueden administrar procesos clave como facturación, seguimiento de operaciones y generación de reportes en tiempo real. Para lograrlo, utilizamos tecnologías modernas de desarrollo web que permiten una arquitectura escalable y segura.",
      "Esta solución ayudó a optimizar los procesos internos del cliente, reduciendo errores operativos y mejorando la visibilidad de la información dentro de la organización.",
    ],
  },
  {
    name: "UNISWAP LABS",
    image: customers2,
    imageAlt: "Uniswap app",
    reverse: true,
    textRight: false,
    paragraphs: [
      "Diseñamos y desarrollamos una aplicación descentralizada basada en tecnología blockchain que permite a los usuarios intercambiar activos digitales de manera segura y transparente.",
      "La solución integra contratos inteligentes que automatizan la ejecución de transacciones sin la necesidad de intermediarios, garantizando mayor eficiencia y confiabilidad en cada operación.",
      "Además, implementamos una interfaz web intuitiva que facilita la interacción con la red blockchain, permitiendo a los usuarios gestionar sus activos y realizar operaciones de forma sencilla dentro de un entorno completamente descentralizado.",
    ],
  },
  {
    name: "IBM WATSON",
    image: customers3,
    imageAlt: "IBM Watson platform",
    reverse: false,
    textRight: true,
    paragraphs: [
      "Desarrollamos una solución de inteligencia artificial inspirada en tecnologías como IBM y su plataforma IBM Watson, utilizadas por empresas para automatizar procesos, analizar datos y mejorar la experiencia digital.",
      "La implementación consistió en integrar un asistente inteligente dentro de la plataforma del cliente capaz de procesar consultas, analizar información empresarial y generar respuestas o recomendaciones en tiempo real mediante procesamiento de lenguaje natural.",
      "Este tipo de tecnología ha sido utilizada por empresas como Banco Bradesco, que implementó IBM Watson para asistir a su equipo de atención al cliente y responder miles de consultas de forma automática. Nuestra solución permitió automatizar procesos internos, mejorar la gestión de información y ofrecer una experiencia digital más eficiente para los usuarios finales.",
    ],
  },
];

export default function SuccessStories() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      <SuccessStoriesUnicornBg />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-10/12 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-melete text-3xl md:text-4xl tracking-widest text-center mb-4"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}>
            HISTORIAS DE ÉXITO
          </h2>
          <p className="font-montserrat text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Proyectos que demuestran cómo la tecnología bien aplicada puede
            generar valor real para las empresas.
          </p>
        </div>

        {/* Stories */}
        <div className="flex flex-col gap-16">
          {stories.map((story) => (
            <div
              key={story.name}
              className={`flex flex-col md:flex-row items-center gap-12 ${story.reverse ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 shrink-0">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Text */}
              <div className={`w-full md:w-1/2 flex flex-col gap-5 ${story.textRight ? "text-right" : ""}`}>
                <h3 className="font-melete text-3xl tracking-[0.2em] text-white">
                  {story.name}
                </h3>
                {story.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-montserrat text-lg text-white/75 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
