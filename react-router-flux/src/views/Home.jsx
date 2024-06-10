import { useContext } from "react"
import TaskContext from "../context/TaskContext"
import { useNavigate } from "react-router-dom"
import DeleteContact from "./DeleteContact"


function Home() {

  const {tasks, taskActions} = useContext(TaskContext)

  const navigate = useNavigate()


  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <ul className="list-group w-50">
       
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index}>
            {task}
            <button className="badge bg-primary rounded-pill float-end me-2 border-0"
            onClick={() => navigate(`/update-contact/${index}`)}
            >Edit</button>
            <button className="badge bg-danger rounded-pill float-end border-0 mx-3"
            onClick={() => taskActions({type: 'remove-id', payload: index})}
            >Delete</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={()=> navigate("/add-contact")}>Add Task</button>
      <DeleteContact />
    </div>
  )
}

export default Home