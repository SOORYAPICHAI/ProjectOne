import React, {useState, useEffect} from 'react'
import { Grid, Card, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './index.css'


const useStyles = makeStyles(theme => ({
    btnClass:{
        border:'1px solid #52ca9c',
        color:'#52ca9c',
        '&:hover':{
           backgroundColor: '#52ca9c',
           color:'white'
        }
    },
    txtField:{
        width:'90%',
        '& div':{
           
            '&:after':{
                borderColor:' #52ca9c'
            }

        },        
    },
    btnClassed:{
        
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.down('sm')]: {
        justifyContent:'center',
        padding:'2%',
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent:'flex-end',
            padding:'2%',
            },
    },
 
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




const ContentTwo = () => {
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
    const classes = useStyles();

    return (
        <Container maxWidth={state} className={classes.bottomPad}>
            <Card style={{  boxShadow: '0 8px 8px -1px rgba(0,0,0,0.2)',padding:'2%',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}}>
            <Grid container  xs={12}>
                <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                    <TextField
        id="standard-name"
        label="Name"
        className={classes.txtField}
        margin="normal"
      />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <TextField
        id="standard-name"
        label="Email"
        className={classes.txtField}
        margin="normal"
      />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <TextField
        id="standard-name"
        label="Phone"
        className={classes.txtField}
        margin="normal"
      />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className={classes.btnClassed} >
                    <Button variant="outlined" className={classes.btnClass}>Appointment</Button>
                </Grid>
            </Grid>
            </Card>
            </Container>
        
    );
}
export default ContentTwo;