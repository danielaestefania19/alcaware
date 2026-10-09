import type { Block } from "../../content/types";

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      {blocks.map((block, i) => {
        if ("h2" in block)
          return (
            <h2 key={i} className="mt-6 font-montserrat font-bold text-lg lg:text-xl xl:text-2xl tracking-wide text-primary">
              {block.h2}
            </h2>
          );
        if ("ul" in block)
          return (
            <ul key={i} className="flex flex-col gap-2 pl-5 list-disc marker:text-primary font-montserrat text-sm lg:text-base xl:text-lg text-white/80 leading-relaxed">
              {block.ul.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        if ("quote" in block)
          return (
            <figure key={i} className="my-4 border-l-2 border-primary pl-5 lg:pl-6">
              <blockquote className="font-montserrat italic text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed">
                “{block.quote}”
              </blockquote>
              <figcaption className="mt-3 font-montserrat text-sm text-white/60">{block.author}</figcaption>
            </figure>
          );
        return (
          <p key={i} className="font-montserrat text-sm lg:text-base xl:text-lg text-white/80 leading-relaxed">
            {block.p}
          </p>
        );
      })}
    </div>
  );
}
