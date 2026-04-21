import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import plataforma from "../../../../assets/images/plataforma.jpg";
import apis from "../../../../assets/images/apis.jpg";
import webapp from "../../../../assets/images/webapp.jpg";
import movil from "../../../../assets/images/movil.jpg";

interface AccordionItem {
  title: string;
  paragraphs: string[];
}

const ITEM_IMAGES: Record<number, string> = {
  1: webapp,
  2: plataforma,
  3: movil,
  4: apis,
};

export default function ServicesAccordion() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t("webmobil.services_accordion.items", {
    returnObjects: true,
  }) as AccordionItem[];

  const ctaLabel = t("webmobil.services_accordion.cta");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const image = ITEM_IMAGES[index + 1];
        return (
          <div key={index} className="border-t border-white/10 last:border-b">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-center px-6 md:px-16 py-8 md:py-10 text-center group transition-colors duration-200 hover:bg-white/2"
            >
              {!(isOpen && image) && (
                <span className="font-melete text-[22px] md:text-[32px] tracking-[0.2em] md:tracking-[0.28em] transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </span>
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-12 md:pb-16">
                {image ? (
                  <div className={`flex flex-col md:items-stretch ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <img
                      src={image}
                      alt={item.title}
                      className={`w-full md:w-3/12 shrink-0 object-cover border-2 border-primary rounded-t-4xl ${index % 2 === 0 ? "md:rounded-t-none md:rounded-l-4xl md:border-r-0" : "md:rounded-t-none md:rounded-r-4xl md:border-l-0"}`}
                    />
                    <div className="flex flex-col justify-center gap-6 px-6 md:px-12 md:pr-16 py-10 md:py-0">
                      <h3 className="font-melete text-[22px] md:text-[40px] text-white mb-2">
                        {item.title}
                      </h3>
                      {item.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="font-montserrat text-[24px] md:text-[22px] text-white/70 leading-relaxed tracking-[0.05em]"
                        >
                          {paragraph}
                        </p>
                      ))}
                      <button
                        onClick={() => navigate("/")}
                        className="mt-4 self-start font-montserrat text-[20px] tracking-[0.15em] text-primary underline underline-offset-4 hover:text-white transition-colors duration-200"
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
                        className="font-montserrat text-[13px] md:text-[14px] text-white/70 leading-relaxed tracking-[0.05em]"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <button
                      onClick={() => navigate("/")}
                      className="mt-4 self-start font-montserrat text-[13px] tracking-[0.15em] text-primary underline underline-offset-4 hover:text-white transition-colors duration-200"
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
