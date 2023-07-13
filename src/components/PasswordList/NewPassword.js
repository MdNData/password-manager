import { useState } from "react";

export const NewPassword = ({ className }) => {
  const [srcImg, setSrcImg] = useState(
    "https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
  );

  const update = (e) => {
    setSrcImg(e.target.value);
  }
  
  return (
    <article className={className}>
      <div className="identifier">
        <img
          src={srcImg}
          alt=""
        />
        <p style={{ marginBottom: "20px" }}>
          Image Link :
          <input
            type="text"
            defaultValue="https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
            onChange={update}
          />
        </p>
        <br />
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
