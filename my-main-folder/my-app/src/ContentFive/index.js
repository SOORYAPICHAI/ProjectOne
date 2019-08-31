import React from 'react'
import {Grid} from '@material-ui/core'
import ContentPaper from './ContentPaper'
import { makeStyles } from '@material-ui/core/styles';

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
const ContentFive = () => {
    const classes = useStyles();
    return(
        
        <div className={classes.bottomPad}>
            <ContentPaper />
            </div>
      
    );
}

export default ContentFive;