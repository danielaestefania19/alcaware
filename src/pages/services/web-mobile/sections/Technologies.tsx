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

const allTech = [...row1, ...row2, ...row3];

export default function Technologies() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <TechnologiesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center gap-10 md:gap-14">
        <h2
          className="font-melete text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-wider md:tracking-widest text-white"
          style={{
            textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
          }}
        >
          Tecnologías y Aplicaciones
        </h2>

        {/* Mobile: single grid */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 w-full md:hidden">
          {allTech.map(({ src, alt }) => (
            <div key={alt} className="flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                className="h-12 w-auto max-w-20 object-contain opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Desktop: rows */}
        <div className="hidden md:flex flex-col gap-14 w-full">
          {[row1, row2, row3].map((row, i) => (
            <div key={i} className="flex justify-center gap-10 lg:gap-16 w-full">
              {row.map(({ src, alt }) => (
                <div key={alt} className="flex items-center justify-center">
                  <img
                    src={src}
                    alt={alt}
                    className="h-24 lg:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
