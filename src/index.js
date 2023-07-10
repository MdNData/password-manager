import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

//Main component for all the page
const App = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Password Manager</h1>
        <h2>Online, Secure and Free</h2>
      </header>
      <PasswordList />
    </React.Fragment>
  );
};

//Container for the passwords
const PasswordList = () => {
  return (
    <section>
      <Password />
    </section>
  );
};

//Password element
const Password = () => {
  return (
    <article>
      <Image />
      <Website />
      <User />
      <PasswordValue />
    </article>
  );
};

//website image
const Image = () => {
  return (
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="GitHub"
    />
  );
};

//website link
const Website = () => <h3>WebSite : Github</h3>;

//user name
const User = () => <p>User : react@react.com</p>;

//password
const PasswordValue = () => <p>Password : React123</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
