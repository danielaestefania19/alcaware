import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="bg-black py-24 px-6 text-white border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2
          className="font-melete text-[26px] md:text-[36px] tracking-[0.15em] leading-snug"
          style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
        >
          {t("ai.cta.title")}
        </h2>
        <p className="font-montserrat text-[13px] tracking-[0.15em] text-white/60 max-w-md leading-relaxed">
          {t("ai.cta.subtitle")}
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-2 rounded-full bg-primary px-10 py-4 text-sm font-montserrat text-black font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(58,224,179,0.5)] hover:-translate-y-0.5 active:scale-95"
        >
          {t("ai.cta.button")}
        </button>
      </div>
    </section>
  );
}
