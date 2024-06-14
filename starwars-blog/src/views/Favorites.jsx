import { useContext } from "react"
import FavContext from "../context/FavContext"
import { Link } from "react-router-dom"

// renderizar lista de favoritos
const Favorites = () => {
    const { favs } = useContext(FavContext)
  return (
    <div className="container bg-dark p-5" style={{marginTop: "110px"}}>
      <h1>Favorites</h1>
      <ul>
        {favs.map((element, index) => {
          return (
            <li key={index} className="list-group">
              <Link className="list-group-item list-group-item-action list-group-item-dark mt-2" to={`/${element.type}/${element.id}`}>
                  {`${element.name} - Type: ${element.type}`} 
                </Link>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default Favorites