import customers1 from "../../../assets/images/customers1.png";
import customers2 from "../../../assets/images/customers2.png";
import customers3 from "../../../assets/images/customers3.png";
import SuccessStoriesBackground from "../../../components/ui/backgrounds/SuccessStoriesBackground";
import { useTranslation } from "react-i18next";

type Story = { paragraphs: string[] };

const storyMeta = [
  { name: "STRIPE",       image: customers1, imageAlt: "Stripe dashboard",     reverse: false, textRight: true },
  { name: "UNISWAP LABS", image: customers2, imageAlt: "Uniswap app",          reverse: true,  textRight: false },
  { name: "IBM WATSON",   image: customers3, imageAlt: "IBM Watson platform",  reverse: false, textRight: true },
];

export default function SuccessStories() {
  const { t } = useTranslation();
  const stories = t("success.stories", { returnObjects: true }) as Story[];

  return (
    <section className="relative py-16 lg:py-20 xl:py-24 2xl:py-32 overflow-hidden text-white">
      <SuccessStoriesBackground />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-10/12 mx-auto px-6">
        <div className="text-center mb-12 lg:mb-14 xl:mb-16">
          <h2 className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest mb-4 lg:mb-6"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}>
            {t("success.title")}
          </h2>
          <p className="font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/70 max-w-5xl mx-auto leading-relaxed">
            {t("success.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-12 xl:gap-16">
          {storyMeta.map((meta, index) => {
            const story = stories[index];
            return (
              <div
                key={meta.name}
                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-10 xl:gap-12 ${meta.reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                  <img
                    src={meta.image}
                    alt={meta.imageAlt}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className={`w-full md:w-1/2 flex flex-col gap-3 lg:gap-4 ${meta.textRight ? "text-right" : ""}`}>
                  <h3 className="font-melete text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-[0.2em] text-white">
                    {meta.name}
                  </h3>
                  {story?.paragraphs.map((p, i) => (
                    <p key={i} className="font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/75 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
