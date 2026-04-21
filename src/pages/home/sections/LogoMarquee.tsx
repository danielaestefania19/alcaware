import cemex from "../../../assets/images/logomarquee/cemex.png";
import oxxo from "../../../assets/images/logomarquee/oxxo.png";
import carrier from "../../../assets/images/logomarquee/carrier.png";
import pemex from "../../../assets/images/logomarquee/pemex.png";
import bimbo from "../../../assets/images/logomarquee/bimbo.png";

const LOGOS = [
  { label: "CEMEX",   src: cemex },
  { label: "OXXO",    src: oxxo },
  { label: "Carrier", src: carrier },
  { label: "PEMEX",   src: pemex },
  { label: "BIMBO",   src: bimbo },
];

const ITEMS = [...LOGOS, ...LOGOS];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-black to-transparent" />

      <div
        className="flex items-center w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {ITEMS.map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0" style={{ width: "20vw" }}>
            <img
              src={logo.src}
              alt={logo.label}
              className="h-28 w-auto max-w-52 object-contain opacity-70"
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
