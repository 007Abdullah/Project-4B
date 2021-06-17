import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from './components/Home';
import { Feature } from './components/Feature';

const useStyles = makeStyles(() => ({
  main_div: {
    width: '100%',
    height: 'auto'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.main_div}>
        <Home />
        <Feature />
      </div>
    </React.Fragment>
  );
}

export default App;
