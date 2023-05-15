import { useTheme } from "../../context/useTheme";
import { Icon } from "../Icon";
import "./Switch.css";

type SwitchProps = {
  hasIconLeft: React.ReactElement;
  hasIconRight: React.ReactElement;
};

export const Switch = ({
  hasIconLeft,
  hasIconRight,
}: SwitchProps): JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="switch">
      {hasIconLeft ? <Icon component={hasIconLeft} /> : null}
      <label htmlFor="switch-toggle" className="switch-container">
        <input
          className="switch-toggle"
          type="checkbox"
          role="switch"
          id="switch-toggle"
          name="switch-toggle"
          aria-checked={theme !== "light"}
          aria-labelledby="switch-toggle"
          checked={theme !== "light"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <span aria-hidden="true" className="switch-checkbox"></span>
      </label>
      {hasIconRight ? <Icon component={hasIconRight} /> : null}
    </div>
  );
};
