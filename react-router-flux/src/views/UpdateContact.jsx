


import { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateContact = () => {
    const { tasks, taskActions } = useContext(TaskContext);
    const [task, setTask] = useState("");
    const navigate = useNavigate();
    const [taskId, setTaskId] = useState(0);

    const { id } = useParams();
    
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        taskActions({ type: "update", payload: { id: taskId, task } });
        navigate("/");
    }

    useEffect(() => {
        setTaskId(id);
        setTask(tasks[id]);

    }, [id, tasks]);
    
    return (
        <div>
        <h1>Actualizar tarea</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="Actualizar tarea"
            />
            <button type="submit">Actualizar</button>
        </form>
        </div>
    );
    }

export default UpdateContact;