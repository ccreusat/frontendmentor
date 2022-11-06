import { useLayoutEffect } from "react";

interface Theme {
  [name: string]: string;
}

export const useTheme = (theme: Theme): void => {
  useLayoutEffect(
    (): void => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key]);

        const style = document.createElement("style");

        style.textContent = `
  #box {
    width: 100px;
    height: 100px;
    background-color: salmon;
    color: white;
  }

  body {
    background-color: lightgrey;
  }
`;

        document.head.appendChild(style);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
};
