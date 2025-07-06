import React from "react";

const MyAds = (props) => {
  return (
    <div>
      <img src={props.AdImg} alt={props.AdAlt} style={styles.myAds} />
      <h1 style={styles.adTitle}>{props.AdTitle}</h1>
      <small style={styles.adDescription}>{props.AdDescription}</small>
    </div>
  );
};

export default MyAds;

const styles = {
  myAds: {
    width: "90%",
    cursor: "pointer",
    marginLeft: "5%",
  },
  adTitle: {
    fontSize: "30px",
  },
  adDescription: {
    fontSize: "15px",
  },
};
