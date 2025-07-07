import React from "react";

import MyIcon from "./MyIcons";

import ImageUrl from "../images/Avatar-Photo.jpg";

import { TiDelete } from "react-icons/ti";

import ComponentMeme from "../images/ComponentMeme.webp";

import { MdEdit } from "react-icons/md";

const MyPostCard = (props) => {
  return (
    <div>
      <form style={styles.myForm}>
        <div style={styles.formLineTwo}>
          <div style={styles.avatarAndInput}>
            <MyIcon IconImg={ImageUrl} ImageAlt="Image Icon" />

            {/* CHANGE FONT SIZE, COLOR PALLETS, PADDING TO ADS AND EDIT BUTTON */}
            <h3 style={styles.postCardHeader}>{props.CardHeader}</h3>
          </div>
          <button style={styles.button}>
            <MdEdit style={styles.button2} />
          </button>
          <button style={styles.button}>
            <TiDelete style={styles.button} />
          </button>
        </div>
        <p style={styles.postDescription}>{props.PostDescription}</p>
        <img src={props.ImgUrl} alt={props.ImageAlt}></img>
      </form>
    </div>
  );
};

export default MyPostCard;

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
  },

  formLineTwo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: ".5rem",
    marginTop: ".5rem",
  },
  avatarAndInput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    height: "25px",
    width: "25px",
    marginBottom: "2.5rem",
  },
  postCardHeader: {
    marginLeft: "15px",
    fontFamily: "Open Sans",
    color: "#0d1b2a",
  },
  postDescription: {
    color: "#0d1b2a",
    fontSize: "17px",
    marginLeft: "10px",
  },
  button2: {
    backgroundColor: "white",
    height: "25px",
    width: "25px",
    marginBottom: "2rem",
    marginLeft: "50px",
  },
};
