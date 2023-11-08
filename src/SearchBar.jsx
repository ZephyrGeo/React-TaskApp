const SearchBar = ({ query, onChange }) => {
  // typing时，禁用 add input typing, sumbitting, searching

  return (
    <>
      <span>Search: </span>
      <input
        className="border-solid border-2 h-10 bg-white shadow rounded font-mono"
        type="text"
        value={query}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBar;
