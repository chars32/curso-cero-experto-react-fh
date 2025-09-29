import { useState } from "react";

import "./ItemCounter.css";

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    count < 1 ? 0 : setCount(count - 1);
  };

  return (
    <section className="item-row">
      <span className="item-text">{productName}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
