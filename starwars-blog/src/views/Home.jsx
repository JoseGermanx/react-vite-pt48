
import Api from "../api/api"
import ListCard from "../components/ListCard"
import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"


const Home = () => {

    const { global, globalActions} = useContext(GlobalContext)

    // const getAPlanets = Api.getPlanets()
    // const getPeople = Api.getPeople()
    // const getVehicles = Api.getVehicles()

  return (
    <div className="container mx-5">
        <h1 className="text-center mt-5">Star Wars Blog</h1>
        <ListCard apiFetch={getAPlanets} type={"planets"}/>
        <ListCard apiFetch={getPeople} type={"people"}/>
        <ListCard apiFetch={getVehicles} type={"vehicles"}/>
    </div>
  )
}

export default Home