import AddTask from "./AddTask";
import ShowListState from "./ShowListState";
import TaskList from "./TaskList";

import { TaskProvider } from "./TasksContext";

const TaskApp = () => {
  return (
    <TaskProvider>
      <AddTask />
      <TaskList />
      <ShowListState />
    </TaskProvider>
  );
};

export default TaskApp;
