import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Met1 from "../../../../assets/images/ia/Metodologia1.png";
import Met2 from "../../../../assets/images/ia/Metodologia2.png";
import Met3 from "../../../../assets/images/ia/Metodologia3.png";
import Met4 from "../../../../assets/images/ia/Metodologia4.png";
import Met5 from "../../../../assets/images/ia/Metodologia5.png";
import Met6 from "../../../../assets/images/ia/Metodologia6.png";

const steps = [Met1, Met2, Met3, Met4, Met5, Met6];

const ROW_HEIGHT = 220;
const CONNECTOR_OVERLAP = 1;

interface StepItem {
  title: string;
  description: string;
}

export default function ComoTrabajamos() {
  const { t } = useTranslation();

  const items = t("webmobil.como_trabajamos.steps", {
    returnObjects: true,
  }) as StepItem[];

  const gridRef = useRef<HTMLDivElement | null>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [leftConnectorTops, setLeftConnectorTops] = useState<number[]>([]);
  const [rightConnectorTops, setRightConnectorTops] = useState<number[]>([]);

  useEffect(() => {
    const getCenterY = (
      element: HTMLDivElement | null,
      containerRect: DOMRect
    ): number | null => {
      if (!element) return null;

      const rect = element.getBoundingClientRect();
      return rect.top - containerRect.top + rect.height / 2;
    };

    const measure = () => {
      if (!gridRef.current) return;

      const containerRect = gridRef.current.getBoundingClientRect();

      const nextLeft = leftRefs.current
        .map((element) => getCenterY(element, containerRect))
        .filter((value): value is number => value !== null);

      const nextRight = rightRefs.current
        .map((element) => getCenterY(element, containerRect))
        .filter((value): value is number => value !== null);

      setLeftConnectorTops(nextLeft);
      setRightConnectorTops(nextRight);
    };

    const frame = requestAnimationFrame(measure);

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        measure();
      });

      if (gridRef.current) {
        resizeObserver.observe(gridRef.current);
      }

      leftRefs.current.forEach((element) => {
        if (element) resizeObserver?.observe(element);
      });

      rightRefs.current.forEach((element) => {
        if (element) resizeObserver?.observe(element);
      });
    }

    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-black px-6 py-20 text-white md:px-10 xl:px-14 2xl:px-16">
      <div className="mx-auto max-w-400">
        {/* Mobile / Tablet */}
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="mb-4 md:mb-8">
            <SectionIntro
              title={t("webmobil.como_trabajamos.title")}
              text1={t("webmobil.como_trabajamos.text1")}
              text2={t("webmobil.como_trabajamos.text2")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <StepCard key={i} item={item} icon={steps[i]} />
            ))}
          </div>
        </div>

        {/* Desktop grande: layout con líneas */}
        <div
          ref={gridRef}
          className="relative hidden lg:grid lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:gap-x-0 lg:gap-y-6"
          style={{
            gridTemplateRows: `${ROW_HEIGHT}px ${ROW_HEIGHT}px ${ROW_HEIGHT}px ${ROW_HEIGHT}px ${ROW_HEIGHT}px`,
          }}
        >
          {/* LEFT */}
          <div
            ref={(element) => {
              leftRefs.current[0] = element;
            }}
            className="col-start-1 row-start-1 h-full min-w-0"
          >
            <StepCard item={items[0]} icon={steps[0]} fixedHeight />
          </div>

          <div
            ref={(element) => {
              leftRefs.current[1] = element;
            }}
            className="col-start-1 row-start-2 row-span-3 flex min-w-0 flex-col justify-center px-2"
          >
            <SectionIntro
              title={t("webmobil.como_trabajamos.title")}
              text1={t("webmobil.como_trabajamos.text1")}
              text2={t("webmobil.como_trabajamos.text2")}
              desktop
            />
          </div>

          <div
            ref={(element) => {
              leftRefs.current[2] = element;
            }}
            className="col-start-1 row-start-5 h-full min-w-0"
          >
            <StepCard item={items[5]} icon={steps[5]} fixedHeight />
          </div>

          {/* RIGHT */}
          <div className="col-start-3 row-start-1 row-span-5 flex h-full min-w-0 flex-col justify-between">
            <div
              ref={(element) => {
                rightRefs.current[0] = element;
              }}
              className="min-w-0"
            >
              <StepCard item={items[1]} icon={steps[1]} fixedHeight />
            </div>

            <div
              ref={(element) => {
                rightRefs.current[1] = element;
              }}
              className="min-w-0"
            >
              <StepCard item={items[2]} icon={steps[2]} fixedHeight />
            </div>

            <div
              ref={(element) => {
                rightRefs.current[2] = element;
              }}
              className="min-w-0"
            >
              <StepCard item={items[3]} icon={steps[3]} fixedHeight />
            </div>

            <div
              ref={(element) => {
                rightRefs.current[3] = element;
              }}
              className="min-w-0"
            >
              <StepCard item={items[4]} icon={steps[4]} fixedHeight />
            </div>
          </div>

          <CenterOverlay
            leftConnectorTops={leftConnectorTops}
            rightConnectorTops={rightConnectorTops}
          />
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  title,
  text1,
  text2,
  desktop = false,
}: {
  title: string;
  text1: string;
  text2: string;
  desktop?: boolean;
}) {
  return (
    <div className="min-w-0">
      <h2
        className={
          desktop
            ? "mb-6 wrap-break-word font-melete text-[28px] tracking-[0.14em] text-white 2xl:text-[32px]"
            : "mb-5 wrap-break-word font-melete text-[24px] tracking-[0.12em] text-white md:text-[28px]"
        }
      >
        {title}
      </h2>

      <p className="mb-5 max-w-none wrap-break-word font-montserrat text-[16px] leading-relaxed text-white/80 2xl:text-[18px]">
        {text1}
      </p>

      <p className="max-w-none wrap-break-word font-montserrat text-[16px] leading-relaxed text-white/80 2xl:text-[18px]">
        {text2}
      </p>
    </div>
  );
}

function CenterOverlay({
  leftConnectorTops,
  rightConnectorTops,
}: {
  leftConnectorTops: number[];
  rightConnectorTops: number[];
}) {
  if (leftConnectorTops.length === 0 && rightConnectorTops.length === 0) {
    return null;
  }

  const allTops = [...leftConnectorTops, ...rightConnectorTops];
  const firstTop = Math.min(...allTops);
  const lastTop = Math.max(...allTops);

  return (
    <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-18 -translate-x-1/2 lg:block">
      <div
        className="absolute left-1/2 w-0.5 -translate-x-1/2 bg-primary/40"
        style={{
          top: `${firstTop}px`,
          height: `${lastTop - firstTop}px`,
        }}
      />

      {leftConnectorTops.map((top, index) => (
        <HorizontalConnector
          key={`left-${index}`}
          top={top}
          side="left"
          arrowLeft={index === 1}
        />
      ))}

      {rightConnectorTops.map((top, index) => (
        <HorizontalConnector
          key={`right-${index}`}
          top={top}
          side="right"
        />
      ))}
    </div>
  );
}

function HorizontalConnector({
  top,
  side,
  arrowLeft = false,
}: {
  top: number;
  side: "left" | "right";
  arrowLeft?: boolean;
}) {
  const isLeft = side === "left";

  return (
    <div
      className="absolute -translate-y-1/2"
      style={{
        top: `${top}px`,
        left: isLeft ? `-${CONNECTOR_OVERLAP}px` : "50%",
        right: isLeft ? "50%" : `-${CONNECTOR_OVERLAP}px`,
      }}
    >
      <div className="relative h-0.5 w-full bg-primary/40">
        {isLeft && arrowLeft && (
          <span className="absolute -left-px top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b-2 border-l-2 border-primary/40" />
        )}
      </div>
    </div>
  );
}

function StepCard({
  item,
  icon,
  fixedHeight = false,
}: {
  item: StepItem;
  icon: string;
  fixedHeight?: boolean;
}) {
  return (
    <div
      className={`min-w-0 rounded-4xl border-2 border-primary/70 bg-secondary/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-secondary/30 xl:p-8 ${
        fixedHeight ? "h-55" : "min-h-55"
      }`}
    >
      <div className="flex h-full min-w-0 items-center gap-4 xl:gap-6">
        <img
          src={icon}
          alt=""
          className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16 xl:h-20 xl:w-20"
        />

        <div className="min-w-0 text-left">
          {item.title && (
            <h3 className="mb-3 wrap-break-word font-montserrat text-[16px] font-semibold leading-snug text-white lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
              {item.title}
            </h3>
          )}

          <p className="wrap-break-word font-montserrat text-[14px] leading-relaxed text-white/75 lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}