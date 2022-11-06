import { forwardRef } from "react";
import { FormInput } from "../Form/Input";
import { FormLabel } from "../Form/Label";

interface CustomCheckboxProps {
  text?: string;
  target: string;
}
export const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ text, target }, ref) => {
    return (
      <FormLabel htmlFor={target}>
        <FormInput ref={ref} as="checkbox" target={target} />
        <strong>{text}</strong>
      </FormLabel>
    );
  }
);
