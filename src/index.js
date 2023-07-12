import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { Loader } from "./components/global/Loader/Loader";
import { NavigationBar } from "./components/global/NavigationBar/NavigationBar";

const App = () => {
  //state for the loading of the website
  const [isLoading, setIsLoading] = useState(true);

  //check if the website is loaded entirely
  useEffect(() => {
    const handleWindowLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <React.Fragment>
      {/* Start the loading animation */}
      {isLoading && <Loader />}

      {/* Main Website */}
      <NavigationBar />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
