import { Card } from "../Card/Card";
import "./CardList.scss";

interface CardListProps {
  data: [];
  filters: string[];
  filterBy: (filter: string) => void;
}

export const CardList = ({ data, filters, filterBy }: CardListProps) => {
  return (
    <main className="jobs-list">
      {data.map((job: any) => {
        let jobTags = [
          job.role,
          job.level,
          ...(job.languages || []),
          ...(job.tools || []),
        ];
        let filterJobs = filters.every((value: any) => jobTags.includes(value));
        return (
          filterJobs && (
            <Card
              key={job.id}
              job={job}
              filterBy={filterBy}
              jobTags={jobTags}
            />
          )
        );
      })}
    </main>
  );
};
