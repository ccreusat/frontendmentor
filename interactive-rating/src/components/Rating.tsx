import { BlockText } from "./BlockText";
import { Icon } from "./Icon";
import { Card } from "./Card";

interface IRating {
  error: boolean;
  value: number;
  setValue: (item: number) => void;
  handleSubmit: () => void;
}

const VALUES = [1, 2, 3, 4, 5];

export const Rating = ({ error, value, setValue, handleSubmit }: IRating) => {
  const handleValue = (item: number) => setValue(item);
  const activeClass = (item: number) => (value === item ? "selected" : "");

  return (
    <Card>
      <Icon />
      <BlockText
        title="How did we do?"
        text="Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!"
      />

      <ol>
        {VALUES.map((item, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleValue(item)}
                className={`${activeClass(item)}`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ol>

      <>{error && <p className="error">You have to make a choice!</p>}</>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </Card>
  );
};
