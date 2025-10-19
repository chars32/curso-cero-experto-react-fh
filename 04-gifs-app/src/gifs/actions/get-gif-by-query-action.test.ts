import { describe, expect, test } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import { getGifsByQuery } from "./get-gif-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../tests/mock/giphy.response.data";

describe("Giphy API", () => {
  const mock = new AxiosMockAdapter(giphyApi);
  // test("should return a list of gifs", async () => {
  //   const gifs = await getGifsByQuery("matrix");
  //   const [gif1] = gifs;

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //     height: expect.any(Number),
  //   });
  // });

  test("should retunr a lisft of gifts", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery("matrix");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
      expect(typeof gif.height).toBe("number");
    });
  });
});
