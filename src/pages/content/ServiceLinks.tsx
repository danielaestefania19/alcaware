import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { PageKey } from "../../i18n/routes";
import { useLocalePath } from "../../i18n/routes";

type ServiceItem = { title: string };
const SERVICE_INDEX: Partial<Record<PageKey, number>> = { webmobil: 0, blockchain: 1, ai: 2 };

export default function ServiceLinks({ services }: { services: PageKey[] }) {
  const { t } = useTranslation();
  const { to } = useLocalePath();
  const titles = (t("services.items", { returnObjects: true }) as ServiceItem[]).map((s) => s.title);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-montserrat text-xs tracking-widest text-white/60">{t("content.services_label")}:</span>
      {services.map((s) => (
        <Link
          key={s}
          to={to(s)}
          className="rounded-full border border-primary px-4 py-1.5 font-montserrat text-xs tracking-wide hover:bg-primary/10 transition-colors"
        >
          {titles[SERVICE_INDEX[s] ?? -1] ?? s}
        </Link>
      ))}
    </div>
  );
}
