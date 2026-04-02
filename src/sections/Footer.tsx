import Logo from "../assets/icons/Logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const navLinks = t("footer.nav_links", { returnObjects: true }) as string[];

  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(to bottom, #000000, #061123)" }}
    >
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">

        {/* Column 1 — Logo + contact + socials */}
        <div className="flex flex-col gap-6">
          <img src={Logo} alt="Alcaware" className="h-8 w-auto object-contain object-left" />

          <div className="flex flex-col gap-1">
            <p className="font-montserrat text-sm font-bold text-white">{t("footer.call")}</p>
            <p className="font-montserrat text-sm text-white/60">+52 81 1635 9851</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-montserrat text-sm font-bold text-white">{t("footer.contact")}</p>
            <a
              href="mailto:it@alcaware.com"
              className="font-montserrat text-sm text-white/60 hover:text-primary transition-colors"
            >
              it@alcaware.com
            </a>
          </div>

          <a
            href="#servicios"
            className="w-fit border border-primary rounded-full px-6 py-2 font-montserrat text-xs tracking-widest text-white hover:bg-primary/10 transition-colors"
          >
            {t("footer.see_services")}
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.163 3.355.76 2.05 2.05.76 3.355.163 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947.091 1.856.688 3.698 1.978 4.988 1.29 1.29 3.132 1.887 4.988 1.978C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.856-.091 3.698-.688 4.988-1.978 1.29-1.29 1.887-3.132 1.978-4.988C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.091-1.856-.688-3.698-1.978-4.988C20.66.76 18.818.163 16.962.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="text-white/60 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a href="#" aria-label="Telegram" className="text-white/60 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Nav links */}
        <div className="flex flex-col gap-4">
          <p className="font-montserrat text-sm font-bold text-white">{t("footer.info_title")}</p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-montserrat text-sm text-white/60 hover:text-primary transition-colors w-fit"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3 — Address */}
        <div className="flex flex-col gap-4">
          <p className="font-montserrat text-sm font-bold text-white">{t("footer.visit_title")}</p>
          <address className="font-montserrat text-sm text-white/60 not-italic leading-relaxed">
            {t("footer.address")}
          </address>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <p className="text-center font-montserrat text-xs text-white/40 py-4 tracking-widest">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
