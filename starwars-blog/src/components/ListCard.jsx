/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";
// eslint-disable-next-line no-unused-vars
const ListCard = ({ apiFetch, type }) => {
  const [data, setData] = useState([]);


  // useEffect(() => {
  //   setData(apiFetch);
  // }, [type]);

  return (
    <>
      {!apiFetch ? (
        <div className="container d-flex flex-row mt-5 mb-2 justify-content-center">
          <div className="spinner-border text-secondary" role="status"></div>
        </div>
      ) : (
        <div
          className="container d-flex flex-row mt-5 mb-2 justify-content-start overflow-auto"
          style={{
            overflow: " scroll",
            scrollbarColor: "grey black",
            scrollbarWidth: "thin",
          }}
        >
          {apiFetch &&
            apiFetch.map((elemento, index) => {
              return (
                <div key={index}>
                  <Card id={elemento.uid} name={elemento.name} type={type} />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ListCard;
