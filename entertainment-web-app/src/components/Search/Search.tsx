import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
// Icon
import { IconSearch } from "../Icons";
import styles from "./search.module.css";

export default function Search() {
  const location = useLocation();
  const [placeholder, setPlaceholder] = useState<string>(
    "Search for movies or TV series"
  );

  const { query, setQuery } = useStateContext();

  useEffect(() => {
    const { pathname: path } = location;
    let placeholderText: string;
    switch (path) {
      case "/movies":
        placeholderText = "Search for movies";
        break;
      case "/series":
        placeholderText = "Search for TV series";
        break;
      case "/bookmarked":
        placeholderText = "Search for bookmarked shows";
        break;
      default:
        placeholderText = "Search for movies or TV series";
        break;
    }
    setPlaceholder(placeholderText);
    setQuery("");
  }, [location]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <div className={`flex-container ${styles.search}`}>
      <IconSearch />
      <input
        type="search"
        name="search"
        autoComplete="off"
        className={styles["search-input"]}
        id="search"
        value={query}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
