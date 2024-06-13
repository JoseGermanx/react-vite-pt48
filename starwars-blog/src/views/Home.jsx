import { Api } from "../api/api"
import ListCard from "../components/ListCard"
import NavBar from "../components/NavBar"

const Home = () => {

    const getAPlanets = Api.getPlanets()
    const getPeople = Api.getPeople()
    const getVehicles = Api.getVehicles()

  return (
    <div className=" overflow-hidden">
        <NavBar />
        <ListCard apiFetch={getAPlanets} type={"Planets"}/>
        <ListCard apiFetch={getPeople} type={"People"}/>
        <ListCard apiFetch={getVehicles} type={"Vehicles"}/>

    </div>
  )
}

export default Home