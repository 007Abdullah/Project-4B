import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Repeat } from './Repeat_Any';
import GirlPic from './../images/girl-pixlr-bg-result.png';
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
    AboutDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
}));

export const About = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* ///////////////  Start Heading and Starts components /////////////// */}


            {/* ///////////////  End Heading and Starts /////////////// */}

            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>

                        <Paper className={classes.paper}>
                            <Repeat text="About Products" />

                            <div className={classes.AboutDiv}>
                                <div style={{ color: 'Black', fontFamily: 'Serif', width: '50%', textAlign: 'start', marginTop: '10%', marginBottom: '10%' }}>
                                    <h2>ABOUT</h2>
                                    <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but
                                        also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <img src={GirlPic} alt="Girl Shoe" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}
