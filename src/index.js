import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { NavigationBar } from "./components/global/NavigationBar/NavigationBar";

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
