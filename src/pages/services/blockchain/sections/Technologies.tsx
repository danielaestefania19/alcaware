import BlockchainTechnologiesBackground from "../../../../components/ui/backgrounds/BlockchainTechnologiesBackground";

import chainlink from "../../../../assets/images/blockchain/technologies/chainlink.png";
import ethereum from "../../../../assets/images/blockchain/technologies/ethereum.png";
import etherjs from "../../../../assets/images/blockchain/technologies/etherjs.png";
import hardhat from "../../../../assets/images/blockchain/technologies/hardhat.png";
import internetcomputer from "../../../../assets/images/blockchain/technologies/internetcomputer.png";
import metamask from "../../../../assets/images/blockchain/technologies/metamask.png";
import openzeppelin from "../../../../assets/images/blockchain/technologies/openzeppelin.png";
import polkadot from "../../../../assets/images/blockchain/technologies/polkadot.png";
import polygon from "../../../../assets/images/blockchain/technologies/polygon.png";
import solana from "../../../../assets/images/blockchain/technologies/solana.png";
import solidity from "../../../../assets/images/blockchain/technologies/solidity.png";
import thegraph from "../../../../assets/images/blockchain/technologies/thegraph.png";
import walletconnect from "../../../../assets/images/blockchain/technologies/walletconnect.png";

const row1 = [
  { src: ethereum, alt: "Ethereum" },
  { src: solidity, alt: "Solidity" },
  { src: hardhat, alt: "Hardhat" },
  { src: openzeppelin, alt: "OpenZeppelin" },
];

const row2 = [
  { src: polygon, alt: "Polygon" },
  { src: solana, alt: "Solana" },
  { src: polkadot, alt: "Polkadot" },
  { src: internetcomputer, alt: "Internet Computer" },
];

const row3 = [
  { src: chainlink, alt: "Chainlink" },
  { src: etherjs, alt: "Ethers.js" },
  { src: metamask, alt: "MetaMask" },
  { src: thegraph, alt: "The Graph" },
  { src: walletconnect, alt: "WalletConnect" },
];

function TechRow({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div className="flex justify-center gap-4 md:gap-8 lg:gap-12 w-full">
      {items.map(({ src, alt }) => (
        <div key={alt} className="flex-1 flex items-center justify-center min-w-0">
          <img
            src={src}
            alt={alt}
            className="w-full max-w-30 md:max-w-40 lg:max-w-50 xl:max-w-60 h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="relative w-full overflow-hidden">
      <BlockchainTechnologiesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center gap-14">
        <h2
          className="font-melete text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest text-center text-white"
          style={{
            textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
          }}
        >
          Tecnologías y Aplicaciones
        </h2>

        <div className="flex flex-col gap-10 md:gap-14 w-full">
          <TechRow items={row1} />
          <TechRow items={row2} />
          <TechRow items={row3} />
        </div>
      </div>
    </section>
  );
}
