import React from 'react'
import { Grid } from '@material-ui/core'
import CardContent from './CardContent'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    containerOne: {

        [theme.breakpoints.down('sm')]: {

            display:'none'
        },

       
    },
    containerTwo:{
        display:'none',
        [theme.breakpoints.down('sm')]: {

            display:'block'
        },
    }


}));

const CardContentSplit = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container xs={12} className={classes.containerOne}>
            <Grid container item xs={6} justify="center">
                <CardContent />
            </Grid>
            <Grid container item xs={6} justify="center">
                <CardContent />
            </Grid>
        </Grid>

        <Grid container xs={12} className={classes.containerTwo}>
            <Grid container item xs={12} justify="center">
                <CardContent />
            </Grid>
            
        </Grid>
        </>
    );
}
export default CardContentSplit;