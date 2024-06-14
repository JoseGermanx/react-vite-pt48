
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FavProvider } from "./context/FavContext.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <GlobalProvider>
      <FavProvider>
        <App />
      </FavProvider>
    </GlobalProvider>
);
