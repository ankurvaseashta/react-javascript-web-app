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
import { hello }  from '../pages/tools';
import { user }  from '../pages/tools';
import { topics }  from '../pages/tools';
import { methods }  from '../pages/tools';
import { help }  from '../pages/tools';
import { footer }  from '../pages/tools';
import { currentTime }  from '../pages/tools';
//import { start }  from '../pages/tools';
import { LessonOne }  from '../pages/lessonone';
import { Test }  from '../pages/test';

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

    return (// Start return
      <div className={ classes.root }>
        <Dialog open={ open } onClose={ this.handleClose }>
          <DialogTitle> Web Application Development </ DialogTitle>  
          <DialogContent> 
             <DialogContentText>
              <p> {helloUser} {theTime} and you're off to a good start! In this course, you will learn how to build web applications using React JavaScript and Google's Material UI Design. Here we'll cover the folowing basic concepts.
              </ p> 
           </ DialogContentText>
              <div className="topics-list">
                <h4>List of topics:</ h4>
                <ul>
                  <li> Lesson 1: { topics.lesson1 }   </ li>
                  <li> Lesson 2: { topics.lesson2 }   </ li>
                  <li> Lesson 3: { topics.lesson3 }   </ li>
                  <li> Lesson 4: { topics.lesson4 }   </ li>
                  <li>  { topics.test }   </ li>
                </ ul>
              </ div>
          </ DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}> OK </ Button>
          </ DialogActions>
        </ Dialog>
      <Typography variant="display1" gutterBottom> {user.level} React JavaScript App </ Typography> 
       <Typography variant="subheading" gutterBottom> Implementing Material UI Design components by Google in { new Date().getFullYear() } </ Typography>
          <p> </ p>
          <Button class="buttonIntro" style={{width: 140, height: 40}} variant="raised" onClick={this.handleClick} > Introduction </ Button>
          <p> </ p>
          <Button class="buttonLessonOne" style={{width: 100, height: 40}} onClick={ LessonOne } > Lesson 1 </ Button>
          <a> </ a>
          <Button class="buttonLessonTwo" style={{width: 100, height: 40}} href="default.asp"> Lesson 2 </ Button> 
          <p> </ p>
          <Button class="buttonLessonThree" style={{width: 100, height: 40}} href="default.asp"> Lesson 3 </ Button>
          <a> </ a>
          <Button class="buttonLessonFour" style={{width: 100, height: 40}}  href="default.asp"> Lesson 4 </ Button>
          <p> </ p>
          <Button class="buttonTest" style={{width: 100, height: 40}} onClick={ Test } > Test </ Button>
          <p> </ p>
            <h4> In a hurry? Try quick search: </ h4>
             <form>
               <input
                 placeholder="Search for..."
                 ref={input => this.search = input}
                 onChange={ this.handleInputChange } />
               <p> {this.state.query} </ p>
             </ form>
            <Button class ="buttonNext" style={{width: 130, height: 40}} variant="raised" href="default.asp"> Next Course </ Button>
         <h5> { footerCurrent } </ h5>
         <Button class="buttonHelp" style={{width: 130, height: 40}} href="default.asp"> { help } </ Button>
      </ div>
      );
    }
  } //End render

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
exports.data = methods;
