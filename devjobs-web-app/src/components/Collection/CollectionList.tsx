import { filterList } from "../../utils/filterList";
import { Card } from "../Card";
import { homeQuery } from "../../pages/home";
import { useQuery } from "react-query";
import { Job } from "../../types/types";
import { useActionData } from "react-router-dom";

export const CollectionList = ({ queries }: any) => {
  const actionData = useActionData();

  /* const [page, setPage] = useState<PageProps>({
    countPage: 3,
    maxPageRecords: 15,
  }); */

  const { data: jobs } = useQuery(homeQuery());

  console.log({ actionData });

  return (
    <div className="list">
      {jobs.length > 0 ? (
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
