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
import { hello }  from '../pages/tools';
import { user }  from '../pages/tools';
import { topics }  from '../pages/tools';
import { methods }  from '../pages/tools';
import { footer }  from '../pages/tools';
import { currentTime }  from '../pages/tools';
import { Test }  from '../pages/test';
//import { start }  from '../pages/tools';
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
      <div className={ classes.root }>
        <Dialog open={ open } onClose={ this.handleClose }>
          <DialogTitle> Web Application Development </ DialogTitle>  
          <DialogContent> 
             <DialogContentText>
              <p> {helloUser} {theTime} and you're off to a good start! In this course, you will learn how to build web applications using React JavaScript and Google's Material UI Design. Here we'll cover the folowing basic concepts.
              </ p> 
           </ DialogContentText>
              <div>
                <a className="indent"> List of topics: </ a>
                <ul className="deepIndent">
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
      <body>
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
        <Button class="buttonNext" style={{width: 130, height: 40}} variant="raised" href="courses.asp"> Next Course </ Button>
      <div>
          <h5> { footerCurrent } </ h5>
        <Button class="buttonHelp" style={{width: 130, height: 40}} variant="raised" href="help.html"> { help } </ Button>
      </ div>
        </ div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
exports.data = methods;
