import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: "100%",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-evenly",
    height: "45px",
  },

  root: {
    border: "1px solid black",
  },
});

export default function Panel() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.list}>
        <React.Fragment>
          <Button className={classes.root}>buton</Button>
          <SwipeableDrawer>button</SwipeableDrawer>
        </React.Fragment>
        <React.Fragment>
          <Button className={classes.root}>buton</Button>
          <SwipeableDrawer>button</SwipeableDrawer>
        </React.Fragment>
        <React.Fragment>
          <Button className={classes.root}>buton</Button>
          <SwipeableDrawer>button</SwipeableDrawer>
        </React.Fragment>
        <React.Fragment>
          <Button className={classes.root}>buton</Button>
          <SwipeableDrawer>button</SwipeableDrawer>
        </React.Fragment>
      </Box>
    </div>
  );
}
