import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Panel from "../Panel/Panel";
import ShopList from "../ShopList/ShopList";
import SlideShow from "../SlideShow/SlideShow";

const Home = () => {
  return (
    <>
      <Header />
      <SlideShow />
      <Panel />
      <ShopList />
      <Footer />
    </>
  );
};

export default Home;
