import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();
  const { taskActions } = useContext(TaskContext);

  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input === "") {
      setErrorMsg("No puedes agregar una tarea vacía");
      return;
    }
    taskActions({ type: "add", payload: input });
    navigate("/");
  };

  return (
    <div className="container my-5">
      <button className="btn btn-secondary" onClick={()=> navigate("/")}>Back</button>
      <h1 className="mt-3">Add Contact</h1>
      <input className="rounded border p-2" type="text" value={input} onChange={handleInput}
      onFocus={() => setErrorMsg("")}
      
      />
      <br />
      <span className="text-danger">{errorMsg}</span>
      <br />
      <button className="btn btn-success my-3" onClick={() => addTask()}>Add Contact</button>
    </div>
  );
}

export default AddContact;
