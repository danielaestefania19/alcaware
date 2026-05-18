import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        "service_un6bv88",
        "template_akaha45",
        {
          name:    fields.name,
          company: fields.company,
          email:   fields.email,
          phone:   fields.phone,
          service: fields.service,
          project: fields.project,
        },
        "1JZeeL5cy6SAxc48C"
      );
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (key: keyof Fields) =>
    `w-full rounded-lg border ${errors[key] ? "border-red-500" : "border-primary"} bg-secondary/30 px-3 py-2.5 lg:py-3 font-montserrat text-xs lg:text-sm xl:text-base text-white/60 placeholder-white/30 outline-none focus:border-primary/60 transition-colors`;

  return (
    <section className="relative bg-black py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-10 xl:gap-12">
        <div className="w-full md:w-2/5 min-w-0 flex flex-col gap-2 lg:gap-3 text-left md:text-right">
          <h2
            className="font-melete text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight tracking-wide wrap-break-word"
            style={{ textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3" }}
          >
            {t("contact.title")}
          </h2>
          <p className="font-montserrat text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-white/70 leading-relaxed">
            {t("contact.description")}
          </p>
        </div>
        <div className="w-full md:w-3/5 min-w-0 rounded-2xl border border-primary bg-secondary/30 p-5 lg:p-6 xl:p-8 flex flex-col gap-3 lg:gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-xs xl:text-sm tracking-widest text-primary font-bold">{t("contact.name_label")}</label>
            <input type="text" placeholder={t("contact.name_placeholder")} value={fields.name} onChange={set("name")}
              className={inputClass("name")}
            />
            {errors.name && <p className="font-montserrat text-xs text-red-500">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-xs xl:text-sm tracking-widest text-primary font-bold">{t("contact.company_label")}</label>
            <input type="text" placeholder={t("contact.company_placeholder")} value={fields.company} onChange={set("company")}
              className={inputClass("company")}
            />
            {errors.company && <p className="font-montserrat text-xs text-red-500">{errors.company}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-montserrat text-xs xl:text-sm tracking-widest text-primary font-bold">{t("contact.email_label")}</label>
              <input type="email" placeholder={t("contact.email_placeholder")} value={fields.email} onChange={set("email")}
                className={inputClass("email")}
              />
              {errors.email && <p className="font-montserrat text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-montserrat text-xs xl:text-sm tracking-widest text-primary font-bold">{t("contact.phone_label")}</label>
              <input type="tel" placeholder={t("contact.phone_placeholder")} value={fields.phone} onChange={set("phone")}
                className={inputClass("phone")}
              />
              {errors.phone && <p className="font-montserrat text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-xs xl:text-sm tracking-widest text-primary font-bold">{t("contact.service_label")}</label>
            <input type="text" placeholder={t("contact.service_placeholder")} value={fields.service} onChange={set("service")}
              className={inputClass("service")}
            />
            {errors.service && <p className="font-montserrat text-xs text-red-500">{errors.service}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-montserrat text-xs xl:text-sm tracking-widest text-primary font-bold">{t("contact.project_label")}</label>
            <textarea rows={4} placeholder={t("contact.project_placeholder")} value={fields.project} onChange={set("project")}
              className={`${inputClass("project")} resize-none`}
            />
            {errors.project && <p className="font-montserrat text-xs text-red-500">{errors.project}</p>}
          </div>
          {status === "success" && (
            <p className="text-center font-montserrat text-sm text-primary font-bold">{t("contact.success")}</p>
          )}
          {status === "error" && (
            <p className="text-center font-montserrat text-sm text-red-500">{t("contact.error")}</p>
          )}
          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="w-full rounded-lg bg-primary py-3 lg:py-4 font-montserrat text-xs lg:text-sm xl:text-base tracking-widest text-secondary font-bold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? t("contact.sending") : t("contact.submit")}
          </button>
        </div>
      </div>
    </section>
  );
}
