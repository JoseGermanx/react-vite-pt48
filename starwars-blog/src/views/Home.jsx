import ListCard from "../components/ListCard";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import starwars from "../assets/sw.svg";

const Home = () => {
  const { global } = useContext(GlobalContext);

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="container d-flex justify-content-center">
        <img
          src={starwars}
          alt=""
          width="200"
          className="align-text-top"
        />
      </div>
      <ListCard apiFetch={global.planets} type={"planets"} />
      <ListCard apiFetch={global.people} type={"people"} />
      <ListCard apiFetch={global.vehicles} type={"vehicles"} />
    </div>
  );
};

export default Home;
