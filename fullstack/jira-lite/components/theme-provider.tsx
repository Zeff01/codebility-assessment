"use client";

import { createContext, useContext, useState } from "react";

type ThemeContextValue = {
  isDark: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialIsDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  function toggle() {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div
        suppressHydrationWarning
        className={`min-h-full flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-950 ${isDark ? "dark" : ""}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
