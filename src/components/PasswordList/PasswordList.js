import { useEffect, useState } from "react";
import logo from "../../imgs/logo.png";
import { PasswordContainer } from "./PasswordContainer";
import { NewPassword } from "./NewPassword";
import { LoadingPassword } from "./LoadingPassword";

//Complete list of passwords to be displayed
export const PasswordList = () => {
  //store data from the server
  const [jsonData, setJsonData] = useState(null);
  const [hiddenOrNot, setHiddenOrNot] = useState("newPasswordHidden");
  const [addRemoveText, setAddRemoveText] = useState("+ Add New Entry");

  //request data from the server
  useEffect(() => {
    //get the data via get request
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://password-manager-api.azurewebsites.net/testing/getall"
        );
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //placeholder if the data are still not fully loaded
  if (jsonData === null) {
    return <LoadingPassword />;
  }

  //function to diplsy or not the add new password element
  const displayIt = () => {
    setHiddenOrNot((prevHiddenOrNot) =>
      prevHiddenOrNot === "newPasswordVisible" ? "newPasswordHidden" : "newPasswordVisible"
    );
    setAddRemoveText((prevAddOrNot) =>
      prevAddOrNot == "+ Add New Entry" ? "Never Mind" : "+ Add New Entry"
    );
  };

  //check if date is returned from the server
  const listData = Array.isArray(jsonData) ? jsonData : [];

  //if data is present, full content will be displayed
  return (
    <section className="password-container">
      <div className="create-new-button">
        <div>
          <span onClick={displayIt}> {addRemoveText} </span>
        </div>
      </div>

      <NewPassword className={hiddenOrNot} />

      {listData.map((item, key) => {
        return <PasswordContainer data={item} key={key} />;
      })}
    </section>
  );
};
