import { useState } from "react";
const SearchBar = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const filterTask = (tasks, query) => {
    query = query.toLowerCase();
    return tasks.filter((task) =>
      task.text.split(" ").some((word) => word.toLowerCase().startsWith(query))
    );
  };

  const results = filterTask(tasks, query);
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
