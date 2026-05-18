import { useTranslation } from "react-i18next";
import productoIcon from "../../../../assets/images/blockchain/product.png";
import calidadIcon from "../../../../assets/images/blockchain/quality.png";
import entregaIcon from "../../../../assets/images/blockchain/service.png";

const CARD_GRADIENT_LEFT =
  "linear-gradient(90deg, #19a884 0%, #137866 28%, #0d4e53 50%, #000000 70%, #000000 100%)";

const CARD_GRADIENT_RIGHT =
  "linear-gradient(90deg, #000000 0%, #000000 30%, #0d4e53 50%, #137866 72%, #19a884 100%)";

interface CardProps {
  titleKey: string;
  subtitleKey: string;
  itemsKey: string;
  icon: string;
  iconAlt: string;
  iconSide: "left" | "right";
}

function EntregableCard({
  titleKey,
  subtitleKey,
  itemsKey,
  icon,
  iconAlt,
  iconSide,
}: CardProps) {
  const { t } = useTranslation();

  const items = t(itemsKey, { returnObjects: true }) as string[];
  const isIconLeft = iconSide === "left";

  return (
    <article
      className="relative w-full overflow-hidden"
      style={{
        background: isIconLeft ? CARD_GRADIENT_LEFT : CARD_GRADIENT_RIGHT,
      }}
    >
      {/* Mobile: ícono centrado arriba */}
      <div className="flex justify-center pt-10 pb-2 md:hidden">
        <img
          src={icon}
          alt={iconAlt}
          className="w-44 h-44 object-contain opacity-90"
        />
      </div>

      {/* Desktop: ícono bleed lateral */}
      <img
        src={icon}
        alt={iconAlt}
        className={`
          pointer-events-none absolute top-1/2 -translate-y-1/2 object-contain
          hidden md:block
          md:w-120
          lg:w-150
          xl:w-180
          ${isIconLeft ? "left-0 -translate-x-[33%]" : "right-0 translate-x-[33%]"}
        `}
      />

      {/* Content */}
      <div
        className={`
          relative z-10 mx-auto max-w-400
          md:min-h-88 lg:min-h-100 xl:min-h-112
          flex md:h-full
          ${isIconLeft ? "md:justify-end" : "md:justify-start"}
        `}
      >
        <div
          className={`
            w-full px-6 pb-10 pt-2
            md:w-[68%] md:flex md:items-center
            md:py-12 lg:py-14 xl:py-16
            ${isIconLeft
              ? "md:pr-6 lg:pr-12 xl:pr-20"
              : "md:pl-6 lg:pl-12 xl:pl-20"
            }
          `}
        >
          <TextContent
            titleKey={titleKey}
            subtitleKey={subtitleKey}
            items={items}
          />
        </div>
      </div>
    </article>
  );
}

interface TextContentProps {
  titleKey: string;
  subtitleKey: string;
  items: string[];
}

function TextContent({ titleKey, subtitleKey, items }: TextContentProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <p
        className="
          font-melete uppercase text-white
          text-[28px]
          sm:text-[36px]
          md:text-[38px]
          lg:text-[44px]
          xl:text-[52px]
          tracking-[0.18em]
          sm:tracking-[0.22em]
          leading-none
        "
        style={{
          textShadow:
            "0 0 2px #ffffff, 0 0 8px #38e0c2, 0 0 18px #38e0c2",
        }}
      >
        {t(titleKey)}
      </p>

      <h3
        className="
          mt-3 sm:mt-4 md:mt-5
          font-montserrat text-white
          text-[16px]
          sm:text-[18px]
          md:text-[19px]
          lg:text-[22px]
          xl:text-[26px]
          font-extrabold uppercase leading-tight tracking-[0.04em]
        "
      >
        {t(subtitleKey)}
      </h3>

      <ul
        className="
          mt-5 sm:mt-6 md:mt-7 lg:mt-8
          space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5
        "
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="
              flex items-start gap-3
              font-montserrat text-white/90
              text-[13px]
              sm:text-[14px]
              md:text-[14px]
              lg:text-[16px]
              xl:text-[18px]
              font-semibold uppercase leading-snug tracking-[0.03em]
            "
          >
            <span className="mt-0.5 shrink-0 text-white/90">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Entregables() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Encabezado */}
      <div className="relative px-4 pt-14 pb-10 text-center sm:pt-20 sm:pb-14 md:pt-20 md:pb-14">
        <h2
          className="
            font-melete uppercase text-white
            text-[30px]
            sm:text-[46px]
            md:text-[56px]
            lg:text-[64px]
            tracking-[0.24em]
            sm:tracking-[0.3em]
            leading-none
          "
          style={{
            textShadow:
              "0 0 2px #ffffff, 0 0 10px #38e0c2, 0 0 24px #38e0c2, 0 0 40px #38e0c2",
          }}
        >
          {t("blockchain.entregables.title")}
        </h2>

        <p
          className="
            mx-auto mt-4 max-w-215
            font-montserrat text-white/60
            text-[9px]
            sm:text-[10px]
            md:text-[13px]
            uppercase tracking-[0.12em] leading-relaxed
          "
        >
          {t("blockchain.entregables.subtitle")}
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col">
        <EntregableCard
          titleKey="blockchain.entregables.producto.title"
          subtitleKey="blockchain.entregables.producto.subtitle"
          itemsKey="blockchain.entregables.producto.items"
          icon={productoIcon}
          iconAlt="Producto"
          iconSide="left"
        />

        <div className="h-10 bg-black sm:h-14 md:h-20 lg:h-24" />

        <EntregableCard
          titleKey="blockchain.entregables.calidad.title"
          subtitleKey="blockchain.entregables.calidad.subtitle"
          itemsKey="blockchain.entregables.calidad.items"
          icon={calidadIcon}
          iconAlt="Calidad"
          iconSide="right"
        />

        <div className="h-10 bg-black sm:h-14 md:h-20 lg:h-24" />

        <EntregableCard
          titleKey="blockchain.entregables.entrega.title"
          subtitleKey="blockchain.entregables.entrega.subtitle"
          itemsKey="blockchain.entregables.entrega.items"
          icon={entregaIcon}
          iconAlt="Entrega"
          iconSide="left"
        />
      </div>
    </section>
  );
}
