import { useTranslation } from "react-i18next";
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

const allTech = [...row1, ...row2, ...row3];

export default function Technologies() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 text-white">
      <BlockchainTechnologiesBackground />

      <div className="relative z-10">
        <h2
          className="font-melete text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider md:tracking-widest mb-10 md:mb-14 text-center px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40"
          style={{
            textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
          }}
        >
          {t("blockchain.technologies.title")}
        </h2>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10 md:gap-14">
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 w-full md:hidden">
          {allTech.map(({ src, alt }) => (
            <div key={alt} className="flex items-center justify-center">
              <img src={src} alt={alt} className="h-12 w-auto max-w-20 object-contain opacity-80" />
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-14 w-full">
          {[row1, row2, row3].map((row, i) => (
            <div key={i} className="flex justify-center gap-10 lg:gap-16 w-full">
              {row.map(({ src, alt }) => (
                <div key={alt} className="flex items-center justify-center">
                  <img src={src} alt={alt} className="h-24 lg:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
