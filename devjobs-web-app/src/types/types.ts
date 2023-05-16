import { UseQueryResult } from "react-query";

export type ReactQueryProps = {
  isLoading: boolean;
  isError: boolean;
  data: UseQueryResult;
  error: Error;
  isFetching: boolean;
  isPreviousData: boolean;
};

export type ItemProps = {
  id: number;
  slug: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
};

export type JobProps = {
  id: number;
  slug: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  apply: string;
  website: string;
  location: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};

export type QueriesProps = {
  textFilter: string;
  locationFilter: string;
  fulltimeFilter: boolean;
};

export interface PageProps {
  countPage: number;
  maxPageRecords: 15;
}

export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}
