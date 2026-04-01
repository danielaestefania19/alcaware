import Logo from "/src/assets/icons/Logo.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  const options = [
    { code: "ES" as const, label: "Español", flag: "🇪🇸" },
    { code: "EN" as const, label: "English", flag: "🇺🇸" },
  ];

  const current = options.find((o) => o.code === lang)!;

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-4 text-white">
        <img src={Logo} alt="Alcaware" className="h-8" />
        <nav className="flex gap-8 font-montserrat text-sm">
          <a className="text-primary">INICIO</a>
          <a>SERVICIOS</a>
          <a>PROCESO</a>
          <a>NOSOTROS</a>
        </nav>

        {/* Idioma */}
        <div className="relative text-sm font-montserrat">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>{current.flag}</span>
            <span>{current.code}</span>
            <span className="text-xs text-white/50">{open ? "▲" : "▼"}</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              {options.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => { setLang(opt.code); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors ${lang === opt.code ? "text-primary" : "text-white/80"}`}
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
