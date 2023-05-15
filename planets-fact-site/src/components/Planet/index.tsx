/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import source from "../../images/icon-source.svg";

import {
  PlanetWrapper,
  PlanetContainer,
  PlanetImageWrapper,
  PlanetImage,
  PlanetInfoWrapper,
  PlanetInfo,
  PlanetTitle,
  PlanetText,
  PlanetWiki,
  PlanetWikiLink,
  PlanetButtonContainer,
  PlanetButton,
  PlanetFooter,
  PlanetFooterItem,
  PlanetFooterTitle,
  PlanetFooterText,
} from "./Planet";

import Helpers from "../../utils/helpers";
import { tabs } from "../../data/tabs";
import { PlanetProps } from "../Header";

export interface TabProps<T> {
  id: string;
  data: T;
  text: T;
  mobile: T;
}

export const Planet = ({
  currentPlanet,
  resetTab,
}: {
  currentPlanet: PlanetProps;
  resetTab: number;
}) => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(Helpers.detectDeviceType());
  }, [isMobile]);

  const [isActiveTab, setIsActiveTab] = useState<number>(resetTab);
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].data);

  useEffect(() => {
    function handleResetTab() {
      if (isActiveTab !== resetTab) {
        setIsActiveTab(0);
        setCurrentTab(tabs[0].data);
      }
    }
    handleResetTab();
  }, [currentPlanet]);

  function onClickTabItem(index: number, tab: string) {
    setIsActiveTab(index);
    setCurrentTab(tab);
  }

  return (
    <PlanetWrapper>
      <PlanetContainer>
        <PlanetImageWrapper>
          {currentTab === "geology" ? (
            <>
              <PlanetImage
                src={currentPlanet.images.overview}
                alt={currentPlanet.name}
              />
              <PlanetImage
                className="geology"
                src={currentPlanet.images[currentTab]}
                alt="geology"
              />
            </>
          ) : (
            <PlanetImage
              src={
                currentPlanet.images[
                  currentTab as keyof typeof currentPlanet.images
                ]
              }
              alt={currentPlanet.name}
            />
          )}
        </PlanetImageWrapper>
        <PlanetInfo>
          <PlanetInfoWrapper>
            <PlanetTitle>{currentPlanet.name}</PlanetTitle>
            <PlanetText>{currentPlanet[currentTab].content}</PlanetText>
            <PlanetWiki>
              Source : {""}
              <PlanetWikiLink
                href={currentPlanet[currentTab].source}
                target="_blank"
              >
                Wikipedia
              </PlanetWikiLink>{" "}
              <img src={source} alt="wikipedia" />
            </PlanetWiki>
          </PlanetInfoWrapper>
          <PlanetButtonContainer>
            {tabs.map((tab: TabProps<string>, index: number) => {
              const data = tab.data;
              return (
                <PlanetButton
                  key={index}
                  id={tab.id}
                  onClick={() => onClickTabItem(index, data)}
                  className={`${data} ${
                    isActiveTab === index ? "active" : "inactive"
                  }`}
                >
                  {isMobile !== "Mobile" ? tab.text : tab.mobile}
                </PlanetButton>
              );
            })}
          </PlanetButtonContainer>
        </PlanetInfo>
      </PlanetContainer>
      <PlanetFooter className="planet-footer">
        <PlanetFooterItem>
          <PlanetFooterTitle>Rotation Time</PlanetFooterTitle>
          <PlanetFooterText>{currentPlanet.rotation}</PlanetFooterText>
        </PlanetFooterItem>
        <PlanetFooterItem>
          <PlanetFooterTitle>Revolution Time</PlanetFooterTitle>
          <PlanetFooterText>{currentPlanet.revolution}</PlanetFooterText>
        </PlanetFooterItem>
        <PlanetFooterItem>
          <PlanetFooterTitle>Radius</PlanetFooterTitle>
          <PlanetFooterText>{currentPlanet.radius}</PlanetFooterText>
        </PlanetFooterItem>
        <PlanetFooterItem>
          <PlanetFooterTitle>Average Temp.</PlanetFooterTitle>
          <PlanetFooterText>{currentPlanet.temperature}</PlanetFooterText>
        </PlanetFooterItem>
      </PlanetFooter>
    </PlanetWrapper>
  );
};
