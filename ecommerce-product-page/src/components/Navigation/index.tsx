// Styles
import styles from "./navigation.module.scss";

// Icon
import close from "../../images/icons/icon-close.svg";

interface NavigationProps {
  isNavigationVisible: boolean;
  toggleNavigation: () => void;
}

interface NavigationCloseProps {
  onClick: () => void;
}

function NavigationClose({onClick}:NavigationCloseProps) {
  return (
    <img
      onClick={onClick}
      src={close}
      className={styles.nav__close}
      width="14"
      height="14"
      alt="close"
      aria-label="Close navigation" />
  )
}

export const Navigation = ({isNavigationVisible, toggleNavigation}:NavigationProps) => {
    return (
        <nav className={`${styles.nav} ${isNavigationVisible ? styles.nav__visible: ''}`}>
          <NavigationClose onClick={toggleNavigation} />
          <div className={styles.nav__navbar}>
            <a href="#" className={styles.nav__link}>Collections</a>
            <a href="#" className={styles.nav__link}>Men</a>
            <a href="#" className={styles.nav__link}>Women</a>
            <a href="#" className={styles.nav__link}>About</a>
            <a href="#" className={styles.nav__link}>Contact</a>
          </div>
        </nav>
    )
}