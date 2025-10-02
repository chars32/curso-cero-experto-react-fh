import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test item";

    render(<ItemCounter productName={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Pro Controller";
    const quantity = 10;

    render(<ItemCounter productName={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });
});
