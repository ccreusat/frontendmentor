import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ThemeType = "dark" | "light";

interface ContextProps {
	currentTheme: ThemeType;
	setCurrentTheme: (arg0: string) => void;
}

export const ThemeContext = createContext<ContextProps>(null!);

const ThemeProvider = ({ children }: any) => {
	const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "dark");

	const store = { currentTheme, setCurrentTheme }

	return (
		<ThemeContext.Provider value={store}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
