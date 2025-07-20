import React from "react";

const MyIcons = (props) => {
  return (
    <img src={props.IconImg} alt={props.ImageAlt} style={styles.myIcon}></img>
  );
};
export default MyIcons;

const styles = {
  myIcon: {
    height: "45px",
    width: "45px",
    cursor: "pointer",
    borderRadius: "90%",
  },
};
