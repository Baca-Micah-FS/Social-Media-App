import React, { Component } from "react";

import MyIcons from "./MyIcons";

import ImageUrl from "../images/Avatar-Photo.jpg";

import PostButton from "./PostButton";

import { CgBoy } from "react-icons/cg";

//<PiPencilCircleFill />
import { PiPencilCircleFill } from "react-icons/pi";

const MyForm = (props) => {
  return (
    <form style={styles.myForm}>
      <input style={styles.postInput} placeholder="Create Post"></input>
      <br></br>

      <div style={styles.formLineTwo}>
        <div style={styles.avatarAndInput}>
          <MyIcons IconImg={ImageUrl} ImageAlt="Avatar Image Icon" />
          <input
            style={styles.descriptionInput}
            placeholder="What did you learn this week?"
          ></input>
        </div>
        <div style={styles.button}>
          <PostButton btnText="Post" />
        </div>
      </div>
    </form>
  );
};

export default MyForm;

const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px",
    margin: "15px",
    paddingBottom: "4rem",
    backgroundColor: "white",
    color: "rgba(163, 173, 194)",
    boxShadow: "5px 5px 5px",
  },
  postInput: {
    backgroundColor: "lightgrey",
    border: "none",
    paddingLeft: "10px",
    height: "35px",
    marginLeft: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "10px",
  },
  descriptionInput: {
    border: "none",
    fontSize: "1rem",
    width: "85%",
    marginLeft: "20px",
    fontSize: "17px",
  },

  formLineTwo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: ".9rem",
    marginTop: "1rem",
  },
  avatarAndInput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  button: {
    border: "none",
  },
};
