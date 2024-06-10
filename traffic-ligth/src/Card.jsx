

const Card = ({nombre, email, website}) => {
  return (
    <div className="card mt-3" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{email}</h6>
      <p className="card-text">{website}</p>
    </div>
  </div>
  )
}

export default Card