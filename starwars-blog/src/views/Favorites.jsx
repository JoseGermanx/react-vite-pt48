import { useContext } from "react"
import FavContext from "../context/FavContext"
import { Link } from "react-router-dom"
import starwars from "../assets/sw.svg";


// renderizar lista de favoritos
const Favorites = () => {
    const { favs } = useContext(FavContext)
  return (
    <div className="container bg-dark p-5 rounded" style={{marginTop: "110px"}}>
      <div className="container d-flex justify-content-center">
        <img
          src={starwars}
          alt=""
          width="200"
          className="align-text-top"
        />
      </div>
      <h1>Favorites</h1>
      <ul>
        {favs.length === 0 ? <h6>Not favorites yet</h6> : favs.map((element, index) => {
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