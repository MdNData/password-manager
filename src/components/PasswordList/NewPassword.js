export const NewPassword = ({className}) => {
  return (
    <article className={className}>
      <div className="identifier">
        <img src="new entry" alt="" />
        <p>
          Usage :
          <input type="text" defaultValue="new entry" />
        </p>
      </div>
      <div className="data-container">
        <p>
          User :
          <input type="text" defaultValue="new entry" />
        </p>
        <p>
          Password :
          <input type="text" defaultValue="new entry" />
        </p>
      </div>
    </article>
  );
};
