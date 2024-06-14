import { useContext } from "react"
import FavContext from "../context/FavContext"
import { Link } from "react-router-dom"

// renderizar lista de favoritos
const Favorites = () => {
    const { favs } = useContext(FavContext)
  return (
    <div className="container" style={{marginTop: "110px"}}>
      <h1>Favorites</h1>
      <ul>
        {favs.map((element, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-item" to={`/${element.type}/${element.id}`}>
                  {element.name}
                </Link>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default Favorites