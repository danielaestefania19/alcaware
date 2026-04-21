import { useTranslation } from "react-i18next";
import productoIcon from "../../../../assets/images/Producto.png";
import calidadIcon from "../../../../assets/images/calidadIcon.png";
import entregaIcon from "../../../../assets/images/entregaIcon.png";

const CARD_CLASSES = `
  relative overflow-visible
  min-h-105 md:min-h-130
  w-[92vw] md:w-[72vw]
  max-w-362.5
  border border-primary
  bg-linear-to-r from-[#113f7a] via-[#1b7087] to-[#2ca98f]
  py-10 md:py-16
  shadow-[0_0_25px_rgba(58,224,179,0.28),0_0_60px_rgba(58,224,179,0.18)]
`;

const ICON_BOX_CLASSES = `
  flex items-center justify-center
  w-37.5 h-37.5
  md:w-65 md:h-65
  rounded-[28px] md:rounded-[40px]
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
            ? "rounded-r-[48px] md:rounded-r-[70px] pl-8 pr-28 md:pl-14 md:pr-44"
            : "rounded-l-[48px] md:rounded-l-[70px] pr-8 pl-28 md:pr-14 md:pl-44"
          }
        `}
      >
        <div className={`pointer-events-none absolute inset-0 ${isRight ? "rounded-r-[48px] md:rounded-r-[70px]" : "rounded-l-[48px] md:rounded-l-[70px]"} bg-black/10`} />

        <div className="relative z-10 max-w-190">
          <p
            className="font-melete text-[24px] md:text-[38px] tracking-[0.2em] uppercase"
            style={{ textShadow: "0 0 2px #fff, 0 0 10px #38e0c2, 0 0 18px #38e0c2" }}
          >
            {t(titleKey)}
          </p>

          <h3 className="mt-6 font-montserrat text-[20px] md:text-[28px] font-extrabold uppercase leading-tight tracking-[0.02em] text-white/95">
            {t(subtitleKey)}
          </h3>

          <ul className="mt-8 md:mt-10 space-y-6 md:space-y-8">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 font-montserrat text-[14px] md:text-[18px] font-bold uppercase leading-[1.35] tracking-[0.01em] text-white/92"
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
            ${isRight ? "-right-8.75 md:-right-20" : "-left-8.75 md:-left-20"}
          `}
        >
          <div className={ICON_BOX_CLASSES}>
            <img
              src={icon}
              alt={iconAlt}
              className="w-18 h-18 md:w-33.75 md:h-33.75 object-contain"
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
      {/* Header */}
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

      {/* Cards */}
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