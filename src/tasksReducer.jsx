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

export default tasksReducer;
