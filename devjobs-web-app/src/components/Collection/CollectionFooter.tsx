import { Form } from "react-router-dom";
import { Button } from "../Button";

type CollectionFooterProps = {
  isFetching: boolean;
  isPreviousData: boolean;
  setPage: (state: any) => void;
};
export const CollectionFooter = ({
  isFetching,
  isPreviousData,
  setPage,
}: CollectionFooterProps): JSX.Element => {
  return (
    <footer
      style={{
        marginTop: "5rem",
        textAlign: "center",
      }}
    >
      <Form method="post">
        <Button
          type="submit"
          variant="primary"
          disabled={isPreviousData}
          onClick={() => {
            if (!isPreviousData) {
              setPage((prevState: { countPage: number }) => ({
                ...prevState,
                countPage: prevState.countPage + 3,
              }));
            }
          }}
        >
          {isFetching ? "Loading..." : "Load More"}
        </Button>
      </Form>
    </footer>
  );
};
