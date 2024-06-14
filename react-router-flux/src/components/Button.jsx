
import { useNavigate } from "react-router-dom"



// eslint-disable-next-line react/prop-types
function Button({texto}) {

const navigate = useNavigate()

  return (
    <button className="btn btn-primary mx-3" onClick={()=> navigate("/add-contact")}>{texto}</button>
  )
}

export default Button