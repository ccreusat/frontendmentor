export type ReactQueryProps = {
  isLoading: boolean;
  isError: boolean;
  data: any;
  error: any;
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
  requirements: any;
  role: any;
};

export type QueriesProps = {
  textFilter: string;
  locationFilter: string;
  fulltimeFilter: boolean;
};
