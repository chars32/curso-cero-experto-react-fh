interface Props {
  placeholder?: string;
  buttonName: string;
}

export const SearchBar = ({ placeholder = "Buscar", buttonName }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>{buttonName}</button>
    </div>
  );
};
