import Logo from "/src/assets/icons/Logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const options = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const currentLang = i18n.language;
  const current = options.find((o) => o.code === currentLang) ?? options[0];

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-4 text-white">
        <img src={Logo} alt="Alcaware" className="h-8" />
        <nav className="flex gap-8 font-montserrat text-sm">
          <a className="text-primary">{t("navbar.home")}</a>
          <a>{t("navbar.services")}</a>
          <a>{t("navbar.process")}</a>
          <a>{t("navbar.about")}</a>
        </nav>

        {/* Idioma */}
        <div className="relative text-sm font-montserrat">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>{current.flag}</span>
            <span>{current.code.toUpperCase()}</span>
            <span className="text-xs text-white/50">{open ? "▲" : "▼"}</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              {options.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => handleLangChange(opt.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors ${currentLang === opt.code ? "text-primary" : "text-white/80"}`}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-px bg-white/20" />
    </header>
  );
}
