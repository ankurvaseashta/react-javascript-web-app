import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import {hello}  from '../pages/tools';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

let val = hello(); // val is "Hello";

var methods = {
  timestamp: function() {
    return new Date().toLocaleTimeString()
  },
  currentDate: function() {
    return new Date().toLocaleDateString() 
  }
};

const user = {  
  firstName: 'Ankur',
  lastName: 'Vaseashta',
  level: 'Level One'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const greeting = ( 
  <h3> Hello, {formatName(user)}! </h3> 
  );

function greetingName(user) {
  return greeting;
}

const help = (
  <p> Need Help ? </p>
  );

const currentTime = (
  <div>
    <p> The time is {methods.timestamp()} on {methods.currentDate()}. </p>
  </div>
);

const topics = {  
  lesson1: 'Elements',
  lesson2: 'Components',
  lesson3: 'Text Fields'
};

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
});

class Index extends React.Component {
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

  render() {
    
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle> Web Application Development </DialogTitle>  
          <DialogContent> 
             <DialogContentText> {val} {greetingName(user)} {currentTime} - You are off to a good start! In this course, you will learn how to build web applications using React JavaScript and Google's Material UI Design.
             Here we'll cover the folowing basic concepts.
              </DialogContentText>
              <div className="topics-list">
                <h3>List of topics:</h3>
                <ul>
                  <li> {topics.lesson1} </li>
                  <li> {topics.lesson2} </li>
                  <li> {topics.lesson3} </li>
                  <li> testme </li>
                </ul>
              </div>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}> OK </Button>
          </DialogActions>
        </Dialog>
        <div><Typography variant="display1" gutterBottom> {user.level}'s React JavaScript App </Typography> </div>                                                                                                                                                                                                        
          <div> <Typography variant="subheading" gutterBottom> Implementing Google's Material UI Design in {new Date().getFullYear()} </Typography> </div>                                                                                                                                                                    
            <div> <br></br> <Button variant="raised" color="primary" onClick={this.handleClick}> Introduction </Button> <br></br> </div>
            <div> <br></br> <Button variant="raised" color="secondary" onClick={this.handleClick}> Lesson 1 </Button> <br></br> </div>
            <div> <br></br> <Button variant="raised" color="secondary" onClick={this.handleClick}> Lesson 2 </Button> <br></br> </div>
            <div> <br></br> <Button variant="raised" color="secondary" onClick={this.handleClick}> Lesson 3 </Button> <br></br> </div>
            <div> <br></br> <Button variant="raised" color="secondary" onClick={this.handleClick}> Lesson 4 </Button> <br></br> </div>
            <div> <br></br> <Button variant="raised" color="secondary" onClick={this.handleClick}> Lesson 5 </Button> <br></br> </div>
            <div> <br></br> <Button variant="raised" color="primary" onClick={this.handleClick}> Test </Button> <br></br> </div>
            <div> <br></br> <br></br> <br></br> <br></br>
            <Button variant="raised" onClick={this.handleClick}> Next Course </Button>
            <br></br>
            <Button onClick={this.handleClick}> {help} </Button>
        </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <p> Ankur Vaseashta, Inc. </p>
      </div>
      );
    }
  }

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
exports.data = methods;
