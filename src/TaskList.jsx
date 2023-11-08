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

  return (
    <ul>
      {tasks.map((t) => (
        <li style={{ listStyleType: "none" }} key={t.id}>
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => toggleComplete(t.id)}
          />
          <span className={t.done ? "line-through font-mono" : "font-mono"}>
            {t.text}
          </span>
          <span>
            <button
              onClick={() => handleDelete(t.id)}
              className="bg-gray-300 hover:bg-gray-500"
            >
              delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
