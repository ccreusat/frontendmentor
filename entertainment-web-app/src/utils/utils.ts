import { CardProps } from "../types/types";

export function filterList(
  collection: CardProps[],
  query: string,
  path: string
) {
  let result;
  if (path === "/movies") {
    const movies = collection.filter(
      (item: { category: string }) => item.category === "Movie"
    );
    result = movies.filter((item: CardProps) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  } else if (path === "/series") {
    const series = collection.filter(
      (item: { category: string }) => item.category === "TV Series"
    );
    result = series.filter((item: CardProps) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    result = collection.filter((item: CardProps) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return result;
}
