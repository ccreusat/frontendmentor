import { Fragment, useRef } from "react";
import { IconFilter, IconLocation, IconSearch } from "../../icons";
import { Button } from "../Button";
import { CustomCheckbox } from "../Checkbox";
import { Icon } from "../Icon";
import { FormFieldset } from "./Fieldset";
import { FormInput } from "./Input";
import { FormLabel } from "./Label";
import "./Form.css";
import { IconButton } from "../IconButton";

export const Form = ({ setQueries }: any) => {
  const refs = useRef<HTMLInputElement[]>([]);
  const addInputs = (target: any) => {
    if (target && !refs.current.includes(target)) {
      refs.current.push(target);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQueries({
      textFilter: refs.current[0]?.value,
      locationFilter: refs.current[1]?.value,
      fulltimeFilter: refs.current[2]?.checked,
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="container">
      <FormFieldset>
        <FormLabel htmlFor="textFilter">
          <IconSearch />
          <FormInput
            ref={addInputs}
            as="search"
            target="textFilter"
            placeholder="Filter by title, companies..."
          />
        </FormLabel>
      </FormFieldset>
      <FormFieldset>
        <FormLabel htmlFor="locationFilter">
          <IconLocation />
          <FormInput
            ref={addInputs}
            as="search"
            target="locationFilter"
            placeholder="Filter by location..."
          />
        </FormLabel>
      </FormFieldset>
      <FormFieldset>
        <CustomCheckbox
          ref={addInputs}
          text="Full Time Only"
          target="fulltimeFilter"
        />
        <IconButton className="button button-primary button-with-icon hidden-mobile hidden-desktop">
          <IconSearch />
        </IconButton>
        <Button type="submit" variant="primary">
          Search
        </Button>
      </FormFieldset>
    </form>
  );
};
