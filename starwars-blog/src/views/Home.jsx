
import NavBar from "../components/NavBar"
import Api from "../api/api"
import ListCard from "../components/ListCard"



const Home = () => {

    const getAPlanets = Api.getPlanets()
    const getPeople = Api.getPeople()
    const getVehicles = Api.getVehicles()

  return (
    <div className="">
        <NavBar />
        <h1 className="text-center mt-5">Star Wars Blog</h1>
        <ListCard apiFetch={getAPlanets} type={"planets"}/>
        <ListCard apiFetch={getPeople} type={"people"}/>
        <ListCard apiFetch={getVehicles} type={"vehicles"}/>
       

    </div>
  )
}

export default Home