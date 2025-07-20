import React from "react";

import ImageUrl from "../images/Avatar-Photo.jpg";

import MyIcons from "./MyIcons";

//<FaSearch />
import { FaSearch } from "react-icons/fa";

//Pages
import { Link } from "react-router";

// <IoIosNotifications />
import { IoIosNotifications } from "react-icons/io";

//<PiPencilCircleFill />
import { PiPencilCircleFill } from "react-icons/pi";

//<FcSettings />
import { FcSettings } from "react-icons/fc";

const MyHeader = (props) => {
  const styles = {
    myHeader: {
      padding: "14",
      backgroundColor: "black",
      color: "rgb(163, 173, 194)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    left: {
      display: "flex",
      flexDirection: "row",
      color: "#778da9",
      minWidth: "400px",
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
      color: "#778da9",
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
    },
    myIcon: {
      display: "flex",
      justifyContent: "space-around",
      marginLeft: "11px",
      marginTop: "8px",
      color: "white",
      fontSize: "12px",
    },
    iconAvatar: {
      marginRight: "10px",
      marginLeft: "10px",
      marginTop: "9px",
      width: "20px",
    },
  };

  return (
    <header id="headerBackground" style={styles.myHeader}>
      <div style={styles.left}>
        <div style={styles.logo}>
          <PiPencilCircleFill style={styles.logo} />
        </div>
        <h1>{props.classChat}</h1>
      </div>
      <div style={styles.searchCont}>
        <span style={styles.inputIcon}>
          <FaSearch />
        </span>
        <input type="text" style={styles.inputwithIcon} placeholder="Search" />
      </div>
      <div style={styles.rightSide}>
        <div style={styles.myIcon}></div>
        <button style={styles.rightIcons}>
          <IoIosNotifications size={25} />
        </button>
        <button style={styles.rightIcons}>
          <FcSettings size={25} />
        </button>
        <div style={styles.iconAvatar}>
          <Link to="/Settings">
            <MyIcons IconImg={ImageUrl} ImageAlt="Image Icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
