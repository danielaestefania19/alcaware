import ComparisonBackground from "../../../components/ui/backgrounds/ComparisonBackground";
import card from "../../../assets/images/card-bg.png";
import { useTranslation } from "react-i18next";

export default function Comparison() {
    const { t } = useTranslation();

    const othersItems = t("comparison.others_items", { returnObjects: true }) as string[];
    const alcawareItems = t("comparison.alcaware_items", { returnObjects: true }) as string[];

    return (
        <section className="relative py-24 lg:py-32 xl:py-40 2xl:py-52 text-white overflow-hidden">
            <ComparisonBackground />
            <div className="absolute inset-0 bg-black/40 -z-10" />
            <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start">
                <div className="relative w-full max-w-95 md:max-w-none aspect-662/570 mx-auto transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                    <img src={card} alt="" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 flex flex-col justify-center p-[10%] text-white">
                        <h3 className="font-melete text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[0.2em] mb-2 lg:mb-3 xl:mb-4">
                            {t("comparison.others_title")}
                        </h3>
                        <ul className="space-y-1 lg:space-y-2 xl:space-y-3 font-montserrat text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-white/80">
                            {othersItems.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative w-full max-w-95 md:max-w-none aspect-662/570 mx-auto -mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                    <img src={card} alt="" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 flex flex-col justify-center p-[10%] text-white">
                        <h3 className="font-melete text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[0.2em] mb-2 lg:mb-3 xl:mb-4">
                            {t("comparison.alcaware_title")}
                        </h3>
                        <ul className="space-y-1 lg:space-y-2 xl:space-y-3 font-montserrat text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-white/80">
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
