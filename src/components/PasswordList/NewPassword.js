import { useEffect, useState } from "react";
import { PasswordList } from "./PasswordList";

export const NewPassword = ({ className, setClassName, addRemove }) => {
  const [srcImg, setSrcImg] = useState(
    "https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
  );

  const [site, setSite] = useState("");

  const [user, setUser] = useState("");

  const [pass, setPass] = useState("");

  const [sendText, setSendText] = useState("Save");

  const updateSrcImg = (e) => {
    setSrcImg(e.target.value);
  };

  const updateSite = (e) => {
    setSite(e.target.value);
  };

  const updateUser = (e) => {
    setUser(e.target.value);
  };

  const updatePass = (e) => {
    setPass(e.target.value);
  };

  const registerEntry = () => {
    setSendText("Saving . . .");

    var payload = {
      email: "testing",
      imgsrc: srcImg,
      site: site,
      user: user,
      pass: pass,
    };

    const requestInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    fetch(
      "https://password-manager-api.azurewebsites.net/testing/entry",
      requestInfo
    )
      .then((response) => {
        setClassName("newPasswordHidden");
        addRemove("+ Add New Entry");
        //reload the page
        window.location = "/password-manager/";
      })

      .catch((error) => {});
  };

  return (
    <article className={className}>
      <div className="identifier">
        <img src={srcImg} alt="" />
        <p style={{ marginBottom: "20px" }}>
          Image Link :
          <input
            type="text"
            placeholder="https://mdndata.github.io/password-manager/static/media/logo.b8ce593d759382a06a27.png"
            onChange={updateSrcImg}
          />
        </p>
        <br />
        <p>
          Usage :
          <input type="text" placeholder="new entry" onChange={updateSite} />
        </p>
      </div>
      <div className="data-container">
        <p>
          User :
          <input type="text" placeholder="new entry" onChange={updateUser} />
        </p>
        <p>
          Password :
          <input type="text" placeholder="new entry" onChange={updatePass} />
        </p>
        <div>
          <button onClick={registerEntry}>{sendText}</button>
        </div>
      </div>
    </article>
  );
};
