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

const Todo = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialList);

  return (
    <>
      {/* <SearchBar
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      /> */}
      <AddTask dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
      <ShowListState tasks={tasks} />
    </>
  );
};

export default Todo;
