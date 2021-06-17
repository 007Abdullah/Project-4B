import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import nikeShoe from './../images/pixlr-bg-result.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);'

    },
    Main_center: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
}));

export const Home = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.Main_center}>
                                <div style={{ width: '50%', height: '760px' }}>
                                    <h2 style={{ color: 'black', textAlign: 'center', marginTop: '50%', fontFamily: 'Serif' }}>
                                        Product information management is the process of managing all the information required to market and sell products through distribution channels
                                    </h2>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <img src={nikeShoe} alt="Nike Shoe" style={{ marginTop: '15%', width: '100%' }} />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
