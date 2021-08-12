import React, { useContext, useEffect } from "react";
import { shopContext } from "../../context/ShopContext";
import Header from "../Header/Header";
import Favourite from "./Favourite";

const Favourit = () => {
  const {
    favourite,
    handleFavourite,
    checkFavourite,
    getFavourute,
    handleDetail,
  } = useContext(shopContext);

  useEffect(() => {
    getFavourute();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {favourite
          ? favourite.map((item, index) => (
              <Favourite
                handleDetail={handleDetail}
                handleFavourite={handleFavourite}
                checkFavourite={checkFavourite}
                item={item}
                key={index}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Favourit;
