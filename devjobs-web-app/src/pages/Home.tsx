import { useState } from "react";
import { CollectionFooter } from "../components/Collection/CollectionFooter";
import { CollectionList } from "../components/Collection/CollectionList";
import { Form } from "../components/Form";

type HomeProps = {
  collectionRef: string[];
  isFetching: boolean;
  isLoadable: boolean;
  isPreviousData: boolean;
  setPage: (arg: any) => void;
};

export const Home = ({
  collectionRef,
  isFetching,
  isLoadable,
  isPreviousData,
  setPage,
}: HomeProps): JSX.Element => {
  const [queries, setQueries] = useState({
    textFilter: "",
    locationFilter: "",
    fulltimeFilter: false,
  });

  return (
    <section
      className="container"
      style={{
        marginBottom: "5rem",
      }}
    >
      <h1 className="sr-only">Devjobs Web App</h1>
      <Form setQueries={setQueries} />
      <CollectionList collectionRef={collectionRef} queries={queries} />
      <CollectionFooter
        isLoadable={isLoadable}
        isPreviousData={isPreviousData}
        isFetching={isFetching}
        setPage={setPage}
      />
    </section>
  );
};
