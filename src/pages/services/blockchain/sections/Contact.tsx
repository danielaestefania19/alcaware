import { useState } from "react";
import { useTranslation } from "react-i18next";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  project: string;
};

const EMPTY: Fields = { name: "", company: "", email: "", phone: "", service: "", project: "" };

export default function Contact() {
  const { t } = useTranslation();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [key]: e.target.value }));
    setErrors(prev => ({ ...prev, [key]: "" }));
  };

  const validate = (): boolean => {
    const next: Partial<Fields> = {};
    const required = t("contact.error_required");
    if (!fields.name.trim())    next.name    = required;
    if (!fields.company.trim()) next.company = required;
    if (!fields.email.trim())   next.email   = required;
    if (!fields.phone.trim())   next.phone   = required;
    if (!fields.service.trim()) next.service = required;
    if (!fields.project.trim()) next.project = required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
  };

  const inputClass = (key: keyof Fields) =>
    `w-full rounded-lg border ${errors[key] ? "border-red-500" : "border-primary"} bg-transparent px-3 py-2.5 lg:py-3 font-montserrat text-xs lg:text-sm text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors`;

  return (
    <section className="relative bg-black py-16 lg:py-20 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 text-white flex flex-col items-center gap-10 lg:gap-14">
      <div className="flex flex-col items-center gap-4 text-center">
      <h2
        className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest text-center mb-10 lg:mb-12 xl:mb-12"
        style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
      >
          {t("blockchain.contact_title")}
        </h2>
        <p className="font-montserrat text-xs md:text-sm lg:text-base text-white/60 max-w-3xl leading-relaxed">
          {t("contact.description")}
        </p>
      </div>

      <div className="w-full max-w-5xl rounded-2xl border border-primary bg-secondary/20 p-6 lg:p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.name_label")}</label>
          <input type="text" placeholder={t("contact.name_placeholder")} value={fields.name} onChange={set("name")}
            className={inputClass("name")}
          />
          {errors.name && <p className="font-montserrat text-xs text-red-500">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.company_label")}</label>
          <input type="text" placeholder={t("contact.company_placeholder")} value={fields.company} onChange={set("company")}
            className={inputClass("company")}
          />
          {errors.company && <p className="font-montserrat text-xs text-red-500">{errors.company}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.email_label")}</label>
            <input type="email" placeholder={t("contact.email_placeholder")} value={fields.email} onChange={set("email")}
              className={inputClass("email")}
            />
            {errors.email && <p className="font-montserrat text-xs text-red-500">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.phone_label")}</label>
            <input type="tel" placeholder={t("contact.phone_placeholder")} value={fields.phone} onChange={set("phone")}
              className={inputClass("phone")}
            />
            {errors.phone && <p className="font-montserrat text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.service_label")}</label>
          <input type="text" placeholder={t("contact.service_placeholder")} value={fields.service} onChange={set("service")}
            className={inputClass("service")}
          />
          {errors.service && <p className="font-montserrat text-xs text-red-500">{errors.service}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-montserrat text-xs tracking-widest text-primary font-bold">{t("contact.project_label")}</label>
          <textarea rows={4} placeholder={t("contact.project_placeholder")} value={fields.project} onChange={set("project")}
            className={`${inputClass("project")} resize-none`}
          />
          {errors.project && <p className="font-montserrat text-xs text-red-500">{errors.project}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-primary py-3 lg:py-4 font-montserrat text-xs lg:text-sm tracking-widest text-secondary font-bold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95"
        >
          {t("contact.submit")}
        </button>
      </div>
    </section>
  );
}
