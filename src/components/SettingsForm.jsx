// Settings Form to contain the API results on the Settings page.

import React from "react";

const SettingsForm = (props) => {
  return (
    <>
      <section style={styles.container}>
        <div>
          <img style={styles.avatar} src={props.avatar} alt="Profile pic" />
          <h4 style={styles.userName}>{props.username}</h4>
        </div>
        <form style={styles.form}>
          <p style={styles.paragraph}>
            <input
              style={styles.input}
              type="text"
              value={props.fName}
              placeholder="First Name"
            />
            <input
              style={styles.input}
              type="text"
              value={props.lName}
              placeholder="Last Name"
              readOnly
            />
          </p>
          <p style={styles.paragraph}>
            <input
              style={styles.input}
              type="text"
              value={props.street}
              placeholder="Street"
              readOnly
            />
            <input
              style={styles.input}
              type="text"
              value={props.city}
              placeholder="City"
              readOnly
            />
          </p>
          <p style={styles.paragraph}>
            <input
              style={styles.input}
              type="text"
              value={props.state}
              placeholder="State"
              readOnly
            />
            <input
              style={styles.input}
              type="text"
              value={props.zipcode}
              placeholder="Zipcode"
              readOnly
            />
          </p>
          <p style={styles.paragraph}>
            <input
              style={styles.input}
              type="text"
              value={props.password}
              placeholder="Password"
              readOnly
            />
            <input
              style={styles.input}
              type="text"
              value={props.phone}
              placeholder="Phone"
              readOnly
            />
          </p>
        </form>
      </section>
    </>
  );
};

export default SettingsForm;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "25px 25px",
    backgroundColor: "white",
    alignItems: "center",
    padding: "20px",
    boxShadow: "5px 5px rgba(163, 173, 194)",
  },
  paragraph: {
    width: "90%",
    margin: "auto",
  },
  form: {
    width: "75%",
  },
  input: {
    margin: "10px",
    width: "40%",
    padding: "15px",
    borderRadius: "5px",
    fontSize: "15px",
  },
  avatar: {
    borderRadius: "50%",
    border: "5px solid black",
  },
  userName: {
    fontSize: "20px",
  },
};
