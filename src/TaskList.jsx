const TaskList = ({ tasks, dispatch }) => {
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

  const incompleteTasks = tasks.filter((t) => t.done === false);
  const completedTasks = tasks.filter((t) => t.done === true);

  const TaskItem = ({ task, toggleComplete, handleDelete }) => {
    return (
      <li style={{ listStyleType: "none" }} key={task.id}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleComplete(task.id)}
        />
        <span className={task.done ? "line-through font-mono" : "font-mono"}>
          {task.text}
        </span>
        <span>
          <button
            onClick={() => handleDelete(task.id)}
            className="bg-gray-300 hover:bg-gray-500"
          >
            delete
          </button>
        </span>
      </li>
    );
  };

  return (
    <ul>
      {incompleteTasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
        />
      ))}
      {completedTasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
