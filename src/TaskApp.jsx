import { useState } from "react";
import { useReducer } from "react";
import tasksReducer from "./tasksReducer";
import SearchBar from "./SearchBar";
import AddTask from "./AddTask";
import ShowListState from "./ShowListState";
import TaskList from "./TaskList";

const initialList = [
  { id: 1, text: "make ppt", done: false },
  { id: 2, text: "post something", done: false },
];

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialList);

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
    <>
      <SearchBar dispatch={dispatch} query={query} onChange={onChange} />
      <AddTask dispatch={dispatch} />
      <TaskList tasks={results} dispatch={dispatch} />
      <ShowListState tasks={tasks} />
    </>
  );
};

export default TaskApp;
