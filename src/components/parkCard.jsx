import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ParkCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="roosevelt-park.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5">Roosevelt Park</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            100 miles
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ParkCard;
