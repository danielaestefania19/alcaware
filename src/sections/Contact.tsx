import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-black py-16 md:py-24 px-6 md:px-16 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">

        {/* Left — copy */}
        <div className="w-full md:w-2/5 min-w-0 flex flex-col gap-4 text-left md:text-right">
          <h2
            className="font-melete text-2xl md:text-3xl leading-tight tracking-wide wrap-break-word"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
          >
            {t("contact.title")}
          </h2>
          <p className="font-montserrat text-base md:text-lg text-white/70 leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        {/* Right — form card */}
        <div className="w-full md:w-3/5 min-w-0 rounded-2xl border border-primary bg-secondary/30 p-8 flex flex-col gap-6">

          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.name_label")}</label>
            <input
              type="text"
              placeholder={t("contact.name_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.company_label")}</label>
            <input
              type="text"
              placeholder={t("contact.company_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Correo + Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.email_label")}</label>
              <input
                type="email"
                placeholder={t("contact.email_placeholder")}
                className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.phone_label")}</label>
              <input
                type="tel"
                placeholder={t("contact.phone_placeholder")}
                className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
              />
            </div>
          </div>

          {/* Tipo de servicio */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.service_label")}</label>
            <input
              type="text"
              placeholder={t("contact.service_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Proyecto */}
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.project_label")}</label>
            <textarea
              rows={5}
              placeholder={t("contact.project_placeholder")}
              className="w-full rounded-lg border border-primary bg-secondary/30 px-4 py-3 font-montserrat text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button className="w-full rounded-lg bg-primary py-4 font-montserrat text-sm tracking-widest text-secondary font-bold hover:bg-primary/80 transition-colors">
            {t("contact.submit")}
          </button>

        </div>
      </div>
    </section>
  );
}
