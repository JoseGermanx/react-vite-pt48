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
   
    <div className="d-flex flex mt-5">
        {data-length === 0 ? (
            <div className="spinner-border text-primary d-flex justify-content-center" role="status">
        </div>
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
