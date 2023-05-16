/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { CollectionList } from "../components/Collection/CollectionList";
import { Form } from "../components/Form";
import { getJobs } from "../api/api";
import { QueryClient, useQuery } from "react-query";
import { EmptyScreen } from "../components";
import { ActionFunctionArgs, defer, useActionData } from "react-router-dom";

export const homeQuery = () => {
  return {
    queryKey: ["jobs"],
    queryFn: () => getJobs(),
    keepPreviousData: true,
  };
};

export const loader = (queryClient: QueryClient) => {
  return async () => {
    const query = homeQuery();
    return defer({
      jobs:
        queryClient.getQueryData(query.queryKey) ??
        queryClient.fetchQuery(query),
    });
  };
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  console.log("action", { params, request });
  return 6;
};

const Home = (): JSX.Element => {
  const [queries, setQueries] = useState({
    textFilter: "",
    locationFilter: "",
    fulltimeFilter: false,
  });

  const actionData = useActionData();

  // const { jobs } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  // const { jobs } = useLoaderData() as { jobs: Job[] };
  const { isLoading } = useQuery(homeQuery());

  console.log({ actionData });

  if (isLoading) return <EmptyScreen text="Loading..." />;

  return (
    <section
      className="container"
      style={{
        marginBottom: "5rem",
      }}
    >
      <h1 className="sr-only">Devjobs Web App</h1>
      <Form setQueries={setQueries} />
      <CollectionList queries={queries} />
      {/* <Suspense fallback={<EmptyScreen text="Loading..." />}>
        <Await
          resolve={jobs}
          errorElement={<div>Could not load some data 😬</div>}
        >
          <CollectionList queries={queries} />
        </Await>
      </Suspense> */}
    </section>
  );
};

export default Home;
