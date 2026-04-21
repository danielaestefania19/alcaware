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
    <section className="relative bg-black py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-melete text-3xl md:text-4xl tracking-widest text-center mb-14"
          style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
        >
          {t("webmobil.faq.title")}
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary rounded-xl overflow-hidden bg-black/60 transition-all duration-300 hover:bg-white/5 hover:border-primary/70 hover:shadow-[0_0_16px_0_rgba(58,224,179,0.15)]"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-montserrat text-lg tracking-wide text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`ml-4 shrink-0 text-white/60 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-5">
                  <p className="font-montserrat text-medium text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
