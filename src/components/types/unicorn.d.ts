declare global {
  interface Window {
    UnicornStudio?: {
      init: () => Promise<unknown>;
      destroy?: () => void;
      isInitialized?: boolean;
    };
  }
}

export {};