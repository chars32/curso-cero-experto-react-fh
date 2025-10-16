import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);

    screen.debug();

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 5"
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test('should increment the counter when the "+1" button is clicked', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const btnAdd = screen.getByRole("button", { name: "+1" });

    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);

    expect(labelH1.innerHTML).toContain("counter: 8");
  });

  test('should decrement the counter when the "-1" button is clicked', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const btnSubtract = screen.getByRole("button", { name: "-1" });

    fireEvent.click(btnSubtract);
    fireEvent.click(btnSubtract);
    fireEvent.click(btnSubtract);

    expect(labelH1.innerHTML).toContain("counter: 2");
  });
});
