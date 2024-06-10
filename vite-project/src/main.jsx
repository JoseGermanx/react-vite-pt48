/* eslint-disable no-unused-vars */

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SecondsCounter from "./components/SecondsCounter.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

let seconds = 0;

function renderPersonalizado() {
  ReactDOM.createRoot(document.getElementById('root')).render( <SecondsCounter seconds={seconds} />);
  seconds++;
}

setInterval(renderPersonalizado, 1000);