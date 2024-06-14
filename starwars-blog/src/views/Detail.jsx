/* componente para la vista de detalle de un personaje */
/* props 
"properties": {
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "created": "2024-06-12T17:38:22.652Z",
      "edited": "2024-06-12T17:38:22.652Z",
      "name": "Luke Skywalker",
      "homeworld": "https://www.swapi.tech/api/planets/1",
      "url": "https://www.swapi.tech/api/data/1"
    },
    "description": "A person within the Star Wars universe",
    */
import React from "react";
import { useParams } from "react-router-dom";
import Api from "../api/api";

const Detail = () => {
  const { id, type } = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (type === "people") {
      Api.getPeopleById(id).then((data) => {
        setData(data.result.properties);
      });
    } else if (type === "planets") {
      Api.getPlanetsById(id).then((data) => {
        setData(data.result.properties);
      });
    } else if (type === "vehicles") {
      Api.getVehiclesById(id).then((data) => {
        setData(data.result.properties);
      });
    }
  }, [id, type]);

  return (
    <div>
      {
        data == null ? (
          <div className="spinner-border text-primary d-flex justify-content-center" role="status">
        </div>
        ) :
      type === "people" ? (
        <div>
          <h1>{data.name}</h1>
          <p>Altura: {data.height}</p>
          <p>Peso: {data.mass}</p>
          <p>Color de cabello: {data.hair_color}</p>
        </div>
      ) : type === "planets" ? (
        <div>
          <h1>{data.name}</h1>
          <p>Diámetro: {data.diameter}</p>
          <p>Clima: {data.climate}</p>
          <p>Terreno: {data.terrain}</p>
        </div>
      ) : type === "vehicles" ? (
        <div>
          <h1>{data.name}</h1>
          <p>Modelo: {data.model}</p>
          <p>Fabricante: {data.manufacturer}</p>
          <p>Costo en créditos: {data.cost_in_credits}</p>
        </div>
      ) : (
        <div>
          <h1>404</h1>
          <p>Not found</p>
        </div>
      )}
    </div>
  );
};
export default Detail;
