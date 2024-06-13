import { useContext } from "react"
import FavContext from "../context/FavContext"

// renderizar lista de favoritos
const Favorites = () => {
    const { favs } = useContext(FavContext)
  return (
    <div className="container">
      <h1>Favorites</h1>
      <ul>
        {favs.map((element, index) => {
          return (
            <li key={index}>
              <p>{element.name}</p>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default Favorites