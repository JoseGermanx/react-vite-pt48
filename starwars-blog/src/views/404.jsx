import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="container bg-dark p-5 d-flex flex-column" style={{marginTop: "110px"}}><h1 className="d-flex justify-content-center">404</h1><Link className="d-flex justify-content-center yellowcolor" to={"/"}>May the Force be with you</Link></div>
  )
}

export default NotFound