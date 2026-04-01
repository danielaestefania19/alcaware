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
    <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black border border-white/10 rounded-xl px-8 py-5 shadow-2xl">
      <div className="flex flex-wrap justify-center gap-4 text-white/80 font-montserrat tracking-widest text-sm">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-4">
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