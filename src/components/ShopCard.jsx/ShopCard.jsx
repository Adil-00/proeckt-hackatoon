import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import { useContext } from "react";
import { shopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "5vh",
  },
  media: {
    height: 140,
    backgroundSize: "contain",
  },
});

export default function ShopCard({ item }) {
  const classes = useStyles();
  const { deleteShop, editShop } = useContext(shopContext);

  return (
    <Card elevation={10} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Link to="/edit">
          <IconButton onClick={() => editShop(item.id)}>
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => deleteShop(item.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
