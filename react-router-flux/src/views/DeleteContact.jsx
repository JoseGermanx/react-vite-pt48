import { useContext } from "react"
import TaskContext from "../context/TaskContext"


function DeleteContact() {

    const {taskActions} = useContext(TaskContext)
  return (
    <button className="btn btn-danger" onClick={() => taskActions({type: 'remove'})}>Delete Task</button>
  )
}

export default DeleteContact