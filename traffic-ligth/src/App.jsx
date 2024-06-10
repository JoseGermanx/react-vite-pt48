import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(null);

  return (
    <>
      <div className="traffic-signal">
        <div
          className={"light red " + (color === "red" ? "glow" : "")}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={"light yellow " + (color === "yellow" ? "glow" : "")}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={"light green " + (color === "green" ? "glow" : "")}
          onClick={() => setColor("green")}
        ></div>
      </div>
       
      <button className="btn"onClick={() => setColor("")}>Reset</button>
    </>
  );
}

export default App;
