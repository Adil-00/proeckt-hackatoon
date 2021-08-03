import React from "react";
import { useContext } from "react";
import { shopContext } from "../../context/ShopContext";

const ShopList = () => {
  const { shop } = useContext(shopContext);
  return <div></div>;
};

export default ShopList;
