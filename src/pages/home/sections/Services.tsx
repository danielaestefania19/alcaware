import webmovilAvif from "../../../assets/images/home/webmovil.avif";
import webmovilWebp from "../../../assets/images/home/webmovil.webp";
import blockchainAvif from "../../../assets/images/home/blockchain.avif";
import blockchainWebp from "../../../assets/images/home/blockchain.webp";
import aiAvif from "../../../assets/images/home/ai.avif";
import aiWebp from "../../../assets/images/home/ai.webp";
import BgServicesAvif from "../../../assets/images/home/BgServices.avif";
import BgServicesWebp from "../../../assets/images/home/BgServices.webp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLocalePath, type PageKey } from "../../../i18n/routes";

const images = [
    { avif: webmovilAvif, webp: webmovilWebp },
    { avif: blockchainAvif, webp: blockchainWebp },
    { avif: aiAvif, webp: aiWebp },
];
const reverseFlags = [false, true, false];
const routePages: PageKey[] = ["webmobil", "blockchain", "ai"];

type ServiceItem = {
    title: string;
    imageAlt: string;
    items: string[];
};

export default function Services() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { to } = useLocalePath();
    const services = t("services.items", { returnObjects: true }) as ServiceItem[];

    return (
        <section
            id="servicios"
            className="relative py-16 lg:py-20 xl:py-24 2xl:py-32 text-white overflow-hidden"
            style={{
                backgroundImage: `image-set(url(${BgServicesAvif}) type("image/avif"), url(${BgServicesWebp}) type("image/webp"))`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 flex flex-col gap-10 lg:gap-14 xl:gap-20">
                {services.map((service, index) => (
                    <div
                        key={service.title}
                        className={`flex flex-col md:flex-row items-center gap-6 lg:gap-10 xl:gap-14 ${
                            reverseFlags[index] ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                            <picture>
                                <source srcSet={images[index].avif} type="image/avif" />
                                <source srcSet={images[index].webp} type="image/webp" />
                                <img
                                    src={images[index].webp}
                                    alt={service.imageAlt}
                                    className="w-full h-auto object-cover"
                                />
                            </picture>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="font-melete text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0.2em] mb-4 lg:mb-6 xl:mb-8">
                                {service.title}
                            </h3>
                            <ul className="space-y-2 lg:space-y-3 xl:space-y-4 font-montserrat text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-widest text-white/80">
                                {service.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                            <button
                                onClick={() => { navigate(to(routePages[index])); window.scrollTo(0, 0); }}
                                className="mt-6 lg:mt-8 xl:mt-10 font-montserrat text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-[0.15em] text-primary underline underline-offset-4 transition-all duration-300 hover:text-primary/70 hover:underline-offset-8 active:scale-95"
                            >
                                {t("services.see_more")}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
