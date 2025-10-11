import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gif-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string) => {
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
  };

  return (
    <>
      {/* Heade   */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar
        placeholder="Busca lo que quieras"
        buttonName="Buscar"
        onQuery={handleSearch}
      />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
