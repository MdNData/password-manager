import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Header } from "./components/Header";
import { PasswordLists } from "./components/PasswordList";

//Main component for all the page
const App = () => {
  return (
    <React.Fragment>
      <Header
        mainTitle="Password Manager"
        secondTitle="Online, Secure and Free"
      />
      <PasswordLists />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
