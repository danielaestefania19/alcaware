import { useTranslation } from "react-i18next";
import productoIcon from "../../../../assets/images/Producto.png";
import calidadIcon from "../../../../assets/images/calidadIcon.png";
import entregaIcon from "../../../../assets/images/entregaIcon.png";

const CARD_CLASSES = `
  relative overflow-visible
  min-h-105 md:min-h-110 lg:min-h-130
  w-[92vw] md:w-[80vw] lg:w-[72vw]
  max-w-362.5
  border border-primary
  py-10 md:py-16
  shadow-[0_0_25px_rgba(58,224,179,0.28),0_0_60px_rgba(58,224,179,0.18)]
`;
const CARD_GRADIENT = "linear-gradient(to right, rgba(58,224,179,0.35) 0%, rgba(35,128,124,0.55) 50%, rgba(23,81,97,0.7) 75%, rgba(11,33,69,0.85) 100%)";

const ICON_BOX_CLASSES = `
  flex items-center justify-center
  w-37.5 h-37.5
  md:w-50 md:h-50
  lg:w-65 lg:h-65
  rounded-[28px] md:rounded-[32px] lg:rounded-[40px]
  border border-cyan-400/70
  bg-black
  shadow-[0_0_18px_rgba(0,255,255,0.35),0_0_36px_rgba(0,255,255,0.18)]
`;

interface CardProps {
  titleKey: string;
  subtitleKey: string;
  itemsKey: string;
  icon: string;
  iconAlt: string;
  /** "right" = card from left edge, icon right | "left" = card from right edge, icon left */
  side: "right" | "left";
}

function EntregableCard({ titleKey, subtitleKey, itemsKey, icon, iconAlt, side }: CardProps) {
  const { t } = useTranslation();
  const items = t(itemsKey, { returnObjects: true }) as string[];

  const isRight = side === "right";

  return (
    <div className={`relative w-full overflow-visible flex ${isRight ? "justify-start" : "justify-end"}`}>
      <div
        className={`
          ${CARD_CLASSES}
          ${isRight
            ? "rounded-r-[48px] md:rounded-r-[56px] lg:rounded-r-[70px] pl-8 pr-28 md:pl-10 md:pr-36 lg:pl-14 lg:pr-44"
            : "rounded-l-[48px] md:rounded-l-[56px] lg:rounded-l-[70px] pr-8 pl-36 md:pr-10 md:pl-44 lg:pr-14 lg:pl-56"
          }
        `}
        style={{ background: CARD_GRADIENT }}
      >
        <div className={`pointer-events-none absolute inset-0 ${isRight ? "rounded-r-[48px] md:rounded-r-[56px] lg:rounded-r-[70px]" : "rounded-l-[48px] md:rounded-l-[56px] lg:rounded-l-[70px]"} bg-black/10`} />

        <div className="relative z-10 max-w-190">
          <p
            className="font-melete text-[24px] md:text-[28px] lg:text-[38px] tracking-[0.2em] uppercase"
            style={{ textShadow: "0 0 2px #fff, 0 0 10px #38e0c2, 0 0 18px #38e0c2" }}
          >
            {t(titleKey)}
          </p>

          <h3 className="mt-4 md:mt-5 lg:mt-6 font-montserrat text-[18px] md:text-[20px] lg:text-[28px] font-extrabold uppercase leading-tight tracking-[0.02em] text-white/95">
            {t(subtitleKey)}
          </h3>

          <ul className="mt-6 md:mt-7 lg:mt-10 space-y-4 md:space-y-5 lg:space-y-8">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 font-montserrat text-[13px] md:text-[14px] lg:text-[18px] font-bold uppercase leading-[1.35] tracking-[0.01em] text-white/92"
              >
                <span className="mt-1.25 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Floating icon */}
        <div
          className={`
            absolute top-[58%] -translate-y-1/2 z-20
            ${isRight ? "-right-8.75 md:-right-14 lg:-right-20" : "-left-8.75 md:-left-14 lg:-left-20"}
          `}
        >
          <div className={ICON_BOX_CLASSES}>
            <img
              src={icon}
              alt={iconAlt}
              className="w-22 h-22 md:w-30 md:h-30 lg:w-42 lg:h-42 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Entregables() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 text-white">
      <div className="mb-10 md:mb-14 text-center px-4">
        <h2
          className="font-melete text-[28px] sm:text-[40px] md:text-[56px] tracking-[0.18em] md:tracking-[0.28em] uppercase"
          style={{
            textShadow: "0 0 2px #ffffff, 0 0 10px #38e0c2, 0 0 24px #38e0c2, 0 0 40px #38e0c2",
          }}
        >
          {t("webmobil.entregables.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-4xl font-montserrat text-[10px] sm:text-[11px] md:text-[13px] uppercase tracking-[0.12em] text-white/70 leading-relaxed">
          {t("webmobil.entregables.subtitle")}
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-14">
        <EntregableCard
          titleKey="webmobil.entregables.producto.title"
          subtitleKey="webmobil.entregables.producto.subtitle"
          itemsKey="webmobil.entregables.producto.items"
          icon={productoIcon}
          iconAlt="Producto"
          side="right"
        />
        <EntregableCard
          titleKey="webmobil.entregables.calidad.title"
          subtitleKey="webmobil.entregables.calidad.subtitle"
          itemsKey="webmobil.entregables.calidad.items"
          icon={calidadIcon}
          iconAlt="Calidad"
          side="left"
        />
        <EntregableCard
          titleKey="webmobil.entregables.entrega.title"
          subtitleKey="webmobil.entregables.entrega.subtitle"
          itemsKey="webmobil.entregables.entrega.items"
          icon={entregaIcon}
          iconAlt="Entrega"
          side="right"
        />
      </div>
    </section>
  );
}