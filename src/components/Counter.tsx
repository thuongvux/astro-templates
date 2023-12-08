import { useEffect, useState } from "preact/hooks";
export const Counter = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("hello browser");
  }, []);
  return (
    <div>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
};
