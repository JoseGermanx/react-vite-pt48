/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../context/FavContext";

const Card = ({ id, name, type }) => {
  const { favs, FavActions } = useContext(FavContext);

  return (
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
        <div className="d-flex justify-content-between">
          <Link className="btn btn-primary" to={`/${type}/${id}`}>
            Ver mas
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
