import React, { Component } from "react";

import "./App.css";

// React Components
import Header from "./components/Header";

import MyHeader from "./components/MyHeader";

import LeftNav from "./components/Leftnav";

import PostButton from "./components/PostButton";

import MyForm from "./components/MyForm";

import MyAds from "./components/MyAds";

import ComponentMeme from "./images/ComponentMeme.webp";

// import images
import AvatarIcon from "./images/Avatar-Photo.jpg";
import MyAvatar from "./components/MyAvatar";
import AdPhoto from "./images/acmead.jpg";
import AcmeCoffeeAd from "./images/acmeCoffeeAd.jpeg";

// REACT ICONS

import { FcSettings } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { CgBoy } from "react-icons/cg";
import MyPostCard from "./components/MyPostCard";

class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <div>
          <MyHeader />
        </div>

        {/* Leftnav */}
        <main style={mainStyle.style}>
          <section style={navStyles.container}>
            <LeftNav />
          </section>
          {/* Post Card Section */}
          <section style={formStyles.style}>
            <MyForm />
            <MyPostCard ImgUrl={ComponentMeme} ImgAlt="Component Meme" />
            {/* <PostButton btnText="Post Something" />
            <div></div> */}
          </section>

          <div style={asideStyle.style}>
            <aside>
              <MyAds
                AdImg={AdPhoto}
                AdTitle="MEAT Sales!"
                AdDescription="Please buy our stuff before we go out of business!"
                AdAlt="Acme Ad"
              />

              <MyAds
                AdImg={AcmeCoffeeAd}
                AdTitle="Gourmet Coffee!"
                AdDescription="Coffee to please any grumpy husband..Lye Sold seperately!"
                AdAlt="Acme Ad"
              />
            </aside>
          </div>
        </main>
      </>
    );
  }
}

export default App;

//simplify style variables into one "styles" then nest each components styles

const mainStyle = {
  style: {
    display: "flex",
    flexDirection: "row",
  },
};

const asideStyle = {
  style: {
    width: "20%",
  },
};

const formStyles = {
  style: {
    width: "60%",
    backgroundColor: "lightgrey",
  },
};

const navStyles = {
  container: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    height: "100vh",
    width: "20%",
  },
};
