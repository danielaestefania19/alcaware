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
    <div className="w-full backdrop-blur-sm bg-black border border-white/10 rounded-xl px-8 lg:px-10 xl:px-12 py-5 lg:py-5 xl:py-6 shadow-2xl">
      <div className="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6 text-white/80 font-montserrat tracking-widest text-sm lg:text-sm xl:text-base">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-4 lg:gap-5">
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