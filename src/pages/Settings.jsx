import { useState, useEffect } from "react";
import SettingsForm from "../components/SettingsForm";

function Settings() {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function FetchAPI() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      // data.results is targeting the 'results' from the API
      const [user] = data.results;
      setuserData(user);
    }
    FetchAPI();
  }, []);

  return (
    <section>
      <h1>Settings</h1>
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
            // email={userData.email}
            phone={userData.phone}
          />
        )}
      </div>
    </section>
  );
}

export default Settings;

// const styles = {};
