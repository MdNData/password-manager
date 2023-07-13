import logo from "../../imgs/logo.png";
export const LoadingPassword = () => {
  return (
    <section className="password-container">
      <article>
        <div className="identifier">
          <img src={logo} alt="loading" />
          <p>
            Usage :
            <input type="text" defaultValue="Loading" />
          </p>
        </div>
        <div className="data-container">
          <p>
            User :
            <input type="text" defaultValue="Loading" />
          </p>
          <p>
            Password :
            <input type="text" defaultValue="Loading" />
          </p>
        </div>
      </article>
    </section>
  );
};
