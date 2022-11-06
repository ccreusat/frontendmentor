import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import { Logo, IconHome, IconMovies, IconSeries, IconBookmark } from "../Icons";
import styles from "./menu.module.css";

export default function Menu() {
  const navigate = useNavigate();
  const { user, authenticationState } = useStateContext();

  function handleUser() {
    if (!authenticationState.isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/signout");
    }
  }

  let activeClassName = `${styles.active}`;
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className={`flex-container ${styles["flex-container"]}`}>
        <li>
          <NavLink
            to="/"
            aria-label="Home"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <IconHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            aria-label="Movies"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <IconMovies />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/series"
            aria-label="Series"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <IconSeries />
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="/bookmarked"
              aria-label="Bookmarked"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <IconBookmark />
            </NavLink>
          </li>
        )}
      </ul>
      <div className={styles.profile} onClick={handleUser}>
        <img src="./assets/images/image-avatar.png" alt="avatar" />
      </div>
    </nav>
  );
}
