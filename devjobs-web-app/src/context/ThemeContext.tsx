import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useSwitchTheme } from "../hooks";

type ThemeType = "light" | "dark";

interface ContextProps {
  theme: ThemeType;
  setTheme: (state: string) => void;
}

export const ThemeContext = createContext<ContextProps>(null!);

const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
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
  }, []);

  const store = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme must be inside a <ThemeContext.provider> with a value"
    );
  }
  return context;
};

export default ThemeProvider;
