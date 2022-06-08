import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import { ButtonsStateProvider } from "./contexts/ButtonsStateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ButtonsStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ButtonsStateProvider>
    </AuthProvider>
  </React.StrictMode>
);
