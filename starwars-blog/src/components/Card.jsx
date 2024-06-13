/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const Card = ({id, name, type}) => {
  return (
    <div className="card mx-4" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{type}</p>
            <a href="#" className="btn btn-primary">Ver mas</a>
        </div>
    </div>
  )
}

export default Card