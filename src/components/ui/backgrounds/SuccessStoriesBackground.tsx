import { useEffect, useRef } from "react";

const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";

export default function SuccessStoriesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const initScene = async () => {
      if (!containerRef.current) return;

      const runInit = async () => {
        if (!window.UnicornStudio || cancelled) return;

        try {
          await window.UnicornStudio.init();
        } catch (error) {
          console.error("Unicorn init error:", error);
        }
      };

      if (window.UnicornStudio?.init) {
        await runInit();
        return;
      }

      const existingScript = document.querySelector(
        `script[src="${SCRIPT_SRC}"]`
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.addEventListener("load", runInit, { once: true });
        if (window.UnicornStudio?.init) {
          await runInit();
        }
        return;
      }

      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        void runInit();
      };
      script.onerror = () => {
        console.error("No se pudo cargar Unicorn Studio.");
      };

      document.head.appendChild(script);
    };

    void initScene();

    return () => {
      cancelled = true;
      if (window.UnicornStudio?.destroy) {
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project="DttYPiw2OOioauqNzev2"
      data-us-scale="1"
      data-us-dpi="1.5"
      data-us-production="true"
      data-us-lazyload="true"
      className="absolute inset-0 h-full w-full"
      aria-label="Fondo animado"
    />
  );
}
