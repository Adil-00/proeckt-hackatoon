import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, ButtonGroup, Paper } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { shopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  Paper: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    height: "400px",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "100px auto",
  },
}));

export default function Add() {
  const { shopAdd } = useContext(shopContext);
  const classes = useStyles();
  const [inpValue, setInpValue] = useState("");

  const handleChange = (e) => {
    let obj = {
      ...inpValue,
      [e.target.name]: e.target.value,
    };

    setInpValue(obj);
  };

  const handleAdd = () => {
    shopAdd(inpValue);

    setInpValue({
      Name: "",
      LastName: "",
      Age: "",
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Paper elevation={10} className={classes.Paper}>
        <TextField
          value={inpValue.title}
          name="title"
          onChange={handleChange}
          label="Title"
          multiline
        />
        <TextField
          value={inpValue.image}
          name="image"
          onChange={handleChange}
          label="Image"
          multiline
        />
        <TextField
          value={inpValue.category}
          name="category"
          onChange={handleChange}
          label="Category"
        />
        <TextField
          value={inpValue.description}
          name="description"
          onChange={handleChange}
          label="Description"
        />
        <TextField
          value={inpValue.price}
          name="price"
          type="number"
          onChange={handleChange}
          label="Price"
        />
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button onClick={handleAdd}>Add</Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>Close</Button>
          </Link>
        </ButtonGroup>
      </Paper>
    </form>
  );
}
