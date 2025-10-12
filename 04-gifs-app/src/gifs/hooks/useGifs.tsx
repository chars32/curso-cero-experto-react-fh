import { useState, useCallback } from "react";
import { getGifsByQuery } from "../actions/get-gif-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
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
