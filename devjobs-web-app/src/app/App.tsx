// React
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";
// Layout
import { Layout } from "../layouts/Layout";
// Routes
import { NoMatch } from "../pages/404";
import { Home } from "../pages/Home";
// API
import { getJobs } from "../api/api";
import { EmptyScreen } from "../components";

// Lazy Loading Detail Page > we don't need that page at first rendering and until route is known
const DetailPage = lazy(() => import("../pages/Detail"));

export interface PageProps {
  countPage: number;
  maxPageRecords: number;
}

export const App = (): JSX.Element => {
  // To handle jobs data
  const [collectionRef, setCollectionRef] = useState<string[]>([]);
  // To handle page count (limit and slice data) > fake paginated api
  const [page, setPage] = useState<PageProps>({
    countPage: 3,
    maxPageRecords: 15,
  });
  // To handle max count reached and hide load more button
  const [isLoadable, setIsLoadable] = useState<boolean>(true);

  // Use of React Query
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["jobs", page.countPage],
      queryFn: () => getJobs(page.countPage),
      keepPreviousData: true,
    });

  // When data from React Query is ready, set collection ref []
  useEffect(() => {
    if (data) setCollectionRef(data);
  }, [data]);

  // Fake Max Count Page API
  useEffect(() => {
    const { countPage, maxPageRecords } = page;
    if (countPage === maxPageRecords) setIsLoadable(false);
  }, [page]);

  if (isLoading) {
    return <EmptyScreen text="Loading..." />;
  }

  if (isError) {
    return <EmptyScreen text={error as string} />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                collectionRef={collectionRef}
                setPage={setPage}
                isLoadable={isLoadable}
                isFetching={isFetching}
                isPreviousData={isPreviousData}
              />
            }
          ></Route>
          <Route
            path=":id"
            element={
              <Suspense fallback="Loading...">
                <DetailPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};
