import UnicornBackground from "../components/ui/UnicornBackground";
import TechBar from "./TechBar";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden text-white pb-28">
            <UnicornBackground />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex h-full items-start pt-[30vh]">
                <div className="w-full max-w-300 mx-auto px-6">
                    <div className="max-w-162.5">
                        <div className="max-w-225 w-fit">
                            <h1 className=" whitespace-nowrap font-melete text-[50px] md:text-[32px] leading-[1.6] tracking-[0.28em] text-left ">
                                SOFTWARE A MEDIDA PARA
                                <br />
                                POTENCIAR TU NEGOCIO
                            </h1>
                            <p className=" mt-6 font-montserrat text-[13px] tracking-[0.15em] text-white/70 whitespace-nowrap">
                                DESARROLLAMOS PRODUCTOS WEB, MÓVILES Y SOLUCIONES BLOCKCHAIN CON ENFOQUE EN ESTRUCTURA, SEGURIDAD Y ESCALABILIDAD
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <button className="rounded-full bg-primary px-8 py-3 text-sm font-montserrat text-white">
                                COMENZAR
                            </button>
                            <button className="rounded-full border border-primary px-8 py-3 text-sm font-montserrat font-light text-primary">
                                VER SERVICIOS →
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <div className="absolute bottom-8 left-0 right-0 z-20 px-6">
                <TechBar />
            </div>
        </section>
    );
}