import { useState } from "react";

export const useCounter = (iniialValue: number = 1) => {
  const [counter, setCounter] = useState(iniialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};
