import { ItemCounter } from "./ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      <ItemCounter productName="Nintendo Switch 2" quantity={1} />
      <ItemCounter productName="Pro Controller" quantity={2} />
      <ItemCounter productName="Super Smash" quantity={3} />
    </>
  );
}
