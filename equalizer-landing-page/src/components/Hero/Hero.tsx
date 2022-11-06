import * as React from "react";
import PropTypes from "prop-types"
import "./hero.scss";

interface HeroProps {
    title: string;
    text: string;
}

export const Hero = ({title, text}:HeroProps) => {
    return (
        <section className="hero">
          <h1 className="heading-1 hero__title">{title}</h1>
          <p className="body-2">{text}</p>
        </section>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}