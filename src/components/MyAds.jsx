import React from "react";

const MyAds = (props) => {
  return (
    <div>
      <img src={props.AdImg} alt={props.AdAlt} style={styles.myAds} />
      <h1 style={styles.adTitle}>{props.AdTitle}</h1>
      <p style={styles.adDescription}>{props.AdDescription}</p>
    </div>
  );
};

export default MyAds;

const styles = {
  myAds: {
    width: "90%",
    cursor: "pointer",
    marginLeft: "5%",
    marginTop: "15px",
    color: "rgba(163, 173, 194)",
    boxShadow: "5px 5px 5px 5px",
  },
  adTitle: {
    fontSize: "30px",
    fontFamily: "Roboto",
    paddingLeft: "10px",
    marginLeft: "10px",
  },
  adDescription: {
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "italic",
    paddingLeft: "10px",
    marginLeft: "10px",
  },
};
