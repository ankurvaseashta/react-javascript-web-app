import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import { methods }  from '../pages/tools';

/*
Comments: Level {} React JavaScript App: Implementing Google's Material UI Design in 2018
*/

export const help = "Need Help ?";

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    backgroundSize: 'cover,'  },
});

class Help extends React.Component {
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
        <DialogTitle> Help </ DialogTitle>  
           <DialogContent> 
             <DialogContentText>
              <p> 
              Text
              </ p> 
            </ DialogContentText>
          </ DialogContent>
          <DialogActions>
              <Button color="primary" onClick={this.handleClose}> OK </ Button>
          </ DialogActions>
        </ Dialog>
      </ div>
    );
  }
}

Help.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Help));
exports.data = methods;