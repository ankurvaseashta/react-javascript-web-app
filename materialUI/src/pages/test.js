import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, NavLink as Link } from "react-router-dom";
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
// eslint-disable-next-line
import { start, hello, user, topics, methods, footer, currentTime, Greeting }  from '../pages/tools';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/


export function Test() {
 return alert("Are you ready to start the Test?") 
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    backgroundSize: 'cover,'  },
});

class TestMe extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

  render() {
    
    const { classes } = this.props;
    const { open } = this.state;

    return (
    <Router>
       <div className={ classes.root }>
       	<a>  test </ a>
        </ div>
     </ Router>
    );
  }
}

Test.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Test));
exports.data = methods;