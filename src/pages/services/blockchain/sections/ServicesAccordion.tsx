import { useState } from "react";
import { useTranslation } from "react-i18next";
import tokenizacion from "../../../../assets/images/blockchain/tokenizacion.webp";
import smart from "../../../../assets/images/blockchain/smart.webp"
import soluciones from "../../../../assets/images/blockchain/soluciones.webp"
import automatizacion from "../../../../assets/images/blockchain/automatizacion.webp"

interface AccordionItem {
  title: string;
  paragraphs: string[];
}

const ITEM_IMAGES: Record<number, string> = {
  1: soluciones,
  2: tokenizacion,
  3: smart,
  4: automatizacion,
};

export default function ServicesAccordion() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t("blockchain.services_accordion.items", {
    returnObjects: true,
  }) as AccordionItem[];

  const ctaLabel = t("blockchain.services_accordion.cta");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicios" className="bg-black text-white w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const image = ITEM_IMAGES[index + 1];
        return (
          <div key={index} className="border-t border-white/10 last:border-b">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-center px-6 md:px-16 py-8 md:py-10 text-center group transition-colors duration-200 hover:bg-white/2"
            >
              <span className={"font-melete text-[18px] md:text-[26px] lg:text-[32px] tracking-widest md:tracking-[0.28em] transition-colors duration-200 group-hover:text-primary"}>
                {item.title}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-300 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-12 md:pb-16">
                {image ? (
                  <div className={`flex flex-col md:items-stretch ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className={`w-full md:w-5/12 lg:w-4/12 shrink-0 h-64 md:h-80 lg:h-96 overflow-hidden border-2 border-primary rounded-t-4xl ${index % 2 === 0 ? "md:rounded-t-none md:rounded-l-4xl md:border-r-0" : "md:rounded-t-none md:rounded-r-4xl md:border-l-0"}`}>
                      <img
                        src={image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-4 md:gap-5 lg:gap-6 px-6 md:px-16 lg:px-20 py-8 md:py-6 lg:py-0">
                      {item.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="font-montserrat text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-white/70 leading-relaxed tracking-[0.05em]"
                        >
                          {paragraph}
                        </p>
                      ))}
                      <button
                        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                        className="mt-2 self-start font-montserrat text-[13px] md:text-[14px] lg:text-[15px] tracking-[0.15em] text-primary underline underline-offset-4 hover:text-white transition-colors duration-200"
                      >
                        {ctaLabel}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 max-w-2xl">
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="font-montserrat text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-white/70 leading-relaxed tracking-[0.05em]"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <button
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                      className="mt-4 self-start font-montserrat text-[13px] md:text-[14px] lg:text-[15px] tracking-[0.15em] text-primary underline underline-offset-4 hover:text-white transition-colors duration-200"
                    >
                      {ctaLabel}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
