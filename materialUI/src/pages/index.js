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
import { TodoApp }  from '../pages/lessonone';

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
    paddingTop: theme.spacing.unit * 10,
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

  render() {
    
    const { classes } = this.props;
    const { open } = this.state;

    return (// Start return

      <div className={ classes.root }>
        
        <Dialog open={ open } onClose={ this.handleClose }>
          
          <DialogTitle> Web Application Development </ DialogTitle>  
          
          <DialogContent> 

             <DialogContentText>
             <div> 
              <p> {helloUser} </ p> 
                {theTime} and you're off to a good start! In this course, you will learn how to build web applications using React JavaScript and Google's Material UI Design. Here we'll cover the folowing basic concepts. 
             </ div>
           </ DialogContentText>

              <div className="topics-list">
                <h3>List of topics:</ h3>
                <ul>
                  <li> { topics.lesson1 } <a href="default.asp">lesson1</a> </ li>
                  <li> { topics.lesson2 } <a href="news.asp">lesson2</a> </ li>
                  <li> { topics.lesson3 } <a href="contact.asp">lesson3</a> </ li>
                  <li> { topics.lesson4 } <a href="about.asp">lesson4</a> </ li>
                </ul>
              </div>

          </ DialogContent>

          <DialogActions>
            <Button color="primary" onClick={this.handleClose}> OK </ Button>
          </ DialogActions>

        </ Dialog>
       <div>
        <Typography variant="display1" gutterBottom> {user.level} React JavaScript App < /Typography> 
       < /div>
       <Typography variant="subheading" gutterBottom> Implementing Google's Material UI Design components in { new Date().getFullYear() }  </ Typography>
            <p> </ p>
            <div> <Button style={{width: 150, height: 50}} variant="raised" color="primary" onClick={this.handleClick} > Introduction </ Button> </ div>
            <p> </ p>
            <div> <Button style={{width: 100, height: 50}} variant="raised" color="secondary" onClick={this.handleClick}> Lesson 1 </ Button>   </ div> 
            <p> </ p>
            <div> <Button style={{width: 100, height: 50}} variant="raised" color="secondary" onClick={this.handleClick}> Lesson 2 </ Button>   </ div> 
            <p> </ p>
            <div> <Button style={{width: 100, height: 50}} variant="raised" color="secondary" onClick={this.handleClick}> Lesson 3 </ Button>   </ div>
            <p> </ p>
            <div> <Button style={{width: 100, height: 50}} variant="raised" color="primary" onClick={this.handleClick}> Test </Button> </ div>
            <p> </ p>
            <div> 
            <Button style={{width: 130, height: 50}} variant="raised" onClick={ this.handleClick }> Next Course </ Button>     
            <div>
            <p> </ p>
            <Button style={{width: 130, height: 50}} onClick={ this.handleClick }> { help } </ Button>      
            </ div>
            </ div>
            <br></ br><br></ br>
            <h4> Search or a topic: </ h4>

            <input type="text" value={ this.state.query } />
            <button onClick={ this.handleClick } className="button"> Search </ button>

            <div>
              <h5> { footerCurrent } </ h5>
            </ div>
          </ div>
      );//End return
    }
  }//End render

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
exports.data = methods;
