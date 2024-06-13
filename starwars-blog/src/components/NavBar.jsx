
import { useContext } from "react";
import FavContext from "../context/FavContext";
import { Link } from "react-router-dom";
import starwars from "../assets/sw.svg";
const NavBar = () => {

  const { favs } = useContext(FavContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex justify-content-between fixed-top zindex-popover w-100">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          <img src={starwars} alt="" width="50" className="d-inline-block align-text-top" />
        </Link>
      </div>
      <div className="dropdown mx-3 btn btn-dark d-flex text-light">
        <div className="d-flex"><Link className="mx-1 text-light link-underline-none" to={'/favorites'}>Favorites</Link><span className="mx-3"><strong>{favs.length}</strong></span></div>
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
              <li key={index}>
                <Link className="dropdown-item" to={`/${element.type}/${element.id}`}>
                  {element.name}
                </Link>

              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
