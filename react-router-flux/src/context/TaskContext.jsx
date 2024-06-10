import { createContext, useReducer } from "react";

const TaskContext = createContext(null);

// patron flux
const TaskReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      state.shift()
      return [...state];
    case "remove-id":
      state.splice(action.payload, 1);
      return [...state];
    case "update":
      state[action.payload.id] = action.payload.task;
      return [...state];
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {
  const [tasks, taskActions] = useReducer(TaskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, taskActions }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
