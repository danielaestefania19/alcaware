import UnicornSectionBg from "../components/ui/ComparisonUnicornSectionBg";
import card from "/src/assets/icons/card-bg.png";
import { useTranslation } from "react-i18next";

export default function Comparison() {
    const { t } = useTranslation();

    const othersItems = t("comparison.others_items", { returnObjects: true }) as string[];
    const alcawareItems = t("comparison.alcaware_items", { returnObjects: true }) as string[];

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
                            {t("comparison.others_title")}
                        </h3>

                        <ul className="space-y-6 font-montserrat text-white/80">
                            {othersItems.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className="relative w-full max-w-190 aspect-662/570 -mt-12">

                    {/* Imagen = TODO */}
                    <img
                        src={card}
                        alt=""
                        className="w-full h-full object-contain"
                    />

                    {/* Contenido encima */}
                    <div className="absolute inset-0 flex flex-col justify-center px-14 py-12 text-white">

                        <h3 className="font-melete text-xl tracking-[0.2em] mb-6">
                            {t("comparison.alcaware_title")}
                        </h3>

                        <ul className="space-y-6 font-montserrat text-white/80">
                            {alcawareItems.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
