import { ReactNode } from "react";
import { Button } from "../Button";

export const IconButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      className={className}
      variant="primary"
      type="submit"
      withIcon={true}
    >
      {children}
    </Button>
  );
};
