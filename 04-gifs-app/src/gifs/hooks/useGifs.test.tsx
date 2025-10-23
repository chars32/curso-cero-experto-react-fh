import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";

import * as giftActions from "../actions/get-gif-by-query.action";

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    // handleSearch
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleSearch("matrix");
    });

    expect(result.current.gifs.length).toBe(10);
  });
  test("should return a list of gifs when handleTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleTermClicked("matrix");
    });

    expect(result.current.gifs.length).toBe(10);
  });
  test("shopuld return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("matrix");
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(giftActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error")
    );

    await act(async () => {
      await result.current.handleTermClicked("matrix");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should no return more than 5 previous terms", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(giftActions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("matrix1");
    });
    await act(async () => {
      await result.current.handleSearch("matrix2");
    });
    await act(async () => {
      await result.current.handleSearch("matrix3");
    });
    await act(async () => {
      await result.current.handleSearch("matrix4");
    });
    await act(async () => {
      await result.current.handleSearch("matrix5");
    });
    await act(async () => {
      await result.current.handleSearch("matrix6");
    });

    expect(result.current.previousTerms.length).toBe(5);
    expect(result.current.previousTerms).toStrictEqual([
      "matrix6",
      "matrix5",
      "matrix4",
      "matrix3",
      "matrix2",
    ]);
  });
});
