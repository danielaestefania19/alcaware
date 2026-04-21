import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as FaqItem[];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-black py-24 lg:py-32 xl:py-40 2xl:py-52 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 text-white">
        <h2
          className="font-melete text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-widest text-center mb-14 lg:mb-18 xl:mb-24"
          style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
        >
          {t("faq.title")}
        </h2>

        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary rounded-xl overflow-hidden bg-black/60 transition-all duration-300 hover:bg-white/5 hover:border-primary/70 hover:shadow-[0_0_16px_0_rgba(58,224,179,0.15)]"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 lg:px-8 xl:px-10 py-5 lg:py-6 xl:py-7 text-left"
              >
                <span className="font-montserrat text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-wide text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`ml-4 shrink-0 text-white/60 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 lg:max-h-128 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 lg:px-8 xl:px-10 pb-5 lg:pb-6 xl:pb-8">
                  <p className="font-montserrat text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/70 leading-relaxed">
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
