
import { useContext } from "react";
import FavContext from "../context/FavContext";
import { Link } from "react-router-dom";
import starwars from "../assets/sw.svg";
const NavBar = () => {

  const { favs, FavActions  } = useContext(FavContext);

  return (
    <nav className="navbar navbar-expand-lg d-flex flex justify-content-between fixed-top zindex-popover w-100">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          <img src={starwars} alt="" width="50" className="d-inline-block align-text-top" />
        </Link>
      </div>
      <div className="dropdown mx-3 btn btn-dark d-flex text-light">
        <div className="d-flex"><Link className="mx-1 text-light link-underline-none underline" to={'/favorites'}>Favorites</Link><span className="mx-3"><strong className="yellowcolor">{favs.length}</strong></span></div>
        <Link
          className="dropdown-toggle text-light"
          to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* <span>Favorites <strong>{favs.length}</strong></span> */}
        </Link>
        <ul className="dropdown-menu">
          {
            favs.length === 0 ? (
              <li>
                <a className="dropdown-item" href="#">
                  No favorites yet
                </a>
              </li>
            ) :  favs.map((element, index) => {
            return (
              <li key={index} className="d-flex flex" style={{fontSize: "12px"}}>
                <Link className="dropdown-item" to={`/${element.type}/${element.id}`}>
                  {element.name}
                </Link>
                <button
              onClick={() =>
                FavActions({ type: "remove", payload: { id: element.id, name: element.name, type: element.type } })
              }
              className="btn"
            >
              <i className="fa-solid fa-trash" style={{fontSize: "12px"}}></i>
            </button>

              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
