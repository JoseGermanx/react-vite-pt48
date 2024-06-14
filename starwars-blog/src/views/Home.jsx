import ListCard from "../components/ListCard";
import { useContext, useEffect} from "react";
import GlobalContext from "../context/GlobalContext";

const Home = () => {
  const { global, globalActions } = useContext(GlobalContext);
  
  useEffect(() => {
    globalActions({ type: "loadPeople" });
  }, []);

  return (
    <div className="container mx-5">
      <h1 className="text-center mt-5">Star Wars Blog</h1>
      <ListCard apiFetch={global.planets} type={"planets"} />
      <ListCard apiFetch={global.people} type={"people"} />
      <ListCard apiFetch={global.vehicles} type={"vehicles"} />
    </div>
  );
};

export default Home;
