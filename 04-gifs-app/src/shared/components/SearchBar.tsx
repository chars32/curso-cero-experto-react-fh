import { useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  buttonName: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Buscar",
  buttonName,
  onQuery,
}: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{buttonName}</button>
    </div>
  );
};
