import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";
import "normalize.css";
import LoggedInProvider from "./contexts/loggedInContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedInProvider>
      <Routes />
    </LoggedInProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
