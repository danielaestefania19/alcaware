import acm from "../../../assets/images/home/logomarquee/acm.svg"
import isa from "../../../assets/images/home/logomarquee/isa.svg"
import sji from "../../../assets/images/home/logomarquee/sji.svg"
import ecom from "../../../assets/images/home/logomarquee/ecom.svg"
import iq from "../../../assets/images/home/logomarquee/iq.svg"


const LOGOS = [
  { label: "ACM Suite", src: acm },
  { label: "ISA Ambiental", src: isa },
  { label: "SJI Global", src: sji },
  { label: "Ecom Logistics", src: ecom },
  { label: "IQ English", src: iq },
];

const ITEMS = [...LOGOS, ...LOGOS];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-4 md:py-6">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-24 z-10 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-24 z-10 bg-linear-to-l from-black to-transparent" />

      <div
        className="flex items-center w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {ITEMS.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0"
            style={{ width: "20vw" }}
          >
            <img
              src={logo.src}
              alt={logo.label}
              className="h-14 md:h-28 w-auto max-w-[18vw] md:max-w-52 object-contain opacity-70"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
