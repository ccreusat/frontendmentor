import * as React from "react"
import PropTypes from "prop-types"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/400.css"
import "@fontsource/ibm-plex-sans/700.css"
import "./layout.scss";

interface LayoutProps {
    children: JSX.Element;
}

export const Layout = ({ children }:LayoutProps) => {
    return (
        <main className="layout-container">
            {children}
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
