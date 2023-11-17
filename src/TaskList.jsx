import { useState, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

const TaskList = () => {
  const tasks = useContext(TasksContext);
  const incompleteTasks = tasks.filter((t) => t.done === false);
  const completedTasks = tasks.filter((t) => t.done === true);

  return (
    <ul>
      {incompleteTasks.map((t) => (
        <li key={t.id}>
          <TaskItem key={t.id} task={t} />
        </li>
      ))}
      {completedTasks.map((t) => (
        <li key={t.id}>
          <TaskItem key={t.id} task={t} />
        </li>
      ))}
    </ul>
  );
};

const TaskItem = ({ task }) => {
  const dispatch = useContext(TasksDispatchContext);

  const toggleComplete = (id) => {
    dispatch({
      type: "toggled",
      id: id,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "deleted",
      id: id,
    });
  };

  const handleChange = (e, task) => {
    dispatch({
      type: "changed",
      task: {
        ...task,
        text: e.target.value,
      },
    });
  };
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => handleChange(e, task)}
        />
        <span>
          <button
            className="bg-gray-300 hover:bg-gray-500"
            onClick={() => setIsEditing(false)}
          >
            save
          </button>
        </span>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className={task.done ? "line-through font-mono" : "font-mono"}>
          {task.text}
        </span>
        <span>
          <button
            className="bg-gray-200 hover:bg-gray-500"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </span>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleComplete(task.id)}
      />
      {taskContent}
      <span>
        <button
          onClick={() => handleDelete(task.id)}
          className="bg-gray-300 hover:bg-gray-500"
        >
          delete
        </button>
      </span>
    </label>
  );
};

export default TaskList;
