import React from 'react';
import { MuiThemeProvider, createMuiTheme, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[600],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: blue[500],
      main: blue[700],
      dark: blue[900],
    },
     default: {
      light: red[300],
      main: red[500],
      dark: red[700],
    }
  },
  focus: {
      focused: {
      color: 'red'
      }
    },
  input: {
      inkbar: {
        '&:after': {
          backgroundColor: red[600]
        }
      }
    },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ MuiThemeProvider>
    );
  }

  return WithRoot;
}


export default withRoot;
