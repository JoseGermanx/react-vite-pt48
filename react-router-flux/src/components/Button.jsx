
import { useNavigate } from "react-router-dom"



// eslint-disable-next-line react/prop-types
function Button({texto}) {

const navigate = useNavigate()

  return (
    <button onClick={()=> navigate("/add-contact")}>{texto}</button>
  )
}

export default Button