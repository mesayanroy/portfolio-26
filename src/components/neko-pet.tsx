"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    createNeko?: (options?: {
      speed?: number;
      fps?: number;
      behaviorMode?: number;
      idleThreshold?: number;
      allowBehaviorChange?: boolean;
      startX?: number;
      startY?: number;
    }) => {
      start: () => void;
      stop: () => void;
      destroy: () => void;
    };
  }
}

export default function NekoPet() {
  useEffect(() => {
    let instance: ReturnType<NonNullable<Window["createNeko"]>> | null = null;
    let isCancelled = false;

    const initNeko = () => {
      if (typeof window !== "undefined" && window.createNeko && !instance && !isCancelled) {
        try {
          instance = window.createNeko({
            speed: 24,
            fps: 120,
            behaviorMode: 0,
            idleThreshold: 6,
            allowBehaviorChange: true,
          });
          instance.start();
        } catch (e) {
          console.error("Neko initialization error:", e);
        }
      }
    };

    if (window.createNeko) {
      initNeko();
    } else {
      let script = document.getElementById("neko-js-script") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "neko-js-script";
        script.src = "https://louisabraham.github.io/nekojs/neko.js";
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", initNeko);
    }

    return () => {
      isCancelled = true;
      if (instance) {
        try {
          instance.destroy();
        } catch (e) {
          // cleanup fallback
        }
      }
    };
  }, []);

  return null;
}
