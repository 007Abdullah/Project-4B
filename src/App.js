import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main_div: {
    width: '100%',
    height: '900px',
    display: 'flex',
    backgroundColor: 'red'

  }
}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.main_div}>

      </div>
    </React.Fragment>
  );
}

export default App;
