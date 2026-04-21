import TestimonialsBackground from "../../../components/ui/backgrounds/TestimonialsBackground";
import testimonioImg from "../../../assets/images/Testimonios.jpg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type TestimonialItem = { name: string; role: string; quote: string; rating: number };

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={i < rating ? "#3AE0B3" : "none"}
                    stroke="#3AE0B3"
                    strokeWidth="1.5"
                >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const { t } = useTranslation();
    const testimonials = t("testimonials.items", { returnObjects: true }) as TestimonialItem[];
    const testimonial = testimonials[active];

    return (
        <section className="relative overflow-hidden text-white py-20 lg:py-28 xl:py-36 2xl:py-44 min-h-150">
            <div className="absolute inset-0 top-40">
                <TestimonialsBackground />
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
                <h2
                    className="font-melete text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-widest mb-4"
                    style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
                >
                    {t("testimonials.title")}
                </h2>
                <p className="mt-2 font-montserrat text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-widest text-white/60">
                    {t("testimonials.subtitle")}
                </p>
                <div className="mt-12 lg:mt-16 xl:mt-20 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14 xl:gap-20">
                    <div className="shrink-0 w-44 h-52 md:w-56 md:h-60 lg:w-72 lg:h-80 xl:w-88 xl:h-96 rounded-2xl overflow-hidden border-2 border-primary shadow-[0_0_24px_rgba(58,224,179,0.35)]">
                        <img
                            src={testimonioImg}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                            <span className="font-melete text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-[0.2em]">
                                {testimonial.name}
                            </span>
                            <StarRating rating={testimonial.rating} />
                        </div>
                        <p className="mt-1 font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/50 tracking-widest">
                            {testimonial.role}
                        </p>
                        <p className="mt-6 font-montserrat text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-white/90">
                            {testimonial.quote}
                        </p>
                    </div>
                    <div className="flex md:flex-col flex-row gap-3 lg:gap-4 shrink-0">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all ${i === active ? "bg-primary scale-110" : "bg-primary/40 hover:bg-primary/70"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
