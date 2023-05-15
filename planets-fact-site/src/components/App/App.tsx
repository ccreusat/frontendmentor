import "./App.css";
import data from "../../data/data.json";
import { Header, PlanetProps } from "../Header";
import { Planet } from "../Planet";
import { useState, useEffect } from "react";

const App = () => {
  const [currentPlanet, setCurrentPlanet] = useState<PlanetProps>(data[0]);
  const [bodyClass, setBodyClass] = useState(data[0].name.toLowerCase());
  const [resetTab, setResetTab] = useState(0);

  useEffect(() => {
    function handleBodyClass() {
      document.body.removeAttribute("class");
      document.body.classList.toggle(bodyClass);
    }
    handleBodyClass();
  }, [bodyClass]);

  useEffect(() => {
    setResetTab(0);
  }, [currentPlanet, resetTab]);

  function handleChangePlanet(idx: number, name: string): void {
    setCurrentPlanet(data[idx]);
    setBodyClass(name.toLowerCase());
  }

  return (
    <>
      <Header
        heading="The Planets"
        planets={data}
        handleChangePlanet={handleChangePlanet}
      />
      <Planet currentPlanet={currentPlanet} resetTab={resetTab} />
    </>
  );
};

export default App;
