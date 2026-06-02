import { useEffect, useRef } from "react";

const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";

interface Props {
  projectId: string;
  className?: string;
}

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.UnicornStudio?.addScene) {
      resolve();
      return;
    }

    const existing = document.querySelector(
      `script[src="${SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      if (window.UnicornStudio?.addScene) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar Unicorn Studio"));
    document.head.appendChild(script);
  });
}

export default function UnicornBackground({
  projectId,
  className = "absolute inset-0 h-full w-full",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let scene: Awaited<ReturnType<NonNullable<Window["UnicornStudio"]>["addScene"]>> | null = null;
    let observer: IntersectionObserver | null = null;

    const init = async () => {
      if (!containerRef.current) return;

      try {
        await loadScript();
        if (cancelled || !containerRef.current || !window.UnicornStudio?.addScene) return;

        scene = await window.UnicornStudio.addScene({
          element: containerRef.current,
          projectId,
          scale: 1,
          dpi: 1.5,
          production: true,
        });

        if (cancelled) {
          scene.destroy();
          return;
        }

        // Pause when out of viewport, resume when visible
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                scene?.resume();
              } else {
                scene?.pause();
              }
            }
          },
          { threshold: 0.05 }
        );

        observer.observe(containerRef.current);
      } catch (err) {
        console.error("UnicornBackground error:", err);
      }
    };

    void init();

    return () => {
      cancelled = true;
      observer?.disconnect();
      scene?.destroy();
    };
  }, [projectId]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label="Fondo animado"
    />
  );
}
