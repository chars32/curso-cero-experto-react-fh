import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphy", () => {
  test("should be conf", () => {
    const params = giphyApi.defaults.params;
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.lang).toBe("es");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(params).toStrictEqual({
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      lang: "es",
    });

    // expect(giphyApi.defaults.params.lang).toBe("https://api.giphy.com/v1/gifs");
  });
});
