import { useTranslation } from "react-i18next";
import AITechnologiesBackground from "../../../../components/ui/backgrounds/AITechnologiesBackground";

import openai from "../../../../assets/images/ia/technologies/openai.png";
import cloud from "../../../../assets/images/ia/technologies/cloud.png";
import faiss from "../../../../assets/images/ia/technologies/faiss.png";
import tesseract from "../../../../assets/images/ia/technologies/tesseract.png";
import weaviate from "../../../../assets/images/ia/technologies/weaviate.png";
import gemini from "../../../../assets/images/ia/technologies/gemini.png";
import huggingface from "../../../../assets/images/ia/technologies/huggingface.png";
import pinecone from "../../../../assets/images/ia/technologies/pinecone.png";
import meta from "../../../../assets/images/ia/technologies/meta.png";
import zapier from "../../../../assets/images/ia/technologies/zapier.png";
import langchain from "../../../../assets/images/ia/technologies/langchain.png";
import anthropic from "../../../../assets/images/ia/technologies/anthropic.png";
import n8n from "../../../../assets/images/ia/technologies/n8n.png";
import llamaindex from "../../../../assets/images/ia/technologies/llamaindex.png";
import spacy from "../../../../assets/images/ia/technologies/spacy.png";

const row1 = [
  { src: cloud, alt: "Cloud Vision API" },
  { src: openai, alt: "OpenAI" },
  { src: faiss, alt: "FAISS" },
  { src: tesseract, alt: "Tesseract" },
];

const row2 = [
  { src: weaviate, alt: "Weaviate" },
  { src: gemini, alt: "Gemini" },
  { src: huggingface, alt: "Hugging Face" },
  { src: pinecone, alt: "Pinecone" },
];

const row3 = [
  { src: meta, alt: "LLaMA by Meta" },
  { src: zapier, alt: "Zapier" },
  { src: langchain, alt: "LangChain" },
  { src: anthropic, alt: "Anthropic" },
];

const row4 = [
  { src: n8n, alt: "n8n" },
  { src: llamaindex, alt: "LlamaIndex" },
  { src: spacy, alt: "spaCy" },
];

function TechRow({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 w-full">
      {items.map(({ src, alt }) => (
        <div key={alt} className="flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="h-16 sm:h-20 md:h-26 lg:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default function Technologies() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24">
      <AITechnologiesBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-6 flex flex-col items-center gap-10 md:gap-12 lg:gap-14">
        <h2
          className="
            font-melete uppercase text-white leading-none text-center
            text-[28px]
            sm:text-[38px]
            md:text-[46px]
            lg:text-[54px]
            tracking-[0.2em] sm:tracking-[0.28em]
          "
          style={{
            textShadow: "0 0 2px #ffffff, 0 0 10px #38e0c2, 0 0 24px #38e0c2, 0 0 40px #38e0c2",
          }}
        >
          {t("ai.technologies.title")}
        </h2>

        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full">
          <TechRow items={row1} />
          <TechRow items={row2} />
          <TechRow items={row3} />
          <TechRow items={row4} />
        </div>
      </div>
    </section>
  );
}
