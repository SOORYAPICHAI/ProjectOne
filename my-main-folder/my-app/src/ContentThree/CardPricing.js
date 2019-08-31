import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import './index.css'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    borderRadius: "30px",
    boxShadow:
      "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)!important",
    "&:hover": {
      boxShadow:
        "0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)!important"
    }

    // 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)!important
  },
  media: {
    width: "100px",
    height:'auto',

  },
  mediaDiv: {
    paddingTop: "10.25%", // 16:9
    display: "flex",
    justifyContent: "center",
    // width: "30%"
    height:'100px'
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
  AvatarName: {
    padding: "15%"
  },
  headerClass: {
    color: "#52ca9c",

    textAlign: "center"
    // fontFamily:''
  },
  headerClassBtn: {
    "& button": {
      background: "orange",
      color: "white",
      width: "60%",
      borderRadius: "20px",
      boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
      "&:hover": {
        background: "orange",
        color: "white",
        boxShadow:
          "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)",
        animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        transform: "translate3d(0, 0, 0)"
      }
    }
  }
  // @keyframes shake {
  //   10%, 90% {
  //     transform: translate3d(-1px, 0, 0);
  //   }
  //   20%, 80% {
  //     transform: translate3d(2px, 0, 0);
  //   }
  //   30%, 50%, 70% {
  //     transform: translate3d(-4px, 0, 0);
  //   }
  //   40%, 60% {
  //     transform: translate3d(4px, 0, 0);
  //   }
  // }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.mediaDiv}>
        <img
          src="https://marketplace.magento.com/media/catalog/product//o/f/offer-timer-icon2_2.png"
          className={classes.media}
        />
      </div>
      <Typography>
        <h2 className={` CardTitle`}>Premium</h2>
      </Typography>
      <CardContent>
        <Grid
          container
          xs={12}
          justify="center"
          style={{ textAlign: "center" }}
        >
          <Grid item xs={10}>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid
          container
          xs={12}
          justify="center"
          className={classes.headerClass}
        >
          <i style={{ fontSize: "2.5rem" }} class="fa">
            &#xf155;123
          </i>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid
          container
          xs={12}
          justify="center"
          className={`${classes.headerClass} ${classes.headerClassBtn}`}
        >
          <Button variant="contained">Buy Now</Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
