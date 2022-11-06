import { ItemProps } from "../../types/types";
import { filterList } from "../../utils/filterList";
import { Card } from "../Card";

export const CollectionList = ({ collectionRef, queries }: any) => {
  return (
    <div className="list">
      {collectionRef.length > 0 ? (
        filterList(collectionRef, queries).map((item: ItemProps) => (
          <Card key={item.id} {...item} />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No results found...</p>
      )}
    </div>
  );
};
