export default function TechBar() {
  const items = [
    "NFT",
    "CRYPTO",
    "DEFI",
    "GAMEFI",
    "DAPP",
    "WEB3",
    "SMART CONTRACTS",
  ];

  return (
    <div className="w-full backdrop-blur-sm bg-black border border-white/10 rounded-xl px-6 lg:px-8 xl:px-10 py-4 lg:py-4 xl:py-5 shadow-2xl">
      <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-5 text-white/80 font-montserrat tracking-widest text-xs lg:text-xs xl:text-sm">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-3 lg:gap-4">
            {item}
            {index !== items.length - 1 && (
              <span className="text-primary">//</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}