import TechnologiesBackground from "../../../../components/ui/backgrounds/TechnologiesBackground";

import firebase from "../../../../assets/images/technologies/firebase.png";
import aws from "../../../../assets/images/technologies/aws.png";
import postgresql from "../../../../assets/images/technologies/postgreSQL.png";
import docker from "../../../../assets/images/technologies/docker.png";
import react from "../../../../assets/images/technologies/react.png";
import reactnative from "../../../../assets/images/technologies/reactnative.png";
import mongodb from "../../../../assets/images/technologies/mongoDB.png";
import swift from "../../../../assets/images/technologies/swift.png";
import kotlin from "../../../../assets/images/technologies/kotlin.png";
import flutter from "../../../../assets/images/technologies/flutter.png";
import next from "../../../../assets/images/technologies/next.png";

const row1 = [
  { src: firebase, alt: "Firebase" },
  { src: aws, alt: "AWS" },
  { src: postgresql, alt: "PostgreSQL" },
];

const row2 = [
  { src: docker, alt: "Docker" },
  { src: react, alt: "React JS" },
  { src: reactnative, alt: "React Native" },
  { src: mongodb, alt: "MongoDB" },
];

const row3 = [
  { src: swift, alt: "Swift" },
  { src: kotlin, alt: "Kotlin" },
  { src: flutter, alt: "Flutter" },
  { src: next, alt: "Next.js" },
];

function TechRow({ items }: { items: { src: string; alt: string }[] }) {
  return (
    <div className="flex justify-center gap-8 md:gap-16 w-full">
      {items.map(({ src, alt }) => (
        <div key={alt} className="flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="h-24 md:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <TechnologiesBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center gap-14">
        <h2
          className="font-melete text-[20px] md:text-[24px] tracking-[0.15em] text-center text-white"
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
