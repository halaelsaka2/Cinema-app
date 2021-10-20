import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import ProtectedApp from "./Containers/ProtectedApp";

ReactDOM.render(
  <React.StrictMode>
    <ProtectedApp />
  </React.StrictMode>,
  document.getElementById("root")
);
