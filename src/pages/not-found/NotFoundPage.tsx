import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocalePath } from "../../i18n/routes";

export default function NotFoundPage() {
  const { t } = useTranslation();
  const { to } = useLocalePath();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center text-white px-6 py-32">
      <span className="font-montserrat font-bold text-6xl md:text-8xl text-primary">
        {t("not_found.code")}
      </span>
      <h1 className="mt-4 font-montserrat font-semibold text-xl md:text-2xl tracking-wide">
        {t("not_found.title")}
      </h1>
      <p className="mt-2 text-sm md:text-base text-white/60 max-w-md">
        {t("not_found.subtitle")}
      </p>
      <Link
        to={to("home")}
        className="mt-8 inline-block border border-white/30 rounded-full px-8 py-3 text-xs md:text-sm font-montserrat tracking-wide transition-colors hover:bg-white hover:text-black"
      >
        {t("not_found.cta_home")}
      </Link>
    </main>
  );
}
