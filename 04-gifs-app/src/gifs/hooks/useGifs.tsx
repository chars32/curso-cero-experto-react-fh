import { useState, useCallback, useRef } from "react";
import { getGifsByQuery } from "../actions/get-gif-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = useCallback(
    async (query: string) => {
      // Convertimos la query a minúsculas y eliminamos espacios en blanco al inicio
      // y al final
      query = query.trim().toLowerCase();

      // Si la query está vacía, no hacemos nada
      if (query.trim().length === 0) return;

      // Si la query no está en el array de términos previos, la añadimos al inicio
      // y limitamos el array a 5 términos
      if (!previousTerms.includes(query)) {
        setPreviousTerms((prevTerms) => [query, ...prevTerms].splice(0, 5));
      }

      const gifs = await getGifsByQuery(query);
      setGifs(gifs);
      gifsCache.current[query] = gifs;
    },
    [previousTerms]
  );
  return {
    // Properties
    gifs,
    previousTerms,
    // Methods / Actions
    handleSearch,
    handleTermClicked,
  };
};
