import { forwardRef } from "react";

type FormInputProps = {
  as: string;
  target: string;
  placeholder?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ as, target, placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type={as}
        name={target}
        id={target}
        placeholder={placeholder}
      />
    );
  }
);
