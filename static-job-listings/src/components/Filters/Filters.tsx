import { IconRemove } from "../../icons/IconRemove";
import "./Filters.scss";

interface FiltersProps {
  filters: string[];
  clearAll: () => void;
  clearFilter: (filter: string) => void;
}

export const Filters = ({ filters, clearAll, clearFilter }: FiltersProps) => {
  return (
    <div className="filters">
      {filters.map((filter: string, index: number) => (
        <strong key={index}>
          {filter}
          <span className="remove" onClick={() => clearFilter(filter)}>
            <IconRemove />
          </span>
        </strong>
      ))}
      <button className="clear" onClick={() => clearAll()}>
        Clear
      </button>
    </div>
  );
};
