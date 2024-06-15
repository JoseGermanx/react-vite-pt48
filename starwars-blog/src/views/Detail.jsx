
import React from "react";
import { useParams } from "react-router-dom";
import Api from "../api/api";
import FavContext from "../context/FavContext";
import starwars from "../assets/sw.svg";


const Detail = () => {
  const { id, type } = useParams();
  const [data, setData] = React.useState(null);

  const { favs } = React.useContext(FavContext);

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
    <div className="container bg-dark p-5 h-100 rounded" style={{marginTop: "110px"}}>
      <div className="container d-flex justify-content-center">
        <img
          src={starwars}
          alt=""
          width="200"
          className="align-text-top"
        />
      </div>
      {
        data == null ? (
          <div className="spinner-border text-secondary d-flex justify-content-center" role="status">
        </div>
        ) :
      type === "people" ? (
        <div>
          <h3>{type}</h3>
          <div className="d-flex"><h1>{data.name}</h1>
          {favs.find(
            (element) => element.id === id && element.type === type
          )  && (
            <button
              className="btn"
            >
              <i className="yellowcolor fa-solid fa-heart mx-1"></i>
            </button>
          )}</div>
          <p>Altura: {data.height}</p>
          <p>Peso: {data.mass}</p>
          <p>Color de cabello: {data.hair_color}</p>
        </div>
      ) : type === "planets" ? (
        <div>
           <h3>{type}</h3>
           <div className="d-flex"><h1>{data.name}</h1>
          {favs.find(
            (element) => element.id === id && element.type === type
          )  && (
            <button
              className="btn"
            >
              <i className="yellowcolor fa-solid fa-heart mx-1"></i>
            </button>
          )}</div>
          <p>Diámetro: {data.diameter}</p>
          <p>Clima: {data.climate}</p>
          <p>Terreno: {data.terrain}</p>
        </div>
      ) : type === "vehicles" ? (
        <div>
           <h3>{type}</h3>
           <div className="d-flex"><h1>{data.name}</h1>
          {favs.find(
            (element) => element.id === id && element.type === type
          )  && (
            <button
              className="btn"
            >
              <i className="yellowcolor fa-solid fa-heart mx-1"></i>
            </button>
          )}</div>
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
