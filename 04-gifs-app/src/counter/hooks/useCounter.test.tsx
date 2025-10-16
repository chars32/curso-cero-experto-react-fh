import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initialize with value 20", () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when handleSubtract is called", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.handlesubtract();
    });
    expect(result.current.counter).toBe(9);
  });

  test("should reset counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());
    // Resto 1 para que no quede en el valor inicial
    act(() => {
      result.current.handlesubtract();
    });

    expect(result.current.counter).toBe(9);

    // Sumo 3 para que no quede en el valor inicial
    act(() => {
      result.current.handleAdd();
    });
    act(() => {
      result.current.handleAdd();
    });
    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(12);

    // Reseteo al valor inicial
    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
