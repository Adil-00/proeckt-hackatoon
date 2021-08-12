import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Panel from "../Panel/Panel";
import ShopList from "../ShopList/ShopList";
import SlideShow from "../SlideShow/SlideShow";

const Home = () => {
  return (
    <>
      <SlideShow />
      <Panel />
      <ShopList />
    </>
  );
};

export default Home;
