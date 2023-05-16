import { Job, QueriesProps } from "../types/types";

export function filterList(data: Job[], queries: QueriesProps) {
  let result = [...data];
  const { textFilter, locationFilter, fulltimeFilter } = queries;

  if (textFilter) {
    result = result.filter(
      (item: Job) =>
        item.position.toLowerCase().includes(textFilter.toLowerCase()) ||
        item.company.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
  if (locationFilter) {
    result = result.filter((item: Job) =>
      item.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
  }
  if (fulltimeFilter) {
    result = result.filter((item: Job) =>
      item.contract.toLowerCase().includes("Full Time".toLowerCase())
    );
  }
  return result;
}
