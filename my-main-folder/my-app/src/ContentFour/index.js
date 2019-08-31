import React from 'react'
import {Grid } from '@material-ui/core'
import CarouselContent from './CarouselContent'
import { makeStyles } from '@material-ui/core/styles';
import './index.css'

const useStyles = makeStyles(theme => ({
    bottomPad:{
        padding:'3%',
        // background:'whitesmoke',
        [theme.breakpoints.down('sm')]: {
          
            paddingBottom:'45px !important',
            },
        [theme.breakpoints.up('sm')]: {
          
            paddingBottom:'85px',
                },
                [theme.breakpoints.up('lg')]: {
          
                    paddingBottom:'110px',
                        },
    
    },
}));
const ContentFour = () => {
    const classes = useStyles();
    return(
        <Grid container xs={12} className={classes.bottomPad} style={{background: 'linear-gradient(to bottom, #52ca9c 0%,#52ca9c 50%,#52ca9c 50%,white 50%,white 100%)' }}>
            <Grid item xs={12} className="headingContenThree">
            10k+ Experts Trust Us
            </Grid>
            <Grid container item xs={12} className="subHeadingContenThree" justify="center">
            <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
            Streamlining different processes and workflows by using user access control Onebook prompts efficiency and productivity levels of an organization, and reduces operating costs.
            </Grid>
            </Grid>
            <Grid item xs={12}>
            <CarouselContent/>
            </Grid>
      
       </Grid>
    );
}
export default ContentFour;