// Settings page containing random user generated API. Profile Pic icon in header will link to this page

import { useState, useEffect } from "react";
import SettingsForm from "../components/SettingsForm";

function Settings(props) {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function FetchAPI() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [user] = data.results;
      setuserData(user);
    }
    FetchAPI();
  }, []);

  return (
    <section>
      <h1 style={styles.h1}>{props.Settings}</h1>
      <div>
        {userData && (
          <SettingsForm
            avatar={userData.picture.large}
            username={userData.login.username}
            password={userData.login.password}
            fName={userData.name.first}
            lName={userData.name.last}
            street={userData.location.street.number}
            city={userData.location.city}
            state={userData.location.state}
            zipcode={userData.location.postcode}
            phone={userData.phone}
          />
        )}
      </div>
    </section>
  );
}

export default Settings;

const styles = {
  h1: {
    paddingLeft: "25px",
  },
};
