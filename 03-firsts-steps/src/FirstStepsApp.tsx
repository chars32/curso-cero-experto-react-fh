import { ItemCounter } from "./ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smas", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsCart.map(({ productName, quantity }) => (
        <ItemCounter
          key={productName}
          productName={productName}
          quantity={quantity}
        />
      ))}

      {/* <ItemßCounter productName="Nintendo Switch 2" quantity={1} />
      <ItemCounter productName="Pro Controller" quantity={2} />
      <ItemCounter productName="Super Smash" quantity={3} /> */}
    </>
  );
}
