/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavContext from "../context/FavContext";
import Api from "../api/api";
import GlobalContext from "../context/GlobalContext";

const Card = ({ id, name, type }) => {
  const { favs, FavActions } = useContext(FavContext);
  // const [properties, setProperties] = useState({})

  // useEffect(() => {
  //   if (type === "people") {
  //     Api.getPeopleById(id).then((data) => {
  //       setProperties(data.results);
  //     });
  //   } else if (type === "planets") {
  //     Api.getPlanetsById(id).then((data) => {
  //       setProperties(data.results);
  //     });
  //   } else if (type === "vehicles") {
  //     Api.getVehiclesById(id).then((data) => {
  //       setProperties(data.results);
  //     });
  //   }
  // }, [])


  return (
    <div className="card mx-1 mb-4 h-100 bg-dark text-light" style={{ width: "12rem" }}>
      <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
        {
        // type === "people" && (
        //   <>
        //   {/* <p className="card-text">{properties.gender}</p> */}
        //   {/* <p className="card-text">{properties.description}</p> */}
        //   </>
        // )
        }
        <div className="d-flex justify-content-between">
          <Link className="btn btn-secondary yellowcolor" to={`/${type}/${id}`}>
            more
          </Link>
          {favs.find(
            (element) => element.id === id && element.type === type
          ) ? (
            <button
              onClick={() =>
                FavActions({ type: "remove", payload: { id, name, type } })
              }
              className="btn"
            >
              <i className="yellowcolor fa-solid fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={() =>
                FavActions({ type: "add", payload: { id, name, type } })
              }
              className="btn"
            >
              <i className="yellowcolor fa-regular fa-heart"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
