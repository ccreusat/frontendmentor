import { filterList } from "../../utils/filterList";
import { Card } from "../Card";
import { useQuery } from "react-query";
import { Job } from "../../types/types";
import { homeQuery } from "../../pages/Home";

export const CollectionList = ({ queries }: any) => {
  const { data: jobs } = useQuery<Job[]>(homeQuery());

  return (
    <div className="list">
      {jobs && jobs.length > 0 ? (
        <>
          {filterList(jobs, queries).map((item: Job) => (
            <Card key={item.id} {...item} />
          ))}
        </>
      ) : (
        <p style={{ textAlign: "center" }}>No results found...</p>
      )}
    </div>
  );
};
