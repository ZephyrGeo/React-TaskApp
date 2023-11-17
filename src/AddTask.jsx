import { useState } from "react";
import { useContext } from "react";
import { TasksDispatchContext } from "./TasksContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  // add todo
  const handleAddTask = () => {
    if (text === null) return;
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  // key enter todo
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
      setText("");
    }
  };
  return (
    <div>
      <input
        className="border-solid border-2 h-10 bg-white shadow rounded font-mono"
        type="text"
        value={text}
        onKeyPress={handleInputKeyPress}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTask(text);
          setText("");
        }}
        disabled={text.length === 0}
        className="bg-sky-500 hover:bg-sky-700 p-3 "
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;

let nextId = 3;
