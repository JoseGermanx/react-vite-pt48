import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FavProvider } from "./context/FavContext.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <FavProvider>
        <App />
      </FavProvider>
    </GlobalProvider>
  </React.StrictMode>
);
