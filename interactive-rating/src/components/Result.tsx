import { BlockText } from "./BlockText";
import { Illustration } from "./Illustration";

interface IResult {
  value: number;
}

export const Result = ({ value = 0 }: IResult) => {
  return (
    <fieldset className="align-items-center">
      <Illustration />

      <span className="badge">
        You selected <span>{value}</span> out of 5
      </span>

      <BlockText
        title="Thank you"
        text="We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!"
      />
    </fieldset>
  );
};
