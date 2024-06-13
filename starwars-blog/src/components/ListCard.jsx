/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";
// eslint-disable-next-line no-unused-vars
const ListCard = ({ apiFetch, type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiFetch.then((data) => {
      setData(data.results);
    });
  }, [apiFetch]);

  return (
   
    <div className="container d-flex flex-row mx-5 mt-5 mb-5 justify-content-center overflow-auto">
        {data-length === 0 ? (<>
            <div className="spinner-border text-secondary" role="status"></div>
            </>
        ) :
         data.map((elemento, index) => {
          return (
            <div key={index}>
              
              <Card id={elemento.uid} name={elemento.name} type={type} />
     
            </div>
          );
        })}
     
    </div>
  );
};

export default ListCard;
