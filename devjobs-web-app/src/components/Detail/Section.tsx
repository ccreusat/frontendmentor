import { ReactNode } from "react";

type ListItemProps = string;

type DetailSectionProps = {
  title: string;
  content: string;
  items: string[];
  unordered: boolean;
};

export const DetailSectionList = ({
  unordered,
  children,
}: {
  unordered: boolean;
  children: ReactNode;
}): JSX.Element => {
  if (unordered) {
    return <ul>{children}</ul>;
  } else {
    return <ol>{children}</ol>;
  }
};

export const DetailSection = ({
  title,
  content,
  items,
  unordered,
}: DetailSectionProps): JSX.Element => {
  return (
    <>
      <h3>{title}</h3>

      <p>{content}</p>

      <DetailSectionList unordered={unordered}>
        {items.map((item: ListItemProps, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </DetailSectionList>
    </>
  );
};
