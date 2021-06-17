import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Repeat } from './Repeat_Any';
import ImgContact from './../images/Get+In+Touch.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    ContactDiv: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
}));

export const Contact = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Repeat text="Contact US" />
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.ContactDiv}>
                                <div style={{ width: '50%' }}>
                                    <Paper className={classes.paper} elevation={3}>
                                        <div style={{ padding: '5%' }}>
                                            <img src={ImgContact} alt="Contact Pic" style={{ width: '50%' }} />
                                            <form>
                                                <TextField label="Name" id="standard-size-normal" style={{ width: '50%' }} />
                                                <br />
                                                <br />

                                                <TextField label="Email" id="standard-size-normal" style={{ width: '50%' }} />
                                                <br />
                                                <br />

                                                <TextField label="Number" type="number" id="standard-size-normal" style={{ width: '50%' }} />

                                                <br />
                                                <br />
                                                <TextField
                                                    id="standard-multiline-static"
                                                    label="Message"
                                                    multiline
                                                    rows={4}
                                                    style={{ width: '50%' }}
                                                />
                                                <br />
                                                <br />
                                                <Button variant="contained" color="primary" href="#contained-buttons">
                                                    Submit
                                                </Button>
                                            </form>
                                        </div>

                                    </Paper>
                                </div>
                            </div>
                            <br />
                            <br />

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
