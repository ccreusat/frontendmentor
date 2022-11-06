type FormLabelProps = {
  htmlFor: string;
  children?: JSX.Element | JSX.Element[];
};
export const FormLabel = ({ htmlFor, children }: FormLabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
