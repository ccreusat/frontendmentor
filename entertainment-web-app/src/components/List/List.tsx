// RRV6
import { useLocation } from "react-router-dom";
// FIREBASE
import { updateBookmarked } from "../../services/firebase";
// UTILS
import { filterList } from "../../utils/utils";
import { Card } from "../Card";
// CONTEXT
import { useStateContext } from "../../context/StateContext";
// CSS
import styles from "./list.module.css";
// INTERFACE
import { ListProps } from "../../types/types";

export default function List({
  title,
  collection,
  isTrendingSection,
}: ListProps) {
  const { pathname: path } = useLocation();
  const { query } = useStateContext();

  const filteredList = filterList(collection, query, path);
  const searchCount = filteredList.length;

  const handleClass = (): string => {
    if (isTrendingSection) {
      return `${styles["trending-list"]}`;
    }
    return `grid-container  ${styles.list}`;
  };

  const renderQueryText = () => {
    if (query) {
      return (
        <small style={{ color: "white", marginLeft: "2rem" }}>
          Found {searchCount} results for <em>{query}</em>
        </small>
      );
    }
  };

  return (
    <section>
      <header className="flex-container align-items-baseline">
        <h2 className="section-title heading-l">{title}</h2>
        {renderQueryText()}
      </header>
      <div className={handleClass()}>
        {filteredList &&
          filteredList.map((item: any, index: number) => (
            <Card
              key={item.id}
              index={index}
              year={item.year}
              category={item.category}
              rating={item.rating}
              title={item.title}
              updateBookmarked={() =>
                updateBookmarked(item.id, item.isBookmarked)
              }
              isBookmarked={item.isBookmarked}
              isTrending={item.isTrending}
              thumbnail={item.thumbnail}
              isTrendingSection={isTrendingSection}
            />
          ))}
      </div>
    </section>
  );
}
