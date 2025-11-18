import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const body = document.body;

    // Remove existing theme classes
    body.classList.remove("theme-light", "theme-dark");

    // Add current theme class
    if (theme === "dark") {
      body.classList.add("theme-dark");
    } else {
      body.classList.add("theme-light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
