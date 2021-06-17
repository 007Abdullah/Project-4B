import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from './components/Home';

const useStyles = makeStyles(() => ({
  main_div: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    backgroundColor: 'red'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.main_div}>
        <Home />
        
      </div>
    </React.Fragment>
  );
}

export default App;
