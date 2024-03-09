import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";

import { AuthContextProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
