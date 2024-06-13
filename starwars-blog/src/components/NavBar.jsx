
import { useContext } from "react";
import FavContext from "../context/FavContext";
import { Link } from "react-router-dom";
const NavBar = () => {

  const { favs } = useContext(FavContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex justify-content-between">
      <div className="container-md">
        <a className="navbar-brand" href="#">
          Star Wars
        </a>
      </div>
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>Favorites{favs.length}</span>
        </a>
        <ul className="dropdown-menu">
          {favs.map((element, index) => {
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
