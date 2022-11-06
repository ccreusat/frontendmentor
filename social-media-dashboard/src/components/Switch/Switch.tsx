import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { toggleClass } from "../../helpers/toggleClass";
import { SwitchProps } from "../../types/types";

const ThemeSwitcher = ({ modeText }: SwitchProps) => {
	const { currentTheme, setCurrentTheme } = useTheme();
	const [isChecked, setIschecked] = useState<boolean>(false);

	useEffect(() => {
		const detectUserDarkMode = () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", event => {
					if (event.matches) {
						setCurrentTheme("dark");
					} else {
						setCurrentTheme("light");
					}
				});
		};

		return () => detectUserDarkMode();
	}, [setCurrentTheme]);

	const switchCurrentTheme = () => {
		const isTheme: any = currentTheme === "dark" ? "light" : "dark";
		setCurrentTheme(isTheme);
	};

	useEffect(() => {
		toggleClass(currentTheme);
		setCurrentTheme(currentTheme);
		setIschecked(currentTheme === "light" ? true : false);
	}, [currentTheme, currentTheme]);

	return (
		<div className="theme-switcher">
			<p className="theme-switcher__title">
				<strong>{modeText}</strong>
			</p>
			<label
				htmlFor="theme-switcher__toggle"
				className="theme-switcher__container"
			>
				<input
					className="theme-switcher__toggle"
					type="checkbox"
					id="theme-switcher__toggle"
					name="theme-switcher__toggle"
					checked={isChecked}
					onChange={() => switchCurrentTheme()}
				/>
				<span className="theme-switcher__checkbox"></span>
			</label>
		</div>
	);
};

export default ThemeSwitcher;
