import type { CSSProperties } from "react";

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 20,
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>Carlos</h1>
      <h3 style={myStyles}>García</h3>
    </>
  );
}
