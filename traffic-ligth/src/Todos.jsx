
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Todos.css'

const Todos = () => {

    // 2 estados, uno para el input y otro para la listra de tareas

    const [newTask, setNewTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const [showX, setShowX] = useState(false)

    const notifyTaskAdded = () => toast.success('Tarea Agregada');
    const notifyTaskEmpty = () => toast.error('Debes ingresar una tarea');
    const notifyTaskDeleted = () => toast.error('Tarea Eliminada');

    const handlePressKey = (e) => {
        if (newTask === "" && e.key === "Enter"){
            notifyTaskEmpty()
            return
        }

        if( e.key === "Enter" ){
            setTaskList([...taskList, newTask])
            notifyTaskAdded("Task Add")
            setNewTask('')
        }
    }

    const handleDeleteTask = (index) => {

        setTaskList(taskList.filter((task, i) => i !== index))
        notifyTaskDeleted()

    }

  return (
    <>
        <h1>todos</h1>
        <ul>
            <li><input
            name='task'
            type="text"
            placeholder={taskList.length === 0 ? "No hay tareas, añade una nueva" : "Añadir tarea"}
            onChange={(e) => {setNewTask(e.target.value)}}
            value={newTask}
            onKeyDown={handlePressKey}
            
            /></li>
         {taskList.map((task, index) => {
                return <li
                key={index}
                className='li-tasks'
                onMouseEnter={() => setShowX(true)}
                onMouseLeave={() => setShowX(false)}
                ><div>{task}</div>
                {showX ? <div><i className="fas fa-xmark" 
                onClick={() => handleDeleteTask(index)}></i></div>: null}</li>
         })}
         <li className='li-final'><strong>{taskList.length}</strong> tareas pendientes </li>
        </ul>   
        <ToastContainer />     
    </>
  )
}

export default Todos
