import { useStateContext } from "../context/StateContext";
import { List } from "../components";
import { CardProps } from "../types/types";

export default function Home() {
  const { collectionState } = useStateContext();
  const collection = collectionState.collection;

  const trendingList: CardProps[] = collection.filter(
    (item: CardProps) => item.isTrending
  );
  const recommendedList: CardProps[] = collection.filter(
    (item: CardProps) => !item.isTrending
  );

  return (
    <>
      <List
        title="Trending"
        collection={trendingList}
        isTrendingSection={true}
      />
      <List title="Recommended for you" collection={recommendedList} />
    </>
  );
}
