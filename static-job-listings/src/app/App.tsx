import "./App.scss";
import db from "../db/data.json";
import { CardList } from "../components/CardList/CardList";
import { Header } from "../components/Header/Header";
import { Filters } from "../components/Filters/Filters";
import JOBS from "../utils/helpers";
import { BackToTopButton } from "../components/BackToTopButton/BackToTopButton";
import { useEffect, useState } from "react";

const App = () => {
  const [filters, setFilters] = useState<any[]>([]);
  const [data, setData] = useState<any>([]);

  useEffect(() => setData(db));

  /* useEffect(() => {
    JOBS.onScrollElements();
  }, []); */

  const isFiltersIncluded = (el: string | any[], value: any) => {
    return el.includes(value);
  };

  const filterBy = (filter: string) => {
    if (!isFiltersIncluded(filters, filter)) {
      setFilters(prevState => [...prevState, filter]);
    }
  };

  const clearFilter = (tag: string) => {
    setFilters(filters.filter(item => item !== tag));
  };

  const clearAll = () => setFilters([]);

  return (
    <>
      <Header />
      {filters.length > 0 && (
        <Filters
          filters={filters}
          clearFilter={clearFilter}
          clearAll={clearAll}
        />
      )}
      <CardList data={data} filters={filters} filterBy={filterBy} />
      {/* <BackToTopButton scrollToTop={JOBS.scrollToTop} /> */}
    </>
  );
};

export default App;
