import { useEffect, useState } from "react";
import { Rating } from "../components/Rating";
import { Result } from "../components/Result";

function App() {
  const [isRated, setIsRated] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!value) {
      setError(true);
    } else {
      setIsRated(true);
    }
  };

  useEffect(() => {
    if (value) setError(false);
  }, [value]);

  return (
    <div className="form">
      {!isRated ? (
        <Rating
          value={value}
          setValue={setValue}
          error={error}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Result value={value} />
      )}
    </div>
  );
}

export default App;
