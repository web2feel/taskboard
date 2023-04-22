import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.scss";
import AppContextProviderWrapper from "./context/AppContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProviderWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </AppContextProviderWrapper>
);
