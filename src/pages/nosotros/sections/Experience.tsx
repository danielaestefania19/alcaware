import { useTranslation } from "react-i18next";
import Ellipse from "../../../assets/images/us/Ellipse.png";

export default function Experience() {
  const { t } = useTranslation();

  type ExperienceData = {
    section1: {
      title: string;
      subtitle: string;
      list_label: string;
      list_items: string[];
      closing: string;
    };
    section2: {
      title: string;
      bold_label: string;
      paragraphs: string[];
      focus_label: string;
      focus_items: string[];
    };
  };

  const data = t("nosotros.experience", {
    returnObjects: true,
  }) as ExperienceData;

  return (
    <section className="bg-black text-white overflow-hidden">
      {/* Header superior */}
      <div className="relative z-20 bg-black text-center pt-14 md:pt-16 lg:pt-20 xl:pt-24 pb-10 px-6">
        <h2
          className="
            font-melete
            text-lg md:text-2xl lg:text-3xl xl:text-4xl
            tracking-[0.35em]
            text-primary
            mb-5
          "
          style={{
            textShadow: "0 0 6px #3AE0B3, 0 0 24px #3AE0B360",
          }}
        >
          {data.section1.title}
        </h2>

        <p
          className="
            font-montserrat
            text-xs md:text-sm lg:text-base
            tracking-widest
            text-white/70
            leading-relaxed
            max-w-4xl
            mx-auto
            uppercase
          "
        >
          {data.section1.subtitle}
        </p>
      </div>

      {/* Bloque principal */}
      <div
        className="
          relative
          bg-black
          min-h-262.5
          md:min-h-287.5
          lg:min-h-320
          xl:min-h-345
          2xl:min-h-370
          overflow-hidden
        "
      >
        {/* Background exacto, sin recortar bordes */}
        <img
          src={Ellipse}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            max-w-none
            object-fill
            pointer-events-none
            select-none
          "
        />

        {/* SECTION 1 */}
        <section
          className="
            relative z-10
            px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72
            pt-32 md:pt-40 lg:pt-48 xl:pt-56
          "
        >
          <div className="max-w-190">
            <p
              className="
                font-montserrat
                text-sm md:text-base lg:text-lg xl:text-xl
                tracking-widest
                text-white/90
                font-extrabold
                mb-8
                uppercase
              "
            >
              {data.section1.list_label}
            </p>

            <ul className="flex flex-col gap-6 md:gap-7 mb-8">
              {data.section1.list_items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2.5 text-white/80 text-base">•</span>

                  <span
                    className="
                      font-montserrat
                      text-sm md:text-base lg:text-lg xl:text-xl
                      tracking-widest
                      text-white/80
                      leading-snug
                      uppercase
                    "
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="
                font-montserrat
                text-sm md:text-base lg:text-lg xl:text-xl
                tracking-widest
                text-white/85
                leading-snug
                uppercase
              "
            >
              {data.section1.closing}
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section
          className="
            relative z-10
            px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72
            pt-40 md:pt-48 lg:pt-56 xl:pt-64
            pb-28 md:pb-32 lg:pb-40
          "
        >
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2
              className="
                font-melete
                text-lg md:text-2xl lg:text-3xl xl:text-4xl
                tracking-[0.35em]
                text-primary
              "
              style={{
                textShadow: "0 0 6px #3AE0B3, 0 0 24px #3AE0B360",
              }}
            >
              {data.section2.title}
            </h2>
          </div>

          <div
            className="
              max-w-190
              ml-auto
              text-center
              md:text-right
              flex
              flex-col
              items-center
              md:items-end
              gap-7
            "
          >
            <p
              className="
                font-montserrat
                text-sm md:text-base lg:text-lg xl:text-xl
                tracking-widest
                text-white/90
                font-extrabold
                uppercase
              "
            >
              {data.section2.bold_label}
            </p>

            {data.section2.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="
                  font-montserrat
                  text-sm md:text-base lg:text-lg xl:text-xl
                  tracking-widest
                  text-white/80
                  leading-relaxed
                  uppercase
                "
              >
                {paragraph}
              </p>
            ))}

            <p
              className="
                font-montserrat
                text-sm md:text-base lg:text-lg xl:text-xl
                tracking-widest
                text-white/85
                font-semibold
                uppercase
                mt-4
              "
            >
              {data.section2.focus_label}
            </p>

            <ul className="flex flex-col gap-3 text-center md:text-right">
              {data.section2.focus_items.map((item, i) => (
                <li
                  key={i}
                  className="
                    font-montserrat
                    text-sm md:text-base lg:text-lg xl:text-xl
                    tracking-widest
                    text-white/80
                    leading-snug
                    uppercase
                  "
                >
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}