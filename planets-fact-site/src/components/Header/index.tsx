import hamburger from "../../images/icon-hamburger.svg";
import chevron from "../../images/icon-chevron.svg";

import {
  HeaderWrapper,
  Title,
  NavContainer,
  NavLink,
  Hamburger,
} from "./Header";
import { useState, useEffect } from "react";

export interface PlanetProps {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    overview: string;
    structure: string;
    geology: string;
  };
}

export const Header = ({
  heading,
  planets,
  handleChangePlanet,
}: {
  heading: string;
  planets: PlanetProps[];
  handleChangePlanet: (index: number, planetName: string) => void;
}) => {
  const [activePlanet, setActivePlanet] = useState<string>("mercury");
  const [navOpened, setNavOpened] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("nav-opened");
  }, [navOpened]);

  function handleNewPlanet(index: number, planetName: string) {
    handleChangePlanet(index, planetName);
    setActivePlanet(planetName.toLowerCase());
  }

  function handleNavOpen() {
    navOpened ? setNavOpened(false) : setNavOpened(true);
  }

  return (
    <HeaderWrapper>
      <Title>{heading}</Title>
      <NavContainer>
        {planets.map((planet: PlanetProps, index: number) => {
          const name = planet.name.toLowerCase();
          return (
            <NavLink
              key={name}
              className={`${name} ${
                activePlanet === name.toLowerCase() ? "active" : "inactive"
              }`}
              onClick={() => handleNewPlanet(index, name)}
            >
              {name}
              <img src={chevron} alt="icon chevron" />
            </NavLink>
          );
        })}
      </NavContainer>
      <Hamburger onClick={() => handleNavOpen()}>
        <img src={hamburger} alt="menu hamburger" />
      </Hamburger>
    </HeaderWrapper>
  );
};
