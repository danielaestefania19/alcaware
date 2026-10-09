import { Link } from "react-router-dom";

type Props = { to: string; eyebrow: string; title: string; description: string; cta: string; image?: { avif: string; webp: string } };

export default function ArticleCard({ to, eyebrow, title, description, cta, image }: Props) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-xl border border-primary/60 bg-black/60 transition-all duration-300 hover:border-primary hover:bg-white/5 hover:shadow-[0_0_16px_0_rgba(58,224,179,0.15)]"
    >
      {image && (
        <picture>
          <source srcSet={image.avif} type="image/avif" />
          <img src={image.webp} alt="" loading="lazy" className="h-44 w-full object-cover" />
        </picture>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 lg:p-6">
        <p className="font-montserrat text-[11px] lg:text-xs tracking-[0.2em] text-primary">{eyebrow}</p>
        <h3 className="font-montserrat font-bold text-base lg:text-lg text-white leading-snug">{title}</h3>
        <p className="font-montserrat text-sm text-white/65 leading-relaxed">{description}</p>
        <span className="mt-auto pt-2 font-montserrat font-bold text-xs tracking-widest text-white group-hover:text-primary transition-colors">
          {cta}
        </span>
      </div>
    </Link>
  );
}
