import React from 'react'
import { Grid, Button } from '@material-ui/core'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import CarouselComponent from './CarouselComponent'


const useStyles = makeStyles(theme => ({
  
    pad:{
        padding:'3%',
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
    padBottom:{
        [theme.breakpoints.only('xs')]: {
            paddingBottom:'45px',
            },
    }
   
   
  }));
const ContentOne = () => {
    const classes = useStyles();
    return (
        <Grid container xs={12} className={classes.pad} >
            <Grid container item xs={12} sm={12} md={12} lg={6} xl={6} justify="flex-start" className={classes.padBottom}>
                <Grid container item xs={12} justify="flex-start" className="contentOneTxtOne">
                One Stop
                </Grid>
                <Grid container item justify="flex-start" className=" typewriter" xs={12} sm={7} md={6} lg={8} xl={4} >
                
                    <span >
                    
                Medical Services
                
                </span>
                
                </Grid>
                <Grid container item xs={12} justify="flex-start"  style={{color:'#a9a8a8',textAlign:'left'}}>
                    <Grid container item xs={12} sm={8} md={6} lg={8} xl={8}  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Grid>
                
                </Grid>
                <Grid container item xs={12}  justify="flex-start"  className="ContentOneButton"  alignItems="center" >
            
            <Button variant="outlined">Details</Button>
            
            </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={6} xl={6} className='cardshadow'>
            <CarouselComponent/>
            </Grid>
        </Grid>
    );
}

export default ContentOne;