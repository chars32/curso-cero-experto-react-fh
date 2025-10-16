import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => {
  return {
    useCounter: () => ({
      counter: 50,
      handleAdd: handleAddMock,
      handlesubtract: handleSubtractMock,
      handleReset: handleResetMock,
    }),
  };
});

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "counter: 50"
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test('should call handleAdd when the "+1" button is clicked', () => {
    render(<MyCounterApp />);

    const btnAdd = screen.getByRole("button", { name: "+1" });
    fireEvent.click(btnAdd);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSubtractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
