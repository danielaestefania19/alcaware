import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-black py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-52 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 lg:gap-16 xl:gap-20">
        <div className="w-full md:w-2/5 min-w-0 flex flex-col gap-4 lg:gap-6 text-left md:text-right">
          <h2
            className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight tracking-wide wrap-break-word"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
          >
            {t("contact.title")}
          </h2>
          <p className="font-montserrat text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/70 leading-relaxed">
            {t("contact.description")}
          </p>
        </div>
        <div className="w-full md:w-3/5 min-w-0 rounded-2xl border border-primary bg-secondary/30 p-8 lg:p-10 xl:p-12 flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-primary font-bold">{t("contact.name_label")}</label>
            <input
              type="text"
              placeholder={t("contact.name_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 lg:py-4 font-montserrat text-sm lg:text-base xl:text-lg text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-primary font-bold">{t("contact.company_label")}</label>
            <input
              type="text"
              placeholder={t("contact.company_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 lg:py-4 font-montserrat text-sm lg:text-base xl:text-lg text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-primary font-bold">{t("contact.email_label")}</label>
              <input
                type="email"
                placeholder={t("contact.email_placeholder")}
                className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 lg:py-4 font-montserrat text-sm lg:text-base xl:text-lg text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-primary font-bold">{t("contact.phone_label")}</label>
              <input
                type="tel"
                placeholder={t("contact.phone_placeholder")}
                className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 lg:py-4 font-montserrat text-sm lg:text-base xl:text-lg text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-primary font-bold">{t("contact.service_label")}</label>
            <input
              type="text"
              placeholder={t("contact.service_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 lg:py-4 font-montserrat text-sm lg:text-base xl:text-lg text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-primary font-bold">{t("contact.project_label")}</label>
            <textarea
              rows={5}
              placeholder={t("contact.project_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 lg:py-4 font-montserrat text-sm lg:text-base xl:text-lg text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </div>
          <button className="w-full rounded-lg bg-primary py-4 lg:py-5 font-montserrat text-sm lg:text-base xl:text-lg tracking-widest text-secondary font-bold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95">
            {t("contact.submit")}
          </button>
        </div>
      </div>
    </section>
  );
}
