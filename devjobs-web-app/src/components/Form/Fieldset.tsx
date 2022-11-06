type FormFieldsetProps = {
  children?: JSX.Element | JSX.Element[];
};

export const FormFieldset = ({ children }: FormFieldsetProps) => {
  return <fieldset>{children}</fieldset>;
};
