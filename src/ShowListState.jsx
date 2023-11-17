import { useContext } from "react";
import { TasksContext } from "./TasksContext.jsx";

const ShowListState = () => {
  const tasks = useContext(TasksContext);
  const total = tasks.length;
  const done = tasks.filter((t) => t.done === true).length;
  const rest = tasks.filter((t) => t.done === false).length;
  return (
    <p className="font-mono">
      共{total}项代办,已完成{done}项，剩余{rest}项
    </p>
  );
};

export default ShowListState;
