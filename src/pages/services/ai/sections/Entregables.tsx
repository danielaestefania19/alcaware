import { useTranslation } from "react-i18next";
import productoIcon from "../../../../assets/images/ia/product.webp";
import calidadIcon from "../../../../assets/images/ia/quality.webp";
import entregaIcon from "../../../../assets/images/ia/service.webp";

interface CardProps {
  titleKey: string;
  subtitleKey: string;
  itemsKey: string;
  icon: string;
  iconAlt: string;
}

function EntregableCard({ titleKey, subtitleKey, itemsKey, icon, iconAlt }: CardProps) {
  const { t } = useTranslation();
  const items = t(itemsKey, { returnObjects: true }) as string[];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 md:px-16 lg:px-24">
      <div className="flex flex-col gap-6 py-10 md:hidden">
        <img
          src={icon}
          alt={iconAlt}
          className="w-44 h-44 object-contain drop-shadow-[0_0_24px_rgba(56,224,194,0.4)] mx-auto"
        />
        <TextContent titleKey={titleKey} subtitleKey={subtitleKey} items={items} />
      </div>
      <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16 py-14 lg:py-16 xl:py-18">
        <div className="shrink-0 w-56 lg:w-64 xl:w-72 flex items-center justify-center">
          <img
            src={icon}
            alt={iconAlt}
            className="w-full h-auto object-contain drop-shadow-[0_0_24px_rgba(56,224,194,0.4)] scale-125 lg:scale-150"
          />
        </div>
        <div className="w-96 lg:w-md xl:w-lg shrink-0">
          <TextContent titleKey={titleKey} subtitleKey={subtitleKey} items={items} />
        </div>
      </div>
    </div>
  );
}

interface TextContentProps {
  titleKey: string;
  subtitleKey: string;
  items: string[];
  centered?: boolean;
}

function TextContent({ titleKey, subtitleKey, items, centered }: TextContentProps) {
  const { t } = useTranslation();
  const alignClass = centered ? "text-center" : "";

  return (
    <div className={`w-full ${alignClass}`}>
      <p
        className="
          font-melete uppercase text-white leading-none
          text-[26px]
          sm:text-[32px]
          md:text-[34px]
          lg:text-[40px]
          xl:text-[46px]
          tracking-[0.18em]
          mb-3 md:mb-4
        "
        style={{ textShadow: "0 0 2px #ffffff, 0 0 8px #38e0c2, 0 0 18px #38e0c2" }}
      >
        {t(titleKey)}
      </p>

      <h3
        className="
          font-montserrat font-extrabold uppercase text-white leading-tight tracking-[0.04em]
          text-[14px]
          sm:text-[16px]
          md:text-[16px]
          lg:text-[18px]
          xl:text-[20px]
          mb-4 md:mb-6
        "
      >
        {t(subtitleKey)}
      </h3>

      <ul className="space-y-2.5 md:space-y-3 lg:space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className={`
              font-montserrat font-semibold uppercase text-white/90 leading-snug tracking-[0.03em]
              text-[13px]
              sm:text-[14px]
              md:text-[13px]
              lg:text-[14px]
              xl:text-[16px]
              ${centered ? "justify-center" : ""}
              flex items-start gap-3
            `}
          >
            <span className="mt-0.5 shrink-0">•</span>
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
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0a3d30 20%, #072b22 50%, #0a3d30 80%, #000000 100%)",
      }}
    >
      <div className="px-4 md:px-12 lg:px-20 xl:px-32 2xl:px-40 pt-14 pb-6 sm:pt-20 md:pt-20">
        <h2
          className="font-melete text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-normal md:tracking-wider lg:tracking-widest mb-4 lg:mb-6 text-center"
          style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
        >
          {t("ai.entregables.title")}
        </h2>
        <p className="font-montserrat text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/70 max-w-5xl mx-auto leading-relaxed text-center">
          {t("ai.entregables.subtitle")}
        </p>
      </div>
      <div className="flex flex-col">
        <EntregableCard
          titleKey="ai.entregables.producto.title"
          subtitleKey="ai.entregables.producto.subtitle"
          itemsKey="ai.entregables.producto.items"
          icon={productoIcon}
          iconAlt="Producto"
        />
        <EntregableCard
          titleKey="ai.entregables.calidad.title"
          subtitleKey="ai.entregables.calidad.subtitle"
          itemsKey="ai.entregables.calidad.items"
          icon={calidadIcon}
          iconAlt="Calidad"
        />
        <EntregableCard
          titleKey="ai.entregables.entrega.title"
          subtitleKey="ai.entregables.entrega.subtitle"
          itemsKey="ai.entregables.entrega.items"
          icon={entregaIcon}
          iconAlt="Entrega"
        />
      </div>
    </section>
  );
}
