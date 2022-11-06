import { Button } from "../Button";

export const IconButton = ({ children, ...props }: any) => {
  return (
    <Button {...props} variant="primary" type="submit" withIcon={true}>
      {children}
    </Button>
  );
};
