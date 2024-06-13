import { createContext, useReducer } from "react";
import Api from "../api/api";

const GlobalContext = createContext(null);

// patron flux
const GlobalReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "loadData":
        Api.getPeople().then((data) => {
            state.push({type: "people", data: data.results})
            })
        Api.getPlanets().then((data) => 
            state.push({type: "planets", data: data.results})
        )
        Api.getVehicles().then((data) => {
            state.push({type: "vehicles", data: data.results})
        })
        return state;
    case "remove":
        return state.filter(
            (element) => element.id !== action.payload.id || element.type !== action.payload.type
        )
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function GlobalProvider({ children }) {
  const [global, globalActions] = useReducer(GlobalReducer, []);
  return (
    <GlobalContext.Provider value={{ global, globalActions }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
