import { FormInputProps } from "../../types/types";

export default function FormInput({
  htmlFor,
  label,
  placeholder,
  formRef,
  type,
  name,
  id,
  required,
}: FormInputProps) {
  return (
    <div>
      <label className="sr-only" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        ref={formRef}
        type={type}
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
