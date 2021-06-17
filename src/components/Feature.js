import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Cards } from './Cards';
import ImgProductOne from './../images/prodcut-one-pixlr-bg-result.png';
import ImgProductTwo from './../images/product-two-pixlr-bg-result.png';
import ImgProductThree from './../images/product-three-pixlr-bg-result.png';
import { Repeat } from './Repeat_Any';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    feature_div: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}));

export const Feature = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Repeat text="Feature Products" />
            <br />
            <div className={classes.root}>
                <Grid container>
                    <div className={classes.feature_div}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper} elevation={3}>
                                <Cards img={ImgProductOne} />
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper} elevation={3}>
                                <Cards img={ImgProductTwo} />
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper} elevation={3}>
                                <Cards img={ImgProductThree} />
                            </Paper>
                        </Grid>
                    </div>
                </Grid>
            </div>
            <br />
            <br />
        </React.Fragment>
    )
}
