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
        <section className="relative overflow-hidden text-white py-14 lg:py-18 xl:py-22 2xl:py-28 min-h-150">
            <div className="absolute inset-0 top-40">
                <TestimonialsBackground />
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72">
                <h2
                    className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest mb-3"
                    style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
                >
                    {t("testimonials.title")}
                </h2>
                <p className="mt-2 font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-widest text-white/60">
                    {t("testimonials.subtitle")}
                </p>
                <div className="mt-8 lg:mt-10 xl:mt-14 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 xl:gap-14">
                    <div className="shrink-0 w-36 h-44 md:w-44 md:h-52 lg:w-56 lg:h-64 xl:w-68 xl:h-76 rounded-2xl overflow-hidden border-2 border-primary shadow-[0_0_24px_rgba(58,224,179,0.35)]">
                        <img
                            src={testimonioImg}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                            <span className="font-melete text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0.2em]">
                                {testimonial.name}
                            </span>
                            <StarRating rating={testimonial.rating} />
                        </div>
                        <p className="mt-1 font-montserrat text-xs lg:text-sm xl:text-base 2xl:text-lg text-white/50 tracking-widest">
                            {testimonial.role}
                        </p>
                        <p className="mt-4 font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl leading-relaxed text-white/90">
                            {testimonial.quote}
                        </p>
                    </div>
                    <div className="flex md:flex-col flex-row gap-3 shrink-0">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all ${i === active ? "bg-primary scale-110" : "bg-primary/40 hover:bg-primary/70"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
