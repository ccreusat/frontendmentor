import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";

interface HeaderProps {
    name: string;
}

export const Header = ({name}:HeaderProps) => {
    return (
        <header className="header container">
            <Link to="/" className="header__logo">
                <StaticImage src="../../images/logo.svg" alt="Equalizer" />
            </Link>
            {name && <span className="header__name">{name}</span>}
        </header>
    )
}

Header.propTypes = {
    name: PropTypes.string,
}