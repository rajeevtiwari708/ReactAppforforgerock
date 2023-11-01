import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./modules/Auth/LoginScreen";
import "./index.css";

const App = () => (
  <div className="container">
  <LoginForm />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
