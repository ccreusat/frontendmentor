import { useStateContext } from "../context/StateContext";
import { EmptyScreen, List } from "../components";
import { CardProps } from "../types/types";

export default function Bookmarked() {
  const { collectionState } = useStateContext();
  const { collection } = collectionState;
  const bookmarkedList = collection.filter(
    (item: CardProps) => item.isBookmarked === true
  );
  const bookmarkedMoviesList = bookmarkedList.filter(
    (item: CardProps) => item.category === "Movie"
  );
  const bookmarkedSeriesList = bookmarkedList.filter(
    (item: CardProps) => item.category === "TV Series"
  );

  if (bookmarkedMoviesList.length < 1 && bookmarkedSeriesList.length < 1) {
    return <EmptyScreen text="You don't have any bookmarked shows" />;
  }

  return (
    <>
      <List title="Bookmarked Movies" collection={bookmarkedMoviesList} />
      <List title="Bookmarked Series" collection={bookmarkedSeriesList} />
    </>
  );
}
