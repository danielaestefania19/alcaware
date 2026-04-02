import frame19 from "../assets/icons/Frame 19.png";
import frame20 from "../assets/icons/Frame 20.png";
import frame21 from "../assets/icons/Frame 21.png";
import bgWaves from "../assets/icons/FONDO 2.jpg";
import { useTranslation } from "react-i18next";

const images = [frame19, frame20, frame21];
const reverseFlags = [false, true, false];

type ServiceItem = {
    title: string;
    imageAlt: string;
    items: string[];
};

export default function Services() {
    const { t } = useTranslation();
    const services = t("services.items", { returnObjects: true }) as ServiceItem[];

    return (
        <section
            className="relative py-24 text-white overflow-hidden"
            style={{ backgroundImage: `url(${bgWaves})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        className={`flex flex-col md:flex-row items-center gap-12 ${
                            reverseFlags[index] ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Imagen */}
                        <div className="w-full md:w-1/2 shrink-0">
                            <img
                                src={images[index]}
                                alt={service.imageAlt}
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                        </div>

                        {/* Texto */}
                        <div className="w-full md:w-1/2">
                            <h3 className="font-melete text-lg tracking-[0.2em] mb-8">
                                {service.title}
                            </h3>
                            <ul className="space-y-4 font-montserrat text-sm tracking-widest text-white/80">
                                {service.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                            <button className="mt-10 font-montserrat text-xs tracking-[0.15em] text-primary underline underline-offset-4">
                                {t("services.see_more")}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
