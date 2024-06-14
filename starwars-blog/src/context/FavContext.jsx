import { createContext, useEffect, useReducer } from "react";

const FavContext = createContext(null);

// patron flux
const FavReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "add":
      if (state.find((element) => element.id === action.payload.id && element.type === action.payload.type)) {
        return [...state];
      }
      localStorage.setItem("favs", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case "remove":
        localStorage.setItem("favs", JSON.stringify(state.filter(
            (element) => element.id !== action.payload.id || element.type !== action.payload.type
        )));
        return state.filter(
            (element) => element.id !== action.payload.id || element.type !== action.payload.type
        )
    case "load":
        return action.payload;
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function FavProvider({ children }) {
  const [favs, FavActions] = useReducer(FavReducer, []);

  useEffect(() => {
    const data = localStorage.getItem("favs");
    if (data) {
      FavActions({ type: "load", payload: JSON.parse(data) });
    }
  },[]);


  return (
    <FavContext.Provider value={{ favs, FavActions }}>
      {children}
    </FavContext.Provider>
  );
}

export default FavContext;
