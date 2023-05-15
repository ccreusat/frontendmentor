import { Button } from "../Button";

type CollectionFooterProps = {
  isLoadable: boolean;
  isFetching: boolean;
  isPreviousData: boolean;
  setPage: (state: any) => void;
};
export const CollectionFooter = ({
  isLoadable,
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
      {isLoadable && (
        <Button
          type="button"
          variant="primary"
          disabled={!isLoadable}
          onClick={() => {
            if (!isPreviousData && isLoadable) {
              setPage((prevState: { countPage: number }) => ({
                ...prevState,
                countPage: prevState.countPage + 3,
              }));
            }
          }}
        >
          {isFetching ? "Loading..." : "Load More"}
        </Button>
      )}
    </footer>
  );
};
