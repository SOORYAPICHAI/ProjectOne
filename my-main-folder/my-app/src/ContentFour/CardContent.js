import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%'
  },
  cardDiv:{
    padding:'3%',
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#52ca9c"
    
  },
  avatarDiv:{
      '& span':{
        display:'flex',
        justifyContent:'flex-start'
      }
   
  },
  quote: {
    padding: "3%",
    color: "#52ca9c",
    fontSize: "24px",
    display:'flex',
    justifyContent:'flex-start'
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div className={classes.cardDiv}>
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.quote}>
          <i class="fa fa-quote-left quote" aria-hidden="true" />
        </div>

        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardHeader

className={classes.avatarDiv}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
    </div>
  );
}
