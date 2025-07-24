import React from "react";

const SettingsForm = (props) => {
  return (
    <section>
      <div>
        <img src={props.avatar} alt="Profile pic" />
        <h4>{props.username}</h4>
      </div>

      <form>
        <p>
          <input
            type="text"
            value={props.fName}
            placeholder="First Name"
            readOnly
          />
          <input
            type="text"
            value={props.lName}
            placeholder="Last Name"
            readOnly
          />
        </p>
        <p>
          <input
            type="text"
            value={props.street}
            placeholder="Street"
            readOnly
          />
          <input type="text" value={props.city} placeholder="City" readOnly />
        </p>
        <p>
          <input type="text" value={props.state} placeholder="State" readOnly />
          <input
            type="text"
            value={props.zipcode}
            placeholder="Zipcode"
            readOnly
          />
        </p>
        <p>
          <input
            type="text"
            value={props.password}
            placeholder="Password"
            readOnly
          />
          <input type="text" value={props.phone} placeholder="Phone" readOnly />
        </p>
      </form>
    </section>
  );
};

export default SettingsForm;
