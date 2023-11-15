const SearchBar = ({ query, onChange }) => {
  // typing时，禁用 add input typing, sumbitting, searching

  return (
    <div>
      <span>Search: </span>
      <input
        className="border-solid border-2 h-10 bg-white shadow rounded font-mono"
        type="text"
        value={query}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
