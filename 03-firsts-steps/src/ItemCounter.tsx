import { useState } from "react";

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
    <section
      style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}
    >
      <span style={{ width: 150 }}>{productName}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
