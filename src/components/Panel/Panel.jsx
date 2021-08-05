import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { shopContext } from "../../context/ShopContext";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: "100%",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-evenly",
    height: "45px",
    alignItems: "center",
  },

  root: {
    border: "1px solid black",
    padding: "8px 12px",
    cursor: "pointer",
  },
});

export default function Panel() {
  const history = useHistory();
  const { getShop } = useContext(shopContext);
  const classes = useStyles();
  const params = useParams();

  const handleOnClikCategory = (e) => {
    const search = new URLSearchParams(history.location.search);
    switch (e.target.dataset.name) {
      case "снаряды":
        search.set("category", e.target.dataset.name);
        search.set("_page", 1);
        history.push(`${history.location.pathname}?${search.toString()}`);
        break;
      case "футболки":
        search.set("category", e.target.dataset.name);
        search.set("_page", 1);
        history.push(`${history.location.pathname}?${search.toString()}`);
        break;
      case "зимний":
        search.set("category", e.target.dataset.name);
        search.set("_page", 1);
        history.push(`${history.location.pathname}?${search.toString()}`);
        break;
      case "все":
        history.push(`${history.location.pathname.replace("category")}`);
        break;
      default:
        history.push(`${history.location.pathname.replace("category")}`);
        break;
    }

    getShop(history);
  };

  return (
    <div className={classes.list}>
      <div>
        <buton
          className={classes.root}
          data-name="снаряды"
          onClick={handleOnClikCategory}
        >
          1
        </buton>
      </div>
      <div>
        <buton
          className={classes.root}
          data-name="футболки"
          onClick={handleOnClikCategory}
        >
          2
        </buton>
      </div>
      <div>
        <buton
          className={classes.root}
          data-name="зимний"
          onClick={handleOnClikCategory}
        >
          3
        </buton>
      </div>
      <div>
        <buton
          className={classes.root}
          data-name="все"
          onClick={handleOnClikCategory}
        >
          все
        </buton>
      </div>
    </div>
  );
}
