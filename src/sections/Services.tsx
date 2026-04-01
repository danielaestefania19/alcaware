import frame19 from "../assets/icons/Frame 19.png";
import frame20 from "../assets/icons/Frame 20.png";
import frame21 from "../assets/icons/Frame 21.png";
import bgWaves from "../assets/icons/FONDO 2.jpg";

const services = [
    {
        title: "DESARROLLO WEB & MÓVIL",
        items: [
            "WEB APPS Y PLATAFORMAS",
            "APPS MÓVILES IOS/ANDROID",
            "APIS E INTEGRACIONES",
            "UI/UX ORIENTADO A CONVERSIÓN",
        ],
        image: frame19,
        imageAlt: "Desarrollo Web & Móvil",
        reverse: false,
    },
    {
        title: "SOLUCIONES BLOCKCHAIN",
        items: [
            "SMART CONTRACTS",
            "TOKENIZACIÓN / TRAZABILIDAD",
            "INTEGRACIÓN WEB2 ↔ WEB3",
            "SEGURIDAD Y BUENAS PRÁCTICAS",
        ],
        image: frame20,
        imageAlt: "Soluciones Blockchain",
        reverse: true,
    },
    {
        title: "SOLUCIONES DE INTELIGENCIA ARTIFICIAL",
        items: [
            "CHATBOTS Y ASISTENTES IA",
            "AUTOMATIZACIÓN DE PROCESOS",
            "ANÁLISIS INTELIGENTE DE DATOS",
            "INTEGRACIÓN DE MODELOS IA",
        ],
        image: frame21,
        imageAlt: "Inteligencia Artificial",
        reverse: false,
    },
];

export default function Services() {
    return (
        <section
            className="relative py-24 text-white overflow-hidden"
            style={{ backgroundImage: `url(${bgWaves})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className={`flex flex-col md:flex-row items-center gap-12 ${
                            service.reverse ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Imagen */}
                        <div className="w-full md:w-1/2 shrink-0">
                            <img
                                src={service.image}
                                alt={service.imageAlt}
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                        </div>

                        {/* Texto */}
                        <div className="w-full md:w-1/2">
                            <h3 className="font-melete text-lg tracking-[0.2em] mb-8">
                                {service.title}
                            </h3>
                            <ul className="space-y-4 font-montserrat text-sm tracking-[0.1em] text-white/80">
                                {service.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                            <button className="mt-10 font-montserrat text-xs tracking-[0.15em] text-primary underline underline-offset-4">
                                VER MÁS
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
