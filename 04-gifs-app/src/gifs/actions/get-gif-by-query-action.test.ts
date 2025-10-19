import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gif-by-query.action";

describe("Giphy API", () => {
  test("should return a list of gifs", async () => {
    const gifs = await getGifsByQuery("matrix");
    const [gif1] = gifs;

    expect(gif1).toStrictEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      width: expect.any(Number),
      height: expect.any(Number),
    });
  });
});
