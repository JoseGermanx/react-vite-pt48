import { createContext, useEffect, useReducer } from "react";
import Api from "../api/api";

const GlobalContext = createContext(null);

// patron flux
const GlobalReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "loadPeople":
        return {...state, people: action.payload};
    case "loadPlanets":
        return {...state, planets: action.payload};
    case "loadVehicles":
        return {...state, vehicles: action.payload};
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function GlobalProvider({ children }) {
  const [global, globalActions] = useReducer(GlobalReducer, []);
  
  useEffect(() => {
// solo ejecutar una vez y cargar la info si no hay info en el global
    if (!global.people) {
      Api.getPeople().then((data) => {
        globalActions({ type: "loadPeople", payload: data.results });
      });
    }
    if (!global.planets) {
      Api.getPlanets().then((data) => {
        globalActions({ type: "loadPlanets", payload: data.results });
      });
    }
    if (!global.vehicles) {
      Api.getVehicles().then((data) => {
        globalActions({ type: "loadVehicles", payload: data.results });
      });
    }
  }, []);


  return (
    <GlobalContext.Provider value={{ global, globalActions }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
