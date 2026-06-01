import { useTranslation } from "react-i18next";
import TechnologiesBackground from "../../../../components/ui/backgrounds/TechnologiesBackground";
import firebase from "../../../../assets/images/web-mobile/technologies/firebase.png";
import aws from "../../../../assets/images/web-mobile/technologies/aws.png";
import postgresql from "../../../../assets/images/web-mobile/technologies/postgreSQL.png";
import docker from "../../../../assets/images/web-mobile/technologies/docker.png";
import react from "../../../../assets/images/web-mobile/technologies/react.png";
import reactnative from "../../../../assets/images/web-mobile/technologies/reactnative.png";
import mongodb from "../../../../assets/images/web-mobile/technologies/mongoDB.png";
import swift from "../../../../assets/images/web-mobile/technologies/swift.png";
import kotlin from "../../../../assets/images/web-mobile/technologies/kotlin.png";
import flutter from "../../../../assets/images/web-mobile/technologies/flutter.png";
import next from "../../../../assets/images/web-mobile/technologies/next.png";

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
  const { t } = useTranslation();
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 text-white">
      <TechnologiesBackground />
      <div className="relative z-10">
        <h2
          className="font-melete text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider md:tracking-widest mb-10 md:mb-14 text-center px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40"
          style={{
            textShadow: "0 0 1px #fff, 0 0 10px #3AE0B3, 0 0 40px #3AE0B3",
          }}
        >
          {t("webmobil.technologies.title")}
        </h2>
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
