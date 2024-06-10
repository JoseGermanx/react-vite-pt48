import { useEffect } from "react";
// import Card from "./Card";

const FetchApis = () => {
  // const [users, setUsers] = useState([]);

  useEffect(() => {

    // HTTP GET
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>  response.json())
    .then((data) => console.log(data))


    // HTTP POST
    fetch("https://jsonplaceholder.typicode.com/posts",
    {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),   /// enviariamos username, email, password
      headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) =>  response.json())
    .then((data) => console.log(data))
  
    // HTTP PUT
    fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
      method: 'PUT',
      body: JSON.stringify({
            title: 'Actualizamos el título',
            body: 'Actualizando solo el cuerpo del post',
            userId: 1,
            id: 1
          }),   /// enviariamos username, email, password
      headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) =>  response.json())
    .then((data) => console.log(data))


  }, []);

  return <h1>Métodos HTTP</h1>
  // users.map((item) => <Card key={item.id} nombre={item.name} email={item.email} website={item.website} />);
};

export default FetchApis;
