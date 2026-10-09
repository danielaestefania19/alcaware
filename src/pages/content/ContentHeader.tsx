import type { ReactNode } from "react";

type Props = { label: ReactNode; title: string; subtitle?: string; display?: boolean };

// display: título corto con la tipografía de marca; si no, títulos largos en Montserrat para que se lean bien.
export default function ContentHeader({ label, title, subtitle, display = false }: Props) {
  return (
    <header className="flex flex-col gap-4 lg:gap-5">
      <p className="font-montserrat text-xs lg:text-sm tracking-[0.25em] text-primary">{label}</p>
      <h1
        className={
          display
            ? "font-melete text-xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider leading-snug text-white"
            : "font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-white"
        }
        style={{ textShadow: display ? "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" : "0 0 24px rgba(58,224,179,0.35)" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="font-montserrat text-sm lg:text-base xl:text-lg text-white/70 leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
}
