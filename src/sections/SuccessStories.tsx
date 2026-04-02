import customers1 from "../assets/icons/customers1.png";
import customers2 from "../assets/icons/customers2.png";
import customers3 from "../assets/icons/customers3.png";
import SuccessStoriesUnicornBg from "../components/ui/SuccessStoriesUnicornBg";
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
    <section className="relative py-28 overflow-hidden text-white">
      <SuccessStoriesUnicornBg />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-10/12 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-melete text-3xl md:text-4xl tracking-widest text-center mb-4"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}>
            {t("success.title")}
          </h2>
          <p className="font-montserrat text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            {t("success.subtitle")}
          </p>
        </div>

        {/* Stories */}
        <div className="flex flex-col gap-16">
          {storyMeta.map((meta, index) => {
            const story = stories[index];
            return (
              <div
                key={meta.name}
                className={`flex flex-col md:flex-row items-center gap-12 ${meta.reverse ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 shrink-0">
                  <img
                    src={meta.image}
                    alt={meta.imageAlt}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>

                {/* Text */}
                <div className={`w-full md:w-1/2 flex flex-col gap-5 ${meta.textRight ? "text-right" : ""}`}>
                  <h3 className="font-melete text-3xl tracking-[0.2em] text-white">
                    {meta.name}
                  </h3>
                  {story?.paragraphs.map((p, i) => (
                    <p key={i} className="font-montserrat text-lg text-white/75 leading-relaxed">
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
