import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    // screen.debug();

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Carlos");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("García");
  });

  test("should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByRole("heading", {
      level: 1,
    });

    expect(h1.innerHTML).toContain("Carlos");
  });

  test("should match snapshot", () => {
    // const { container } = render(<MyAwesomeApp />);

    // expect(container).toMatchSnapshot();

    render(<MyAwesomeApp />);
    expect(screen.getByTestId("test-id")).toMatchSnapshot();
  });
});
