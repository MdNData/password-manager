//Individual password container
export const PasswordContainer = ({ data }) => {
  const { email, imgsrc, site, user, pass } = data;
  return (
    <article>
      <div className="identifier">
        <img src={imgsrc} alt="" />
        <p>
          Usage :
          <input type="text" defaultValue={site} />
        </p>
      </div>
      <div className="data-container">
        <p>
          User :
          <input type="text" defaultValue={user} />
        </p>
        <p>
          Password :
          <input type="text" defaultValue={pass} />
        </p>
      </div>
    </article>
  );
};
