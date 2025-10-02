import type { CSSProperties } from "react";

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 20,
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <div>
      <h1 className="my-class">Carlos</h1>
      <h3 style={myStyles}>García</h3>
      <h4 data-testid="test-id">Nuevo texto</h4>
    </div>
  );
}
