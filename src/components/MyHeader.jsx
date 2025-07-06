import React from "react";
// import AvatarIcon from "./images/Avatar-Photo.jpg";
// import MyAvatar from "./components/MyAvatar";

import ImageUrl from "../images/Avatar-Photo.jpg";

import MyIcons from "./MyIcons";

//<FaSearch />
import { FaSearch } from "react-icons/fa";

//<FaArrowRight />
import { FaArrowRight } from "react-icons/fa";

// <CgBoy />
import { CgBoy } from "react-icons/cg";

// <IoIosNotifications />
import { IoIosNotifications } from "react-icons/io";

//<PiPencilCircleFill />
import { PiPencilCircleFill } from "react-icons/pi";

//<FcSettings />
import { FcSettings } from "react-icons/fc";
// import MyAvatar from "./MyAvatar";

const MyHeader = (props) => {
  return (
    <header style={styles.myHeader}>
      <div style={styles.left}>
        <div style={styles.logo}>
          <PiPencilCircleFill style={styles.logo} />
        </div>
        <h1>classChat</h1>
      </div>
      <div style={styles.searchCont}>
        <span style={styles.inputIcon}>
          <FaSearch />
        </span>
        <input type="text" style={styles.inputwithIcon} placeholder="Search" />
      </div>
      <div style={styles.rightSide}>
        <button style={styles.rightIcons}>
          <IoIosNotifications size={25} />
        </button>
        <button style={styles.rightIcons}>
          <FcSettings size={25} />
        </button>
        <MyIcons IconImg={ImageUrl} ImageAlt="Image Icon" />
        {/* <CgBoy /> */}
      </div>
    </header>
  );
};

export default MyHeader;

const styles = {
  myHeader: {
    padding: "14",
    backgroundColor: "black",
    color: "rgb(163, 173, 194)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "1px 6px 1px 1px rgba(0, 0, 225, .1)",
  },
  left: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    marginRight: "10%",
    // backgroundColor: "white",
    alignItems: "center",
    paddingTop: ".3rem",
    // marginTop: ".55rem",
  },
  searchCont: {
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "40%",
    marginRight: "4rem",
  },
  inputIcon: {
    background: "#ddd",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  inputwithIcon: {
    border: "none",
    flex: 1,
    padding: "10px",
  },
  rightSide: {
    display: "flex",

    flexDirection: "row",

    alignItems: "center",
    marginRight: "2%",
  },
  rightIcons: {
    display: "flex",
    margin: ".5rem",
    width: "50%",
  },
};
