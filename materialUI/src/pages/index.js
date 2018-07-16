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
import { help }  from '../pages/help';
import { start, hello, user, topics, methods, footer, currentTime, Greeting }  from '../pages/tools';
import { Test }  from '../pages/test';
import { LessonOne }  from '../pages/lessonone';
import { LessonTwo }  from '../pages/lessontwo';
import { LessonThree }  from '../pages/lessonthree';
import { LessonFour }  from '../pages/lessonfour';

/*
Comments: A React JavaScript App: Implementing Google's Material UI Design components in 2018
*/

//start();

let helloUser = hello();
let footerCurrent = footer();
let theTime = currentTime();

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    backgroundSize: 'cover,'  },
});

class Index extends React.Component {
  
constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

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

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

    handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
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
    const isLoggedIn = this.state.isLoggedIn;
    let button;
  
    if (!isLoggedIn) {
      button = <p> <Button  variant="raised" color="primary" onClick={this.handleLoginClick}>Login</ Button> </ p>;
    } else {
      button = <p> <Button  variant="raised" color="secondary" onClick={this.handleLogoutClick}>Logout</ Button> </ p>;
    }

    return (    
            <div>
            <p className="indent"> {button}  <a className="deepIndent"> You are <b>{isLoggedIn ? 'currently' : 'not'} logged in. <Greeting isLoggedIn={isLoggedIn} /> </ b> </ a> </ p>
              <div className={ classes.root }>
                <Dialog open={ open } onClose={ this.handleClose }>
                  <DialogTitle> Web Application Development </ DialogTitle>  
                  <DialogContent> 
                  <DialogContentText>
                  <p> 
                    {helloUser} {theTime} and you're off to a good start! In this course, you'll learn how to build web applications using React JavaScript and Google's Material UI Design. Here we'll cover the folowing basic concepts.
                  </ p> 
                    </ DialogContentText>
                      <div>
                      <a className="indent"> <b> List of topics: </ b> </ a>
                        <ul className="deepIndent"> 
                        <li> <b> Lesson 1: </ b> { topics.lesson1 }   </ li>
                        <li> <b> Lesson 2: </ b> { topics.lesson2 }   </ li>
                        <li> <b> Lesson 3: </ b> { topics.lesson3 }   </ li>
                        <li> <b> Lesson 4: </ b> { topics.lesson4 }   </ li>
                        <li> <b> Quiz:  </ b> { topics.test }   </ li>
                        </ ul>
                      </ div>
                    </ DialogContent>
                  <DialogActions>
                    <Button color="primary" onClick={this.handleClose}> OK </ Button>
                  </ DialogActions>
                </ Dialog>

                <div>
                  <body>
                  <Typography variant="display1" gutterBottom> <a> {user.level} React JavaScript App </ a> </ Typography>
                  <Typography variant="subheading" gutterBottom> Implementing Material UI Design components by Google in { new Date().getFullYear() } </ Typography>

                    <Button class="buttonIntro" style={{width: 140, height: 40}} variant="raised" onClick={this.handleClick} > Introduction </ Button>
                    <p> </ p>
                    <Button class="buttonLessonOne" style={{width: 120, height: 70}} variant="raised" onClick={ LessonOne } > Lesson 1 </ Button>
                    <a> </ a>
                    <Button class="buttonLessonTwo" style={{width: 120, height: 70}} variant="raised" onClick={ LessonTwo } > Lesson 2 </ Button> 
                    <p> </ p>
                    <Button class="buttonLessonThree" style={{width: 120, height: 70}} variant="raised" onClick={ LessonThree } > Lesson 3 </ Button>
                    <a> </ a>
                    <Button class="buttonLessonFour" style={{width: 120, height: 70}}  variant="raised" onClick={ LessonFour } > Lesson 4 </ Button>
                    <p> </ p>
                    <Button class="buttonTest" style={{width: 100, height: 40}} variant="raised" onClick={ Test } > Test </ Button>
                    <p> </ p>

                   <h4> In a hurry? Try quick search: </ h4>
                    <form>
                      <input
                      placeholder="Search for..."
                      ref={input => this.search = input}
                      onChange={ this.handleInputChange } />
                    <p> {this.state.query} </ p>
                    </ form>
                  </ body>
                </ div>
                  <Button class="buttonNext" style={{width: 130, height: 40}} variant="raised" href="courses.asp"> Next Course </ Button>
                <div>
                    <Button class="buttonHelp" style={{width: 130, height: 40}} variant="raised" href="help.html"> { help } </ Button>
                  <h5> { footerCurrent } </ h5>
                </ div>
              </ div> 
            </ div>

    ); // return
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
exports.data = methods;
