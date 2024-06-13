import { createContext, useReducer } from "react";

const FavContext = createContext(null);

// patron flux
const FavReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "add":
      if (state.find((element) => element.id === action.payload.id && element.type === action.payload.type)) {
        return [...state];
      }
      return [...state, action.payload];
    case "remove":
      state.shift();
      return [...state];
    case "remove-id":
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function FavProvider({ children }) {
  const [favs, FavActions] = useReducer(FavReducer, []);
  return (
    <FavContext.Provider value={{ favs, FavActions }}>
      {children}
    </FavContext.Provider>
  );
}

export default FavContext;
