import React from 'react';
import {Grid } from '@material-ui/core'
import './index.css'
import logo from '../assets/usa_logo.png'

/* Set the width of the side navigation to 250px */

const Header = () => {
    const openNav = () => {
    
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      /* Set the width of the side navigation to 0 */
      const closeNav =() => {
        document.getElementById("mySidenav").style.width = "0";
      }
    return(
        <>
        <Grid container xs={12} className="backgroundheader">
            <Grid container item xs={6} sm={6} md={4} lg={4} xl={4} justify="space-around" className="logoAlign">
            {/* <img src= {logo} /> */}
            <Grid item xs={12} className="logo">
            The Logo ...
            </Grid>
            <Grid item xs={12} className="logosub">
           Medical Health
            </Grid>
            
            </Grid>
            <Grid container item xs={6} sm={6} md={8} lg={8} xl={8}  className="fontAlign">
               <Grid item className="containerNav green borderXwidth">
                <a className="textResponsive">HOME</a>
                <a className="textResponsive">ARTICLES</a>
                <a className="textResponsive">PORTFOLIO</a>
                <a className="textResponsive">ABOUT</a>
                <a className="textResponsive">CONTACT</a>
                <i class="fa fa-bars iconResponsive" aria-hidden="true" onClick={openNav}></i>

                </Grid> 
            </Grid>
        </Grid>

        <Grid container xs={12} id="mySidenav" class="sidenav">
            <Grid item xs={12}>
            <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
            </Grid>
            <Grid item xs={12}>
            <a >HOME</a>
            </Grid>
            <Grid item xs={12}>
            <a >ARTICLES</a>
            </Grid>
            <Grid item xs={12}>
            <a >PORTFOLIO</a>
            </Grid>
            <Grid item xs={12}>
            <a >ABOUT</a> 
            </Grid>
            <Grid item xs={12}>
            <a >CONTACT</a>
            </Grid>
            
        </Grid>
        </>
        
    );
}
export default Header;