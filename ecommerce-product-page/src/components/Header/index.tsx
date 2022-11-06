// Components
import { Avatar } from "../Avatar";
import { Cart } from "../Cart";
import { Navigation } from "../Navigation";
import { Logo } from "../Logo";

// Styles
import styles from "./header.module.scss";

// Icon
import menu from "../../images/icons/icon-menu.svg";
import { useState } from "react";

// Header Component

interface HeaderBurgerProps {
  onClick: () => void;
}

interface Header {
  updatedProduct: any;
}

function HeaderBurger({onClick}:HeaderBurgerProps) {
  return (
    <img
        onClick={onClick}
        src={menu}
        className={styles.header__menu}
        width="16"
        height="15"
        alt="hamburger menu" 
        aria-label="Hamburger menu" />
  )
}

export const Header = ({updatedProduct}: Header) => {
    const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false);

    function toggleNavigation() {
      setIsNavigationVisible(!isNavigationVisible);
    }

    return (
      <header className={`${styles.header} container`}>
        <HeaderBurger onClick={toggleNavigation}/>
        <Logo />
        <Navigation
          isNavigationVisible={isNavigationVisible}
          toggleNavigation={toggleNavigation} />
        <div className={styles.header__right}>
          <Cart updatedProduct={updatedProduct} />
          <Avatar />
        </div>
    </header>
  )
}