import React, { Component } from "react";

import MyIcons from "./MyIcons";

import ImageUrl from "../images/Avatar-Photo.jpg";

import PostButton from "./PostButton";

import { CgBoy } from "react-icons/cg";

//<PiPencilCircleFill />
import { PiPencilCircleFill } from "react-icons/pi";
import MyPostCard from "./MyPostCard";

const MyForm = (props) => {
  function handleAd(e) {
    e.preventDefault();
    const newPostHeader = e.target.postHeader.value;
    const newPostDescription = e.target.postDescription.value;
    props.addFunction(newPostHeader, newPostDescription);
    e.target.postHeader.value = "";
    e.target.postDescription.value = "";
    return;
  }
  return (
    <form style={styles.myForm} onSubmit={handleAd}>
      <input
        id="postHeader"
        name="postHeader"
        type="text"
        style={styles.postInput}
        // onChange={this.changeInputText}
        placeholder="Post Title"
      />
      <br></br>

      <div style={styles.formLineTwo}>
        <div style={styles.avatarAndInput}>
          <MyIcons IconImg={ImageUrl} ImageAlt="Avatar Image Icon" />
          <input
            id="postDescription"
            name="postDescription"
            type="text"
            style={styles.descriptionInput}
            // onChange={this.changeInputText}
            placeholder="What did you learn this week?"
          ></input>
          {/* <p>Post: {this.state.databinding}</p> */}
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
    fontFamily: "Open Sans",
  },
  descriptionInput: {
    border: "none",
    width: "85%",
    marginLeft: "20px",
    fontSize: "19px",
    marginTop: "9px",
  },

  formLineTwo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: ".5rem",
    marginTop: "1rem",
  },
  avatarAndInput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  button: {
    border: "none",
    backgroundColor: "white",
  },
};
