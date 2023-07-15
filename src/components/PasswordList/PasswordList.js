import { useEffect, useState } from "react";
import { PasswordContainer } from "./PasswordContainer";
import { NewPassword } from "./NewPassword";
import { Loading } from "../global/Loading/Loading";
import { PlaceholderPassword } from "./PlaceholderPassword";

//Complete list of passwords to be displayed
export const PasswordList = () => {
  //container for the returned data from the server
  const [jsonData, setJsonData] = useState(null);
  //hide/not the new password insertion container
  const [hiddenOrNot, setHiddenOrNot] = useState("newPasswordHidden");
  //change the button text from add to never ming container
  const [addRemoveText, setAddRemoveText] = useState("+ Add New Entry");
  //check if date is returned from the server
  const listData = Array.isArray(jsonData) ? jsonData : [];

  //as soon as on the page start the request to the server

  //request data from the server
  useEffect(() => {
    //get the data via get request
    const fetchData = async () => {
      try {
        //send the get request
        const response = await fetch(
          "https://password-manager-api.azurewebsites.net/testing/getall"
        );
        //data returned
        const data = await response.json();
        //invert them to be desplayed from new to old
        const reversedData = data.reverse();
        //save them on the container
        setJsonData(reversedData);
        //if errors appear
      } catch (error) {
        console.error("Error connecting to the API or DB :", error);
      }
    };
    //make it start
    fetchData();
  }, []);

  //placeholder if the data are still not fully loaded
  if (jsonData === null) {
    return (
      <section className="password-container-placeholder">
        <PlaceholderPassword text="Loading" />
      </section>
    );
  }

  //function to handle the display or not the add new password element and the text on the button
  const displayIt = () => {
    setHiddenOrNot((prevHiddenOrNot) =>
      prevHiddenOrNot === "newPasswordVisible"
        ? "newPasswordHidden"
        : "newPasswordVisible"
    );
    setAddRemoveText((prevAddOrNot) =>
      prevAddOrNot == "+ Add New Entry" ? "Never Mind" : "+ Add New Entry"
    );
  };

  //if data is present, full content will be displayed
  return (
    <section className="password-container">
      <div className="create-new-button animated-background">
        <div>
          <span onClick={displayIt}> {addRemoveText} </span>
        </div>
      </div>

      <NewPassword
        className={hiddenOrNot}
        setClassName={setHiddenOrNot}
        addRemove={setAddRemoveText}
      />

      {listData.map((item, key) => {
        return <PasswordContainer data={item} key={key} />;
      })}
    </section>
  );
};
