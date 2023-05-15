import React, { createContext, useEffect, useMemo } from "react";
import { useSwitchTheme } from "../hooks";

type ThemeType = "light" | "dark";

interface ContextProps {
  theme: ThemeType;
  setTheme: (state: string) => void;
}

export const ThemeContext = createContext<ContextProps>(null!);

const ThemeProvider = ({ children }: React.PropsWithChildren<object>) => {
  const [theme, setTheme] = useSwitchTheme();

  useEffect(() => {
    const handlePreferScheme = (event: any) => {
      if (event.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handlePreferScheme);

    return () => {
      window.removeEventListener("change", handlePreferScheme);
    };
  }, [setTheme]);

  const store = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
