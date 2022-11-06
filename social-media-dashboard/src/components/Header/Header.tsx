import { HeaderProps } from "../../types/types";
import ThemeSwitcher from "../Switch/Switch";

const Header = ({ heading, text, modeText, toggle, score }: HeaderProps) => {
	return (
		<header className="header">
			<div>
				<h1 className="heading">{heading}</h1>
				{text && (
					<p className="headline">
						<strong>
							{text}: {score}
						</strong>
					</p>
				)}
			</div>

			{toggle && <ThemeSwitcher modeText={modeText} />}
		</header>
	);
};

export default Header;
