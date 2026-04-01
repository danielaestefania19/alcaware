import UnicornSectionBg from "../components/ui/ComparisonUnicornSectionBg";
import card from "/src/assets/icons/card-bg.png";
export default function Comparison() {
    return (
        <section className="relative py-32 text-white overflow-hidden">

            {/* Fondo */}
            <UnicornSectionBg />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 -z-10" />

            {/* Contenido */}
            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                <div className="relative w-full max-w-190 aspect-662/570">

                    {/* Imagen = TODO */}
                    <img
                        src={card}
                        alt=""
                        className="w-full h-full object-contain"
                    />

                    {/* Contenido encima */}
                    <div className="absolute inset-0 flex flex-col justify-center px-14 py-12 text-white">

                        <h3 className="font-melete text-xl tracking-[0.2em] mb-6">
                            CON OTROS:
                        </h3>

                        <ul className="space-y-6 font-montserrat text-white/80">
                            <li>• SISTEMAS IMPROVISADOS</li>
                            <li>• DEPENDENCIA DE TERCEROS</li>
                            <li>• SOFTWARE QUE NO ESCALA</li>
                        </ul>

                    </div>
                </div>
                <div className="relative w-full max-w-190 aspect-662/570 -mt-12">

                    {/* Imagen = TODO */}
                    <img
                        src="/src/assets/icons/card-bg.png"
                        alt=""
                        className="w-full h-full object-contain"
                    />

                    {/* Contenido encima */}
                    <div className="absolute inset-0 flex flex-col justify-center px-14 py-12 text-white">

                        <h3 className="font-melete text-xl tracking-[0.2em] mb-6">
                            CON ALCAVARE:
                        </h3>

                        <ul className="space-y-6 font-montserrat text-white/80">
                            <li>• ESTRUCTURA TECNOLÓGICA CLARA</li>
                            <li>• ROADMAP POR ETAPAS (MVP → ESCALA)</li>
                            <li>• SEGURIDAD DESDE EL INICIO</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}