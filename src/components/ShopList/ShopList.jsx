import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { shopContext } from "../../context/ShopContext";
import ShopCard from "../ShopCard.jsx/ShopCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
}));

const ShopList = () => {
  const { shop, getShop } = useContext(shopContext);
  const classes = useStyles();

  useEffect(() => {
    getShop();
  }, []);

  return (
    <>
      <Box className={classes.container}>
        {shop ? (
          shop.map((item, index) => <ShopCard item={item} key={index} />)
        ) : (
          <div className={classes.root}>
            <CircularProgress color="secondary" />
          </div>
        )}
      </Box>
    </>
  );
};

export default ShopList;
