interface UnicornScene {
  pause: () => void;
  resume: () => void;
  destroy: () => void;
}

interface UnicornSceneOptions {
  element: HTMLElement;
  projectId: string;
  scale?: number;
  dpi?: number;
  production?: boolean;
  interactivity?: {
    mouse?: { disableMobile?: boolean };
  };
}

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => Promise<unknown>;
      addScene: (options: UnicornSceneOptions) => Promise<UnicornScene>;
      destroy?: () => void;
      isInitialized?: boolean;
    };
  }
}

export {};
