import React, { useState } from 'react'
import { Grid, Paper, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import faq from '../assets/faq.png'
import './index.css'


const useStyles = makeStyles(theme => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    nameSpacing:{
        [theme.breakpoints.down('sm')]: {

           paddingBottom:'10% !important'
        },
    },
    imgClass:{
        [theme.breakpoints.down('sm')]: {

            display:'none'
         },
    }
}));

const ContentPaper = () => {
    const classes = useStyles();
    const [paperOne, setPaperOne] = React.useState(false);
    const [paperTwo, setPaperTwo] = React.useState(false);
    const [paperThree, setPaperThree] = React.useState(false);
    const [paperFour, setPaperFour] = React.useState(false);
    function handleChangepaperOne() {
        setPaperOne(prev => !prev);
    }
    function handleChangepaperTwo() {
        setPaperTwo(prev => !prev);
    }
    function handleChangepaperThree() {
        setPaperThree(prev => !prev);
    }
    function handleChangepaperFour() {
        setPaperFour(prev => !prev);
    }
    return (
        <>
          <Grid container  xs={12} justify="center" className={classes.nameSpacing} style={{paddingBottom:'1%'}}>
          <Grid container  xs={12} justify="center"  style={{background: '#52ca9c',paddingBottom:'1%' }}>
              <Grid item xs={12} className="headingContenThree">
              Faq's
              </Grid>
              <Grid container item xs={12} justify="center">
              <Grid item xs={12} sm={12} md={8} lg={6} xl={4} justify="center" className="subHeadingContenThree">
              we believe in making simple and fair pricing plans. Choose your next successful plan and get started today!.
              </Grid>    
              </Grid>
                    </Grid>
                    </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container item xs={12} sm={12} md={6} lg={6} xl={6}
                style={{background: 'linear-gradient(to left, #52ca9c 0%,#52ca9c 50%,#52ca9c 50%,white 50%,white 100%)',borderRadius:'10px' }}
                alignContent="center"
                >
                    {/*  */}
                  
                    <Grid container item xs={12} style={{padding:'2%'}}>
                        <Paper style={{width:'100%' , padding:'3%', borderLeft:'5px solid #52ca9c'}}>
                            <Grid container item xs={12}>
                                <Grid item xs={10} style={{color:'#52ca9c', fontWeight:'bold',display:'flex',justifyContent:'flex-start'}}
                                onClick={handleChangepaperOne}
                                >
                                    Modern, Elegant Design ?
                </Grid>
                                <Grid item xs={2}>
                                    <span onClick={handleChangepaperOne}>
                                        {
                                            paperOne === false ?
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                :
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                        }

                                    </span>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} justify="flex-start" style={{textAlign:'left',color:'rgba(0, 0, 0, 0.54)'}}>
                                <div className={classes.container}>
                                    <Collapse in={paperOne}>
                                      
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                       
                                    </Collapse>

                                </div>
                            </Grid>



                        </Paper>
                    </Grid>


                    {/*  */}
                    <Grid container item xs={12} style={{padding:'2%'}}>
                        <Paper style={{width:'100%', padding:'3%' , borderLeft:'5px solid #52ca9c'}}>
                            <Grid container xs={12}>
                                <Grid item xs={10} style={{color:'#52ca9c', fontWeight:'bold',display:'flex',justifyContent:'flex-start'}}
                                onClick={handleChangepaperTwo}
                                >
                                    Modern, Elegant Design ?
                </Grid>
                                <Grid item xs={2}>
                                    <span onClick={handleChangepaperTwo}>
                                        {
                                            paperTwo === false ?
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                :
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                        }

                                    </span>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} justify="flex-start" style={{textAlign:'left',color:'rgba(0, 0, 0, 0.54)'}}>
                                <Grid item xs={12}>
                                    <div className={classes.container}>
                                        <Collapse in={paperTwo}>
                                          
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                      
                                        </Collapse>

                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                    {/*  */}
                    <Grid container item xs={12} style={{padding:'2%'}}>
                        <Paper style={{width:'100%', padding:'3%' , borderLeft:'5px solid #52ca9c'}}>
                            <Grid container xs={12}>
                                <Grid item xs={10} style={{color:'#52ca9c', fontWeight:'bold',display:'flex',justifyContent:'flex-start'}}
                                onClick={handleChangepaperThree}
                                >
                                    Modern, Elegant Design ?
                </Grid>
                                <Grid item xs={2}>
                                    <span onClick={handleChangepaperThree}>
                                        {
                                            paperThree === false ?
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                :
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                        }

                                    </span>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} justify="flex-start" style={{textAlign:'left',color:'rgba(0, 0, 0, 0.54)'}}>
                                <Grid item xs={12}>
                                    <div className={classes.container}>
                                        <Collapse in={paperThree}>
                                        
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    
                                        </Collapse>

                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                    {/*  */}
                    <Grid container item xs={12} style={{padding:'2%'}}>
                        <Paper style={{width:'100%', padding:'3%' , borderLeft:'5px solid #52ca9c'}}>
                            <Grid container xs={12}>
                                <Grid item xs={10} style={{color:'#52ca9c', fontWeight:'bold',display:'flex',justifyContent:'flex-start'}} 
                                onClick={handleChangepaperFour}
                                >
                                    Modern, Elegant Design ?
                </Grid>
                                <Grid item xs={2}>
                                    <span onClick={handleChangepaperFour}>
                                        {
                                            paperFour === false ?
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                :
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                        }

                                    </span>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} justify="flex-start" style={{textAlign:'left',color:'rgba(0, 0, 0, 0.54)'}}>
                                <Grid item xs={12}>
                                    <div className={classes.container}>
                                        <Collapse in={paperFour}>
                                        
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        
                                        </Collapse>

                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.imgClass}>
                   <img src={faq} alt = "" width="100%"/>
        </Grid>
            </Grid>
        </>
    );
}

export default ContentPaper;