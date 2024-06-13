import { createContext, useReducer } from "react";
import Api from "../api/api";

const GlobalContext = createContext(null);

// patron flux
const GlobalReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "loadData":
        Api.getPeople().then((data) => {
            data.results.map((element) => {
                state.push({id: element.uid, name: element.name, type: "people"})
            })
        });
        Api.getPlanets().then((data) => {
            data.results.map((element) => {
                state.push({id: element.uid, name: element.name, type: "planets"})
            })
        });
        Api.getVehicles().then((data) => {
            data.results.map((element) => {
                state.push({id: element.uid, name: element.name, type: "vehicles"})
            })
        });
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
