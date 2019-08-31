import React from 'react'

import {Grid} from '@material-ui/core'
import './index.css'

const ContentSix = () =>{
    return(
        <Grid  container xs={12} style={{backgroundColor:'#F5F5F5',padding:'20px',lineHeight:'2rem'}}>
            <Grid  item xs={12} className="logo logoAlign" justify="space-around" alignItems="center">
            Medical Health
            </Grid>
            <Grid container item={12} justify="center">
                

                
                <Grid item xs={1}>
                <i class="fa fa-facebook"></i>
                </Grid>
                <Grid item xs={1}>
                <i class="fa fa-twitter"></i>
                </Grid>
                <Grid item xs={1}>
                <i class="fa fa-linkedin"></i>
                </Grid>
                <Grid item xs={1}>
                <i class="fa fa-google-plus"></i>
                </Grid>
                <Grid item xs={1}>
                <i class="fa fa-youtube"></i>
                </Grid>
                </Grid>
                <Grid container item={12} justify="center" alignItems="center">
                Copyright @ 2019 Medical Health. All rights reserved
                </Grid>
            </Grid>
           
           
            
        
    );
}
export default ContentSix;