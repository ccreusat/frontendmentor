import { useState } from "react";
import { PageProps } from "../types/types";

export default function useCounterPage() {
  const [page, setPage] = useState<PageProps>({
    countPage: 3,
    maxPageRecords: 15,
  });

  return {
    page,
    setPage,
  };
}
