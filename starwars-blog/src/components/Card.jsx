/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavContext from "../context/FavContext";
import Api from "../api/api";
import GlobalContext from "../context/GlobalContext";

const Card = ({ id, name, type }) => {
  const { favs, FavActions } = useContext(FavContext);
  const [properties, setProperties] = useState({})
  const { global } = useContext(GlobalContext);

  useEffect(() => {
    if (type === "people" && global.people.length !== 0) {
     setProperties(global.people.find((element) => element.uid === id));
    } else if (type === "planets" && global.people.length !== 0) {
      setProperties(global.planets.find((element) => element.uid === id));
    } else if (type === "vehicles" && global.people.length !== 0) {
      setProperties(global.vehicles.find((element) => element.uid === id));
    }
  }, [global.people, global.planets, global.vehicles, id, type])


  return (
    <div className="card mx-1 mb-4" style={{ width: "12rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
        {!type ? <div className="spinner-border text-secondary" role="status"></div> : type === "people" && (
          <>
          {/* <p className="card-text">{properties.properties.gender}</p> */}
          <p className="card-text">{properties.description}</p>
          </>
        )
        }
        <div className="d-flex justify-content-between">
          <Link className="btn btn-secondary" to={`/${type}/${id}`}>
            more...
          </Link>
          {favs && favs.find(
            (element) => element.id === id && element.type === type
          ) ? (
            <button
              onClick={() =>
                FavActions({ type: "remove", payload: { id, name, type } })
              }
              className="btn"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={() =>
                FavActions({ type: "add", payload: { id, name, type } })
              }
              className="btn"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
