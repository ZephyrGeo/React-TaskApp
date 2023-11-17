import { createContext, useContext, useReducer } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
export const useDispatch = () => useContext(TasksDispatchContext);

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        {
          id: action.id,
          text: action.text,
          done: false,
        },
        ...tasks,
      ];
    }
    case "toggled": {
      return tasks.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("未知 action：" + action.type);
    }
  }
};

const initialTasks = [
  { id: 1, text: "make ppt", done: false },
  { id: 2, text: "post something", done: false },
];
