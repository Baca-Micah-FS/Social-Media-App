import React, { Component } from "react";
import "./App.css";
// React Components
// import Header from "./components/Header";
import MyHeader from "./components/MyHeader";
import LeftNav from "./components/Leftnav";
// import PostButton from "./components/PostButton";
import MyForm from "./components/MyForm";
import MyAds from "./components/MyAds";
import ComponentMeme from "./images/ComponentMeme.webp";
import MyPostCard from "./components/MyPostCard";

// import images
// import AvatarIcon from "./images/Avatar-Photo.jpg";
// import MyAvatar from "./components/MyAvatar";
import AdPhoto from "./images/acmead.jpg";
import AcmeCoffeeAd from "./images/acmeCoffeeAd.jpeg";

// REACT ICONS
// import { FcSettings } from "react-icons/fc";
// import { FaSearch } from "react-icons/fa";
// import { CgBoy } from "react-icons/cg";

class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <MyHeader classChat="classChat" iconName="Micah Baca" />
        {/* Leftnav */}
        <main style={mainStyle.style}>
          <section style={navStyles.container}>
            <LeftNav NewsFeed="NewsFeed" Messages="Messages" Watch="Watch" />
          </section>
          {/* Post Card Section */}
          <section style={formStyles.style}>
            <MyForm />
            <MyPostCard
              PostDescription="If you look closely, developing is still in your future."
              CardHeader="Interface Programming"
              ImgUrl={ComponentMeme}
              ImgAlt="Component Meme"
            />
            {/* <PostButton btnText="Post Something" />
            <div></div> */}
          </section>

          <div style={asideStyle.style}>
            <aside>
              <MyAds
                AdImg={AdPhoto}
                AdTitle="MEAT Sales!"
                AdDescription="Deals of a lifetime!"
                AdAlt="Acme Ad"
              />
              <MyAds
                AdImg={AcmeCoffeeAd}
                AdTitle="Gourmet Coffee!"
                AdDescription="Coffee to please any grumpy husband..!"
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
    backgroundColor: "#e0e1dd",
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
