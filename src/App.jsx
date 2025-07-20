import React, { Component } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
// Pages
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import NewsFeed from "./pages/NewsFeed";
import Settings from "./pages/Settings";

// React Components
import MyHeader from "./components/MyHeader";
import LeftNav from "./components/Leftnav";
import MyForm from "./components/MyForm";
import MyAds from "./components/MyAds";
import ComponentMeme from "./images/ComponentMeme.webp";
import MyPostCard from "./components/MyPostCard";
import AvatarImg from "./images/Avatar-Photo.jpg";
// import images
import AdPhoto from "./images/acmead.jpg";
import AcmeCoffeeAd from "./images/acmeCoffeeAd.jpeg";

function App() {
  return (
    <>
      {/* <Header /> */}
      <MyHeader classChat="classChat" />
      {/* Leftnav */}
      <main style={mainStyle.style}>
        <section style={navStyles.container}>
          <LeftNav
            Dashboard="Dashboard"
            NewsFeed="NewsFeed"
            Messages="Messages"
            Settings="Settings"
          />
        </section>
        {/* Post Card Section */}
        <section style={formStyles.style}>
          <Routes>
            <Route path="/NewsFeed" element={<NewsFeed />} />
            <Route path="/" element={<Dashboard Dashboard="Dashboard" />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
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

export default App;

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
    height: "100vh",
    width: "20%",
  },
};
