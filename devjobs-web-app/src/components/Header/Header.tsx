import { Link } from "react-router-dom";
import { IconMoon, IconSun } from "../../icons";
import { Switch } from "../Switch";
import "./Header.css";

const logo = new URL("../../assets/desktop/logo.svg", import.meta.url).href;

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" aria-label="devjobs">
          <img src={logo} className="logo" alt="devjobs logo" />
        </Link>
        <Switch hasIconLeft={<IconSun />} hasIconRight={<IconMoon />} />
      </div>
    </header>
  );
};
