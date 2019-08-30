import React from 'react'
import { Grid, Button } from '@material-ui/core'
import './index.css'
import CarouselComponent from './CarouselComponent'

const ContentOne = () => {
    return (
        <Grid container xs={12} style={{padding:'3%'}}>
            <Grid container item xs={12} sm={12} md={12} lg={6} xl={6} justify="flex-start">
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
            <Grid container item xs={12} sm={12} md={12} lg={6} xl={6}>
            <CarouselComponent/>
            </Grid>
        </Grid>
    );
}

export default ContentOne;