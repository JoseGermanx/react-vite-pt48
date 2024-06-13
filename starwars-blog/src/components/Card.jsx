/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavContext from "../context/FavContext";
import Api from "../api/api";

const Card = ({ id, name, type }) => {
  const { favs, FavActions } = useContext(FavContext);
  const [properties, setProperties] = useState({})

  useEffect(() => {
    Api.getPeopleById(id).then((data) => {
      setProperties(data.result)
    });
  }, [id, type])


  return (
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
        {type === "people" && (
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
          {favs.find(
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
