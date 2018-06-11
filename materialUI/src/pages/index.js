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

var methods = {
  timestamp: function() {
    console.log('Current Time in Unix Timestamp: ' + Math.floor(Date.now() / 1000));
  },
  currentDate: function() {
    console.log('Current Date is: ' + new Date().toISOString().slice(0, 10));
  }
};

// eslint-disable-next-line
var person = {
  
};

const user = {  
  firstName: 'Ankur',
  lastName: 'Vaseashta',
  level: 'Beginner'
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
    <p> The time is {time()} on {date()}. </p>
  </div>
);

setInterval(time, 1000);

function time(){
return new Date().toLocaleTimeString()
}
 
function date(){
return new Date().toLocaleDateString() 
}


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
             <DialogContentText> {greetingName(user)} {currentTime}  - You are off to a good start! In this course, you will learn how to build web applications using React JavaScript and Google's Material UI Design.
             Here we'll cover the folowing basic concepts.
              </DialogContentText>
              <div className="topics-list">
                <h3>List of topics:</h3>
                <ul>
                  <li> {topics.lesson1} </li>
                  <li> {topics.lesson2} </li>
                  <li> {topics.lesson3} </li>
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
        <div> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <Button variant="raised" onClick={this.handleClick}> Next Course </Button>
              <br></br>  <br></br>
          <Button variant="element" onClick={this.handleClick}> {help} </Button>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(Index));
exports.data = methods;
