import React ,{useState,useEffect} from 'react'
import {Grid, Container } from '@material-ui/core'
import CardPricing from './CardPricing'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 
 
    padCardBottom:{
 
        [theme.breakpoints.down('sm')]: {
          
            paddingBottom:'45px !important',
            },
       
            [theme.breakpoints.only('md')]: {
          
                padding:'20px !important',
                },
    },
   
   
  }));



const ContentThree = () =>{
    const classes = useStyles();
    const [state, setState] = useState();
    useEffect(() => {
        screenWidth()
        window.addEventListener("resize", screenWidth);
      });
      const    screenWidth =()=>{
        const width=window.innerWidth;
        if(width>1700)
        {
         setState('xl') 
        }
        else if (width>1240){
            setState('lg')
        }
        else if (width>768){
            setState('md')
        }
      };
    return(
        <div style={{background: 'linear-gradient(to bottom, #52ca9c 0%,#52ca9c 50%,#52ca9c 50%,white 50%,white 100%)' }}>
        <Container maxWidth={state} >
            <Grid container xs={12} style={{padding:'20px'}}>
                <Grid item xs={12} className="headingContenThree">
                Our Pricing
                </Grid>
                <Grid  item xs={12} className="subHeadingContenThree">
                    
                Our Best Price Offer
                </Grid>
                {/* <Grid container item xs={12} justify="center">
                <Grid item xs={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Grid>
               
                </Grid> */}
            </Grid>
        <Grid container xs={12} >
            <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} justify="center" className={classes.padCardBottom}>
                <CardPricing />
            </Grid>
            <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} justify="center" className={classes.padCardBottom}>
                <CardPricing />
            </Grid>
            <Grid container item xs={12} sm={12} md={4} lg={4} xl={4} justify="center" className={classes.padCardBottom}>
                <CardPricing />
            </Grid>
        </Grid>
        </Container>
        </div>
    );
}

export default ContentThree;