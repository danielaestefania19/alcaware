import Logo from "../../assets/images/logos/Logo.png";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { pathFor, switchLangPath, useLocalePath, type Lang, type PageKey } from "../../i18n/routes";

const servicePageMap: Record<number, PageKey> = {
  0: "webmobil",
  1: "blockchain",
  2: "ai",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const { t } = useTranslation();
  const { lang, to } = useLocalePath();
  const navigate = useNavigate();
  const location = useLocation();

  const servicesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  type ServiceItem = { title: string };
  const services = (t("services.items", { returnObjects: true }) as ServiceItem[]).map((s) => s.title);

  const options = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const currentLang = lang;
  const current = options.find((o) => o.code === currentLang) ?? options[0];
  const isHome = location.pathname === to("home");
  const isNosotros = location.pathname === to("nosotros");

  const handleLangChange = (code: string) => {
    navigate(switchLangPath(location.pathname, code as Lang) + location.hash);
    setOpen(false);
  };

  const goTo = (page: PageKey) => {
    navigate(pathFor(page, lang));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-72 py-4 lg:py-5 xl:py-6 text-white">
        <img src={Logo} alt="Alcaware" className="h-5 lg:h-6 xl:h-7 cursor-pointer" onClick={() => goTo("home")} />
        <nav className="hidden md:flex gap-6 lg:gap-8 xl:gap-9 font-montserrat text-xs lg:text-xs xl:text-sm 2xl:text-base">
          <Link
            to={to("home")}
            className={`cursor-pointer transition-colors hover:text-primary ${isHome ? "text-primary" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("navbar.home")}
          </Link>
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
            >
              {t("navbar.services")}
              <ChevronDown className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 lg:w-64 xl:w-72 bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                {services.map((s, i) => (
                  <button
                    key={s}
                    onClick={() => {
                      setServicesOpen(false);
                      if (servicePageMap[i]) goTo(servicePageMap[i]);
                    }}
                    className={`w-full text-left px-4 py-3 lg:py-4 hover:bg-white/10 hover:text-primary transition-colors text-xs lg:text-sm xl:text-base tracking-wide ${servicePageMap[i] ? "text-white/80" : "text-white/40 cursor-default"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            to={to("nosotros")}
            className={`cursor-pointer transition-colors hover:text-primary ${isNosotros ? "text-primary" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("navbar.about")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative text-xs lg:text-xs xl:text-sm 2xl:text-base font-montserrat" ref={langRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>{current.flag}</span>
              <span>{current.code.toUpperCase()}</span>
              <ChevronDown className={`text-white/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`} size={14} />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-36 lg:w-40 xl:w-44 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                {options.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => handleLangChange(opt.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 lg:py-3 hover:bg-white/10 transition-colors text-sm lg:text-base ${currentLang === opt.code ? "text-primary" : "text-white/80"}`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div className="h-px bg-white/20" />
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <img src={Logo} alt="Alcaware" className="h-8" />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex flex-col gap-1.5 cursor-pointer"
            >
              <span className="block w-6 h-0.5 bg-white translate-y-2 rotate-45" />
              <span className="block w-6 h-0.5 bg-white opacity-0" />
              <span className="block w-6 h-0.5 bg-white -translate-y-2 -rotate-45" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-10 font-montserrat text-2xl text-white">
            <Link
              to={to("home")}
              className={`cursor-pointer transition-colors ${isHome ? "text-primary" : ""}`}
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            >
              {t("navbar.home")}
            </Link>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                {t("navbar.services")}
                <ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} size={20} />
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col items-center gap-2">
                  {services.map((s, i) => (
                    <button
                      key={s}
                      onClick={() => {
                        setMenuOpen(false);
                        if (servicePageMap[i]) goTo(servicePageMap[i]);
                      }}
                      className={`text-sm tracking-wide transition-colors hover:text-primary ${servicePageMap[i] ? "text-white/60" : "text-white/30 cursor-default"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              to={to("nosotros")}
              className={`cursor-pointer transition-colors ${isNosotros ? "text-primary" : ""}`}
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            >
              {t("navbar.about")}
            </Link>
            <div className="flex gap-4 mt-2">
              {options.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => { handleLangChange(opt.code); setMenuOpen(false); }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-base transition-colors ${currentLang === opt.code ? "border-primary text-primary" : "border-white/20 text-white/60 hover:border-white/50"}`}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
