const SearchBar = ({ searchContent, setSearchContent }) => {
  // typing时，禁用 add input typing, sumbitting, searching
  // 搜索展示内容，需要提升组件状态
  return (
    <input
      type="text"
      value={searchContent}
      onChange={(e) => {
        setSearchContent(e.target.value);
      }}
    />
  );
};

export default SearchBar;
