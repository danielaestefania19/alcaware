import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();
  const faqs = t("webmobil.faq.items", { returnObjects: true }) as FaqItem[];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-black py-16 lg:py-20 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 text-white">
        <h2
          className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest text-center mb-10 lg:mb-12 xl:mb-16"
          style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
        >
          {t("webmobil.faq.title")}
        </h2>

        <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary rounded-xl overflow-hidden bg-black/60 transition-all duration-300 hover:bg-white/5 hover:border-primary/70 hover:shadow-[0_0_16px_0_rgba(58,224,179,0.15)]"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 lg:px-6 xl:px-8 py-4 lg:py-5 xl:py-6 text-left"
              >
                <span className="font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-wide text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`ml-4 shrink-0 text-white/60 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  size={16}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 lg:max-h-128 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-5 lg:px-6 xl:px-8 pb-4 lg:pb-5 xl:pb-6">
                  <p className="font-montserrat text-xs lg:text-sm xl:text-base 2xl:text-lg text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
